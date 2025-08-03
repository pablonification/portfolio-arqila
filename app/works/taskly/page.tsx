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
                  src="/taskly-slug.webp"
                  alt="DraftAnakITB App Showcase"
                  width={3600}
                  height={1530}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    Taskly
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    A minimalist productivity app for managing recurring tasks,
                    tracking habits, and storing quick ideas.
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
                    Many users struggle with managing daily tasks, especially
                    those that recur over time such as car washes, grocery
                    shopping, or regular cleaning. Most existing productivity
                    apps are either too bloated or lack focus.
                  </div>
                  <div>
                    Taskly solves this by offering a simple, intuitive mobile
                    app that helps users create basic to-do list, set up
                    recurring tasks with time-based reminders and completion
                    logs, and save quick notes or ideas in a dedicated section.
                    All data is stored locally and presented in a clean,
                    distraction-free UI for optimal usability.
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
                  <RoleTag>Mobile App Developer</RoleTag>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-inter tracking-tighter">
                  I was fully responsible for the app’s design and development,
                  from ideation to deployment. Key tasks included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>
                    Creating a cross-platform mobile app using React Native and
                    Expo
                  </li>
                  <li>
                    Implementing local state and persistent storage for tasks,
                    notes, and history
                  </li>
                  <li>
                    Designing and building components like checkbox lists,
                    countdown timer, and history logging
                  </li>
                  <li>
                    Ensuring responsive layouts and smooth transitions across
                    iOS and Android
                  </li>
                  <li>Conducting real-user tests to refine UX simplicity</li>
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
                        src="/taskly-slug2.webp"
                        alt="User Interviews"
                        width={3600}
                        height={1530}
                        className="rounded-2xl w-full object-cover relative z-20"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="w-full flex justify-center">
                        <video
                          src="/taskly-vid1.mp4"
                          controls
                          className="rounded-2xl w-full max-w-[360px] aspect-[9/16] h-auto bg-black"
                          style={{ aspectRatio: "9/16" }}
                        />
                      </div>
                      <div className="w-full flex justify-center">
                        <video
                          src="/taskly-vid2.mp4"
                          controls
                          className="rounded-2xl w-full max-w-[360px] aspect-[9/16] h-auto bg-black"
                          style={{ aspectRatio: "9/16" }}
                        />
                      </div>
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
                    Implementing accurate and efficient countdown timers without
                    relying on backend
                  </li>
                  <li>
                    Maintaining clean and modular code despite a fully local
                    architecture
                  </li>
                </ul>
                <h3 className="font-bold text-lg mb-3 font-inter tracking-tighter">
                  Lessons Learned
                </h3>
                <div className="space-y-4">
                  <blockquote className="bg-red-50 border-l-4 border-red-300 text-red-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    Simplicity is not about having fewer features, but about
                    solving a real need with minimal friction.
                  </blockquote>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 text-blue-800 p-4 rounded-r-lg font-inter tracking-tighter">
                    Learned how to better structure React Native code for
                    reusability and scalability in small apps
                  </blockquote>
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
                    React Native
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <StackIcon name="js" className="w-6 h-6" />
                    JavaScript
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/expo.webp" alt="Expo" width={24} height={24} />
                    Expo
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
                    href="https://github.com/pablonification/taskly-practice"
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
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
