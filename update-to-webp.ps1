# PowerShell script to update all image references to WebP format
Write-Host "🔄 Updating image references to WebP format..." -ForegroundColor Green

# Define the files to update
$filesToUpdate = @(
    "app/page.tsx",
    "app/works/taskly/page.tsx",
    "app/works/spakbor-hills/page.tsx",
    "app/works/meddocs-wjc/page.tsx",
    "app/works/gep2025/page.tsx",
    "app/works/draftanakitb/page.tsx",
    "app/works/8ehradioitb/page.tsx",
    "components/Lanyard.tsx"
)

# Define the replacements (original -> webp)
$replacements = @{
    # Main page images
    'draftanakitb_pic1.png' = 'draftanakitb_pic1.webp'
    'draftanakitb_pic2.png' = 'draftanakitb_pic2.webp'
    'ludic_pic1.png' = 'ludic_pic1.webp'
    'ludic_pic4.png' = 'ludic_pic4.webp'
    '8eh.png' = '8eh.webp'
    '8eh-card1.png' = '8eh-card1.webp'
    '8eh-card2.png' = '8eh-card2.webp'
    'meddocs.png' = 'meddocs.webp'
    'wjc-card1.png' = 'wjc-card1.webp'
    'wjc-card2.png' = 'wjc-card2.webp'
    'taskly.png' = 'taskly.webp'
    'taskly-card1.png' = 'taskly-card1.webp'
    'taskly-card2.png' = 'taskly-card2.webp'
    'spakbor.png' = 'spakbor.webp'
    'spakbor-card1.png' = 'spakbor-card1.webp'
    'spakbor-card2.png' = 'spakbor-card2.webp'
    'ludic_logo.png' = 'ludic_logo.webp'
    
    # Taskly page
    'taskly-slug.jpg' = 'taskly-slug.webp'
    'taskly-slug2.jpg' = 'taskly-slug2.webp'
    'expo.png' = 'expo.webp'
    
    # Spakbor page
    'spakbor-slug.jpg' = 'spakbor-slug.webp'
    'spakbor-1.jpg' = 'spakbor-1.webp'
    'spakbor-2.jpg' = 'spakbor-2.webp'
    'spakbor-3.jpg' = 'spakbor-3.webp'
    'spakbor-4.jpg' = 'spakbor-4.webp'
    'spakbor-5.jpg' = 'spakbor-5.webp'
    'spakbor-6.jpg' = 'spakbor-6.webp'
    'spakbor-7.jpg' = 'spakbor-7.webp'
    'spakbor-8.jpg' = 'spakbor-8.webp'
    'spakbor-9.jpg' = 'spakbor-9.webp'
    'spakbor-10.jpg' = 'spakbor-10.webp'
    'junit.png' = 'junit.webp'
    'game.png' = 'game.webp'
    
    # Meddocs page
    'meddocs-wjc-slug.jpg' = 'meddocs-wjc-slug.webp'
    'meddocs-wjc-slug2.jpg' = 'meddocs-wjc-slug2.webp'
    'meddocs-wjc-slug3.jpg' = 'meddocs-wjc-slug3.webp'
    'meddocs-wjc-slug4.jpg' = 'meddocs-wjc-slug4.webp'
    'midtrans.jpg' = 'midtrans.webp'
    
    # GEP page
    'gep-cover.jpg' = 'gep-cover.webp'
    'gep-slug.jpg' = 'gep-slug.webp'
    'gep-slug2.jpg' = 'gep-slug2.webp'
    
    # Draftanakitb page
    'cover_draftanakitb.jpg' = 'cover_draftanakitb.webp'
    'draftanakitb-slug.jpg' = 'draftanakitb-slug.webp'
    'draftanakitb-slug2.jpg' = 'draftanakitb-slug2.webp'
    'gemini.png' = 'gemini.webp'
    'xendit.png' = 'xendit.webp'
    'x.png' = 'x.webp'
    
    # 8ehradioitb page
    '8eh-slug.png' = '8eh-slug.webp'
    '8eh-slug2.jpg' = '8eh-slug2.webp'
    '8eh-slug3.jpg' = '8eh-slug3.webp'
    '8eh-slug4.jpg' = '8eh-slug4.webp'
    
    # Lanyard component
    'card/lanyard.png' = 'card/lanyard.webp'
}

$totalReplacements = 0

foreach ($file in $filesToUpdate) {
    if (Test-Path $file) {
        Write-Host "📝 Processing: $file" -ForegroundColor Yellow
        $content = Get-Content $file -Raw
        $fileReplacements = 0
        
        foreach ($replacement in $replacements.GetEnumerator()) {
            # Replace with and without leading slash
            $patterns = @(
                "/$($replacement.Key)",
                "$($replacement.Key)",
                "`"$($replacement.Key)`"",
                "'$($replacement.Key)'"
            )
            
            foreach ($pattern in $patterns) {
                $newPattern = $pattern -replace [regex]::Escape($replacement.Key), $replacement.Value
                if ($content -match [regex]::Escape($pattern)) {
                    $content = $content -replace [regex]::Escape($pattern), $newPattern
                    $fileReplacements++
                    Write-Host "  ✅ $($replacement.Key) -> $($replacement.Value)" -ForegroundColor Green
                }
            }
        }
        
        if ($fileReplacements -gt 0) {
            Set-Content $file $content -NoNewline
            $totalReplacements += $fileReplacements
            Write-Host "  📊 Made $fileReplacements replacements in $file" -ForegroundColor Cyan
        } else {
            Write-Host "  ⚠️  No replacements needed in $file" -ForegroundColor Gray
        }
    } else {
        Write-Host "❌ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Update completed!" -ForegroundColor Green
Write-Host "📊 Total replacements made: $totalReplacements" -ForegroundColor Cyan
Write-Host "✅ All image references updated to WebP format" -ForegroundColor Green 