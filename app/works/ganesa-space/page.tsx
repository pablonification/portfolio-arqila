import { ganesaSpace } from "@/lib/ganesa-space";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";

// Helper component untuk role tags
const RoleTag = ({ children }: { children: React.ReactNode }) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "founder":
        return "#FFE4EC";
      case "full-stack developer":
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

export default function GanesaSpacePage() {
  return (
    <>
      <div className="relative z-0 min-h-[100dvh] overflow-x-hidden p-4 sm:p-6 md:p-8 mt-20 sm:mt-24 md:mt-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16">
            <div className="relative w-full mx-auto">
              <div className="relative bg-gradient-to-b from-gray-300 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[21/9]">
                <Image
                  src="/ganesa-space-cover.png"
                  alt="Ganesa Space dashboard and anonymous posting interface"
                  width={1942}
                  height={809}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    Ganesa Space
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    A community platform for ITB students
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Konten Utama & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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
                <div className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter">
                  <div>
                    Ganesa Space brings together community products for ITB
                    students. Users can publish anonymous posts to X
                    and Instagram, while AnonChat connects students through
                    anonymous matchmaking and realtime conversations.
                  </div>
                  <div>
                    A shared token wallet supports paid features, top-ups,
                    redeemable codes, and rewards from missions and streaks.
                    DelVote lets the community vote to remove posts, alongside
                    identity verification and administrator moderation. Users
                    remain anonymous to each other, with platform traceability
                    for moderation.
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
                  My Role
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <RoleTag>Founder</RoleTag>
                  <RoleTag>Full-Stack Developer</RoleTag>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  {ganesaSpace.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

            </main>

            {/* Kolom Kanan - Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
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
                    <StackIcon name="react" className="w-6 h-6 shrink-0" />
                    React
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="nextjs" className="w-6 h-6 shrink-0" />
                    Next.js
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="typescript" className="w-6 h-6 shrink-0" />
                    TypeScript
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="tailwindcss" className="w-6 h-6 shrink-0" />
                    Tailwind CSS
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="go" className="w-6 h-6 shrink-0" />
                    Go
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="postgresql" className="w-6 h-6 shrink-0" />
                    PostgreSQL
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/river.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    River
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/centrifugo.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    Centrifugo
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="nodejs" className="w-6 h-6 shrink-0" />
                    Node.js
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/baileys.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    Baileys
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/openapi.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    OpenAPI
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="cloudflare" className="w-6 h-6 shrink-0" />
                    Cloudflare R2
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="docker" className="w-6 h-6 shrink-0" />
                    Docker
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/nginx.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    Nginx
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/posthog.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    PostHog
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="resend" className="w-6 h-6 shrink-0" />
                    Resend
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/mayar.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    Mayar
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
                    href={ganesaSpace.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      Live Platform
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
