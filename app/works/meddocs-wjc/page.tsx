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
                  src="/meddocs-wjc-slug.webp"
                  alt="DraftAnakITB App Showcase"
                  width={3600}
                  height={1530}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    Meddocs West Java Chapter
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    All-in-one operational platform for motorcycle communities
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
                    Motorcycle communities often struggle with managing their
                    operational workflows efficiently. In the case of Meddocs
                    West Java Chapter, organizing events, handling membership
                    data, processing payments, and disseminating information
                    were all done manually leading to inefficiencies,
                    miscommunication, and a lack of centralized access to
                    important data.
                  </div>
                  <div>
                    This project aimed to develop a custom platform that
                    automated their end-to-end operations from event
                    registration and payment, to centralized information sharing
                    and member documentation.
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
                  <RoleTag>Full Stack Developer</RoleTag>
                  <RoleTag>Project Manager</RoleTag>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-inter tracking-tighter">
                  I led both the development and coordination of this project.
                  My responsibilities included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>Defining system architecture and user workflows</li>
                  <li>
                    Designing and developing the full-stack web platform using
                    React and Next.js
                  </li>
                  <li>
                    Integrating payment gateway using Midtrans for seamless
                    transactions
                  </li>
                  <li>
                    Building a cloud-based media system for event documentation
                    using Cloudinary
                  </li>
                  <li>
                    Managing database and backend structure using MongoDB and
                    Prisma
                  </li>
                  <li>
                    Implementing authentication and verification tools through
                    WhatsApp using Twilio.
                  </li>
                  <li>
                    Leading sprint planning, team coordination, and stakeholder
                    communication
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
                        src="/meddocs-wjc-slug2.webp"
                        alt="User Interviews"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                      <Image
                        src="/meddocs-wjc-slug3.webp"
                        alt="User Personas"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                      <Image
                        src="/meddocs-wjc-slug4.webp"
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
                    Automating workflows that were previously done entirely
                    offline, without overwhelming users who are not tech-savvy
                  </li>
                  <li>
                    Integrating third-party services (Midtrans, Twilio,
                    Cloudinary) with reliability and scalability in mind
                  </li>
                  <li>
                    Designing a platform architecture that could handle
                    real-time operational updates while remaining maintainable
                    by a small dev team
                  </li>
                </ul>
                <h3 className="font-bold text-lg mb-3 font-inter tracking-tighter">
                  Lessons Learned
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-red-50 border-l-4 border-red-300 text-red-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    "Building for communities requires deep empathy; we learned
                    to strike a balance between automation and simplicity so
                    users don’t feel alienated by the technology."
                  </blockquote>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 text-blue-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    "Collaboration with non-technical stakeholders improved
                    significantly when we built visual prototypes early in the
                    process to align expectations."
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
                      100+
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Members joined in first month
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      100%
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Event workflows online, hours saved
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-pink-600 font-inter tracking-tighter">
                      {">80%"}
                    </p>
                    <p className="text-gray-600 mt-2 font-inter tracking-tighter">
                      Adoption by non-technical members
                    </p>
                  </div>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter">
                  <p>
                    Centralized platform is now used to store member data,
                    announce events, handle payments, and share media from past
                    activities
                  </p>
                  <p>
                    The success of this project led to interest from other
                    regional chapters to implement a similar system, opening
                    possibilities for a scalable multi-chapter platform in the
                    future.
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
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="prisma" className="w-6 h-6" />
                    Prisma
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="cloudinary" className="w-6 h-6" />
                    Cloudinary
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/midtrans.webp"
                      alt="Midtrans"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    Midtrans
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image
                      src="/twilio.svg"
                      alt="Twilio"
                      width={24}
                      height={24}
                    />
                    Twilio
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
                    href="https://github.com/pablonification/project-wjc/"
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
                    href="https://meddocswjc.com/"
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
