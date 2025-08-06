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
                  src="/cover_draftanakitb.webp"
                  alt="DraftAnakITB App Showcase"
                  width={3600}
                  height={1530}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    DraftAnakITB
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    Anonymous platform for ITB students
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
                    ITB students needed a safe space to express opinions, ask
                    questions, and share experiences without fear of judgment or
                    repercussion. Many students felt hesitant to speak openly in
                    official channels.
                  </div>
                  <div>
                    DraftAnakITB was created as an anonymous platform where
                    students could freely discuss academic challenges, campus
                    life, and sensitive topics while maintaining their privacy.
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
                  <RoleTag>Lead Developer</RoleTag>
                  <RoleTag>UI/UX Designer</RoleTag>
                  <RoleTag>Project Manager</RoleTag>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-inter tracking-tighter">
                  I owned the project end-to-end, from initial idea and
                  research, to UI/UX design, full-stack development, and
                  platform deployment. My responsibilities included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>
                    Conducting user research to understand pain points and
                    behavior
                  </li>
                  <li>
                    Designing the entire user experience (UX) and interface (UI)
                    using Figma
                  </li>
                  <li>Developing the frontend using React and Tailwind CSS</li>
                  <li>Building a secure backend using Node.js and MongoDB</li>
                  <li>
                    Integrating X (Twitter) API with moderation tools to ensure
                    safety and anonymity
                  </li>
                  <li>
                    Managing feature releases, user testing, and continuous
                    iterations
                  </li>
                  <li>
                    Monitoring performance and handling all deployment
                    operations
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
                        src="/draftanakitb-slug.webp"
                        alt="User Interviews"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                      <Image
                        src="/draftanakitb-slug2.webp"
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
                    Balancing anonymity with accountability to prevent misuse of
                    the platform
                  </li>
                  <li>
                    Designing a moderation system that respects privacy but
                    allows filtering
                  </li>
                  <li>
                    Scaling the platform quickly when it gained unexpected
                    popularity
                  </li>
                </ul>
                <h3 className="font-bold text-lg mb-3 font-inter tracking-tighter">
                  Lessons Learned
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-red-50 border-l-4 border-red-300 text-red-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    The most important feature wasn't the anonymity itself, but
                    creating a sense of community where students felt safe to
                    express themselves.
                  </blockquote>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 text-blue-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    User testing revealed that students valued simplicity over
                    complex features. We ended up removing several 'cool'
                    features that added unnecessary complexity.
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-6">
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      20,000+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Active followers
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      1,000,000+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Weekly impressions
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      7,000+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Total tweets
                    </p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter">
                  <p>
                    DraftAnakITB became the go-to platform for ITB students to
                    discuss campus issues, academic challenges, and share
                    resources. The success of this project led to requests from other
                    universities to implement similar platforms, creating
                    opportunities for expansion.
                  </p>
                </div>
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
                    <StackIcon name="figma" className="w-6 h-6" />
                    Figma
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
                    <StackIcon name="resend" className="w-6 h-6" />
                    Resend
                  </div>
                  {/* gcloud */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/gemini.webp"
                      alt="Google Gemini API"
                      width={24}
                      height={24}
                    />
                    Gemini API
                  </div>
                  {/* xendit */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/xendit.webp"
                      alt="Xendit"
                      width={24}
                      height={24}
                    />
                    Xendit
                  </div>
                  {/* Twitter */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/x.webp" alt="X" width={24} height={24} />X API
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
                    href="https://github.com/pablonification/draftanakitb-web/"
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
                    href="https://draftanakitb.tech/"
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

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tighter relative z-10">
                  Project Timeline
                </h3>
                <ul className="space-y-4 border-l-2 border-gray-200 pl-4">
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Brainstorming & Planning
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      August – September 2024
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Initial idea development, user research, concept
                      validation
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Chatbot Development (v1)
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      September – October 2024
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Built Telegram-based chatbot using command keywords for
                      core actions
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Initial Release
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      October 2024
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Released chatbot version for users to send menfess to
                      DraftAnakITB X's account
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Design Phase (Web App)
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      December 2024 – January 2025
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      UI/UX design, wireframing, prototyping, and validation
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Full Stack Development (Web)
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      January – February 2025
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Developed web-based version with frontend and backend
                      integration
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Web Release & Iteration
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      February 2025 – Present
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Public release of web version, feedback-based improvements
                      and updates
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
