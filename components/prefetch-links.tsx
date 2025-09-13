'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PrefetchLinksProps {
  locale: string;
}

export function PrefetchLinks({ locale }: PrefetchLinksProps) {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all main navigation pages
    const pagesToPrefetch = [
      `/${locale}`,
      `/${locale}/about`,
      `/${locale}/properties`, 
      `/${locale}/contact`
    ];

    // Add a small delay to avoid blocking initial page load
    const timeoutId = setTimeout(() => {
      pagesToPrefetch.forEach(path => {
        router.prefetch(path);
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [router, locale]);

  // Prefetch on hover for immediate response
  const handleHoverPrefetch = (path: string) => {
    router.prefetch(path);
  };

  return null; // This is a utility component, no visual output
}