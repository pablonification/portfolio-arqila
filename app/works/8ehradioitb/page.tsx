import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import StackIcon from "tech-stack-icons";

// Helper component untuk role tags
const RoleTag = ({ children }: { children: React.ReactNode }) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "lead developer":
        return "#FFE4EC";
      case "ui/ux designer":
        return "#E2F4F4";
      case "project manager":
        return "#F2E5F6";
      default:
        return "#E5E7EB"; // fallback gray
    }
  };

  return (
    <div
      className="text-xs font-medium px-3 py-1 text-gray-800 rounded-full font-inter tracking-tighter"
      style={{ backgroundColor: getRoleColor(children as string) }}
    >
      {children}
    </div>
  );
};

const PlayIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2"
  >
    <path
      d="M5 3L19 12L5 21V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DraftAnakITBPage() {
  return (
    <>
      <div className="relative z-0 min-h-[100dvh] overflow-x-hidden p-4 sm:p-6 md:p-8 mt-20 sm:mt-24 md:mt-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16">
            <div className="relative w-full mx-auto">
              <div className="relative bg-gradient-to-b from-gray-300 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[21/9]">
                <Image
                  src="/8eh-slug.webp"
                  alt="8EH Radio ITB App Showcase"
                  width={3600}
                  height={1530}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    8EH Radio ITB
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    Modern radio streaming and content platform for ITB students
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Konten Utama & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kolom Kiri - Konten Utama */}
            <main className="lg:col-span-2 space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 font-inter relative z-10">
                  Problem Overview
                </h2>
                <p className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter">
                  <div>
                    8EH Radio ITB is a campus-based student radio station that
                    produces live broadcasts, podcasts, blogs, and music charts.
                    However, the existing WordPress-based website suffered from
                    extremely poor performance and outdated design, leading to a
                    steep decline in user experience and listener engagement.
                    The website had critical issues such as long loading times,
                    broken links, unplayable radio streams on some devices,
                    missing assets, and a UI/UX that was far from intuitive.
                  </div>
                  <div>
                    The goal of this project was to completely redesign and
                    rebuild the platform from scratch to restore 8EH’s digital
                    presence, enhance usability, and support future business
                    development through better exposure for media partnerships
                    and client agencies. We didn’t stop at the public-facing
                    site, we also built a custom, intuitive admin dashboard
                    accessible across devices to empower the operations team to
                    easily manage podcasts, blog posts, announcer profiles, and
                    partner content without needing technical knowledge.
                  </div>
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 font-inter relative z-10">
                  My Role
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <RoleTag>Project Manager</RoleTag>
                  <RoleTag>Full Stack Developer</RoleTag>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-inter tracking-tighter">
                  As both the project manager and full stack developer, I was
                  responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>
                    Leading the full redesign and migration from WordPress to
                    Next.js
                  </li>
                  <li>
                    Redesigning the information architecture and site layout
                  </li>
                  <li>
                    Rebuilding the entire platform using React and Next.js
                  </li>
                  <li>
                    Implementing CMS-like features with Markdown and Remark GFM
                    for easier content creation
                  </li>
                  <li>
                    Integrating podcast audio streams, blog publishing, music
                    chart updates, and announcer profiles
                  </li>
                  <li>
                    Setting up scalable asset management using Cloudinary and
                    Cloudflare R2
                  </li>
                  <li>
                    Deploying and optimizing the site for fast load speeds and
                    mobile responsiveness
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-6 font-inter relative z-10">
                  Gallery
                </h2>
                <div className="space-y-10">
                  <div>
                    <p className="text-gray-700 mb-4 font-inter tracking-tighter">
                      Here are some snapshots from the development process and
                      the final app screens.
                    </p>
                    <div className="grid gap-4">
                      <Image
                        src="/8eh-slug2.webp"
                        alt="User Interviews"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                      <Image
                        src="/8eh-slug3.webp"
                        alt="User Personas"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                      <Image
                        src="/8eh-slug4.webp"
                        alt="User Personas"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 font-inter relative z-10">
                  Challenges & Lessons
                </h2>
                <h3 className="font-bold text-lg mb-3 font-inter tracking-tighter">
                  Key Challenges
                </h3>
                <ul className="space-y-2 text-gray-700 mb-6 font-inter tracking-tighter list-disc list-inside">
                  <li>
                    Rebuilding a high-performance site while preserving existing
                    user data and legacy content
                  </li>
                  <li>
                    Designing a layout that balanced creativity, performance,
                    and accessibility across devices
                  </li>
                  <li>
                    Handling asynchronous content such as music streams, blog
                    updates, and live podcast integration in a seamless
                    experience
                  </li>
                </ul>
                <h3 className="font-bold text-lg mb-3 font-inter tracking-tighter">
                  Lessons Learned
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-red-50 border-l-4 border-red-300 text-red-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    Performance is product, even the most creative ideas won’t
                    matter if the platform isn’t fast or responsive.
                  </blockquote>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 text-blue-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    Combining developer efficiency with content editor
                    flexibility taught us how important maintainability is in a
                    content-heavy platform.
                  </blockquote>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-6 font-inter relative z-10">
                  Results
                </h2>
                <ul className="text-gray-700 leading-relaxed space-y-2 font-inter tracking-tighter list-disc list-inside mb-0 justify-normal">
                  <li>
                    Load speed improved by <strong>over 10×</strong>, leading to higher engagement rates.
                  </li>
                  <li>
                    Streaming compatibility fixed across all major browsers and devices.
                  </li>
                  <li>
                    Re-established brand credibility with a new, cohesive visual identity.
                  </li>
                  <li>
                    Platform now supports weekly updates, allowing announcers to independently upload content.
                  </li>
                  <li>
                    8EH is now actively pitching to media clients through the new business-focused sections of the site.
                  </li>
                </ul>
              </div>
            </main>

            {/* Kolom Kanan - Sidebar */}
            <aside className="lg:col-span-1 space-y-8 lg:sticky top-8 self-start">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tighter relative z-10">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="react" className="w-6 h-6" />
                    React
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="nextjs" className="w-6 h-6" />
                    Next.js
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="tailwindcss" className="w-6 h-6" />
                    Tailwind CSS
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="mongodb" className="w-6 h-6" />
                    MongoDB
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="nodejs" className="w-6 h-6" />
                    Node.js
                  </div>
                  {/* resend */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="cloudinary" className="w-6 h-6" />
                    Cloudinary
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/cloudflare.svg"
                      alt="Cloudflare"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                    Cloudflare R2
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="markdown" className="w-6 h-6" />
                    Remark.js
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="js" className="w-6 h-6" />
                    JavaScript
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="vercel" className="w-6 h-6" />
                    Vercel
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tighter relative z-10">
                  Project Links
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="https://github.com/pablonification/8ehradioitb/"
                    target="_blank"
                    className="bg-black text-white text-center rounded-2xl py-3 font-medium hover:bg-gray-800 transition-all duration-300 font-inter tracking-tighter shadow-[0_4px_8px_-2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden group"
                  >
                    {/* Button inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 rounded-2xl pointer-events-none"></div>
                    {/* Button top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      <Image
                        src="/github-white.svg"
                        alt="GitHub"
                        className="inline-block mr-1 -translate-y-[1px]"
                        width={22}
                        height={22}
                      />
                      GitHub Repository
                    </span>
                  </Link>
                  <Link
                    href="https://8ehradioitb.com/"
                    target="_blank"
                    className="bg-gradient-to-r from-[#ffbcc4] to-[#c1f0f1] text-gray-800 text-center rounded-2xl py-3 font-medium hover:opacity-90 transition-all duration-300 font-inter tracking-tighter flex items-center justify-center shadow-[0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_-3px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.15)] hover:-translate-y-1 relative overflow-hidden group"
                  >
                    {/* Button inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-gray-200/20 rounded-2xl pointer-events-none"></div>
                    {/* Button top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-2xl"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      <Image
                        src="/globe.svg"
                        alt="Globe"
                        className="inline-block mr-1"
                        width={20}
                        height={20}
                      />
                      Live Demo
                    </span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
