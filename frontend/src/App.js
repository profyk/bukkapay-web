import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  ArrowRight, 
  Link2, 
  FileText, 
  Globe2, 
  Wallet, 
  Building2, 
  Users, 
  ShoppingBag, 
  Home as HomeIcon,
  Check,
  ChevronRight,
  Send,
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
  UserPlus
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = ["Features", "How It Works", "Security", "Business", "Pricing", "FAQ"];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group" data-testid="logo-link">
            <img 
              src="/assets/logo.png" 
              alt="BukkaPay" 
              className="h-10 w-10 rounded-xl object-cover shadow-sm group-hover:scale-110 transition-transform duration-200" 
            />
            <span className="text-2xl font-bold text-gray-900 font-outfit">BukkaPay</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-all duration-200 font-medium"
                data-testid={`nav-${link.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link}
              </button>
            ))}
            <Link to="/about" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-all duration-200 font-medium">
              About
            </Link>
          </nav>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://app.bukkapay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              data-testid="login-btn"
            >
              Sign In
            </a>
            <a 
              href="https://app.bukkapay.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full px-6 py-3 font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center gap-2 group"
              data-testid="get-started-btn"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-6 border-t border-gray-200 overflow-hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                    className="text-left py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    {link}
                  </motion.button>
                ))}
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  About
                </Link>
                <div className="flex gap-3 pt-4 mt-2 border-t border-gray-200">
                  <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 text-gray-600 border border-gray-200 rounded-full font-medium">Sign In</a>
                  <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium">Get Started</a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh-gradient">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-violet-400/40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-indigo-400/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-purple-400/40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-violet-300/20 animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />
      </div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span 
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 border border-violet-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Launching soon across Africa, Asia & Europe
            </motion.span>
            
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900 mt-8 font-outfit"
            >
              The Smart Way to{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Pay and Get Paid</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-xl"
            >
              BukkaPay empowers freelancers, businesses, and service providers across Africa to send, receive, and collect payments seamlessly — locally and globally.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://app.bukkapay.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full px-8 py-4 font-medium hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 flex items-center gap-2 group"
                data-testid="hero-cta-primary"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-gray-300 text-gray-700 rounded-full px-8 py-4 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                See How It Works
              </button>
            </motion.div>
            
            {/* Trust Stats */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Bank-level security
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Instant transfers
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-3xl opacity-20 scale-90" />
              <img
                src="/assets/hero-mockup.png"
                alt="BukkaPay mobile app dashboard"
                className="relative w-72 md:w-96 drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Billboard Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/hero-bg.png"
              alt="BukkaPay billboard — The Pulse of African Finance"
              className="w-full h-auto object-cover rounded-2xl"
              loading="eager"
            />
          </div>
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
    <section className="bg-white border-y border-gray-200 py-8">
      <Marquee speed={40} gradient gradientColor="#ffffff" gradientWidth={100}>
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-xl font-semibold text-gray-400">{partner}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// Features Section with Phone Mockups
const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Store, send, and receive money instantly. Your wallet, your rules.",
    },
    {
      icon: QrCode,
      title: "Scan to Pay Me",
      description: "Share your unique BKP code or QR code and get paid instantly — no account details needed.",
    },
    {
      icon: Building2,
      title: "Landlord Dashboard",
      description: "Track your rental properties, manage tenants, and monitor income with paid, partial, and unpaid status at a glance.",
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send money to anyone in seconds. No delays, no hidden fees.",
    },
    {
      icon: CreditCard,
      title: "Virtual Cards",
      description: "Create virtual cards for secure online shopping anywhere in the world.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "Every transaction is encrypted and protected with bank-level security.",
    },
    {
      icon: Clock,
      title: "Real-time History",
      description: "Track every transaction in real-time with detailed history and insights.",
    },
  ];
  
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-animated-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl blob" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 font-outfit">
            Everything you need to manage your money
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Powerful tools designed for the way you do business — launching soon to many African countries, Asia and Europe.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group relative p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-sm hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 card-shine"
              variants={fadeUp}
              data-testid={`feature-card-${index}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/25 group-hover:scale-110 group-hover:shadow-violet-500/40 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Phone Mockup Showcases */}
        <div className="mt-24 space-y-28 max-w-5xl mx-auto">
          {/* Scan to Pay Me */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700 mb-4">
                <QrCode className="h-3.5 w-3.5" /> QR Payments
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-outfit">
                Scan to Pay Me
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Share your unique BKP code or QR code with anyone. They scan, you get paid — instantly. No bank details, no hassle. Perfect for freelancers, small businesses, and everyday payments.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Unique BKP code for every user</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Instant payment confirmation</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Share via link, screenshot, or in-person scan</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 scale-90" />
                <img src="/assets/qr-code-screen.jpg" alt="BukkaPay QR code" className="relative w-64 rounded-3xl shadow-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Landlord Dashboard */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 scale-90" />
                <img src="/assets/landlord-dashboard-screen.jpg" alt="Landlord dashboard" className="relative w-64 rounded-3xl shadow-2xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700 mb-4">
                <Building2 className="h-3.5 w-3.5" /> Property Management
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-outfit">
                Landlord Dashboard
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Manage all your rental properties and tenants in one place. Track income, monitor payment statuses, and stay on top of your property portfolio.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Properties & tenants at a glance</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Paid, partial & unpaid status tracking</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Total income overview</li>
              </ul>
            </motion.div>
          </div>

          {/* Business Dashboard */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-700 mb-4">
                <BarChart3 className="h-3.5 w-3.5" /> Business Payments
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-outfit">
                Business Dashboard
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Track every payment your business receives in real time. Monitor revenue, view transaction history, and stay on top of pending and completed payments.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Real-time revenue tracking</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Payment status at a glance</li>
                <li className="flex items-center gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-violet-600" /> Customer transaction history</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-64 md:w-72">
                <img src="/assets/business-dashboard-screen.jpg" alt="Business dashboard" className="w-full rounded-3xl shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Create an Account",
      description: "Sign up in minutes with just your email or phone number. Quick and hassle-free."
    },
    {
      icon: Wallet,
      step: "02",
      title: "Fund Your Wallet",
      description: "Add money via bank transfer, mobile money, or card. Start transacting instantly."
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Pay or Create Virtual Cards",
      description: "Send money, pay bills, or generate virtual cards for secure online shopping."
    }
  ];
  
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-950 to-indigo-950" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Stars/Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-400 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 font-outfit">
            Get started in three simple steps
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group"
              data-testid={`step-${index + 1}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30 group-hover:shadow-xl group-hover:shadow-violet-500/50 transition-all duration-300 mb-6 group-hover:scale-110">
                <step.icon className="h-8 w-8 text-white" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-gray-900 text-xs font-bold flex items-center justify-center shadow-md">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 font-outfit">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
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
    {
      icon: Lock,
      title: "Bank-Level Encryption",
      description: "256-bit AES encryption protects every transaction and piece of data.",
    },
    {
      icon: Fingerprint,
      title: "Secure Authentication",
      description: "Multi-factor authentication and biometric login keep your account safe.",
    },
    {
      icon: ShieldAlert,
      title: "Fraud Protection",
      description: "AI-powered fraud detection monitors transactions 24/7 in real-time.",
    },
    {
      icon: FileCheck,
      title: "Compliance-Ready",
      description: "Built to meet regulatory standards across African, Asian and European markets.",
    },
  ];

  return (
    <section id="security" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-50/50 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">Security</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 font-outfit">
              Your money is safe with us
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We've built BukkaPay with security at its core, so you can focus on what matters — your money.
            </p>

            <div className="grid gap-5">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-outfit">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-10 animate-pulse" />
              <div className="absolute inset-4 border-2 border-violet-200 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-12 border-2 border-violet-300 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
              <div className="absolute inset-20 border border-violet-400 rounded-full animate-spin" style={{ animationDuration: "25s" }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/30">
                  <ShieldAlert className="h-12 w-12 text-white" />
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
    {
      icon: Banknote,
      title: "Accept Payments",
      description: "Receive payments from customers across Africa, Asia and Europe with ease.",
    },
    {
      icon: PieChart,
      title: "Manage Payouts",
      description: "Automate disbursements to vendors, suppliers, and employees.",
    },
    {
      icon: Code,
      title: "Simple API Integration",
      description: "Integrate BukkaPay into your platform with our developer-friendly APIs.",
    },
  ];

  return (
    <section id="business" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-200/40 rounded-full blur-3xl blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl blob" style={{ animationDelay: '-3s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">
            For Businesses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 font-outfit">
            Power your business with BukkaPay
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            From startups to enterprises, we help businesses move money effortlessly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-violet-300 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors duration-300">
                <b.icon className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:marketing@bukkapay.com"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full px-8 py-4 font-medium hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Contact Sales <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:partnerships@bukkapay.com"
              className="border border-violet-300 text-violet-700 rounded-full px-8 py-4 font-medium hover:border-violet-400 hover:bg-violet-50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Partnerships <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
      description: "Perfect for individuals getting started",
      features: [
        "Digital wallet",
        "Send & receive money",
        "1 virtual card",
        "Basic transaction history",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Business",
      price: "$15",
      period: "/month",
      description: "For growing businesses and teams",
      features: [
        "Everything in Personal",
        "Unlimited virtual cards",
        "Business dashboard",
        "API access",
        "Priority settlements",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Business",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label options",
        "Custom transaction limits"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 font-outfit">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm border ${plan.popular ? 'border-violet-500 ring-2 ring-violet-500 shadow-xl shadow-violet-500/20' : 'border-gray-200'} rounded-2xl p-8 relative card-shine hover:shadow-lg transition-all duration-300`}
              variants={fadeUp}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 font-outfit">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900 font-outfit">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
              <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full mt-8 rounded-full py-4 font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/25' 
                    : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
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
    "South Africa", "Botswana", "Zimbabwe", "Mozambique", "Malawi", "Namibia",
    "Zambia", "Eswatini", "Lesotho", "Nigeria", "Kenya", "Ghana",
    "Tanzania", "Uganda", "United Kingdom", "India", "Philippines"
  ];

  return (
    <section className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">
            Availability
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-outfit">
            Where We're <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Launching</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            BukkaPay is gearing up to launch across Africa, Asia, and Europe.
          </p>
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-violet-300 transition-all duration-300"
            >
              <MapPin className="h-4 w-4 text-violet-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">{region}</p>
                <span className="text-xs text-gray-500">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-100 border border-violet-200">
            <Globe className="h-4 w-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">
              More countries will be added as we expand
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      q: "What is BukkaPay?",
      a: "BukkaPay is a digital wallet and virtual card platform built for Africa. It lets you send, receive, and manage money securely from your phone.",
    },
    {
      q: "How do I create a virtual card?",
      a: "After signing up and funding your wallet, you can generate a virtual card instantly from the app. Use it for online shopping anywhere that accepts Visa or Mastercard.",
    },
    {
      q: "Is BukkaPay safe to use?",
      a: "Absolutely. BukkaPay uses bank-level 256-bit AES encryption, multi-factor authentication, and AI-powered fraud detection to keep your money and data secure.",
    },
    {
      q: "What countries does BukkaPay support?",
      a: "BukkaPay is launching soon to many African countries, Asia and Europe. Stay tuned for updates on supported regions.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden fees. We believe in transparent pricing. You can see all applicable fees before confirming any transaction.",
    },
    {
      q: "How fast are transfers?",
      a: "Transfers between BukkaPay wallets are instant. Bank transfers typically settle within minutes depending on your bank.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-violet-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold text-violet-600 tracking-wide uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 font-outfit">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-violet-300 data-[state=open]:shadow-md transition-all duration-300 bg-white"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4 font-outfit">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
      
      {/* Animated Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-violet-400/30 to-transparent rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-indigo-400/30 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '-1.5s' }} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-400/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '-3s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-outfit">
            Ready to simplify your payments?
          </h2>
          <p className="text-white/80 mt-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Join thousands getting ready for a smarter way to pay and get paid. Sign up today and be among the first to experience BukkaPay.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="https://app.bukkapay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-violet-600 rounded-full px-8 py-4 font-medium hover:bg-gray-100 shadow-lg transition-all duration-300 group"
              data-testid="cta-primary"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/assets/logo.png" alt="BukkaPay" className="h-9 w-9 rounded-xl object-cover" />
              <h3 className="text-xl font-bold font-outfit">BukkaPay</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The smart way to pay and get paid. Launching soon across Africa, Asia and Europe.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#business" className="hover:text-white transition-colors">For Business</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="mailto:hello@bukkapay.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:marketing@bukkapay.com" className="hover:text-white transition-colors">Sales</a></li>
              <li><a href="mailto:partnerships@bukkapay.com" className="hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {year} BukkaPay. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Follow us</span>
            <div className="flex gap-3">
              {[
                { name: "X", href: "https://x.com/bukkapay" },
                { name: "Instagram", href: "https://instagram.com/bukkapay" },
                { name: "Facebook", href: "https://facebook.com/bukkapay" },
                { name: "LinkedIn", href: "https://linkedin.com/company/bukkapay" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow BukkaPay on ${social.name}`}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 hover:scale-110 transition-all duration-200"
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <span className="text-xs font-bold">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// About Page
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">About BukkaPay</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BukkaPay is a payment platform that enables individuals, businesses, and service providers in Africa to send, receive, and collect payments easily, both locally and across borders.
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-outfit">Our Mission</h2>
              <p>
                Our goal is to make it easy for freelancers, small businesses, and service providers in Africa to get paid and collect money without friction, especially across borders.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-outfit">What We Offer</h2>
              <ul className="space-y-3">
                <li>Create simple payment links to request and receive money from anyone in the world</li>
                <li>Attach invoices and quotations directly to payment links</li>
                <li>Support payments via cards and wallet balances</li>
                <li>Receive funds directly into a bank account or BukkaPay wallet</li>
                <li>Merchant payments, rental collections, and marketplace transactions</li>
                <li>Unified dashboard to track payments and manage funds in real time</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-outfit">Contact Us</h2>
              <p>
                <strong>General Inquiries:</strong> <a href="mailto:hello@bukkapay.com" className="text-violet-600 hover:underline">hello@bukkapay.com</a><br />
                <strong>Sales:</strong> <a href="mailto:marketing@bukkapay.com" className="text-violet-600 hover:underline">marketing@bukkapay.com</a><br />
                <strong>Partnerships:</strong> <a href="mailto:partnerships@bukkapay.com" className="text-violet-600 hover:underline">partnerships@bukkapay.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Legal Pages Component
const LegalPage = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-outfit">{title}</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
              {children}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Privacy Page
const Privacy = () => (
  <LegalPage title="Privacy Policy">
    <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
    <p>At BukkaPay, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">Information We Collect</h2>
    <p>We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">How We Use Your Information</h2>
    <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">Contact Us</h2>
    <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@bukkapay.com" className="text-violet-600 hover:underline">privacy@bukkapay.com</a></p>
  </LegalPage>
);

// Terms Page
const Terms = () => (
  <LegalPage title="Terms of Service">
    <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
    <p>Welcome to BukkaPay. By using our services, you agree to these Terms of Service.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">Use of Services</h2>
    <p>You must be at least 18 years old to use BukkaPay. You are responsible for maintaining the security of your account.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">Prohibited Activities</h2>
    <p>You may not use our services for any illegal purpose or in violation of any laws in your jurisdiction.</p>
  </LegalPage>
);

// Cookie Policy Page
const CookiePolicy = () => (
  <LegalPage title="Cookie Policy">
    <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
    <p>This Cookie Policy explains how BukkaPay uses cookies and similar technologies.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-outfit">What Are Cookies</h2>
    <p>Cookies are small text files stored on your device when you visit our website.</p>
  </LegalPage>
);

// Acceptable Use Page
const AcceptableUse = () => (
  <LegalPage title="Acceptable Use Policy">
    <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
    <p>This Acceptable Use Policy outlines the rules for using BukkaPay services.</p>
  </LegalPage>
);

// Not Found Page
const NotFound = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4 font-outfit">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link to="/" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full px-8 py-4 font-medium">
        Go Home
      </Link>
    </div>
  </div>
);

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustMarquee />
      <Features />
      <HowItWorks />
      <Security />
      <ForBusiness />
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
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
