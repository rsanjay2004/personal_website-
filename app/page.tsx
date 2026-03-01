// app/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  GraduationCap,
  ExternalLink,
  Code2,
  Sparkles,
  ChevronDown,
  Terminal,
} from "lucide-react";

// ---------------- NAV ITEMS ----------------

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ---------------- NAVBAR ----------------

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // 1) Decide initial theme (localStorage or system preference)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setDarkMode(true);
    } else if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // 2) Apply theme to <html> and persist
  useEffect(() => {
    if (darkMode === null) return;

    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 3) Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid flicker while darkMode is still null
  if (darkMode === null) return null;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-6 py-3 backdrop-blur-xl transition-all duration-300
            bg-white/70 border-slate-300/40 shadow-lg
            dark:bg-slate-950/80 dark:border-slate-700/40`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal
              className="text-indigo-500 dark:text-indigo-400"
              size={24}
            />
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              RSANJAY
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-700 transition hover:bg-indigo-500/20 hover:text-indigo-500 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------------- HERO SECTION ----------------

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* animated radial gradient following cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">
              <Sparkles className="text-indigo-400" size={16} />
              <span className="text-sm text-indigo-300">
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Building the{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              through Coding
            </h1>

            <p className="max-w-xl text-lg text-slate-300">
              Hey there! I&apos;m{" "}
              <span className="font-semibold text-white">
                Rajkumar Sanjay
              </span>
              , a Y1 Computer Engineering student who loves turning complex
              problems into elegant solutions through software, hardware, and
              AI/ML.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-400" />
                Y1 @ NUS
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-indigo-400" />
                Singapore
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-xl hover:shadow-indigo-500/40"
              >
                <span className="relative z-10">View My Work</span>
                <ChevronDown
                  className="relative z-10 ml-1 inline-block animate-bounce"
                  size={16}
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-slate-700 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-indigo-500 hover:bg-slate-800/50"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-slate-300 backdrop-blur-sm transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-slate-300 backdrop-blur-sm transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rsanjay2004@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-slate-300 backdrop-blur-sm transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - photo + stat bubbles */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="animate-pulse absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl" />

              <div className="relative h-80 w-80 rounded-full border-4 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl lg:h-96 lg:w-96">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/Resources/me.jpg"
                    alt="Rajkumar Sanjay"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="animate-float absolute -right-4 top-16 rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400">Lines of Code</p>
                <p className="text-2xl font-bold text-white">2K+</p>
              </div>

              <div className="animate-float-delayed absolute -left-4 bottom-20 rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs text-slate-400">Projects Built</p>
                <p className="text-2xl font-bold text-white">5+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-500" size={32} />
      </div>
    </section>
  );
}

// ---------------- ABOUT SECTION ----------------

function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-800/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              About Me
            </div>

            <h2 className="text-4xl font-bold text-white">
              Passion Meets{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                I&apos;m currently pursuing Computer Engineering at the National
                University of Singapore, where I&apos;m constantly exploring the
                my interests in software and hardware.
              </p>

              <p>
                My journey in tech started with robotics competitions, and has
                evolved into a passion for building web development,
                embedded systems, and experimenting with AI/ML technologies.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me tinkering with
                Arduino projects or exploring new food trends.
              </p>
            </div>

            <a
              href="/Resources/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-purple-500 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-purple-500/20"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="group relative h-48 overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src="Resources/auv2.JPG"
                  alt="Robotics Project"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="group relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src="Resources/work.jpg"
                  alt="Workspace"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="group relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src="Resources/auv4.png"
                  alt="PCB Designing"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="group relative h-48 overflow-hidden rounded-2xl border border-slate-800">
                <Image
                  src="Resources/food1.png"
                  alt="Food"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- SKILLS SECTION ----------------

const skills = [
  {
    name: "C++",
    level: 75,
    category: "Languages",
    icon: "c.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "Languages",
    icon: "typescript.svg",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Python",
    level: 85,
    category: "Languages",
    icon: "python.svg",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "React & Next.js",
    level: 75,
    category: "Frameworks",
    icon: "react.svg",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frameworks",
    icon: "tailwindcss.svg",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Git & GitHub",
    level: 75,
    category: "Tools",
    icon: "git.svg",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Arduino & Embedded",
    level: 90,
    category: "Hardware",
    icon: "arudino.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Altium Designer",
    level: 80,
    category: "PCB Designing",
    icon: "alitum.png",
    color: "from-indigo-500 to-purple-500",
  },
];

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative border-t border-slate-800/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Technical Skills
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            A comprehensive toolkit built through hands-on projects and
            continuous learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="mb-4 flex items-start justify-between">
                <Image
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
                  {skill.category}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {skill.name}
              </h3>

              <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                  style={{
                    width:
                      hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                />
              </div>

              <p className="text-sm text-slate-400">
                Proficiency: {skill.level}%
              </p>

              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition group-hover:opacity-5`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- PROJECTS SECTION ----------------

const projects = [
  {
    title: "AUV Control System",
    description:
      "Advanced embedded control system for autonomous underwater vehicle with CAN bus communication, sensor fusion, and real-time navigation.",
    image: "/Resources/auv.jpg",
    tags: ["Embedded C", "CAN Bus", "Thrusters", "Real-time OS"],
    github: "https://github.com/rsanjay2004/hornet",
    demo: "/Resources/auv.jpg",
    category: "Embedded Systems",
    featured: true,
  },
  // {
    // title: "AI Study Companion",
    // description:
    //   "Full-stack web application using NLP to generate summaries and practice questions from study notes, with spaced repetition algorithm.",
    // image: "/images/projects/ai-study.jpg",
    // tags: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    // github: "https://github.com/rsanjay2004/ai-study",
    // demo: "https://ai-study-demo.vercel.app",
    // category: "AI/ML",
    // featured: true,
  // },
  {
    title: "mBot Maze Navigator",
    description:
      "Autonomous maze-solving robot using ultrasonic sensors and path optimization algorithms for efficient navigation.",
    image: "/Resources/mbot.png",
    tags: ["C++", "Arduino", "Algorithms", "Robotics"],
    github: "https://github.com/rsanjay2004/cg1111a_mbot_code",
    demo: "/Resources/mbot.png",
    category: "Robotics",
    featured: true,
  },
  // {
  //   // title: "Real-Time Weather Dashboard",
  //   // description:
  //   //   "Interactive weather visualization dashboard with real-time data from multiple APIs and predictive analytics.",
  //   // image: "/images/projects/weather.jpg",
  //   // tags: ["React", "D3.js", "Weather API", "Tailwind"],
  //   // github: "https://github.com/rsanjay2004/weather-dash",
  //   // demo: "https://weather-dash-demo.vercel.app",
  //   // category: "Web Development",
  //   // featured: false,
  // },
];

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative border-t border-slate-800/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Portfolio
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            A selection of projects showcasing my skills across different
            domains.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "border border-slate-700 bg-slate-900/50 text-slate-300 hover:border-indigo-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 transition hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {project.featured && (
                  <div className="absolute right-4 top-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300 backdrop-blur-sm">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white transition group-hover:text-indigo-400">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-indigo-500 hover:bg-slate-800/50"
                    >
                      <Code2 size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:shadow-xl"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CONTACT SECTION ----------------

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace this with your actual submission logic (email service, API, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-slate-800/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Have a project in mind or just want to chat? I&apos;m always open
            to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
              <a
                href="mailto:rsanjay2004@gmail.com"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                rsanjay2004@gmail.com
              </a>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                Connect with me
              </a>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-800">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">GitHub</h3>
              <a
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                Check out my code
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-xl hover:shadow-indigo-500/40"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ---------------- FOOTER ----------------

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="text-indigo-400" size={28} />
              <span className="text-2xl font-bold text-white">
                Rajkumar Sanjay
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-400">
              Computer Engineering Student passionate about building innovative
              solutions through code.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rsanjay2004@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition hover:bg-indigo-500/20 hover:text-indigo-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-indigo-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-400" />
                Singapore
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-400" />
                <a
                  href="mailto:rsanjay2004@gmail.com"
                  className="transition hover:text-indigo-400"
                >
                  rsanjay2004@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={16} className="text-indigo-400" />
                NUS Computer Engineering
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Rajkumar Sanjay. Crafted with ❤️ and
            lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------------- PAGE ----------------

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}