import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  ArrowRight, Link2, Globe2, Wallet, Building2, Users, Check,
  ChevronRight, Shield, Zap, Menu, X, Sparkles, CreditCard, QrCode,
  Clock, ShieldCheck, Lock, Fingerprint, ShieldAlert, FileCheck, Banknote,
  PieChart, Code, MapPin, Globe, BarChart3, UserPlus, Star, TrendingUp,
  BadgeCheck, Smartphone, Send, Receipt, Heart, Quote, Target, Rocket,
  HandCoins, Store, Laptop, Home as HomeIcon, Repeat, DollarSign, MessageCircle,
  Mail, ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.10 } } };

/* ─── Scroll Progress ─── */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

/* ─── Stat Counter ─── */
const StatCounter = ({ end, suffix = "", prefix = "", label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-outfit text-[#F7F5F0]">
        {prefix}{inView ? <CountUp end={end} duration={2.5} separator="," decimals={end % 1 !== 0 ? 1 : 0} /> : "0"}{suffix}
      </div>
      <p className="text-[#F7F5F0]/70 mt-2 font-manrope text-sm">{label}</p>
    </div>
  );
};

/* ─── Header ─── */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = ["Features", "Payment Links", "How It Works", "Security", "Business", "Pricing", "FAQ"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "header-glass shadow-sm" : "bg-transparent"}`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5" data-testid="logo-link">
            <img src="/assets/logo.png" alt="BukkaPay" className="h-9 w-9 rounded-xl object-cover" />
            <span className="text-xl font-bold font-outfit text-[#1A2421]">BukkaPay</span>
          </button>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                className="px-3.5 py-2 text-sm text-[#586C62] hover:text-[#1A362D] rounded-lg hover:bg-[#EAE5D9] transition-all duration-200 font-manrope font-medium"
                data-testid={`nav-${link.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="mailto:marketing@bukkapay.com"
              className="px-4 py-2 text-sm text-[#586C62] hover:text-[#1A362D] rounded-full hover:bg-[#EAE5D9] transition-all duration-200 font-manrope font-medium flex items-center gap-1.5"
              data-testid="contact-sales-btn"
            >
              <Mail className="w-3.5 h-3.5" />Contact Sales
            </a>
            <a
              href="https://app.bukkapay.com"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 text-sm text-[#1A2421] rounded-full border border-[#E2DCD0] hover:border-[#1A362D] hover:bg-[#EAE5D9] transition-all duration-200 font-manrope font-medium"
              data-testid="login-btn"
            >
              Log In
            </a>
            <a
              href="https://app.bukkapay.com"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-sm flex items-center gap-2 group"
              style={{ padding: "0.55rem 1.4rem" }}
              data-testid="signup-btn"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#EAE5D9] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#1A2421]" /> : <Menu className="w-5 h-5 text-[#1A2421]" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-[#E2DCD0] overflow-hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
                    className="text-left py-3 px-4 text-[#586C62] hover:text-[#1A362D] hover:bg-[#EAE5D9] rounded-xl transition-all duration-200 font-manrope font-medium flex items-center gap-3 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D1603D]" />{link}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="pt-3 mt-2 border-t border-[#E2DCD0]"
                >
                  <p className="px-4 text-xs uppercase tracking-widest text-[#586C62]/50 font-manrope mb-2">Legal</p>
                  {[{ label: "Privacy Policy", path: "/privacy" }, { label: "Terms & Conditions", path: "/terms" }, { label: "Cookie Policy", path: "/cookies" }].map(item => (
                    <Link key={item.label} to={item.path} onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-4 text-[#586C62] hover:text-[#1A362D] hover:bg-[#EAE5D9] rounded-xl text-sm font-manrope flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-[#D1603D]/60" />{item.label}
                    </Link>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
                  className="flex flex-col gap-2 pt-4 mt-2 border-t border-[#E2DCD0]"
                >
                  <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-3 text-[#1A2421] border border-[#E2DCD0] rounded-full font-manrope font-medium text-sm">Log In</a>
                  <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-3 bg-[#1A362D] text-[#F7F5F0] rounded-full font-manrope font-medium text-sm">Get Started</a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

/* ─── Hero ─── */
const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F5F0]">
      <div className="grain-overlay" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] pointer-events-none">
        <div className="w-full h-full bg-[#1A362D] blob" />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.06] pointer-events-none">
        <div className="w-full h-full bg-[#D1603D] blob" style={{ animationDelay: "-4s" }} />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <span className="overline flex items-center gap-2">
                <Rocket className="w-3 h-3" />Launching Soon in Africa
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none font-medium font-outfit text-[#1A2421]">
              Get Paid Instantly
              <br />
              <span className="text-[#1A362D]">Across Africa.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-[#586C62] mt-8 leading-relaxed max-w-xl font-manrope">
              Send payment links, invoices, and bills — no more screenshots or waiting. Be the first to experience the fastest way to collect payments across Africa.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary flex items-center gap-2 group"
                data-testid="hero-cta-primary"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline flex items-center gap-2"
                data-testid="hero-cta-secondary"
              >
                <Sparkles className="w-4 h-4 text-[#D1603D]" />See Features
              </button>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm text-[#D1603D] font-manrope font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1603D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1603D]" />
              </span>
              Limited early access spots available.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
              {["No more waiting for bank alerts", "No more fake screenshots", "Instant confirmation"].map((text, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-[#586C62] font-manrope">
                  <Check className="w-3.5 h-3.5 text-[#1A362D] shrink-0" />{text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="animate-float relative">
                <div className="relative w-64 md:w-72 bg-[#1A362D] rounded-[3rem] p-[3px] shadow-2xl shadow-[#1A362D]/25">
                  <div className="bg-[#EAE5D9] rounded-[2.8rem] overflow-hidden">
                    <div className="flex justify-center pt-3 pb-1">
                      <div className="w-24 h-5 bg-[#1A362D] rounded-full" />
                    </div>
                    <div className="aspect-[9/19] overflow-hidden">
                      <img
                        src="https://customer-assets.emergentagent.com/job_top-tier-web-1/artifacts/8ivsgv80_Screenshot_20260401_142427_com_bukkapay_app_MainActivity.jpg"
                        alt="BukkaPay app screen"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -left-20 top-20 bp-card rounded-2xl p-3.5 w-52"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EAE5D9] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#1A362D]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#586C62] font-manrope">Payment Received</p>
                      <p className="text-sm font-semibold text-[#1A2421] font-outfit">₦ 45,000.00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-14 bottom-28 bp-card rounded-2xl p-3.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1A362D] flex items-center justify-center shrink-0">
                      <Link2 className="w-4 h-4 text-[#F7F5F0]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#586C62] font-manrope">Link Shared</p>
                      <p className="text-xs font-bold text-[#1A362D] font-outfit">Instant</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Trust Marquee ─── */
const TrustMarquee = () => {
  const items = [
    { icon: Shield, text: "Bank-Grade Security" }, { icon: Zap, text: "5-Second Settlements" },
    { icon: Globe2, text: "30+ Countries" }, { icon: BadgeCheck, text: "PCI DSS Compliant" },
    { icon: Lock, text: "256-bit Encryption" }, { icon: ShieldCheck, text: "AI Fraud Detection" },
    { icon: TrendingUp, text: "0.5% Flat Rate" }, { icon: Users, text: "Built for Africa" },
    { icon: CreditCard, text: "Multi-Currency" }, { icon: Receipt, text: "Auto-Reconciliation" },
  ];
  return (
    <div className="py-4 border-y border-[#E2DCD0] bg-[#EAE5D9] overflow-hidden" data-testid="trust-marquee">
      <Marquee gradient={false} speed={36} pauseOnHover>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 text-[#586C62]">
            <item.icon className="w-3.5 h-3.5 text-[#1A362D]" />
            <span className="text-xs font-bold uppercase tracking-widest font-manrope whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

/* ─── Waitlist ─── */
const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="waitlist" className="relative py-24 md:py-32 bg-[#1A362D] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1603D]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F7F5F0]/5 rounded-full blur-[100px]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <span className="overline text-[#D1603D] mb-4 block">Early Access</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#F7F5F0] mb-5">
            Be Among the First<br />to Experience BukkaPay
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#F7F5F0]/65 font-manrope mb-10 max-w-lg mx-auto">
            Join thousands of businesses and freelancers waiting to transform how they collect payments across Africa.
          </motion.p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bp-card rounded-2xl p-8 max-w-sm mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#1A362D] flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5 text-[#F7F5F0]" />
              </div>
              <h3 className="text-lg font-semibold font-outfit text-[#1A2421] mb-2">You're on the list!</h3>
              <p className="text-[#586C62] font-manrope text-sm">We'll notify you as soon as BukkaPay launches.</p>
            </motion.div>
          ) : (
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" data-testid="waitlist-form">
              <input
                type="email" required value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-[#F7F5F0]/10 border border-[#F7F5F0]/20 text-[#F7F5F0] placeholder-[#F7F5F0]/40 focus:outline-none focus:border-[#D1603D] font-manrope text-sm"
                data-testid="waitlist-email-input"
              />
              <button type="submit" disabled={loading}
                className="btn-accent flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ padding: "0.875rem 1.75rem" }} data-testid="waitlist-submit-btn">
                {loading ? "Joining…" : <>Join Waitlist <ArrowRight className="w-4 h-4" /></>}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Early Access Benefits ─── */
const EarlyAccessBenefits = () => {
  const benefits = [
    { icon: Zap, title: "Lifetime Free Pro", description: "Early members get Pro features free for 6 months at launch." },
    { icon: Star, title: "Priority Support", description: "Jump the queue — dedicated support channel for founding members." },
    { icon: Users, title: "Founding Badge", description: "Exclusive badge and recognition as an original BukkaPay supporter." },
    { icon: TrendingUp, title: "0% Fees at Launch", description: "Zero transaction fees for 90 days after we go live." },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="overline mb-3 block">Why Join Early</span>
              <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">
                Rewards for Our<br />Founding Members
              </h2>
            </div>
            <div className="md:col-span-4 text-[#586C62] font-manrope text-sm leading-relaxed">
              Waitlist members unlock exclusive benefits unavailable to regular signups — limited slots only.
            </div>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="bp-card rounded-2xl p-8 group" data-testid={`benefit-${i}`}>
                <div className="w-12 h-12 rounded-xl bg-[#EAE5D9] flex items-center justify-center mb-5 group-hover:bg-[#1A362D] transition-colors duration-300">
                  <b.icon className="h-5 w-5 text-[#1A362D] group-hover:text-[#F7F5F0] transition-colors duration-300" />
                </div>
                <h3 className="text-base font-semibold font-outfit text-[#1A2421] mb-2">{b.title}</h3>
                <p className="text-[#586C62] text-sm font-manrope leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Features ─── */
const Features = () => {
  const features = [
    { icon: Link2, title: "Smart Payment Links", description: "Create a link in seconds, attach an invoice, and get paid anywhere.", tag: "Core" },
    { icon: FileCheck, title: "Invoice & Billing", description: "Professional PDF invoices, recurring billing, and auto-reminders.", tag: "Core" },
    { icon: BarChart3, title: "Auto-Reconciliation", description: "Every payment is automatically matched to its invoice — zero manual work.", tag: "Smart" },
    { icon: QrCode, title: "QR Code Payments", description: "Generate QR codes for in-person collections — no POS machine needed.", tag: "Mobile" },
    { icon: Globe2, title: "Cross-Border Transfers", description: "Move money across 30+ countries at real exchange rates.", tag: "Global" },
    { icon: Smartphone, title: "Mobile Wallet", description: "A full-featured digital wallet with virtual cards for safe online shopping.", tag: "Wallet" },
    { icon: Code, title: "Developer API", description: "REST APIs, webhooks, and SDKs to integrate BukkaPay into any product.", tag: "API" },
    { icon: Shield, title: "AI Fraud Detection", description: "Real-time AI monitors every transaction to stop fraud before it happens.", tag: "Security" },
  ];
  return (
    <section id="features" className="py-24 md:py-32 bg-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
          <span className="overline mb-3 block">Everything You Need</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421] max-w-xl mx-auto">
            The Complete Payments<br />Infrastructure for Africa
          </h2>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp} className="bp-card rounded-2xl p-7 group" data-testid={`feature-${i}`}>
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#EAE5D9] flex items-center justify-center group-hover:bg-[#1A362D] transition-colors duration-300">
                  <f.icon className="h-5 w-5 text-[#1A362D] group-hover:text-[#F7F5F0] transition-colors duration-300" />
                </div>
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#D1603D] font-manrope">{f.tag}</span>
              </div>
              <h3 className="text-base font-semibold font-outfit text-[#1A2421] mb-2">{f.title}</h3>
              <p className="text-[#586C62] text-sm font-manrope leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Trust Strip ─── */
const TrustStrip = ({ text, ctaText }) => (
  <section className="py-16 bg-[#1A362D] overflow-hidden relative">
    <div className="absolute inset-0 dot-pattern opacity-10" />
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium font-outfit text-[#F7F5F0] mb-6">{text}</motion.p>
        <motion.button variants={fadeUp}
          onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-accent flex items-center gap-2 mx-auto group">
          {ctaText}<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

/* ─── Payment Links ─── */
const PaymentLinks = () => {
  const steps = [
    { number: "01", title: "Create Payment Link", description: "Generate a unique payment link in seconds. Set amount, currency, and description.", icon: Link2 },
    { number: "02", title: "Attach Invoice", description: "Add professional invoices, quotations, or receipts directly to your payment request.", icon: FileCheck },
    { number: "03", title: "Send to Clients", description: "Share via WhatsApp, email, SMS, or any platform. Works for anyone, anywhere.", icon: Send },
    { number: "04", title: "Get Paid Instantly", description: "Receive payments immediately with real-time confirmation and notifications.", icon: Zap }
  ];

  return (
    <section id="payment-links" className="py-24 md:py-32 bg-[#F7F5F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A362D]/4 blob pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="overline mb-3 block">Payment Links</span>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">
              Payment Links with Billing<br />& Auto-Reconciliation
            </h2>
          </div>
          <div className="md:col-span-5 text-[#586C62] font-manrope text-sm leading-relaxed">
            Create payment links, attach invoices, and let BukkaPay automatically reconcile every transaction — no spreadsheets.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
              {i < steps.length - 1 && <div className="hidden lg:block step-connector" />}
              <div className="bp-card rounded-2xl p-6">
                <span className="text-5xl font-bold font-outfit text-[#E2DCD0]">{step.number}</span>
                <div className="w-10 h-10 rounded-xl bg-[#1A362D] flex items-center justify-center my-4">
                  <step.icon className="h-5 w-5 text-[#F7F5F0]" />
                </div>
                <h3 className="text-sm font-semibold font-outfit text-[#1A2421] mb-2">{step.title}</h3>
                <p className="text-[#586C62] text-sm font-manrope leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bp-card rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-[#EAE5D9] text-[#1A362D] mb-6 font-manrope uppercase tracking-wider">
                <BadgeCheck className="w-3 h-3" /> Professional Invoicing
              </span>
              <h3 className="text-2xl md:text-3xl font-medium font-outfit text-[#1A2421] mb-5">
                Billing & Invoicing with<br />Auto-Reconciliation
              </h3>
              <p className="text-[#586C62] font-manrope mb-7 leading-relaxed text-sm">
                Attach professional invoices, bills, and quotations to your payment links. BukkaPay automatically matches every payment to the right invoice — giving you real-time financial clarity.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Auto-reconciliation — payments matched to invoices instantly",
                  "Billing schedules for recurring clients",
                  "PDF invoices, quotations & receipts supported",
                  "Real-time payment notifications & reminders",
                  "Multi-currency support (USD, EUR, ZAR, NGN…)",
                  "Full payment history & financial reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#586C62] font-manrope text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#EAE5D9] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1A362D]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 group w-fit" data-testid="payment-link-cta">
                Create Your First Link
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="bp-card rounded-2xl p-6 border border-[#E2DCD0]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A362D] flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-[#F7F5F0]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-outfit text-[#1A2421]">Payment Link</p>
                    <p className="text-xs text-[#586C62] font-manrope">pay.bukkapay.com/inv-001</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#EAE5D9] text-[#1A362D] font-manrope uppercase tracking-wider">Active</span>
              </div>
              <div className="bg-[#F7F5F0] rounded-xl p-5 mb-5 border border-[#E2DCD0]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-[#586C62] font-manrope mb-0.5">Invoice</p>
                    <p className="text-sm font-semibold font-outfit text-[#1A2421]">Web Design Project</p>
                    <p className="text-xs text-[#586C62] font-manrope">Client: Acme Corp</p>
                  </div>
                  <div className="flex items-center gap-1"><Receipt className="w-3.5 h-3.5 text-[#1A362D]" /><span className="text-xs text-[#586C62] font-manrope">INV-001.pdf</span></div>
                </div>
                <div className="space-y-2 mb-4 pt-3 border-t border-[#E2DCD0]">
                  {[["Website Redesign", "$2,500"], ["Brand Identity", "$1,200"], ["SEO Setup", "$800"]].map(([l, v]) => (
                    <div key={l} className="flex justify-between text-sm">
                      <span className="text-[#586C62] font-manrope">{l}</span>
                      <span className="text-[#1A2421] font-outfit font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#E2DCD0]">
                  <span className="text-sm font-medium text-[#1A2421] font-manrope">Total</span>
                  <span className="text-xl font-bold text-[#1A2421] font-outfit">$4,500.00</span>
                </div>
              </div>
              <button className="w-full bg-[#1A362D] text-[#F7F5F0] rounded-xl py-3.5 font-semibold font-manrope text-sm hover:bg-[#142922] transition-colors">
                Pay Now — Secure Payment
              </button>
              <div className="flex items-center justify-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-[#586C62] text-xs font-manrope"><Lock className="w-3 h-3" />256-bit SSL</div>
                <div className="flex items-center gap-1 text-[#586C62] text-xs font-manrope"><ShieldCheck className="w-3 h-3" />PCI Compliant</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── How It Works ─── */
const HowItWorks = () => {
  const steps = [
    { icon: UserPlus, step: "01", title: "Create Account", description: "Sign up in 60 seconds with just your email or phone." },
    { icon: Wallet, step: "02", title: "Fund Wallet", description: "Add money via bank transfer, mobile money, or card." },
    { icon: Send, step: "03", title: "Start Transacting", description: "Send money, pay bills, or generate virtual cards instantly." }
  ];
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="overline mb-3 block">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">Get Started in Three Steps</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.18 }} className="relative text-center" data-testid={`step-${i + 1}`}>
              {i < steps.length - 1 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-[#D4CEC4]" />}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-7">
                <div className="absolute inset-0 rounded-full bg-[#D4CEC4]" />
                <div className="relative w-16 h-16 rounded-2xl bg-[#1A362D] flex items-center justify-center shadow-lg">
                  <step.icon className="h-7 w-7 text-[#F7F5F0]" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#EAE5D9] border-2 border-[#D4CEC4] text-[#1A362D] text-xs font-bold flex items-center justify-center font-outfit">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold font-outfit text-[#1A2421] mb-3">{step.title}</h3>
              <p className="text-[#586C62] font-manrope max-w-xs mx-auto text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Security ─── */
const Security = () => {
  const items = [
    { icon: Lock, title: "256-bit Encryption", description: "Bank-level encryption protects every transaction." },
    { icon: Fingerprint, title: "Biometric Auth", description: "Secure login with fingerprint or face recognition." },
    { icon: ShieldAlert, title: "AI Fraud Detection", description: "Real-time monitoring catches threats before they happen." },
    { icon: FileCheck, title: "Compliance Ready", description: "Built to meet regulatory standards across markets." },
  ];
  return (
    <section id="security" className="py-24 md:py-32 bg-[#F7F5F0] relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#EAE5D9] rounded-l-[4rem] -z-0 hidden md:block" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="overline mb-3 block">Enterprise Security</span>
            <h2 className="text-3xl md:text-4xl tracking-tight font-medium font-outfit text-[#1A2421] mb-5">
              Your Money is<br />Safe With Us
            </h2>
            <p className="text-[#586C62] font-manrope mb-9 leading-relaxed text-sm">
              We've built BukkaPay with security at its core, so you can focus on what matters — growing your money.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bp-card rounded-2xl p-5 group">
                  <div className="w-10 h-10 rounded-xl bg-[#EAE5D9] flex items-center justify-center mb-3 group-hover:bg-[#1A362D] transition-colors duration-300">
                    <item.icon className="h-4 w-4 text-[#1A362D] group-hover:text-[#F7F5F0] transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold font-outfit text-[#1A2421] mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-[#586C62] font-manrope">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-[#1A362D]/8 animate-pulse" />
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-[#1A362D]/20 animate-spin" style={{ animationDuration: "22s" }} />
              <div className="absolute inset-14 rounded-full border-2 border-dashed border-[#D1603D]/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[#1A362D] flex items-center justify-center shadow-xl shadow-[#1A362D]/20">
                  <ShieldCheck className="h-9 w-9 text-[#F7F5F0]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Why BukkaPay ─── */
const WhyBukkaPay = () => {
  const advantages = [
    { icon: Zap, title: "5-Second Settlements", stat: "5s", description: "While traditional banks take 3–5 days, BukkaPay settles payments in under 5 seconds. Your money moves at the speed of now." },
    { icon: DollarSign, title: "Up to 80% Lower Fees", stat: "0.5%", description: "We cut out the middlemen. Our flat-rate pricing means more money stays in your pocket — not lost to excessive charges." },
    { icon: Globe2, title: "30+ Countries, One App", stat: "30+", description: "Send money from Lagos to London, Nairobi to New Delhi. One wallet, no currency headaches, no hidden exchange markups." },
    { icon: ShieldCheck, title: "Bank-Level, Human-First", stat: "99.9%", description: "Military-grade encryption meets 24/7 human support. If something goes wrong, a real person helps you — not a chatbot." }
  ];
  return (
    <section className="py-24 md:py-32 bg-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
          <span className="overline mb-3 block">The BukkaPay Advantage</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421] max-w-lg mx-auto">
            Why Africa Chooses BukkaPay
          </h2>
          <p className="text-[#586C62] font-manrope mt-4 max-w-2xl mx-auto text-sm">
            We didn't just build another payment app. We built the payment infrastructure Africa deserves — fast, fair, and built for the way you actually do business.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bp-card rounded-2xl p-8 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#1A362D] flex items-center justify-center shrink-0">
                  <a.icon className="h-7 w-7 text-[#F7F5F0]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold font-outfit text-[#1A2421]">{a.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EAE5D9] text-[#1A362D] font-manrope">{a.stat}</span>
                  </div>
                  <p className="text-[#586C62] font-manrope text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── For Business ─── */
const ForBusiness = () => {
  const benefits = [
    { icon: Banknote, title: "Accept Payments Everywhere", description: "Payment links, QR codes, invoices — give your customers every way to pay you. Money lands in your wallet instantly." },
    { icon: PieChart, title: "See Every Rand & Naira", description: "Real-time dashboard shows who paid, who hasn't, and where your revenue is growing. No more spreadsheet guesswork." },
    { icon: Code, title: "Plug Into Your Stack", description: "REST APIs, webhooks, and SDKs. Integrate BukkaPay into your app, website, or workflow in under an hour." },
  ];
  return (
    <section id="business" className="py-24 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="overline mb-3 block">For Businesses</span>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">
              Power Your<br />Business Growth
            </h2>
          </div>
          <div className="md:col-span-5 text-[#586C62] font-manrope text-sm leading-relaxed">
            Everything your business needs to accept, manage, and grow revenue — in a single elegant dashboard.
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bp-card rounded-2xl p-8 group">
              <div className="w-12 h-12 rounded-xl bg-[#EAE5D9] flex items-center justify-center mb-5 group-hover:bg-[#1A362D] transition-colors duration-300">
                <b.icon className="h-5 w-5 text-[#1A362D] group-hover:text-[#F7F5F0] transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold font-outfit text-[#1A2421] mb-3">{b.title}</h3>
              <p className="text-[#586C62] font-manrope text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <a href="mailto:marketing@bukkapay.com" className="btn-primary flex items-center gap-2 group mx-auto w-fit" data-testid="business-contact-cta">
            Contact Sales <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Use Cases ─── */
const UseCases = () => {
  const cases = [
    { icon: Laptop, title: "Freelancers & Creators", tagline: "Send a link, get paid in minutes — not months", description: "Create a payment link, send it to your client, and get paid before they forget. No invoicing apps, no bank details — just a link." },
    { icon: Store, title: "Merchants & SMEs", tagline: "Your phone is now a payment terminal", description: "Generate a QR code or payment link, stick it at your counter, and watch money flow directly into your wallet. No POS machine required." },
    { icon: HomeIcon, title: "Landlords & Property", tagline: "Stop chasing tenants for rent", description: "Send a payment link on the 1st, get paid by the 2nd. Attach lease agreements, get instant confirmations." },
    { icon: Repeat, title: "Cross-Border Trade", tagline: "Pay a supplier in Lagos from Johannesburg in 5 seconds", description: "Real exchange rates, transparent fees, instant settlement. No more SWIFT delays, no hidden markups." },
    { icon: HandCoins, title: "Service Providers", tagline: "Bill clients professionally, get paid the same day", description: "Send itemized invoices with a pay button. Your clients click once, you get paid instantly. No more 'payment pending'." },
    { icon: Globe2, title: "NGOs & Fundraising", tagline: "Collect donations with one shareable link", description: "Create a campaign link, share it everywhere, and track every contribution in real-time. Auto-send receipts to donors." },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
          <span className="overline mb-3 block">Built For You</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">One Platform, Every Use Case</h2>
          <p className="text-[#586C62] font-manrope mt-4 max-w-xl mx-auto text-sm">
            Whether you're invoicing a client in London or collecting rent in Lagos, BukkaPay adapts to how you work — not the other way around.
          </p>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeUp} className="bp-card rounded-2xl p-7 group" data-testid={`usecase-${i}`}>
              <div className="w-11 h-11 rounded-xl bg-[#EAE5D9] flex items-center justify-center mb-5 group-hover:bg-[#1A362D] transition-colors duration-300">
                <c.icon className="h-5 w-5 text-[#1A362D] group-hover:text-[#F7F5F0] transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold font-outfit text-[#1A2421] mb-1">{c.title}</h3>
              <p className="text-xs font-bold text-[#D1603D] mb-3 font-manrope">{c.tagline}</p>
              <p className="text-[#586C62] text-sm font-manrope leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="https://app.bukkapay.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 group mx-auto w-fit">
            Find Your Use Case <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Pricing ─── */
const Pricing = () => {
  const plans = [
    { name: "Starter", price: "Free", period: "", description: "Best for individuals and small sellers getting started.", features: ["Create unlimited payment links", "Basic invoicing", "Accept payments instantly", "Real-time payment confirmation", "Dashboard access"], cta: "Coming Soon", popular: false },
    { name: "Pro", price: "$20", period: "/month", description: "Best for freelancers and growing businesses.", features: ["Everything in Starter", "Advanced invoicing (branding, notes, reminders)", "Payment analytics & insights", "Priority support", "Better organization & tracking"], cta: "Coming Soon", popular: true },
    { name: "Business", price: "Custom", period: "", description: "Best for companies and high-volume businesses.", features: ["Everything in Pro", "Team access & roles", "API access (for integrations)", "Custom checkout experience", "Dedicated support"], cta: "Contact Sales", popular: false }
  ];
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="overline mb-3 block">Pricing</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EAE5D9] text-[#D1603D] border border-[#E2DCD0] font-manrope mb-4 uppercase tracking-wider">Available at launch</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-[#586C62] font-manrope max-w-md mx-auto text-sm">Start for free. Only pay when you get paid.</p>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {plans.map((plan, i) => (
            <motion.div key={i} variants={fadeUp}
              className={`rounded-2xl relative transition-all duration-500 hover:-translate-y-2 ${plan.popular ? "bp-card-featured p-10 md:-mt-4" : "bp-card p-8"}`}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              whileHover={{ scale: 1.02 }}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D1603D] text-white text-xs font-bold px-5 py-1.5 rounded-full font-manrope uppercase tracking-wider">Most Popular</span>
              )}
              <h3 className={`text-lg font-semibold font-outfit ${plan.popular ? "text-[#F7F5F0]" : "text-[#1A2421]"}`}>{plan.name}</h3>
              <div className="mt-4 mb-2 flex items-baseline gap-1">
                <span className={`text-5xl font-bold font-outfit ${plan.popular ? "text-[#F7F5F0]" : "text-[#1A2421]"}`}>{plan.price}</span>
                {plan.period && <span className={`text-lg font-manrope ${plan.popular ? "text-[#F7F5F0]/60" : "text-[#586C62]"}`}>{plan.period}</span>}
              </div>
              <p className={`text-sm mb-7 font-manrope leading-relaxed ${plan.popular ? "text-[#F7F5F0]/70" : "text-[#586C62]"}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-[#F7F5F0]/20" : "bg-[#EAE5D9]"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-[#F7F5F0]" : "text-[#1A362D]"}`} />
                    </div>
                    <span className={`text-sm font-manrope ${plan.popular ? "text-[#F7F5F0]/80" : "text-[#586C62]"}`}>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full rounded-full py-3.5 font-medium font-manrope text-sm transition-all duration-300 ${plan.popular ? "bg-[#D1603D] text-white hover:bg-[#B55234]" : "border border-[#E2DCD0] text-[#1A2421] hover:bg-[#EAE5D9] hover:border-[#1A362D]"}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
        <motion.p className="text-center text-[#586C62] text-sm font-manrope mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Transaction fees apply per payment. No hidden charges.
        </motion.p>
      </div>
    </section>
  );
};

/* ─── Availability ─── */
const Availability = () => {
  const regions = ["South Africa", "Nigeria", "Kenya", "Ghana", "Tanzania", "Uganda", "Zimbabwe", "Botswana", "Zambia", "Mozambique", "United Kingdom", "India"];
  const stats = [
    { end: 30, suffix: "+", label: "Countries Supported" },
    { end: 5, suffix: "s", label: "Settlement Time" },
    { end: 99.9, suffix: "%", label: "Platform Uptime" },
    { end: 80, suffix: "%", label: "Lower Fees vs Banks" },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#1A362D] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}><StatCounter {...stat} /></motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <span className="overline text-[#D1603D] mb-3 block">Global Reach</span>
          <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#F7F5F0]">Available Worldwide</h2>
        </motion.div>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {regions.map((region, i) => (
            <motion.div key={region} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#F7F5F0]/8 border border-[#F7F5F0]/10">
              <MapPin className="h-3.5 w-3.5 text-[#D1603D] shrink-0" />
              <span className="text-sm text-[#F7F5F0]/75 font-manrope">{region}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── FAQ ─── */
const FAQ = () => {
  const faqs = [
    { q: "What is BukkaPay?", a: "BukkaPay is a digital wallet and payment infrastructure platform built for Africa and beyond. Send money, create invoices, accept payments, and manage your finances — all from one app." },
    { q: "How do I create a virtual card?", a: "After signing up and funding your wallet, generate a virtual card instantly from the app for secure online shopping anywhere Visa is accepted." },
    { q: "Is BukkaPay safe?", a: "Absolutely. We use 256-bit AES encryption, multi-factor authentication, AI-powered fraud detection, and are PCI DSS compliant. Your money is protected by the same standards used by global banks." },
    { q: "What countries are supported?", a: "BukkaPay is available in 30+ countries across Africa, with presence in the UK and India. We're expanding rapidly — new markets launch every quarter." },
    { q: "Are there hidden fees?", a: "Never. All charges are shown upfront before you confirm. Our flat-rate pricing starts at just 0.5% — up to 80% lower than traditional payment processors." },
    { q: "How fast are settlements?", a: "Payments settle in under 5 seconds. Whether you're receiving money from a payment link or a wallet transfer, funds appear in your account almost instantly." },
    { q: "Can I use BukkaPay for my business?", a: "Yes! BukkaPay offers a full business suite — accept payments, send invoices, create payment links, access analytics, and integrate via API. Start with our free plan or upgrade for advanced features." },
    { q: "How do payment links work?", a: "Create a link, set the amount, optionally attach an invoice, and share it via WhatsApp, email, or SMS. Your client clicks, pays, and you receive instant confirmation. It's that simple." },
  ];
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="overline mb-3 block">FAQ</span>
              <h2 className="text-3xl sm:text-4xl tracking-tight font-medium font-outfit text-[#1A2421]">Frequently Asked Questions</h2>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bp-card rounded-2xl px-6 border-0" data-testid={`faq-item-${i}`}>
                    <AccordionTrigger className="font-outfit font-semibold text-[#1A2421] py-5 hover:no-underline text-left text-sm">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#586C62] font-manrope leading-relaxed pb-5 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CTA = () => (
  <section className="py-24 md:py-32 bg-[#1A362D] relative overflow-hidden">
    <div className="absolute inset-0 dot-pattern opacity-10" />
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D1603D]/15 rounded-full blur-[120px]" />
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <motion.div variants={fadeUp}><span className="overline text-[#D1603D] mb-4 block">The Future of African Payments</span></motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium font-outfit text-[#F7F5F0]">
          Stop Chasing Payments.<br />Get Paid Smarter.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#F7F5F0]/65 mt-7 text-base max-w-2xl mx-auto font-manrope leading-relaxed">
          BukkaPay is launching soon. Join the waitlist now and be among the first to experience the fastest way to collect payments across Africa.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 bg-[#F7F5F0] text-[#1A362D] rounded-full px-10 py-4 font-bold hover:bg-white shadow-lg transition-all duration-300 group font-manrope text-sm"
            data-testid="cta-primary">
            Join the Waitlist <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#F7F5F0]/30 text-[#F7F5F0] rounded-full px-10 py-4 font-bold hover:bg-[#F7F5F0]/10 transition-all duration-300 group font-manrope text-sm">
            <Sparkles className="h-4 w-4 text-[#D1603D]" />Get Early Access
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => {
  const year = new Date().getFullYear();
  const cols = [
    { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Security", href: "#security" }, { label: "Pricing", href: "#pricing" }, { label: "API Docs", href: "#" }] },
    { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Press", href: "#" }] },
    { title: "Contact", links: [{ label: "hello@bukkapay.com", href: "mailto:hello@bukkapay.com", external: true }, { label: "marketing@bukkapay.com", href: "mailto:marketing@bukkapay.com", external: true }] },
    { title: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms & Conditions", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }] },
  ];
  const socials = [
    { label: "X", href: "https://x.com/bukkapay", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { label: "Instagram", href: "https://instagram.com/bukkapay", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { label: "LinkedIn", href: "https://linkedin.com/company/bukkapay", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label: "Facebook", href: "https://facebook.com/bukkapay", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  ];

  return (
    <footer className="relative py-20 bg-[#F7F5F0] border-t border-[#E2DCD0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-6 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/assets/logo.png" alt="BukkaPay" className="h-9 w-9 rounded-xl object-cover" />
              <span className="text-xl font-bold font-outfit text-[#1A2421]">BukkaPay</span>
            </div>
            <p className="text-[#586C62] font-manrope text-sm leading-relaxed max-w-xs mb-6">
              The future of African payments. Send, receive, and grow your money with confidence.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#EAE5D9] flex items-center justify-center text-[#586C62] hover:bg-[#1A362D] hover:text-[#F7F5F0] transition-all duration-300"
                  aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-[#586C62]/60 font-manrope">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external
                      ? <a href={link.href} className="text-[#586C62] hover:text-[#1A362D] transition-colors text-sm font-manrope flex items-center gap-1.5"><Mail className="w-3 h-3" />{link.label}</a>
                      : <Link to={link.href} className="text-[#586C62] hover:text-[#1A362D] transition-colors text-sm font-manrope">{link.label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2DCD0] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#586C62]/60 font-manrope">© {year} BukkaPay. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[{ l: "Privacy", h: "/privacy" }, { l: "Terms", h: "/terms" }, { l: "Cookies", h: "/cookies" }].map(({ l, h }) => (
              <Link key={l} to={h} className="text-xs text-[#586C62]/60 hover:text-[#1A362D] font-manrope transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─── Legal Page Shell ─── */
const LegalPage = ({ title, lastUpdated, children }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <Header />
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-medium font-outfit text-[#1A2421] mb-2">{title}</h1>
          <p className="text-[#586C62] font-manrope mb-12 text-sm">Last updated: {lastUpdated}</p>
          <div className="space-y-8 text-[#586C62] font-manrope leading-relaxed text-sm">{children}</div>
          <div className="mt-16 pt-8 border-t border-[#E2DCD0]">
            <Link to="/" className="text-[#1A362D] hover:text-[#D1603D] transition-colors font-manrope flex items-center gap-2 text-sm font-semibold">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const lh2 = "text-base font-semibold text-[#1A2421] mb-2 font-outfit";
const lli = "list-disc list-inside space-y-1 ml-4";

const PrivacyPolicy = () => (
  <LegalPage title="Privacy Policy" lastUpdated="April 2026">
    <section><h2 className={lh2}>1. Introduction</h2><p>BukkaPay ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p></section>
    <section><h2 className={lh2}>2. Information We Collect</h2><ul className={lli}><li>Personal identification information (name, email address, phone number)</li><li>Financial information (bank account details, payment card information)</li><li>Identity verification documents</li><li>Transaction data and payment history</li><li>Device information and usage data</li></ul></section>
    <section><h2 className={lh2}>3. How We Use Your Information</h2><ul className={lli}><li>Process transactions and send related notifications</li><li>Verify your identity and prevent fraud</li><li>Comply with legal and regulatory requirements</li><li>Improve and personalize our services</li><li>Provide customer support</li></ul></section>
    <section><h2 className={lh2}>4. Data Sharing</h2><p>We do not sell your personal information. We may share your data with payment processors, identity verification services, and law enforcement when required by law.</p></section>
    <section><h2 className={lh2}>5. Contact Us</h2><p>Email: <a href="mailto:privacy@bukkapay.com" className="text-[#1A362D] hover:text-[#D1603D]">privacy@bukkapay.com</a></p></section>
  </LegalPage>
);

const TermsConditions = () => (
  <LegalPage title="Terms & Conditions" lastUpdated="April 2026">
    <section><h2 className={lh2}>1. Acceptance of Terms</h2><p>By accessing or using BukkaPay's services, website, or mobile application, you agree to be bound by these Terms and Conditions.</p></section>
    <section><h2 className={lh2}>2. Eligibility</h2><p>To use BukkaPay, you must be at least 18 years old and have the legal capacity to enter into a binding agreement.</p></section>
    <section><h2 className={lh2}>3. Account Registration</h2><ul className={lli}><li>You must provide accurate and complete registration information</li><li>You are responsible for maintaining the confidentiality of your account credentials</li><li>You must notify us immediately of any unauthorized use of your account</li></ul></section>
    <section><h2 className={lh2}>4. Services</h2><p>BukkaPay provides digital payment services including sending and receiving payments, payment link generation, invoice creation and billing, and cross-border payment processing.</p></section>
    <section><h2 className={lh2}>5. Prohibited Activities</h2><ul className={lli}><li>Money laundering or terrorist financing</li><li>Fraudulent transactions or deceptive practices</li><li>Transactions involving illegal goods or services</li></ul></section>
    <section><h2 className={lh2}>6. Contact</h2><p>Email: <a href="mailto:legal@bukkapay.com" className="text-[#1A362D] hover:text-[#D1603D]">legal@bukkapay.com</a></p></section>
  </LegalPage>
);

const CookiePolicy = () => (
  <LegalPage title="Cookie Policy" lastUpdated="April 2026">
    <section><h2 className={lh2}>1. What Are Cookies</h2><p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences.</p></section>
    <section><h2 className={lh2}>2. Types of Cookies We Use</h2><ul className={lli}><li>Essential cookies — required for the website to function properly</li><li>Performance cookies — help us understand how visitors interact with the website</li><li>Functional cookies — remember your preferences and settings</li><li>Marketing cookies — used to deliver relevant advertisements</li></ul></section>
    <section><h2 className={lh2}>3. Managing Cookies</h2><p>You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p></section>
    <section><h2 className={lh2}>4. Contact Us</h2><p>Email: <a href="mailto:privacy@bukkapay.com" className="text-[#1A362D] hover:text-[#D1603D]">privacy@bukkapay.com</a></p></section>
  </LegalPage>
);

/* ─── Home Page ─── */
const Home = () => (
  <div className="min-h-screen bg-[#F7F5F0]">
    <ScrollProgress />
    <div className="grain-overlay" />
    <Header />
    <Hero />
    <TrustMarquee />
    <Waitlist />
    <EarlyAccessBenefits />
    <Features />
    <TrustStrip text="No more chasing clients. No more fake payment screenshots." ctaText="Join the Waitlist" />
    <PaymentLinks />
    <HowItWorks />
    <Security />
    <TrustStrip text="Built for Africa. Launching soon in 10+ countries." ctaText="Get Early Access" />
    <WhyBukkaPay />
    <ForBusiness />
    <UseCases />
    <TrustStrip text="Whether you sell on WhatsApp or run an enterprise — BukkaPay works for you." ctaText="Join Waitlist" />
    <Pricing />
    <Availability />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

/* ─── App ─── */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
