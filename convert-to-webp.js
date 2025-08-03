const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert image to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // You can adjust quality (0-100)
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const compressionRatio = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB, WebP: ${(webpSize / 1024).toFixed(1)}KB (${compressionRatio}% smaller)`);
    
    return { success: true, originalSize, webpSize, compressionRatio };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Function to find all image files recursively
function findImageFiles(dir) {
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main conversion function
async function convertAllImages() {
  const publicDir = path.join(__dirname, 'public');
  const imageFiles = findImageFiles(publicDir);
  
  console.log(`Found ${imageFiles.length} image files to convert...\n`);
  
  const results = [];
  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  
  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath);
    const webpPath = imagePath.replace(ext, '.webp');
    
    const result = await convertToWebP(imagePath, webpPath);
    results.push({ ...result, originalPath: imagePath, webpPath });
    
    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalWebpSize += result.webpSize;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('CONVERSION SUMMARY');
  console.log('='.repeat(60));
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successfully converted: ${successful} files`);
  if (failed > 0) {
    console.log(`❌ Failed conversions: ${failed} files`);
  }
  
  const totalCompressionRatio = ((totalOriginalSize - totalWebpSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`📊 Total size reduction: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB -> ${(totalWebpSize / 1024 / 1024).toFixed(1)}MB (${totalCompressionRatio}% smaller)`);
  
  // List failed conversions if any
  if (failed > 0) {
    console.log('\nFailed conversions:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${path.basename(r.originalPath)}: ${r.error}`);
    });
  }
  
  return results;
}

// Run the conversion
convertAllImages().catch(console.error); 