'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function GlobalNavbar() {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  // 调试日志
  console.log('GlobalNavbar rendered, pathname:', pathname);

  const navItems = [
    { key: 'home', href: '/en', label: 'Home' },
    { key: 'about', href: '/en/about', label: 'About' },
    { key: 'properties', href: '/en/properties', label: 'Properties' }
  ];

  const updateUnderlinePosition = (selectedIndex: number) => {
    const selectedNav = navRefs.current[selectedIndex];
    if (selectedNav) {
      // 使用getBoundingClientRect获取更准确的位置
      const rect = selectedNav.getBoundingClientRect();
      const container = selectedNav.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        setUnderlineStyle({
          width: rect.width,
          left: rect.left - containerRect.left
        });
      }
    }
  };

  // 根据当前路径设置激活状态
  useEffect(() => {
    const currentItem = navItems.find(item => pathname === item.href);
    if (currentItem) {
      setActiveNavItem(currentItem.key);
    }
  }, [pathname]);

  useEffect(() => {
    const selectedIndex = navItems.findIndex(item => item.key === activeNavItem);
    if (selectedIndex !== -1) {
      // 添加小延迟确保DOM完全渲染
      const timer = setTimeout(() => {
        updateUnderlinePosition(selectedIndex);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [activeNavItem]);

  // 组件挂载后初始化下划线位置
  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedIndex = navItems.findIndex(item => item.key === activeNavItem);
      if (selectedIndex !== -1) {
        updateUnderlinePosition(selectedIndex);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (key: string) => {
    setActiveNavItem(key);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {/* Animated underline */}
            <div 
              className="absolute -bottom-1.5 h-[1px] bg-black transition-all duration-300 ease-in-out"
              style={{
                width: `${underlineStyle.width}px`,
                left: `${underlineStyle.left}px`
              }}
            ></div>
            
            {navItems.map((item, index) => (
              <Link
                key={item.key}
                ref={(el) => { navRefs.current[index] = el; }}
                href={item.href}
                onClick={() => handleNavClick(item.key)}
                className={`text-sm font-medium font-poppins transition-colors ${
                  activeNavItem === item.key
                    ? 'text-black'
                    : 'text-gray-500 hover:text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/en" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/assets/images/navbar_logo.svg"
              alt="Ellavillages"
              width={78}
              height={78}
              className="w-20 h-20"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center" style={{gap: '30px'}}>
            <Link href="/en/contact" className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-600 font-poppins">Contact</Link>
            <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-none">
              <Link href="/es" className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <span>English</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
