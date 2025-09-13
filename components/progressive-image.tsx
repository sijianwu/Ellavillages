'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Global cache to track loaded images across page navigations
const imageLoadCache = new Set<string>();

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  quality?: number;
}

export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  placeholder,
  quality = 75
}: ProgressiveImageProps) {
  // Check if image was already loaded in cache
  const wasPreloaded = imageLoadCache.has(src);
  const [isLoaded, setIsLoaded] = useState(wasPreloaded);
  const [isInView, setIsInView] = useState(priority || wasPreloaded);
  const imgRef = useRef<HTMLDivElement>(null);

  // If image was preloaded, mark it as in view immediately
  useEffect(() => {
    if (wasPreloaded) {
      setIsInView(true);
    }
  }, [wasPreloaded]);

  useEffect(() => {
    if (priority || wasPreloaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, wasPreloaded]);

  // Generate placeholder image URL (very low quality)
  const placeholderSrc = placeholder || `${src}?q=10&w=50`;
  
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder - only show if image hasn't been loaded before */}
      {!wasPreloaded && (
        <Image
          src={placeholderSrc}
          alt={alt}
          width={50}
          height={Math.round((50 * height) / width)}
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          priority={priority}
          quality={10}
        />
      )}

      {/* High quality image - loaded when in view */}
      {isInView && (
        <motion.div
          initial={{ opacity: wasPreloaded ? 1 : 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: wasPreloaded ? 0 : 0.4, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            onLoad={() => {
              if (!imageLoadCache.has(src)) {
                setIsLoaded(true);
                imageLoadCache.add(src);
              }
            }}
            priority={priority}
            sizes={sizes}
            quality={quality}
          />
        </motion.div>
      )}

      {/* Loading overlay - only show for first-time loads */}
      {isInView && !isLoaded && !wasPreloaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-100 bg-opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-opacity-10 animate-pulse" />
        </motion.div>
      )}
    </div>
  );
}