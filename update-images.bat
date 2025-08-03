@echo off
echo 🔄 Updating image references to WebP format...

REM Update main page images
echo 📝 Updating app/page.tsx...
powershell -Command "(Get-Content 'app/page.tsx') -replace 'draftanakitb_pic1\.png', 'draftanakitb_pic1.webp' -replace 'draftanakitb_pic2\.png', 'draftanakitb_pic2.webp' -replace 'ludic_pic1\.png', 'ludic_pic1.webp' -replace 'ludic_pic4\.png', 'ludic_pic4.webp' -replace '8eh\.png', '8eh.webp' -replace '8eh-card1\.png', '8eh-card1.webp' -replace '8eh-card2\.png', '8eh-card2.webp' -replace 'meddocs\.png', 'meddocs.webp' -replace 'wjc-card1\.png', 'wjc-card1.webp' -replace 'wjc-card2\.png', 'wjc-card2.webp' -replace 'taskly\.png', 'taskly.webp' -replace 'taskly-card1\.png', 'taskly-card1.webp' -replace 'taskly-card2\.png', 'taskly-card2.webp' -replace 'spakbor\.png', 'spakbor.webp' -replace 'spakbor-card1\.png', 'spakbor-card1.webp' -replace 'spakbor-card2\.png', 'spakbor-card2.webp' -replace 'ludic_logo\.png', 'ludic_logo.webp' | Set-Content 'app/page.tsx'"

REM Update taskly page
echo 📝 Updating app/works/taskly/page.tsx...
powershell -Command "(Get-Content 'app/works/taskly/page.tsx') -replace 'taskly-slug\.jpg', 'taskly-slug.webp' -replace 'taskly-slug2\.jpg', 'taskly-slug2.webp' -replace 'expo\.png', 'expo.webp' | Set-Content 'app/works/taskly/page.tsx'"

REM Update spakbor page
echo 📝 Updating app/works/spakbor-hills/page.tsx...
powershell -Command "(Get-Content 'app/works/spakbor-hills/page.tsx') -replace 'spakbor-slug\.jpg', 'spakbor-slug.webp' -replace 'spakbor-1\.jpg', 'spakbor-1.webp' -replace 'spakbor-2\.jpg', 'spakbor-2.webp' -replace 'spakbor-3\.jpg', 'spakbor-3.webp' -replace 'spakbor-4\.jpg', 'spakbor-4.webp' -replace 'spakbor-5\.jpg', 'spakbor-5.webp' -replace 'spakbor-6\.jpg', 'spakbor-6.webp' -replace 'spakbor-7\.jpg', 'spakbor-7.webp' -replace 'spakbor-8\.jpg', 'spakbor-8.webp' -replace 'spakbor-9\.jpg', 'spakbor-9.webp' -replace 'spakbor-10\.jpg', 'spakbor-10.webp' -replace 'junit\.png', 'junit.webp' -replace 'game\.png', 'game.webp' | Set-Content 'app/works/spakbor-hills/page.tsx'"

REM Update meddocs page
echo 📝 Updating app/works/meddocs-wjc/page.tsx...
powershell -Command "(Get-Content 'app/works/meddocs-wjc/page.tsx') -replace 'meddocs-wjc-slug\.jpg', 'meddocs-wjc-slug.webp' -replace 'meddocs-wjc-slug2\.jpg', 'meddocs-wjc-slug2.webp' -replace 'meddocs-wjc-slug3\.jpg', 'meddocs-wjc-slug3.webp' -replace 'meddocs-wjc-slug4\.jpg', 'meddocs-wjc-slug4.webp' -replace 'midtrans\.jpg', 'midtrans.webp' | Set-Content 'app/works/meddocs-wjc/page.tsx'"

REM Update GEP page
echo 📝 Updating app/works/gep2025/page.tsx...
powershell -Command "(Get-Content 'app/works/gep2025/page.tsx') -replace 'gep-cover\.jpg', 'gep-cover.webp' -replace 'gep-slug\.jpg', 'gep-slug.webp' -replace 'gep-slug2\.jpg', 'gep-slug2.webp' | Set-Content 'app/works/gep2025/page.tsx'"

REM Update draftanakitb page
echo 📝 Updating app/works/draftanakitb/page.tsx...
powershell -Command "(Get-Content 'app/works/draftanakitb/page.tsx') -replace 'cover_draftanakitb\.jpg', 'cover_draftanakitb.webp' -replace 'draftanakitb-slug\.jpg', 'draftanakitb-slug.webp' -replace 'draftanakitb-slug2\.jpg', 'draftanakitb-slug2.webp' -replace 'gemini\.png', 'gemini.webp' -replace 'xendit\.png', 'xendit.webp' -replace 'x\.png', 'x.webp' | Set-Content 'app/works/draftanakitb/page.tsx'"

REM Update 8ehradioitb page
echo 📝 Updating app/works/8ehradioitb/page.tsx...
powershell -Command "(Get-Content 'app/works/8ehradioitb/page.tsx') -replace '8eh-slug\.png', '8eh-slug.webp' -replace '8eh-slug2\.jpg', '8eh-slug2.webp' -replace '8eh-slug3\.jpg', '8eh-slug3.webp' -replace '8eh-slug4\.jpg', '8eh-slug4.webp' | Set-Content 'app/works/8ehradioitb/page.tsx'"

REM Update Lanyard component
echo 📝 Updating components/Lanyard.tsx...
powershell -Command "(Get-Content 'components/Lanyard.tsx') -replace 'card/lanyard\.png', 'card/lanyard.webp' | Set-Content 'components/Lanyard.tsx'"

echo.
echo 🎉 All image references updated to WebP format!
echo ✅ Your portfolio now uses optimized WebP images 