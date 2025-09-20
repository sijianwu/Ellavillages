'use client';

import { useState } from 'react';
import { ProgressiveImage } from '@/components/progressive-image';
import { generatePlaceholder } from '@/lib/image-placeholders';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

interface PropertyImageGalleryProps {
  images: string[];
  propertyName: string;
}

export function PropertyImageGallery({ images, propertyName }: PropertyImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeFullscreen();
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
          <ProgressiveImage
            src={images[currentImageIndex]}
            alt={`${propertyName} - Image ${currentImageIndex + 1}`}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            placeholder={generatePlaceholder(`property-${currentImageIndex}`, 800, 600)}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
          
          {/* Fullscreen Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
            onClick={openFullscreen}
          >
            <Expand className="w-4 h-4" />
          </Button>
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all ${
                  index === currentImageIndex
                    ? 'ring-2 ring-black ring-offset-2'
                    : 'hover:opacity-80'
                }`}
              >
                <ProgressiveImage
                  src={image}
                  alt={`${propertyName} - Thumbnail ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                  placeholder={generatePlaceholder(`thumbnail-${index}`, 200, 150)}
                  sizes="(max-width: 768px) 20vw, 200px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
            onClick={closeFullscreen}
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Fullscreen Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <ProgressiveImage
              src={images[currentImageIndex]}
              alt={`${propertyName} - Image ${currentImageIndex + 1}`}
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain"
              placeholder={generatePlaceholder(`fullscreen-${currentImageIndex}`, 1200, 900)}
              sizes="90vw"
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 max-w-[90vw] overflow-x-auto px-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`relative w-16 h-12 flex-shrink-0 overflow-hidden rounded transition-all ${
                    index === currentImageIndex
                      ? 'ring-2 ring-white'
                      : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <ProgressiveImage
                    src={image}
                    alt={`${propertyName} - Thumbnail ${index + 1}`}
                    width={64}
                    height={48}
                    className="w-full h-full object-cover"
                    placeholder={generatePlaceholder(`modal-thumb-${index}`, 64, 48)}
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Click overlay to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeFullscreen}
          />
        </div>
      )}
    </>
  );
}