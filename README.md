# portfolio-arqila

[Live site](https://arqilasp.com) · [Vercel deployment](https://portfolio-arqila.vercel.app)

The source code for Arqila Surya Putra's personal portfolio website. The application presents project case studies, experience, technical interests, and interactive experiments through a responsive Next.js interface.

## Features

- Animated landing page with scroll-based transitions and dynamic background effects.
- Interactive 3D lanyard component and technology presentation cards.
- Case-study pages with project descriptions, roles, technology details, galleries, and media.
- Responsive navigation, theme components, and reusable UI primitives.
- `/chatbot` route for the external RAG chatbot demo.
- Protected `/shortener` tool for creating short links and viewing click statistics.
- Redirect and analytics routes for generated short links.

## Application structure

```text
app/
  page.tsx              landing page
  works/                project case-study routes
  chatbot/              external RAG chatbot redirect
  shortener/            protected URL shortener interface
  s/[id]/               public short-link route
  api/                  short-link and analytics handlers
components/             navigation, animation, 3D, and UI components
hooks/                  shared client hooks
lib/                    utilities and storage adapters
public/                 project media, icons, and case-study assets
```

## Technology

- **Framework:** Next.js 14 App Router, React 18, TypeScript
- **Styling and UI:** Tailwind CSS, Radix UI, Framer Motion, Motion, React Spring
- **3D and interaction:** Three.js, React Three Fiber, React Three Drei, Matter.js, OGL
- **Storage:** Upstash Redis with an in-memory fallback for local development
- **Deployment:** Vercel

## Local development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run build
npm run start
npm run lint
```

## Optional URL shortener storage

The shortener uses an in-memory store when Upstash is not configured. For persistent short links and click statistics, set:

```env
KV_REST_API_URL=https://your-upstash-endpoint
KV_REST_API_TOKEN=your-upstash-token
```

The shortener interface is protected by the application's password gate. Do not commit credentials or production tokens.

## Deployment

The project is configured for Vercel. Set the Upstash variables before enabling persistent short-link analytics in production. The rest of the portfolio can run without external storage.
