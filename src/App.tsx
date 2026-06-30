import { useState, useEffect } from 'react';
import {
  Brain,
  Code2,
  Lightbulb,
  Rocket,
  GraduationCap,
  Briefcase,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  ArrowRight,
  Send,
  Download,
  Moon,
  Sun,
  ChevronUp,
  Sparkles,
  FileSearch,
  Upload,
  BarChart3,
} from 'lucide-react';
import DocumentsSection from './components/DocumentsSection';
import { resume, fileNameFromPath } from './data/documents';
import { skills } from './data/skills';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#documents' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const heroRoles = [
  {
    icon: Brain,
    title: 'AI & ML',
    desc: 'Building intelligent systems with machine learning',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Web Developer',
    desc: 'Crafting modern, responsive web applications',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    desc: 'Turning complex challenges into elegant solutions',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Rocket,
    title: 'Future AI Architect',
    desc: 'Designing the next generation of AI systems',
    color: 'from-indigo-500 to-purple-500',
  },
];

const aboutTags = [
  'Solving Real-World Problems',
  'Deploying Scalable Systems',
  'Ethical AI Development',
  'Continuous Learning',
  'Team Collaboration',
];

const experiences = [
  { title: 'IntelliaArena 2026', date: '2026', role: 'Hackathon', icon: Trophy },
  { title: 'Kriyeta Hackathon', date: '2025', role: 'Participant', icon: Trophy },
  { title: 'Prayatna Hackathon', date: '2025', role: 'Participant', icon: Trophy },
  { title: 'Google Gemini AI Workshop', date: '2025', role: 'Attendee', icon: Brain },
];

const talentScreenFeatures = [
  { icon: FileSearch, label: 'PDF Parsing' },
  { icon: Sparkles, label: 'Skill Extraction' },
  { icon: Brain, label: 'AI Scoring' },
  { icon: Code2, label: 'Python Backend' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`min-h-screen starfield ${darkMode ? 'bg-navy-950' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <span className="font-script text-2xl gradient-text font-bold">RC</span>
              <span className="text-sm font-semibold text-white hidden sm:block">Renuka Choudhary</span>
            </a>

            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Moon className="w-4 h-4 text-neon-purple" /> : <Sun className="w-4 h-4 text-yellow-500" />}
              </button>
              <a
                href={resume.file}
                download={fileNameFromPath(resume.file)}
                className="btn-gradient flex items-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center min-h-[calc(100vh-6rem)]">
          {/* Left */}
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-gray-400 text-lg">
              Hi, I&apos;m <span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white">Renuka </span>
              <span className="gradient-text">Choudhary</span>
            </h1>
            <p className="text-neon-cyan font-medium text-sm sm:text-base">
              CSE (AI & ML) Student | Web Developer | AI Enthusiast
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Passionate about solving real-world problems through technology. I combine my expertise in
              AI/ML and web development to build innovative solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-gradient flex items-center gap-2 text-sm">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2 text-sm">
                <Send className="w-4 h-4" /> Contact Me
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-neon-purple/40 hover:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Center - Profile Photo - FIXED */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="profile-ring relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-navy-950 shadow-2xl">
                <img
                  src="/Renuka professional photo.jpeg"
                  alt="Renuka Choudhary - Professional Portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Right - Role Cards */}
          <div className="order-3 space-y-3">
            {heroRoles.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="glass-card p-4 flex items-start gap-3 hover:border-neon-purple/20 transition-all duration-300 hover:shadow-glow group"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${color} shrink-0`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-neon-purple transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Education + Experience Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* About */}
          <div id="about" className="glass-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full" />
              About Me
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              I&apos;m a Computer Science student specializing in AI & ML at Acropolis Institute of Technology.
              I love building web applications and exploring the frontiers of artificial intelligence to create
              meaningful impact in people&apos;s lives.
            </p>
            <div className="flex flex-wrap gap-2">
              {aboutTags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education" className="glass-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-neon-blue" />
              Education
            </h2>
            <div className="space-y-3">
              <div className="glass-card p-4 border-neon-blue/20">
                <h3 className="font-semibold text-white text-sm">B.Tech in Computer Science (AI & ML)</h3>
                <p className="text-xs text-gray-400 mt-1">Acropolis Institute of Technology</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">2024 - 2028</span>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    CGPA: 7.39
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div id="experience" className="glass-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-neon-purple" />
              Experience & Achievements
            </h2>
            <div className="space-y-3">
              {experiences.map(({ title, date, role, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon-purple/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-neon-purple/10">
                      <Icon className="w-4 h-4 text-neon-purple" />
                    </div>
                    <span className="text-sm text-gray-300">{title}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">{date}</span>
                    <span className="text-xs text-neon-cyan">{role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-neon-cyan" />
            My Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map(({ name, icon }) => (
              <div key={name} className="skill-pill">
                <img src={icon} alt={name} className="w-8 h-8 object-contain" loading="lazy" />
                <span className="text-xs text-gray-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="glass-card p-6 lg:p-8">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-neon-pink" />
            Projects
          </h2>

          <div className="glass-card p-6 lg:p-8 border-neon-purple/20 shadow-glow">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                Currently Working On
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">TalentScreen AI</h3>
                    <p className="text-sm text-neon-blue">AI-Based Resume Screening Tool</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A Python-powered HR platform that automates resume screening for recruiters. HR teams
                  define job requirements, upload candidate resumes, and the system parses PDFs, extracts
                  skills, and ranks applicants using AI scoring — cutting manual review time significantly.
                </p>
                <div className="flex flex-wrap gap-2">
                  {talentScreenFeatures.map(({ icon: Icon, label }) => (
                    <span key={label} className="tag-pill flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-neon-purple" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-neon-blue" /> Upload Resumes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-neon-purple" /> Smart Rankings
                  </span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-card hover:border-neon-purple/30 transition-all">
                  <img
                    src="/projects/talentscreen-login.png"
                    alt="TalentScreen AI login portal"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-card hover:border-neon-purple/30 transition-all">
                  <img
                    src="/projects/talentscreen-dashboard.png"
                    alt="TalentScreen AI job creation dashboard"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume & Certificates - FULLY VISIBLE */}
      <DocumentsSection />

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="glass-card p-6 lg:p-8">
          <h2 className="text-xl font-bold text-white mb-8 text-center">Let&apos;s Connect!</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'renuswa25@gmail.com', href: 'mailto:renuswa25@gmail.com' },
                { icon: Phone, label: '8602021075', href: 'tel:8602021075' },
                { icon: MapPin, label: 'Indore, Madhya Pradesh, India', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-neon-cyan transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors">
                    <Icon className="w-4 h-4 text-neon-purple" />
                  </div>
                  {label}
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
                { icon: Github, href: 'https://github.com', color: 'hover:text-white' },
                { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-gray-400 ${color} transition-all hover:shadow-glow hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center border border-neon-purple/20 shadow-glow">
                  <Mail className="w-16 h-16 text-neon-purple/60" />
                </div>
                <Send className="absolute -top-4 -right-4 w-10 h-10 text-neon-cyan animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-script text-2xl gradient-text">Renuka Choudhary</span>
          <p className="text-xs text-gray-500">&copy; 2025 Renuka Choudhary. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="text-xs text-gray-400 hover:text-neon-purple transition-colors flex items-center gap-1"
          >
            Back to Top <ChevronUp className="w-3 h-3" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
