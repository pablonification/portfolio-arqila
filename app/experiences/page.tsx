"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    year: "2024",
    organization: "TechCorp Indonesia",
    logo: "/placeholder.svg?height=60&width=60&text=TC",
    role: "Senior Frontend Developer",
    period: "Jan 2024 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Leading the development of scalable web applications using modern React ecosystem. Mentoring junior developers and establishing best practices for code quality and performance optimization.",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented design system used across 3 products",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
      "Node.js",
    ],
  },
  {
    id: 2,
    year: "2023",
    organization: "Digital Innovation Lab",
    logo: "/placeholder.svg?height=60&width=60&text=DIL",
    role: "Full Stack Developer",
    period: "Mar 2023 - Dec 2023",
    location: "Bandung, Indonesia",
    description:
      "Developed innovative digital solutions for startups and SMEs. Focused on creating user-centric applications with emphasis on accessibility and performance.",
    achievements: [
      "Built 8+ production applications",
      "Reduced development time by 30%",
      "Implemented CI/CD pipelines",
    ],
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 3,
    year: "2022",
    organization: "Institut Teknologi Bandung",
    logo: "/placeholder.svg?height=60&width=60&text=ITB",
    role: "Research Assistant",
    period: "Aug 2022 - Feb 2023",
    location: "Bandung, Indonesia",
    description:
      "Conducted research on human-computer interaction and developed prototypes for educational technology. Collaborated with professors and graduate students on multiple research projects.",
    achievements: [
      "Published 2 research papers",
      "Developed 3 educational prototypes",
      "Presented at 2 international conferences",
    ],
    technologies: [
      "JavaScript",
      "D3.js",
      "Python",
      "TensorFlow",
      "Figma",
      "Unity",
    ],
  },
  {
    id: 4,
    year: "2022",
    organization: "StartupHub Accelerator",
    logo: "/placeholder.svg?height=60&width=60&text=SHA",
    role: "Frontend Developer Intern",
    period: "Jun 2022 - Jul 2022",
    location: "Jakarta, Indonesia",
    description:
      "Contributed to the development of a fintech application serving over 10,000 users. Gained experience in agile development methodologies and collaborative coding practices.",
    achievements: [
      "Implemented 15+ UI components",
      "Fixed 50+ bugs and issues",
      "Improved mobile responsiveness",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest", "Git"],
  },
];

const techColors: { [key: string]: string } = {
  React: "bg-blue-100 text-blue-700",
  TypeScript: "bg-blue-100 text-blue-800",
  "Next.js": "bg-gray-100 text-gray-800",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700",
  GraphQL: "bg-pink-100 text-pink-700",
  "Node.js": "bg-green-100 text-green-700",
  "Vue.js": "bg-green-100 text-green-800",
  Python: "bg-yellow-100 text-yellow-800",
  Django: "bg-green-100 text-green-800",
  PostgreSQL: "bg-blue-100 text-blue-800",
  Docker: "bg-blue-100 text-blue-700",
  AWS: "bg-orange-100 text-orange-700",
  JavaScript: "bg-yellow-100 text-yellow-700",
  "D3.js": "bg-orange-100 text-orange-700",
  TensorFlow: "bg-orange-100 text-orange-800",
  Figma: "bg-purple-100 text-purple-700",
  Unity: "bg-gray-100 text-gray-800",
  SCSS: "bg-pink-100 text-pink-700",
  Redux: "bg-purple-100 text-purple-700",
  Jest: "bg-red-100 text-red-700",
  Git: "bg-orange-100 text-orange-700",
};

export default function ExperiencePage() {
  const [activeYear, setActiveYear] = useState("2024");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const years = [...new Set(experiences.map((exp) => exp.year))].sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a)
  );

  return (
    <div className="min-h-screen relative overflow-hidden font-inter tracking-tighter">
      {/* Year Navigation Sidebar */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
          {/* 3D Inner Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-200/30 rounded-2xl pointer-events-none"></div>
          {/* Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl"></div>
          <div className="flex flex-col gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-inter tracking-tighter relative overflow-hidden ${
                  activeYear === year
                    ? "bg-black text-white shadow-[0_6px_12px_-3px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.2)]"
                    : "text-gray-600 hover:bg-gray-100 hover:shadow-[0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-16 max-w-4xl font-inter tracking-tighter">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-9xl font-bold text-gray-900 mb-6 tracking-tighter font-rubik">
            Experience
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium font-inter tracking-tighter">
            Bringing ideas to life through technology. I've worked across
            different roles, from leading event tech operations to developing
            platforms that enhance user experiences. Whether it's building
            scalable systems, optimizing performance, or crafting seamless UI, I
            love turning challenges into functional solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative font-inter tracking-tighter">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } font-inter tracking-tighter`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-white border-4 border-pink-300 rounded-full shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)] z-10 relative overflow-hidden">
                  {/* Dot inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-pink-200/30 rounded-full"></div>
                  {/* Dot top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-full"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-1/2 md:pr-8" : "md:pl-1/2 md:pl-8"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.15),0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.2),0_25px_50px_-12px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-4 border border-gray-200/50 font-inter tracking-tighter relative overflow-hidden group">
                    {/* 3D Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-3xl pointer-events-none"></div>
                    {/* Top Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
                    {/* Bottom Shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] flex-shrink-0 border border-gray-200/50 relative overflow-hidden group-hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300">
                        {/* Logo container inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-200/30 rounded-2xl pointer-events-none"></div>
                        {/* Logo top highlight */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl"></div>
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.organization} logo`}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 font-inter tracking-tighter">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 mb-2 font-inter tracking-tighter">
                          {exp.organization}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-inter tracking-tighter">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed font-inter tracking-tighter">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 font-inter tracking-tighter">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 font-inter tracking-tighter"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_3px_6px_-1px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] relative">
                              {/* Bullet inner glow */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/40 rounded-full"></div>
                              {/* Bullet top highlight */}
                              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full"></div>
                            </div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-inter tracking-tighter">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium font-inter tracking-tighter shadow-[0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_-3px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-1 relative overflow-hidden ${
                              techColors[tech] || "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {/* Tech badge inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-200/30 rounded-full pointer-events-none"></div>
                            {/* Tech badge top highlight */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-full"></div>
                            <span className="relative z-10">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.15),0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] max-w-2xl mx-auto font-inter tracking-tighter border border-gray-200/50 relative overflow-hidden">
            {/* 3D Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-3xl pointer-events-none"></div>
            {/* Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
            {/* Bottom Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter tracking-tighter">
              Let's Work Together
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed font-inter tracking-tighter">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you have an idea to bring to life or
              need help with an existing project, let's connect and create
              something amazing together.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-inter tracking-tighter shadow-[0_6px_12px_-3px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden group">
              {/* Button inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 rounded-full pointer-events-none"></div>
              {/* Button top highlight */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-full"></div>
              <span className="relative z-10 flex items-center">
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
    </div>
  );
}
