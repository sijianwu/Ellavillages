#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public/assets/images');
const outputDir = path.join(process.cwd(), 'public/assets/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const outputPath = path.join(outputDir, filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .resize(1200, 800, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${filename} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');
  
  const files = fs.readdirSync(imagesDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
  );
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    await optimizeImage(inputPath, file);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${outputDir}`);
}

main().catch(console.error);