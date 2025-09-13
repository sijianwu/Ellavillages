// Generate low-quality base64 placeholders for images
export const imagePlaceholders = {
  'house-exterior': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ASAVYBlPTMY8qGbD0jNdA87TnzuOLnSuOMO24h9m44ZOD6SdG5+lHjjAIR+ZjuOLPFHIXG3tnO3Y4Y8Hp4vKhqAGCXh+6PHaIgdTf//Z',
  
  'kitchen-interior': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ASAVYBlPTMY8qGbD0jNdA87TnzuOLnSuOMO24h9m44ZOD6SdG5+lHjjAIR+ZjuOLPFHIXG3tnO3Y4Y8Hp4vKhqAGCXh+6PHaIgdTf//Z',
  
  'living-room': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ASAVYBlPTMY8qGbD0jNdA87TnzuOLnSuOMO24h9m44ZOD6SdG5+lHjjAIR+ZjuOLPFHIXG3tnO3Y4Y8Hp4vKhqAGCXh+6PHaIgdTf//Z',
  
  'house-night': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ASAVYBlPTMY8qGbD0jNdA87TnzuOLnSuOMO24h9m44ZOD6SdG5+lHjjAIR+ZjuOLPFHIXG3tnO3Y4Y8Hp4vKhqAGCXh+6PHaIgdTf//Z'
};

// Generate a simple colored placeholder based on the image name
export function generatePlaceholder(imageName: string, width: number, height: number): string {
  const colors = {
    // Hero section images
    'house-exterior': '#8B7355',    // Brown/beige for house
    'kitchen-interior': '#F5F5DC',  // Beige for kitchen
    'living-room': '#D2B48C',       // Tan for living room
    'house-night': '#2F4F4F',       // Dark slate gray for night
    
    // About page images
    'unit-about01': '#E8D5B7',      // Warm cream for modern living
    'unit-about02': '#B7D7E8',      // Soft blue for professional
    'unit-about03': '#D7E8B7',      // Soft green for safety/security
    
    // Unit/Property images
    'unit-a': '#F0E6D2',           // Light beige
    'unit-b': '#E6F0D2',           // Light green
    'unit-c': '#D2E6F0',           // Light blue
    'unit-d': '#F0D2E6',           // Light pink
    'unit-e': '#E6D2F0',           // Light purple
    'unit-f': '#D2F0E6',           // Light mint
    
    // Community feature images
    'modern-living': '#F5F0E8',     // Warm off-white
    'convenient-living': '#E8F0F5', // Cool off-white
    'longterm-living': '#F0E8F5',   // Purple tint
    'quiet-dining': '#E8F5F0',      // Green tint
    'hero-house': '#DDD6C1'         // Neutral beige
  };
  
  const color = colors[imageName as keyof typeof colors] || '#E5E7EB';
  
  // Create a simple SVG placeholder with subtle pattern
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <rect x="20%" y="20%" width="60%" height="60%" fill="rgba(255,255,255,0.1)" rx="8"/>
      <circle cx="50%" cy="50%" r="15%" fill="rgba(255,255,255,0.05)"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}