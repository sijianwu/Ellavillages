'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MessageSquare } from 'lucide-react';

interface FloatingContactButtonProps {
  locale?: string;
}

const messages = {
  en: 'Send us a Message',
  es: 'Envíanos un Mensaje'
};

export function FloatingContactButton({ locale = 'en' }: FloatingContactButtonProps) {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const pathLocale = pathname.split('/')[1];
    if (pathLocale && (pathLocale === 'en' || pathLocale === 'es')) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname]);

  const handleClick = () => {
    router.push(`/${currentLocale}/contact`);
  };

  const buttonText = messages[currentLocale as keyof typeof messages];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        onClick={handleClick}
        style={{ 
          '--gradient-from': '#4f46e5', 
          '--gradient-to': '#7c3aed' 
        } as React.CSSProperties}
        className="relative w-[60px] h-[60px] bg-black shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[200px] hover:shadow-none group cursor-pointer"
      >
        {/* Gradient background on hover */}
        <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
        
        {/* Blur glow */}
        <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

        {/* Icon */}
        <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
          <span className="text-2xl text-white">
            <MessageSquare className="w-6 h-6" />
          </span>
        </span>

        {/* Title */}
        <span className="absolute text-white uppercase tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
          {buttonText}
        </span>
      </div>
    </div>
  );
}