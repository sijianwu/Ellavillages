'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SmartCacheProps {
  locale: string;
}

export function SmartCache({ locale }: SmartCacheProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Aggressively prefetch all navigation pages after initial load
    const prefetchPages = async () => {
      const pages = [
        `/${locale}`,
        `/${locale}/about`,
        `/${locale}/properties`,
        `/${locale}/contact`,
        // Also prefetch the other language versions
        locale === 'en' ? '/es' : '/en',
        locale === 'en' ? '/es/about' : '/en/about',
        locale === 'en' ? '/es/properties' : '/en/properties',
        locale === 'en' ? '/es/contact' : '/en/contact',
      ];

      // Prefetch in batches to avoid overwhelming the browser
      for (let i = 0; i < pages.length; i += 2) {
        const batch = pages.slice(i, i + 2);
        await Promise.all(batch.map(page => {
          try {
            return router.prefetch(page);
          } catch (error) {
            console.debug('Prefetch failed for:', page);
            return Promise.resolve();
          }
        }));
        
        // Small delay between batches
        if (i + 2 < pages.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    };

    // Start prefetching after a short delay
    const timeoutId = setTimeout(prefetchPages, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [router, locale]);

  // Prefetch adjacent pages when navigating
  useEffect(() => {
    const currentRoute = pathname.replace(`/${locale}`, '') || '/';
    const routeMap: Record<string, string[]> = {
      '/': [`/${locale}/about`, `/${locale}/properties`],
      '/about': [`/${locale}`, `/${locale}/properties`],
      '/properties': [`/${locale}/about`, `/${locale}/contact`],
      '/contact': [`/${locale}/properties`, `/${locale}`],
    };

    const adjacentRoutes = routeMap[currentRoute] || [];
    adjacentRoutes.forEach(route => {
      router.prefetch(route);
    });
  }, [pathname, router, locale]);

  return null;
}