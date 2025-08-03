const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert large image to WebP with resizing
async function convertLargeToWebP(inputPath, outputPath) {
  try {
    // Get image metadata first
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(1)}MB`);
    
    // WebP has a maximum dimension limit of 16383x16383
    const maxDimension = 16383;
    let resizeOptions = {};
    
    if (metadata.width > maxDimension || metadata.height > maxDimension) {
      // Calculate new dimensions while maintaining aspect ratio
      const aspectRatio = metadata.width / metadata.height;
      let newWidth, newHeight;
      
      if (metadata.width > metadata.height) {
        newWidth = maxDimension;
        newHeight = Math.round(maxDimension / aspectRatio);
      } else {
        newHeight = maxDimension;
        newWidth = Math.round(maxDimension * aspectRatio);
      }
      
      resizeOptions = {
        width: newWidth,
        height: newHeight,
        fit: 'inside',
        withoutEnlargement: true
      };
      
      console.log(`Resizing to: ${newWidth}x${newHeight}`);
    }
    
    // Convert to WebP with resizing if needed
    const pipeline = sharp(inputPath);
    if (Object.keys(resizeOptions).length > 0) {
      pipeline.resize(resizeOptions);
    }
    
    await pipeline
      .webp({ 
        quality: 80,
        effort: 6 // Higher effort for better compression
      })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const compressionRatio = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Successfully converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(1)}MB, WebP: ${(webpSize / 1024 / 1024).toFixed(1)}MB (${compressionRatio}% smaller)`);
    
    return { success: true, originalSize, webpSize, compressionRatio };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Convert the specific file
async function convertGepSlug2() {
  const inputPath = path.join(__dirname, 'public', 'gep-slug2.jpg');
  const outputPath = path.join(__dirname, 'public', 'gep-slug2.webp');
  
  console.log('Converting gep-slug2.jpg to WebP...\n');
  
  const result = await convertLargeToWebP(inputPath, outputPath);
  
  if (result.success) {
    console.log('\n🎉 Conversion completed successfully!');
  } else {
    console.log('\n❌ Conversion failed. Please check the error above.');
  }
  
  return result;
}

// Run the conversion
convertGepSlug2().catch(console.error); 