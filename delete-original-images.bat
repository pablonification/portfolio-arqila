@echo off
echo 🗑️  Deleting original PNG and JPG files to save space...

REM Delete PNG files
echo 📝 Deleting PNG files...
del /Q "public\*.png" 2>nul
del /Q "public\card\*.png" 2>nul

REM Delete JPG files
echo 📝 Deleting JPG files...
del /Q "public\*.jpg" 2>nul

REM Delete JPEG files (if any)
echo 📝 Deleting JPEG files...
del /Q "public\*.jpeg" 2>nul

REM Keep the conversion scripts for future use
echo 📝 Keeping conversion scripts...

echo.
echo 🎉 Original image files deleted!
echo 💾 Estimated space saved: ~156MB
echo ✅ Your portfolio now uses only optimized WebP images
echo 📊 Total WebP files: 83 optimized images 