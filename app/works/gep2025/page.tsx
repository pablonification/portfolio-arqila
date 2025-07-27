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

export default function GEP2025Page() {
  return (
    <>
      <div className="relative z-0 min-h-[100dvh] overflow-x-hidden p-4 sm:p-6 md:p-8 mt-20 sm:mt-24 md:mt-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16">
            <div className="relative w-full mx-auto">
              <div className="relative bg-gradient-to-b from-gray-300 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[21/9]">
                <Image
                  src="/placeholder-works.png"
                  alt="DraftAnakITB App Showcase"
                  width={1200}
                  height={510}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    Ganesha Exhibition Programme 2025
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
                    Ganesha Exhibition Programme 2025 was created as an
                    anonymous platform where students could freely discuss
                    academic challenges, campus life, and sensitive topics while
                    maintaining their privacy.
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
                  I led the development team while also handling the UI/UX
                  design of the platform. My responsibilities included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>
                    Designing the user interface with focus on anonymity and
                    ease of use
                  </li>
                  <li>Developing the frontend using React and Tailwind CSS</li>
                  <li>
                    Implementing secure authentication system with Firebase
                  </li>
                  <li>Managing team workflow and project timeline</li>
                  <li>
                    Conducting user testing and iterating based on feedback
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
                  Process
                </h2>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-inter tracking-tighter">
                      1. Research & Discovery
                    </h3>
                    <p className="text-gray-700 mb-4 font-inter tracking-tighter">
                      Started with extensive research to understand student pain
                      points. Conducted user interviews and competitive
                      analysis.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Image
                        src="/user_interviews.png"
                        alt="User Interviews"
                        width={400}
                        height={300}
                        className="rounded-2xl w-full object-cover"
                      />
                      <Image
                        src="/user_personas.png"
                        alt="User Personas"
                        width={400}
                        height={300}
                        className="rounded-2xl w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-inter tracking-tighter">
                      2. Design & Prototyping
                    </h3>
                    <p className="text-gray-700 mb-4 font-inter tracking-tighter">
                      Created multiple design iterations, focusing on a clean
                      interface that prioritized content while maintaining
                      anonymity. Conducted usability testing with 15 students.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Image
                        src="/lofi.png"
                        alt="Wireframes"
                        width={250}
                        height={400}
                        className="rounded-2xl w-full object-cover"
                      />
                      <Image
                        src="/hifi.png"
                        alt="UI Iterations"
                        width={250}
                        height={400}
                        className="rounded-2xl w-full object-cover"
                      />
                      <Image
                        src="/app.png"
                        alt="Final Prototype"
                        width={250}
                        height={400}
                        className="rounded-2xl w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-inter tracking-tighter">
                      3. Development & Launch
                    </h3>
                    <p className="text-gray-700 mb-4 font-inter tracking-tighter">
                      Led a team of 4 developers through an agile development
                      process. Launched beta version to 100 students for initial
                      feedback before campus-wide release.
                    </p>
                    <Image
                      src="/timeline.png"
                      alt="Development Timeline"
                      width={800}
                      height={250}
                      className="rounded-2xl w-full object-cover mt-4"
                    />
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
                    Creating a moderation system that respected privacy while
                    filtering inappropriate content
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
                    "The most important feature wasn't the anonymity itself, but
                    creating a sense of community where students felt safe to
                    express themselves."
                  </blockquote>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 text-blue-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    "User testing revealed that students valued simplicity over
                    complex features. We ended up removing several 'cool'
                    features that added unnecessary complexity."
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
                      10,000+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Active users
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      85%
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      User retention
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      30K+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Monthly posts
                    </p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter">
                  <p>
                    Ganesha Exhibition Programme 2025 became the go-to platform
                    for ITB students to discuss campus issues, academic
                    challenges, and share resources. The platform has been
                    recognized by the university administration as a valuable
                    feedback channel.
                  </p>
                  <p>
                    The success of this project led to requests from other
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
                      src="/gemini.png"
                      alt="Google Gemini API"
                      width={24}
                      height={24}
                    />
                    Gemini API
                  </div>
                  {/* xendit */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/xendit.png"
                      alt="Xendit"
                      width={24}
                      height={24}
                    />
                    Xendit
                  </div>
                  {/* Twitter */}
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/x.png" alt="X" width={24} height={24} />X API
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
                      Research & Planning
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      March - April 2023
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      User research, competitor analysis, planning
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Design Phase
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      May - June 2023
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Wireframing, prototyping, user testing
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Development
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      July - September 2023
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Frontend & backend implementation
                    </p>
                  </li>
                  <li className="relative">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[26px] top-1 border-4 border-white"></div>
                    <p className="font-bold font-inter tracking-tighter">
                      Launch & Iterations
                    </p>
                    <p className="text-sm text-gray-500 font-inter tracking-tighter">
                      October 2023 - Present
                    </p>
                    <p className="text-sm text-gray-600 mt-1 font-inter tracking-tighter">
                      Beta launch, feedback collection, updates
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
