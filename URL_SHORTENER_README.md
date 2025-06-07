# URL Shortener - arqilasp.com

Simple URL shortener dengan tracking yang bisa di-deploy di Vercel menggunakan domain arqilasp.com.

## Features

- ✅ **URL Shortening**: Mengubah URL panjang menjadi pendek (arqilasp.com/s/xxxxx)
- ✅ **Click Tracking**: Melacak setiap klik dengan metadata lengkap
- ✅ **Statistics Dashboard**: Melihat statistik penggunaan URL
- ✅ **Modern UI**: Interface yang clean dan responsive
- ✅ **Password Protection**: Halaman `/shortener` dilindungi password untuk penggunaan pribadi
- ✅ **Session Management**: Auto logout setelah 24 jam untuk keamanan
- ✅ **Vercel Ready**: Siap deploy di Vercel dengan Vercel KV

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Vercel KV (Redis)
- **UI**: TailwindCSS + shadcn/ui
- **ID Generation**: nanoid
- **Deployment**: Vercel

## File Structure

```
portfolio-arqila/
├── app/
│   ├── api/
│   │   ├── shorten/route.ts     # API untuk membuat short URL
│   │   └── stats/[id]/route.ts  # API untuk statistik
│   ├── s/[id]/page.tsx          # Redirect handler
│   └── shortener/page.tsx       # UI untuk shortener
├── vercel.json                  # Konfigurasi Vercel
└── URL_SHORTENER_README.md      # Dokumentasi ini
```

## Setup & Deployment

### 1. Environment Variables

Tambahkan environment variables di Vercel dashboard:

```bash
# Upstash Redis (otomatis ditambahkan saat setup KV di Vercel)
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

### 2. Setup Upstash Redis (via Vercel)

1. Login ke [Vercel Dashboard](https://vercel.com/dashboard)
2. Pergi ke project Anda
3. Buka tab "Storage"
4. Create "KV Database" (powered by Upstash)
5. Connect ke project Anda
6. Environment variables akan otomatis ditambahkan

**Alternative - Direct Upstash:**
1. Login ke [Upstash Console](https://console.upstash.com/)
2. Create Redis database
3. Copy REST URL dan REST TOKEN
4. Add ke environment variables di Vercel

### 3. Deploy

1. Push code ke GitHub/GitLab
2. Deploy melalui Vercel dashboard atau:

```bash
npm install -g vercel
vercel --prod
```

### 4. Custom Domain (arqilasp.com)

1. Di Vercel dashboard, buka project settings
2. Pergi ke "Domains"
3. Tambahkan `arqilasp.com`
4. Update DNS records:
   - A record: `@` → Vercel IP
   - CNAME: `www` → cname.vercel-dns.com

## Usage

### Akses URL Shortener

- **Interface**: `https://arqilasp.com/shortener` (Protected with password)
- **Short URLs**: `https://arqilasp.com/s/{id}` (Public access)
- **Password**: Required for accessing shortener interface (configured in code)

### API Endpoints

#### 1. Shorten URL
```bash
POST /api/shorten
Content-Type: application/json

{
  "url": "https://example.com/very/long/url"
}

# Response
{
  "shortUrl": "https://arqilasp.com/s/abc123",
  "id": "abc123"
}
```

#### 2. Get Statistics
```bash
GET /api/stats/{id}

# Response
{
  "originalUrl": "https://example.com/very/long/url",
  "shortId": "abc123",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "clickCount": 42,
  "clickHistory": [
    {
      "timestamp": "2024-01-01T12:00:00.000Z",
      "userAgent": "Mozilla/5.0...",
      "referer": "https://google.com",
      "ip": "192.168.1.1"
    }
  ]
}
```

### Data Tracking

Setiap klik akan melacak:
- Timestamp
- IP Address
- User Agent
- Referer URL

## Local Development

### Option 1: Development tanpa KV (In-Memory)
```bash
# Install dependencies
npm install

# Start development server (akan menggunakan in-memory storage)
npm run dev

# Akses di http://localhost:3000/shortener
```

### Option 2: Development dengan Upstash Redis
```bash
# 1. Setup Upstash Redis (lihat Setup & Deployment)
# 2. Copy env.example ke .env.local
cp env.example .env.local

# 3. Update .env.local dengan values dari Upstash/Vercel dashboard
# 4. Start development server
npm run dev
```

**Note**: Aplikasi akan otomatis menggunakan in-memory storage jika environment variables Upstash tidak tersedia.

## Monitoring

- **Click Analytics**: Built-in di `/shortener` page
- **Vercel Analytics**: Untuk traffic monitoring
- **KV Storage**: Monitor di Vercel dashboard

## Security & Limitations

- **Password Protection**: Shortener interface protected with password "biru1933"
- **Session Management**: 24-hour auto logout for security
- **Rate limiting**: Handled by Vercel (100 requests/10s per IP)
- **URL validation**: Basic URL format validation
- **Data retention**: Click history disimpan 30 hari
- **Public Access**: Short URLs (/s/{id}) accessible without authentication

## Performance

- **Cold start**: ~200ms (Vercel Edge Functions)
- **Redirect speed**: ~50ms (Redis lookup)
- **Storage**: Unlimited URLs (pay-per-use)

## Troubleshooting

### 1. KV Connection Error
- Pastikan environment variables KV sudah benar
- Check Vercel KV dashboard untuk status

### 2. Domain Issues
- Pastikan DNS sudah propagasi (bisa 24-48 jam)
- Check SSL certificate status di Vercel

### 3. API Errors
- Check function logs di Vercel dashboard
- Pastikan request format sesuai API spec

## Future Enhancements

- [ ] Bulk URL shortening
- [ ] Custom aliases
- [ ] Password protected URLs
- [ ] Expiration dates
- [ ] QR Code generation
- [ ] Advanced analytics
- [ ] API rate limiting per user

---

**Domain**: arqilasp.com  
**Created by**: Arqila Surya Putra  
**Tech**: Next.js + Vercel KV 