// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Rocket,
  Satellite,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  Sun,
  Terminal,
  Trophy,
  Waves,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/55 px-6 py-3 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition-all duration-300">
          <a href="#hero" className="flex items-center gap-2">
            <Terminal
              className="text-indigo-500 dark:text-indigo-500"
              size={24}
            />
            <span className="text-lg font-bold text-slate-900 dark:text-slate-950">
              RSANJAY
            </span>
          </a>

          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-700 dark:hover:text-slate-950"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-700 transition hover:bg-indigo-500/20 hover:text-indigo-500 dark:bg-white/70 dark:text-slate-700 dark:hover:text-indigo-500"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

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
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-white/45 px-4 py-2 shadow-sm backdrop-blur-xl">
              <Sparkles className="text-indigo-500" size={16} />
              <span className="text-sm text-indigo-700">
                Computer Engineering at NUS
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-slate-950 md:text-6xl lg:text-7xl">
              Building across{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                software, AI and hardware
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-700">
              I&apos;m{" "}
              <span className="font-semibold text-slate-950">
                Rajkumar Sanjay
              </span>
              , a Computer Engineering student at NUS pursuing a second major
              in Innovation & Design. My work spans full-stack products,
              AI-assisted applications, embedded systems, robotics and
              automation.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-500" />
                NUS Computer Engineering
              </span>
              <span className="flex items-center gap-2">
                <Layers size={18} className="text-indigo-500" />
                Innovation & Design
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-indigo-500" />
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
                href="/Resources/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:border-indigo-500 hover:bg-white/70"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                aria-label="GitHub"
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/60 bg-white/55 text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Github size={20} />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/60 bg-white/55 text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                aria-label="Email"
                href="mailto:rsanjay2004@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/60 bg-white/55 text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:scale-110 hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl" />

              <div className="relative h-80 w-80 rounded-full border-4 border-white/60 bg-gradient-to-br from-white/80 to-indigo-100/60 p-2 shadow-2xl lg:h-96 lg:w-96">
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

              <div className="animate-float absolute -right-4 top-16 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs text-slate-600">Recent focus</p>
                <p className="text-2xl font-bold text-slate-950">AI + Systems</p>
              </div>

              <div className="animate-float-delayed absolute -left-4 bottom-20 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs text-slate-600">Projects</p>
                <p className="text-2xl font-bold text-slate-950">10+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-500" size={32} />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-700">
              About Me
            </div>

            <h2 className="text-4xl font-bold text-slate-950">
              Product thinking meets{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                engineering depth
              </span>
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                I like projects where software has to understand the physical
                world: robots, vessels, greenhouses, learning workflows and
                creator platforms all ask for a mix of code, systems thinking
                and user empathy.
              </p>

              <p>
                Since February 2026, I&apos;ve been building and researching
                across AI-assisted web applications, automation, computer
                vision, recommender-system workflows and experimental
                materials.
              </p>

              <p>
                I care about making prototypes honest: clear about what works,
                clear about what is still being tested and useful enough for
                the next engineering decision.
              </p>
            </div>

            <a
              href="/Resources/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-purple-500 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-slate-950 backdrop-blur-sm transition hover:bg-purple-500/20"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="group relative h-48 overflow-hidden rounded-2xl border border-white/60">
                <Image
                  src="/Resources/auv2.JPG"
                  alt="Autonomous underwater vehicle work"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/60">
                <Image
                  src="/Resources/work.JPG"
                  alt="Engineering workspace"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/60">
                <Image
                  src="/Resources/auv4.png"
                  alt="Hardware and PCB work"
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>
              <div className="group relative h-48 overflow-hidden rounded-2xl border border-white/60">
                <Image
                  src="/Resources/food1.png"
                  alt="Personal interests and food exploration"
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

const skills = [
  {
    name: "TypeScript",
    level: 82,
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
    name: "C/C++",
    level: 78,
    category: "Languages",
    icon: "c.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "React & Next.js",
    level: 82,
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
    level: 78,
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
    category: "PCB Design",
    icon: "alitum.png",
    color: "from-indigo-500 to-purple-500",
  },
];

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative border-t border-white/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-700">
            Technical Skills
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            A toolkit shaped by full-stack development, AI prototypes,
            embedded systems and hands-on engineering projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="mb-4 flex items-start justify-between">
                <Image
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="rounded-full bg-white/70 px-2 py-1 text-xs text-slate-600">
                  {skill.category}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                {skill.name}
              </h3>

              <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/70">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                  style={{
                    width:
                      hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                />
              </div>

              <p className="text-sm text-slate-600">
                Working confidence: {skill.level}%
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

type Project = {
  title: string;
  category: string;
  summary: string;
  role: string;
  status: string;
  technicalFocus: string[];
  contribution: string[];
  outcome?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  icon: typeof BrainCircuit;
  tags: string[];
  links?: { label: string; href: string; kind: "code" | "demo" | "asset" }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "LocalLens",
    category: "AI / Web Development / Hackathon",
    summary:
      "Creator-specific trend intelligence prototype for finding social-media opportunities that fit a creator's niche and audience.",
    role: "Team contributor / developer",
    status: "Projet: Hack & Hire 2026 winner; interview opportunity earned",
    technicalFocus: [
      "AI-assisted prompt analysis",
      "Creator-profile matching",
      "Cached social-platform trend evidence",
    ],
    contribution: [
      "Co-developed the challenge prototype and helped turn the creator-focused problem into a working product concept.",
      "Worked with Supabase-backed trend data, OpenAI-assisted analysis and recommendation logic.",
      "Kept trend suggestions grounded in evidence rather than presenting generated ideas as verified trends.",
    ],
    outcome:
      "Challenge-winning prototype for the Influencees Product & AI Challenge.",
    image: "/Resources/projects/locallens.jpeg",
    imageAlt: "LocalLens trend recommendation interface showing a campus budget meal ranking suggestion",
    icon: Trophy,
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "OpenAI"],
    links: [
      {
        label: "Code",
        href: "https://github.com/rsanjay2004/Influencees_LocalLens",
        kind: "code",
      },
    ],
    featured: true,
  },
  {
    title: "Planora",
    category: "Full-Stack Development / AI / Productivity",
    summary:
      "AI study workspace that brings course materials, active recall, planning, focus sessions and group collaboration into one workflow.",
    role: "Co-developer",
    status: "NUS Orbital, Artemis Track",
    technicalFocus: [
      "Document-grounded AI assistance",
      "Task and calendar workflows",
      "Collaborative study spaces",
    ],
    contribution: [
      "Worked across the full stack, including backend integration and user-facing study workflows.",
      "Connected course-material ingestion, planning tools, flashcards, focus mode and collaboration surfaces.",
      "Contributed to user testing and iterative improvements across the application.",
    ],
    outcome:
      "Current repository documents shipped dashboard, tasks, calendar, knowledge base, AI assistant, flashcards, focus mode, groups and Telegram bot flows.",
    image: "/Resources/projects/planora.png",
    imageAlt: "Planora project board showing study workspace features",
    icon: BrainCircuit,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Clerk",
      "Convex",
      "Gemini",
    ],
    links: [
      { label: "Live app", href: "https://planora.vercel.app", kind: "demo" },
      {
        label: "Code",
        href: "https://github.com/balasiddarthan22/Planora",
        kind: "code",
      },
    ],
    featured: true,
  },
  {
    title: "Greenhouse Automation Research",
    category: "Research / Agritech / Automation",
    summary:
      "Ongoing undergraduate research into greenhouse sensing and control systems for custom agricultural automation software.",
    role: "Undergraduate researcher",
    status: "Ongoing R&D for a 300 m2 greenhouse",
    technicalFocus: [
      "Environmental sensing",
      "Climate and irrigation control",
      "Hardware-software integration",
    ],
    contribution: [
      "Investigating Hydro-X Pro and Aqua-X Pro controller capabilities, interfaces and system architecture.",
      "Exploring communication protocols and integration options for custom software control.",
      "Connecting technical choices to practical greenhouse operation needs.",
    ],
    image: "/Resources/projects/greenhouse-hydro-x.png",
    imageAlt: "Hydro-X greenhouse environmental control system architecture diagrams",
    imagePosition: "center top",
    icon: Sprout,
    tags: ["Automation", "Sensors", "Control Systems", "Agritech"],
    featured: true,
  },
  {
    title: "Hornet XI AUV",
    category: "Embedded Systems / Robotics",
    summary:
      "Embedded control work for an autonomous underwater vehicle, building on hands-on robotics and hardware development.",
    role: "Developer",
    status: "Project work",
    technicalFocus: [
      "Embedded control",
      "Robot hardware",
      "Underwater vehicle systems",
    ],
    contribution: [
      "Worked on AUV control-system code and hardware-facing implementation details.",
      "Used existing vehicle assets and repository-backed work from the portfolio's earlier Hornet entry.",
    ],
    image: "/Resources/auv.jpg",
    imageAlt: "Autonomous underwater vehicle hardware",
    icon: Waves,
    tags: ["Embedded C", "C++", "Robotics", "AUV"],
    links: [
      {
        label: "Code",
        href: "https://github.com/rsanjay2004/hornet",
        kind: "code",
      },
    ],
    featured: true,
  },
  {
    title: "SeaCheck",
    category: "AI / Computer Vision / Web Development",
    summary:
      "Vessel-safety inspection prototype combining computer-vision assistance with a shared web-based workflow.",
    role: "Team contributor / developer",
    status: "Sup' Hackathon participation",
    technicalFocus: [
      "Computer-vision integration",
      "Authentication",
      "Shared inspection alerts",
    ],
    contribution: [
      "Integrated computer-vision functionality into the inspection workflow.",
      "Built web application features, authentication and shared-alert functionality.",
      "Framed the system as a prototype for communicating safety concerns, not a certified inspection product.",
    ],
    image: "/Resources/projects/seacheck-detection.jpeg",
    imageAlt: "SeaCheck live computer-vision detection interface showing PPE alerts",
    icon: ShieldCheck,
    tags: ["Computer Vision", "Web App", "Authentication", "Alerts"],
  },
  {
    title: "AutoScaleRec",
    category: "AI / Machine Learning / Hackathon",
    summary:
      "Hackathon exploration of automated machine-learning research workflows for recommender systems.",
    role: "Participant / developer",
    status: "TikTok TechJam 2026 participation",
    technicalFocus: [
      "Recommendation-model experimentation",
      "Automated research workflows",
      "Iteration support",
    ],
    contribution: [
      "Explored how parts of recommender-system research and experimentation could be automated.",
      "Kept the portfolio description limited to confirmed scope until framework, responsibilities and results are verified.",
    ],
    image: "/Resources/projects/autoscalerec.png",
    imageAlt: "AutoScaleRec autonomous research triage interface",
    icon: Rocket,
    tags: ["Machine Learning", "Recommender Systems", "Research Workflow"],
  },
  {
    title: "Thermally Debondable Adhesive",
    category: "Materials Innovation / Sustainability",
    summary:
      "EIC 2026 investigation into wax-EVA adhesive blends for recyclable packaging with heat-triggered separation.",
    role: "Experimental engineering contributor",
    status: "EIC 2026 project",
    technicalFocus: [
      "Adhesion testing",
      "Thermal behaviour",
      "Recyclable packaging",
    ],
    contribution: [
      "Formulated material blends and evaluated how microcrystalline wax and EVA affect adhesion and debonding.",
      "Compared the engineering trade-off between a useful service bond and heat-enabled separation during recycling.",
    ],
    image: "/Resources/projects/eic-adhesive.jpg",
    imageAlt: "Lab samples prepared for the EIC thermally debondable adhesive project",
    imagePosition: "center 58%",
    icon: FlaskConical,
    tags: ["Materials", "Sustainability", "Testing", "Packaging"],
  },
  {
    title: "Autonomous Life Buoy",
    category: "Robotics / Computer Vision / Innovation & Design",
    summary:
      "Rescue-system concept pairing camera-based drowning detection with a motorised life buoy architecture.",
    role: "Team contributor",
    status: "Concept and prototype development",
    technicalFocus: [
      "Camera-based detection",
      "Raspberry Pi ground station",
      "ESP32 buoy control",
    ],
    contribution: [
      "Worked on the rescue-system concept and its hardware-software architecture.",
      "Connected visual detection, a ground station and embedded buoy control as a proposed system design.",
    ],
    image: "/Resources/projects/seacheck.png",
    imageAlt: "Motorised life buoy prototype image labelled AEGIS",
    icon: ShieldCheck,
    tags: ["Raspberry Pi", "ESP32", "Computer Vision", "Thrusters"],
  },
  {
    title: "CubeSat Modelling and Orbital Analysis",
    category: "Aerospace / CAD / Simulation",
    summary:
      "CDE2311 academic coursework exploring CubeSat mechanical modelling and orbital analysis.",
    role: "Student contributor",
    status: "Academic coursework",
    technicalFocus: [
      "Fusion 360 CAD",
      "GMAT orbital simulation",
      "Ground-station contact analysis",
    ],
    contribution: [
      "Worked with separate CubeSat structural components and bodies in CAD.",
      "Explored orbital configuration, simulation and NUS CRISP ground-station contact analysis.",
    ],
    image: "/Resources/projects/cubesat.png",
    imageAlt: "CubeSat hardware model used for academic modelling work",
    icon: Satellite,
    tags: ["Fusion 360", "GMAT", "CAD", "Simulation"],
  },
  {
    title: "mBot Maze Navigator",
    category: "Robotics",
    summary:
      "Autonomous maze-solving robot using ultrasonic sensing and path-planning logic for navigation.",
    role: "Developer",
    status: "Robotics coursework/project",
    technicalFocus: ["Ultrasonic sensing", "Path optimisation", "Robot control"],
    contribution: [
      "Implemented robot navigation behaviour using C++ and Arduino tooling.",
      "Built on iterative testing to improve autonomous maze traversal.",
    ],
    image: "/Resources/mbot.png",
    imageAlt: "mBot maze navigation robot",
    icon: Rocket,
    tags: ["C++", "Arduino", "Algorithms", "Robotics"],
    links: [
      {
        label: "Code",
        href: "https://github.com/rsanjay2004/cg1111a_mbot_code",
        kind: "code",
      },
    ],
  },
  {
    title: "HHS Stickers",
    category: "Entrepreneurship",
    summary:
      "Custom-sticker business co-founded with friends, selling more than 200 stickers in its first semester.",
    role: "Co-founder",
    status: "Profitable student venture",
    technicalFocus: [
      "Customer requests",
      "Small-business operations",
      "Product fulfilment",
    ],
    contribution: [
      "Co-founded and operated the sticker venture with friends.",
      "Helped turn custom design requests into delivered products while managing early demand.",
    ],
    image: "/Resources/projects/hhs-stickers.png",
    imageAlt: "Custom student-card style sticker design",
    icon: Store,
    tags: ["Entrepreneurship", "Product", "Operations"],
  },
];

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        style={{ objectPosition: project.imagePosition ?? "center" }}
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/65 via-indigo-50/70 to-cyan-50/70">
      <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-700">
        <Icon size={42} />
      </div>
    </div>
  );
}

function ProjectLink({
  link,
}: {
  link: NonNullable<Project["links"]>[number];
}) {
  const Icon = link.kind === "code" ? Code2 : ExternalLink;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/55 px-4 py-2.5 text-sm font-medium text-slate-950 backdrop-blur-sm transition hover:border-indigo-500 hover:bg-white/65"
    >
      <Icon size={16} />
      {link.label}
    </a>
  );
}

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative border-t border-white/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700">
            Portfolio
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Recent Projects
          </h2>
          <p className="mx-auto max-w-3xl text-slate-600">
            A curated view of recent software, AI, research, robotics and
            innovation work, with each entry focused on what the project does
            and what I contributed.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "border border-white/70 bg-white/55 text-slate-700 hover:border-indigo-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div
                  className={`grid ${
                    project.featured ? "lg:grid-cols-[1.05fr_1fr]" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      project.featured
                        ? "aspect-[16/10] min-h-[320px] lg:aspect-auto"
                        : "aspect-[16/9] min-h-64"
                    }`}
                  >
                    <ProjectVisual project={project} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {project.featured && (
                      <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-700 backdrop-blur-sm">
                        <Trophy size={14} />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-600">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-700">
                          <Icon size={13} />
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-950 transition group-hover:text-indigo-500">
                        {project.title}
                      </h3>

                      <p className="text-sm leading-6 text-slate-700">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Role
                        </p>
                        <p className="text-sm text-slate-700">{project.role}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Technical Focus
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technicalFocus.map((focus) => (
                            <span
                              key={focus}
                              className="rounded-lg bg-white/65 px-2.5 py-1 text-xs text-slate-700"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        My Contribution
                      </p>
                      <ul className="space-y-2">
                        {project.contribution.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-6 text-slate-700"
                          >
                            <CheckCircle2
                              className="mt-0.5 shrink-0 text-emerald-400"
                              size={16}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.outcome && (
                      <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-800">
                        {project.outcome}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/65 px-3 py-1 text-xs text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.links.map((link) => (
                          <ProjectLink key={link.href} link={link} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-700">
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Useful Together
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Have a project in mind, a research direction to explore or a
            product idea to prototype? I&apos;m open to thoughtful
            collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-6">
            <div className="group rounded-2xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">Email</h3>
              <a
                href="mailto:rsanjay2004@gmail.com"
                className="text-slate-600 transition hover:text-indigo-500"
              >
                rsanjay2004@gmail.com
              </a>
            </div>

            <div className="group rounded-2xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-indigo-500"
              >
                Connect with me
              </a>
            </div>

            <div className="group rounded-2xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300">
                <Github className="text-slate-950" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-950">GitHub</h3>
              <a
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 transition hover:text-indigo-500"
              >
                Check out my code
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/60 bg-gradient-to-br from-white/75 to-white/35 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl"
          >
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/70 bg-white/55 px-4 py-3 text-slate-950 placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/70 bg-white/55 px-4 py-3 text-slate-950 placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/70 bg-white/55 px-4 py-3 text-slate-950 placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Project collaboration"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-white/70 bg-white/55 px-4 py-3 text-slate-950 placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
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

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Terminal className="text-indigo-500" size={28} />
              <span className="text-2xl font-bold text-slate-950">
                Rajkumar Sanjay
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-600">
              Computer Engineering student building thoughtful software,
              AI-assisted systems, robotics and automation prototypes.
            </p>
            <div className="flex gap-3">
              <a
                aria-label="GitHub"
                href="https://github.com/rsanjay2004"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/65 text-slate-600 transition hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Github size={18} />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rajkumar-s-5389a123b"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/65 text-slate-600 transition hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Linkedin size={18} />
              </a>
              <a
                aria-label="Email"
                href="mailto:rsanjay2004@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/65 text-slate-600 transition hover:bg-indigo-500/20 hover:text-indigo-500"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-950">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-indigo-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-950">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-500" />
                Singapore
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-500" />
                <a
                  href="mailto:rsanjay2004@gmail.com"
                  className="transition hover:text-indigo-500"
                >
                  rsanjay2004@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={16} className="text-indigo-500" />
                NUS Computer Engineering
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/60 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Rajkumar Sanjay.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-slate-950">
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
