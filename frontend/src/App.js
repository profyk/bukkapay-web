import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { 
  ArrowRight, 
  Link2, 
  Globe2, 
  Wallet, 
  Building2, 
  Users, 
  Check,
  ChevronRight,
  Shield,
  Zap,
  Menu,
  X,
  Sparkles,
  CreditCard,
  QrCode,
  Clock,
  ShieldCheck,
  Lock,
  Fingerprint,
  ShieldAlert,
  FileCheck,
  Banknote,
  PieChart,
  Code,
  MapPin,
  Globe,
  BarChart3,
  UserPlus,
  Play,
  Star,
  TrendingUp,
  BadgeCheck,
  Smartphone,
  Send,
  Receipt,
  Heart,
  Quote,
  Target,
  Rocket,
  HandCoins,
  Store,
  Laptop,
  Home as HomeIcon,
  Repeat,
  DollarSign,
  MessageCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    
    const interactiveElements = document.querySelectorAll("a, button, [data-hover]");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block"
        style={{ left: position.x - 4, top: position.y - 4 }}
      />
      <div 
        className={`cursor-outline hidden md:block ${isHovering ? 'hover' : ''}`}
        style={{ left: position.x - 20, top: position.y - 20 }}
      />
    </>
  );
};

// Scroll Progress Bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div 
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
};

// Floating Particles Component
const FloatingParticles = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            background: i % 3 === 0 ? 'rgba(168, 85, 247, 0.6)' : i % 3 === 1 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(236, 72, 153, 0.6)',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 4 + 's',
            animationDuration: 4 + Math.random() * 4 + 's'
          }}
        />
      ))}
    </div>
  );
};

// Stats Counter Component
const StatCounter = ({ end, suffix = "", prefix = "", label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-syne text-white stat-number">
        {prefix}
        {inView ? <CountUp end={end} duration={2.5} separator="," /> : "0"}
        {suffix}
      </div>
      <p className="text-white/60 mt-2 font-dm">{label}</p>
    </div>
  );
};

// Premium iPhone Mockup Component
const IPhoneMockup = ({ src, alt, className = "", animate = true }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-[3rem] blur-3xl opacity-30 scale-95" />
      
      {/* Phone Frame */}
      <div className={`relative ${animate ? 'animate-float' : ''}`}>
        {/* Outer Frame - Premium Titanium Look */}
        <div className="relative bg-gradient-to-b from-[#2a2a35] via-[#1a1a25] to-[#2a2a35] rounded-[3rem] p-[3px] shadow-2xl">
          {/* Inner Frame */}
          <div className="relative bg-[#0a0a0f] rounded-[2.8rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center">
              {/* Dynamic Island */}
              <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#1a1a25] mr-2" />
                <div className="w-2 h-2 rounded-full bg-[#2a2a35]" />
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="relative aspect-[9/19.5] overflow-hidden">
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover object-top"
              />
              
              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
          
          {/* Frame Highlights */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Side Buttons */}
          <div className="absolute left-0 top-24 w-[3px] h-8 bg-[#3a3a45] rounded-r-sm" />
          <div className="absolute left-0 top-36 w-[3px] h-12 bg-[#3a3a45] rounded-r-sm" />
          <div className="absolute left-0 top-52 w-[3px] h-12 bg-[#3a3a45] rounded-r-sm" />
          <div className="absolute right-0 top-32 w-[3px] h-16 bg-[#3a3a45] rounded-l-sm" />
        </div>
        
        {/* Bottom Reflection */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-gradient-to-b from-violet-500/20 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

// Dual Phone Display Component
const DualPhoneDisplay = ({ leftSrc, rightSrc, leftAlt, rightAlt }) => {
  return (
    <div className="relative flex items-center justify-center gap-4 md:gap-8">
      {/* Left Phone - Tilted */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
        style={{ perspective: '1000px' }}
      >
        <div style={{ transform: 'rotateY(5deg)' }}>
          <IPhoneMockup src={leftSrc} alt={leftAlt} className="w-48 md:w-56" animate={false} />
        </div>
      </motion.div>
      
      {/* Right Phone - Front */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20"
      >
        <IPhoneMockup src={rightSrc} alt={rightAlt} className="w-56 md:w-64" />
      </motion.div>
    </div>
  );
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = ["Features", "Payment Links", "How It Works", "Security", "Business", "Pricing", "FAQ"];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "backdrop-blur-2xl bg-[#0a0a0f]/80 border-b border-white/5" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group" data-testid="logo-link" data-hover>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/assets/logo.png" 
                alt="BukkaPay" 
                className="relative h-10 w-10 rounded-xl object-cover" 
              />
            </div>
            <span className="text-2xl font-bold text-white font-syne">BukkaPay</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium font-dm"
                data-testid={`nav-${link.toLowerCase().replace(/\s+/g, "-")}`}
                data-hover
              >
                {link}
              </button>
            ))}
          </nav>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://app.bukkapay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium transition-colors font-dm"
              data-testid="login-btn"
              data-hover
            >
              Sign In
            </a>
            <a 
              href="https://app.bukkapay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-white rounded-full px-6 py-3 font-medium flex items-center gap-2 group font-dm"
              data-testid="get-started-btn"
              data-hover
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-6 border-t border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                    className="text-left py-3 text-white/70 hover:text-white transition-colors font-medium font-dm"
                  >
                    {link}
                  </motion.button>
                ))}
                <div className="flex gap-3 pt-4 mt-2 border-t border-white/10">
                  <a href="https://app.bukkapay.com" className="flex-1 text-center py-3 text-white/70 border border-white/20 rounded-full font-medium font-dm">Sign In</a>
                  <a href="https://app.bukkapay.com" className="flex-1 text-center py-3 btn-primary text-white rounded-full font-medium font-dm">Get Started</a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section with Video Background
const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
        poster="/assets/hero-bg.png"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg -top-1/2 -left-1/2" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Particles */}
      <FloatingParticles count={30} />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] blob" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] blob" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-400 font-dm">
                Now Live in 30+ African Countries
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white font-syne"
            >
              Payments Made
              <br />
              <span className="text-shimmer">Borderless</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-white/60 mt-8 leading-relaxed max-w-xl font-dm"
            >
              The all-in-one payment infrastructure for Africa. Send money, create invoices, 
              accept payments, and grow your business — all in one powerful platform. 
              No borders. No barriers. Just payments that work.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <a 
                href="https://app.bukkapay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-white rounded-full px-8 py-4 font-medium flex items-center gap-3 group font-dm"
                data-testid="hero-cta-primary"
                data-hover
              >
                Start Free Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 text-white/70 hover:text-white rounded-full px-8 py-4 font-medium border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-dm"
                data-testid="hero-cta-secondary"
                data-hover
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 border-2 border-[#0a0a0f] flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60 font-dm">50,000+ happy users</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Premium iPhone Mockup with User's Screenshot */}
              <IPhoneMockup 
                src="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/8ivsgv80_Screenshot_20260401_142427_com_bukkapay_app_MainActivity.jpg" 
                alt="BukkaPay Smart Wallet - Digital Card & Quick Actions"
                className="w-64 md:w-80"
              />
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -left-20 top-1/4 glass-card rounded-2xl p-4 neon-border"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-dm">Payment Received</p>
                    <p className="text-lg font-bold text-white font-syne">+R2,450</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-16 bottom-1/3 glass-card rounded-2xl p-4 neon-border"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-dm">Virtual Card</p>
                    <p className="text-sm font-medium text-white font-dm">Ready to Use</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-8 bottom-1/4 glass-card rounded-2xl p-3 neon-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-xs font-medium text-white font-dm">Instant Send</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 glass-card rounded-3xl"
        >
          <StatCounter end={50} suffix="K+" label="Active Users" />
          <StatCounter end={12} prefix="$" suffix="M+" label="Monthly Volume" />
          <StatCounter end={30} suffix="+" label="Countries" />
          <StatCounter end={99.9} suffix="%" label="Uptime" />
        </motion.div>
      </div>
    </section>
  );
};

// Trust Marquee Section
const TrustMarquee = () => {
  const partners = [
    "MTN Mobile Money", "Flutterwave", "Paystack", "Chipper Cash", 
    "M-Pesa", "Access Bank", "Zenith Bank", "GTBank", "UBA", "Visa", "Mastercard"
  ];
  
  return (
    <section className="bg-[#0a0a0f] border-y border-white/5 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f] z-10 pointer-events-none" />
      <Marquee speed={40} gradient={false}>
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-xl font-semibold text-white/30 font-space">{partner}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Store, send, and receive money instantly. Your secure hub for all transactions.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: QrCode,
      title: "Scan to Pay",
      description: "Share your unique BKP code or QR — get paid instantly, no bank details needed.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Business Dashboard",
      description: "Track payments, monitor payment links, and access powerful financial tools in real-time.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send money to anyone in seconds. Zero delays, transparent fees.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: CreditCard,
      title: "Virtual Cards",
      description: "Create unlimited virtual cards for secure online shopping worldwide.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ShieldCheck,
      title: "Bank-Level Security",
      description: "256-bit encryption and AI-powered fraud detection protect every transaction.",
      color: "from-indigo-500 to-violet-600"
    },
  ];
  
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6 font-dm">
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Everything You Need to
            <br />
            <span className="text-shimmer">Manage Money</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group glass-card rounded-3xl p-8 relative overflow-hidden"
              variants={fadeUp}
              data-testid={`feature-card-${index}`}
              data-hover
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-syne">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed font-dm">
                {feature.description}
              </p>
              
              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors">
                <span className="text-sm font-medium font-dm">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Showcase - Phone Mockups */}
        <div className="mt-32 space-y-32">
          {/* Smart Wallet Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 font-dm">
                <Wallet className="w-3.5 h-3.5" /> Smart Wallet
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                Your Money, Your Way
              </h3>
              <p className="text-lg text-white/60 mb-8 leading-relaxed font-dm">
                A beautiful digital wallet with virtual cards, quick actions, and real-time activity tracking. 
                Send, request, top up, or travel — all from one elegant interface.
              </p>
              <ul className="space-y-4">
                {["Virtual debit cards for online shopping", "Quick actions: Send, Request, Top Up, Travel", "Real-time activity feed", "Instant notifications"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-dm">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <IPhoneMockup 
                src="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/8ivsgv80_Screenshot_20260401_142427_com_bukkapay_app_MainActivity.jpg" 
                alt="BukkaPay Smart Wallet"
                className="w-56 md:w-64"
              />
            </motion.div>
          </div>

          {/* Business Dashboard Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <IPhoneMockup 
                src="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/4deplevc_Screenshot_20260401_180413_com_bukkapay_app_MainActivity.jpg" 
                alt="BukkaPay Business Dashboard"
                className="w-56 md:w-64"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-6 font-dm">
                <BarChart3 className="w-3.5 h-3.5" /> Business Dashboard
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                Your Business,<br />
                <span className="text-shimmer">At a Glance</span>
              </h3>
              <p className="text-lg text-white/60 mb-8 leading-relaxed font-dm">
                Take full control of your business finances. Track every payment, monitor active payment links, 
                and access powerful financial tools — all from one intuitive dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time payment tracking & analytics",
                  "Monitor all payment links in one place", 
                  "Financial reporting & insights",
                  "Revenue trends & forecasting",
                  "Export data for accounting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-dm">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-pink-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Dual Phone Display */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-6 font-dm">
              <Smartphone className="w-4 h-4" /> Complete Experience
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-syne">
              One App, <span className="text-shimmer">Endless Possibilities</span>
            </h3>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-dm">
              Whether you're a freelancer, business owner, or everyday user — BukkaPay has everything you need.
            </p>
            
            <DualPhoneDisplay 
              leftSrc="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/4deplevc_Screenshot_20260401_180413_com_bukkapay_app_MainActivity.jpg"
              rightSrc="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/8ivsgv80_Screenshot_20260401_142427_com_bukkapay_app_MainActivity.jpg"
              leftAlt="BukkaPay Merchant Features"
              rightAlt="BukkaPay Smart Wallet"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Payment Links Section
const PaymentLinks = () => {
  const steps = [
    { 
      number: "01", 
      title: "Create Payment Link", 
      description: "Generate a unique payment link in seconds. Set amount, currency, and description.",
      icon: Link2,
      color: "from-violet-500 to-purple-600"
    },
    { 
      number: "02", 
      title: "Attach Invoice", 
      description: "Add professional invoices, quotations, or receipts directly to your payment request.",
      icon: FileCheck,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      number: "03", 
      title: "Send to Clients", 
      description: "Share via WhatsApp, email, SMS, or any platform. Works for anyone, anywhere.",
      icon: Send,
      color: "from-pink-500 to-rose-600"
    },
    { 
      number: "04", 
      title: "Get Paid Instantly", 
      description: "Receive payments immediately with real-time confirmation and notifications.",
      icon: Zap,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="payment-links" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      
      {/* Floating Particles */}
      <FloatingParticles count={20} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-violet-400 border border-violet-500/20 mb-6 font-dm">
            <Link2 className="w-4 h-4" />
            Payment Links
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Get Paid in
            <br />
            <span className="text-shimmer">Four Simple Steps</span>
          </h2>
          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto font-dm">
            Create a payment link, attach your invoice, send it to clients anywhere in the world, 
            and receive instant payments with immediate confirmation.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
              
              <div className="glass-card rounded-3xl p-6 h-full relative overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-white/5 font-syne">
                  {step.number}
                </span>
                
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 font-syne">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-dm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Link Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              {/* Left - Content */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 font-dm">
                  <BadgeCheck className="w-3.5 h-3.5" /> Professional Invoicing
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                  Attach Invoices &<br />
                  <span className="text-shimmer">Get Paid Faster</span>
                </h3>
                
                <p className="text-lg text-white/60 mb-8 font-dm leading-relaxed">
                  Add professional invoices, quotations, and receipts directly to your payment links. 
                  Your clients see exactly what they're paying for — leading to faster payments and fewer disputes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "PDF invoices & quotations supported",
                    "Automatic payment reconciliation",
                    "Real-time payment notifications",
                    "Payment history & analytics",
                    "Multi-currency support (USD, EUR, ZAR, NGN...)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 font-dm">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://app.bukkapay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-white rounded-full px-8 py-4 font-medium inline-flex items-center gap-3 group font-dm"
                  data-hover
                >
                  Create Your First Link
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Right - Payment Link Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
                
                <div className="relative glass-card rounded-3xl p-6 border border-white/10">
                  {/* Payment Link Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                        <Link2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold font-syne">Payment Link</p>
                        <p className="text-white/50 text-sm font-dm">pay.bukkapay.com/inv-2024-001</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 font-dm">
                      Active
                    </span>
                  </div>
                  
                  {/* Invoice Preview */}
                  <div className="bg-white/5 rounded-2xl p-5 mb-6 border border-white/5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-white/50 text-xs font-dm mb-1">Invoice</p>
                        <p className="text-white font-semibold font-syne">Web Design Project</p>
                        <p className="text-white/50 text-sm font-dm">Client: Acme Corp</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Receipt className="w-5 h-5 text-violet-400" />
                        <span className="text-white/50 text-sm font-dm">INV-2024-001.pdf</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60 font-dm">Website Redesign</span>
                        <span className="text-white font-dm">$2,500.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60 font-dm">Brand Identity</span>
                        <span className="text-white font-dm">$1,200.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60 font-dm">SEO Setup</span>
                        <span className="text-white font-dm">$800.00</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-white font-medium font-dm">Total Amount</span>
                      <span className="text-2xl font-bold text-white font-syne">$4,500.00</span>
                    </div>
                  </div>
                  
                  {/* Pay Button */}
                  <button className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-xl py-4 font-semibold font-dm hover:opacity-90 transition-opacity">
                    Pay Now — Secure Payment
                  </button>
                  
                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs font-dm">
                      <Lock className="w-3.5 h-3.5" />
                      256-bit SSL
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs font-dm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      PCI Compliant
                    </div>
                  </div>
                </div>
                
                {/* Floating Confirmation */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 neon-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-dm">Payment Confirmed</p>
                      <p className="text-sm font-semibold text-white font-dm">Instant Notification</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/50 mb-4 font-dm">
            Join 50,000+ businesses already using BukkaPay payment links
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Globe2 className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-white/70 font-dm">Cross-border payments</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/70 font-dm">Instant settlement</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white/70 font-dm">Secure & compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => {
  const steps = [
    { icon: UserPlus, step: "01", title: "Create Account", description: "Sign up in 60 seconds with just your email or phone." },
    { icon: Wallet, step: "02", title: "Fund Wallet", description: "Add money via bank transfer, mobile money, or card." },
    { icon: Send, step: "03", title: "Start Transacting", description: "Send money, pay bills, or generate virtual cards instantly." }
  ];
  
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q360,200 720,400 T1440,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles count={15} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-6 font-dm">
            <Zap className="w-4 h-4" />
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Get Started in
            <br />
            <span className="text-shimmer">Three Steps</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center group"
              data-testid={`step-${index + 1}`}
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border border-violet-500/20 ring-pulse" />
                <div className="absolute inset-4 rounded-full border border-cyan-500/20 ring-pulse" style={{ animationDelay: '-1s' }} />
                
                {/* Icon Container */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-9 w-9 text-white" />
                </div>
                
                {/* Step Number */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0a0a0f] border border-violet-500/50 text-white text-sm font-bold flex items-center justify-center font-syne">
                  {step.step}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 font-syne">
                {step.title}
              </h3>
              <p className="text-white/60 max-w-xs mx-auto font-dm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Security Section
const Security = () => {
  const items = [
    { icon: Lock, title: "256-bit Encryption", description: "Bank-level encryption protects every transaction." },
    { icon: Fingerprint, title: "Biometric Auth", description: "Secure login with fingerprint or face recognition." },
    { icon: ShieldAlert, title: "AI Fraud Detection", description: "Real-time monitoring catches threats before they happen." },
    { icon: FileCheck, title: "Compliance Ready", description: "Built to meet regulatory standards across markets." },
  ];

  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated Security Visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-10 rounded-full border border-cyan-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-20 rounded-full border border-pink-500/30 animate-spin" style={{ animationDuration: '25s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 font-dm">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne">
              Your Money is
              <br />
              <span className="text-shimmer">Safe With Us</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 font-dm">
              We've built BukkaPay with security at its core, so you can focus on what matters — growing your money.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 group"
                  data-hover
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1 font-syne">{item.title}</h4>
                  <p className="text-sm text-white/60 font-dm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-emerald-500/30 animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-12 rounded-full border border-cyan-500/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
              <div className="absolute inset-20 rounded-full border border-violet-500/30 animate-spin" style={{ animationDuration: '12s' }} />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-500/30 pulse-glow">
                  <ShieldCheck className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// For Business Section
const ForBusiness = () => {
  const benefits = [
    { icon: Banknote, title: "Accept Payments", description: "Receive payments from customers across Africa and beyond." },
    { icon: PieChart, title: "Manage Payouts", description: "Automate disbursements to vendors and employees." },
    { icon: Code, title: "API Integration", description: "Developer-friendly APIs for seamless integration." },
  ];

  return (
    <section id="business" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6 font-dm">
            <Building2 className="w-4 h-4" />
            For Businesses
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Power Your
            <br />
            <span className="text-shimmer">Business Growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-3xl p-8 group"
              data-hover
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <b.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-syne">{b.title}</h3>
              <p className="text-white/60 font-dm">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:marketing@bukkapay.com"
              className="btn-primary text-white rounded-full px-8 py-4 font-medium flex items-center justify-center gap-2 group font-dm"
              data-hover
            >
              Contact Sales <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Osei",
      role: "Freelance Designer, Lagos",
      quote: "BukkaPay changed my freelance game. I send invoices, attach my portfolio, and get paid the same day. No more chasing clients for weeks.",
      rating: 5,
      avatar: "AO"
    },
    {
      name: "David Mensah",
      role: "CEO, TechBridge Solutions",
      quote: "We process over R500K monthly through BukkaPay. The business dashboard gives us full visibility, and the API integration was seamless.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Fatima Al-Hassan",
      role: "E-commerce Merchant, Nairobi",
      quote: "My customers love paying via BukkaPay links. I just create a link, share on WhatsApp, and money lands in my wallet instantly. It's magic.",
      rating: 5,
      avatar: "FA"
    },
    {
      name: "Thabo Mokoena",
      role: "Property Manager, Johannesburg",
      quote: "Collecting rent used to be a nightmare. Now I send payment links to all my tenants. Automated, tracked, and hassle-free.",
      rating: 5,
      avatar: "TM"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-6 font-dm">
            <Heart className="w-4 h-4" />
            Loved by Thousands
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Real People,
            <br />
            <span className="text-shimmer">Real Results</span>
          </h2>
          <p className="text-lg text-white/60 mt-6 max-w-2xl mx-auto font-dm">
            From freelancers in Lagos to enterprises in Johannesburg — hear how BukkaPay 
            is transforming the way Africa does business.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card rounded-3xl p-8 relative group"
              data-testid={`testimonial-${i}`}
              data-hover
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-violet-400" />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-dm relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-sm font-bold text-white font-syne">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-white font-syne">{t.name}</p>
                  <p className="text-sm text-white/50 font-dm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Why BukkaPay - Competitive Advantage
const WhyBukkaPay = () => {
  const advantages = [
    {
      icon: Zap,
      title: "5-Second Settlements",
      stat: "5s",
      description: "While traditional banks take 3–5 days, BukkaPay settles payments in under 5 seconds. Your money moves at the speed of now.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "Up to 80% Lower Fees",
      stat: "0.5%",
      description: "We cut out the middlemen. Our flat-rate pricing means more money stays in your pocket — not lost to excessive charges.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe2,
      title: "30+ Countries, One App",
      stat: "30+",
      description: "Send money from Lagos to London, Nairobi to New Delhi. One wallet, no currency headaches, no hidden exchange markups.",
      color: "from-violet-500 to-indigo-500"
    },
    {
      icon: ShieldCheck,
      title: "Bank-Level, Human-First",
      stat: "99.9%",
      description: "Military-grade encryption meets 24/7 human support. If something goes wrong, a real person helps you — not a chatbot.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[180px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 font-dm">
            <Target className="w-4 h-4" />
            The BukkaPay Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Why Africa Chooses
            <br />
            <span className="text-shimmer">BukkaPay</span>
          </h2>
          <p className="text-lg text-white/60 mt-6 max-w-2xl mx-auto font-dm">
            We didn't just build another payment app. We built the payment infrastructure 
            Africa deserves — fast, fair, and built for the way you actually do business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
              data-hover
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <a.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white font-syne">{a.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/80 font-dm">{a.stat}</span>
                  </div>
                  <p className="text-white/60 leading-relaxed font-dm">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCases = () => {
  const cases = [
    {
      icon: Laptop,
      title: "Freelancers & Creators",
      tagline: "Get paid for your talent, not your patience",
      description: "Create professional invoices, send payment links to global clients, and receive funds directly to your wallet. No more waiting 30 days for international wire transfers.",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Store,
      title: "Merchants & SMEs",
      tagline: "Turn every phone into a point of sale",
      description: "Accept QR payments, generate branded payment links, and track every transaction from your dashboard. Built for the way African businesses actually operate.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: HomeIcon,
      title: "Landlords & Property",
      tagline: "Automate rent collection, eliminate excuses",
      description: "Send recurring payment links to tenants, attach lease agreements, and get instant confirmations. No more cash collection headaches or bank deposit confusion.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Repeat,
      title: "Cross-Border Trade",
      tagline: "Move money where borders can't stop you",
      description: "Pay suppliers in Nigeria from South Africa. Receive payments from the UK to Kenya. Real-time exchange rates, transparent fees, and instant settlement.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: HandCoins,
      title: "Service Providers",
      tagline: "Bill smarter, collect faster",
      description: "Whether you're a consultant, tutor, or agency — send itemized invoices with payment links. Your clients pay in one click, you get paid instantly.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Globe2,
      title: "NGOs & Fundraising",
      tagline: "Collect donations with trust and transparency",
      description: "Create shareable payment links for campaigns, track every contribution in real-time, and provide instant receipts to donors worldwide.",
      color: "from-indigo-500 to-violet-600"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6 font-dm">
            <Rocket className="w-4 h-4" />
            Built For You
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            One Platform,
            <br />
            <span className="text-shimmer">Every Use Case</span>
          </h2>
          <p className="text-lg text-white/60 mt-6 max-w-2xl mx-auto font-dm">
            Whether you're invoicing a client in London or collecting rent in Lagos, 
            BukkaPay adapts to how you work — not the other way around.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
              data-testid={`usecase-${i}`}
              data-hover
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <c.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1 font-syne">{c.title}</h3>
              <p className="text-sm font-medium text-violet-400 mb-3 font-dm">{c.tagline}</p>
              <p className="text-white/60 leading-relaxed text-sm font-dm">{c.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm font-dm mb-4">Trusted by businesses across 30+ countries</p>
          <a 
            href="https://app.bukkapay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white rounded-full px-8 py-4 font-medium inline-flex items-center gap-3 group font-dm"
            data-hover
          >
            Find Your Use Case
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individuals",
      features: ["Digital wallet", "Send & receive money", "1 virtual card", "Basic history", "Email support"],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-slate-500 to-slate-600"
    },
    {
      name: "Business",
      price: "$15",
      period: "/month",
      description: "For growing businesses",
      features: ["Everything in Personal", "Unlimited virtual cards", "Business dashboard", "API access", "Priority support"],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-violet-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Everything in Business", "Custom integrations", "Dedicated manager", "SLA guarantee", "White-label options"],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-orange-500 to-pink-500"
    }
  ];
  
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 font-dm">
            <Receipt className="w-4 h-4" />
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-syne">
            Simple, Transparent
            <br />
            <span className="text-shimmer">Pricing</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`glass-card rounded-3xl p-8 relative ${plan.popular ? 'ring-2 ring-violet-500' : ''}`}
              variants={fadeUp}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              data-hover
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full font-dm">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-white font-syne">{plan.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-white font-syne">{plan.price}</span>
                {plan.period && <span className="text-white/60 font-dm">{plan.period}</span>}
              </div>
              <p className="text-sm text-white/60 mb-6 font-dm">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-white/70 text-sm font-dm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full rounded-full py-4 font-medium transition-all duration-300 font-dm ${
                  plan.popular 
                    ? 'btn-primary text-white' 
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
                data-hover
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Availability Section
const Availability = () => {
  const regions = [
    "South Africa", "Nigeria", "Kenya", "Ghana", "Tanzania", "Uganda",
    "Zimbabwe", "Botswana", "Zambia", "Mozambique", "United Kingdom", "India"
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 font-dm">
            <Globe className="w-4 h-4" />
            Global Reach
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-syne">
            Available <span className="text-shimmer">Worldwide</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {regions.map((region, i) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 flex items-center gap-3"
              data-hover
            >
              <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-sm text-white font-dm">{region}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqs = [
    { q: "What is BukkaPay?", a: "BukkaPay is a digital wallet and payment platform built for Africa. Send, receive, and manage money securely from your phone." },
    { q: "How do I create a virtual card?", a: "After signing up and funding your wallet, generate a virtual card instantly from the app for secure online shopping." },
    { q: "Is BukkaPay safe?", a: "Absolutely. We use 256-bit AES encryption, multi-factor authentication, and AI-powered fraud detection." },
    { q: "What countries are supported?", a: "BukkaPay is live in 30+ African countries with expansion to Asia and Europe." },
    { q: "Are there hidden fees?", a: "No hidden fees. All charges are transparent and shown before you confirm any transaction." },
  ];

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-syne">
            Frequently Asked <span className="text-shimmer">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-2xl px-6 border-0 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline py-5 font-syne">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 font-dm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-600" />
        <div className="aurora-bg opacity-50" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Floating Particles */}
      <FloatingParticles count={20} />

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-syne">
            Ready to Transform
            <br />
            Your Payments?
          </h2>
          <p className="text-white/80 mt-8 text-lg md:text-xl max-w-2xl mx-auto font-dm">
            Join 50,000+ users already experiencing the future of African payments. 
            Start free today — no credit card required.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="https://app.bukkapay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 rounded-full px-10 py-5 font-bold hover:bg-gray-100 shadow-2xl transition-all duration-300 group font-dm"
              data-testid="cta-primary"
              data-hover
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="BukkaPay" className="h-10 w-10 rounded-xl" />
              <span className="text-2xl font-bold text-white font-syne">BukkaPay</span>
            </div>
            <p className="text-white/60 max-w-sm font-dm">
              The future of African payments. Send, receive, and grow your money with confidence.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "Security", "Pricing", "API Docs"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40 font-dm">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-dm" data-hover>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 font-dm">© {year} BukkaPay. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/40 font-dm mr-2">Find us on</span>
            {/* X (Twitter) */}
            <a
              href="https://x.com/bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Follow us on X"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a
              href="https://instagram.com/bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a
              href="https://facebook.com/bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Follow us on Facebook"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a
              href="https://tiktok.com/@bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Follow us on TikTok"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a
              href="https://youtube.com/@bukkapay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all duration-300 group"
              data-hover
              aria-label="Subscribe on YouTube"
            >
              <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <ScrollProgress />
      <CustomCursor />
      <div className="noise-overlay" />
      <div className="scan-line" />
      
      <Header />
      <Hero />
      <TrustMarquee />
      <Features />
      <PaymentLinks />
      <HowItWorks />
      <Security />
      <WhyBukkaPay />
      <ForBusiness />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Availability />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
