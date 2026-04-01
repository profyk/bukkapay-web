import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
  X
} from "lucide-react";
import { useState } from "react";

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
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#F7F5F0]/80 border-b border-[#E2DCD0]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" data-testid="logo-link">
            <div className="w-10 h-10 bg-[#1A362D] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg font-outfit">B</span>
            </div>
            <span className="text-2xl font-bold text-[#1A2421] font-outfit">BukkaPay</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope" data-testid="nav-features">Features</a>
            <a href="#how-it-works" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope" data-testid="nav-how-it-works">How It Works</a>
            <a href="#use-cases" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope" data-testid="nav-use-cases">Use Cases</a>
            <a href="#pricing" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope" data-testid="nav-pricing">Pricing</a>
          </nav>
          
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#1A2421] font-medium font-manrope hover:text-[#586C62] transition-colors" data-testid="login-btn">
              Log In
            </button>
            <button className="bg-[#1A362D] text-white rounded-full px-6 py-3 font-medium font-manrope hover:bg-[#142922] transition-all duration-300" data-testid="get-started-btn">
              Get Started Free
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#1A2421]" /> : <Menu className="w-6 h-6 text-[#1A2421]" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-6 border-t border-[#E2DCD0]"
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope py-2">Features</a>
              <a href="#how-it-works" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope py-2">How It Works</a>
              <a href="#use-cases" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope py-2">Use Cases</a>
              <a href="#pricing" className="text-[#586C62] hover:text-[#1A2421] transition-colors font-manrope py-2">Pricing</a>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#E2DCD0]">
                <button className="text-[#1A2421] font-medium font-manrope py-2">Log In</button>
                <button className="bg-[#1A362D] text-white rounded-full px-6 py-3 font-medium font-manrope">Get Started Free</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F5F0]">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/c5bf3509-25f5-4086-8c12-fb0907efadd6/images/b79aaeabc5dc2c886e40be41857b0d1574b5936fa501ca384352a89633716e0c.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left Content */}
          <motion.div className="lg:col-span-7" variants={fadeUp}>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
              Africa's Payment Revolution
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none font-medium text-[#1A2421] mt-6 font-outfit">
              Get Paid<br />
              <span className="text-[#1A362D]">Without Borders</span>
            </h1>
            <p className="text-lg leading-relaxed text-[#586C62] mt-8 max-w-xl font-manrope">
              BukkaPay empowers freelancers, businesses, and service providers across Africa to send, receive, and collect payments seamlessly — locally and globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="bg-[#1A362D] text-white rounded-full px-8 py-4 font-medium font-manrope hover:bg-[#142922] transition-all duration-300 flex items-center justify-center gap-2 group" data-testid="hero-cta-primary">
                Start Collecting Payments
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#E2DCD0] text-[#1A2421] rounded-full px-8 py-4 font-medium font-manrope hover:border-[#1A2421] transition-all duration-300" data-testid="hero-cta-secondary">
                See How It Works
              </button>
            </div>
            
            {/* Trust Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[#E2DCD0]">
              <div>
                <p className="text-3xl font-bold text-[#1A2421] font-outfit">50K+</p>
                <p className="text-sm text-[#586C62] font-manrope">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A2421] font-outfit">$12M+</p>
                <p className="text-sm text-[#586C62] font-manrope">Processed Monthly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A2421] font-outfit">30+</p>
                <p className="text-sm text-[#586C62] font-manrope">African Countries</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Feature Preview Card */}
          <motion.div className="lg:col-span-5" variants={fadeUp}>
            <div className="bg-white border border-[#E2DCD0] rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1A362D] rounded-xl flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#1A2421] font-manrope">Payment Link</p>
                  <p className="text-sm text-[#586C62] font-manrope">Invoice #INV-2024-001</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-[#E2DCD0]">
                  <span className="text-[#586C62] font-manrope">Web Design Project</span>
                  <span className="font-medium text-[#1A2421] font-manrope">$2,500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E2DCD0]">
                  <span className="text-[#586C62] font-manrope">Brand Identity</span>
                  <span className="font-medium text-[#1A2421] font-manrope">$1,200.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-[#1A2421] font-manrope">Total</span>
                  <span className="text-2xl font-bold text-[#1A362D] font-outfit">$3,700.00</span>
                </div>
              </div>
              
              <button className="w-full bg-[#D1603D] text-white rounded-full py-4 font-medium font-manrope hover:bg-[#B55234] transition-all duration-300" data-testid="preview-pay-btn">
                Pay Now
              </button>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8 opacity-50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Trust Marquee Section
const TrustMarquee = () => {
  const partners = [
    "MTN Mobile Money", "Flutterwave", "Paystack", "Chipper Cash", 
    "M-Pesa", "Access Bank", "Zenith Bank", "GTBank", "UBA"
  ];
  
  return (
    <section className="bg-[#F7F5F0] border-y border-[#E2DCD0] py-8">
      <Marquee speed={40} gradient gradientColor="#F7F5F0" gradientWidth={100}>
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-xl font-medium text-[#586C62]/60 font-outfit">{partner}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// Features Bento Grid
const Features = () => {
  const features = [
    {
      icon: Link2,
      title: "Payment Links",
      description: "Create shareable payment links in seconds. Request money from anyone, anywhere in the world.",
      span: "md:col-span-8"
    },
    {
      icon: FileText,
      title: "Invoices & Quotations",
      description: "Attach professional invoices to your payment requests for structured tracking.",
      span: "md:col-span-4"
    },
    {
      icon: Globe2,
      title: "Cross-Border Payments",
      description: "Send and receive money across 30+ African countries and beyond with competitive rates.",
      span: "md:col-span-4",
      image: "https://images.pexels.com/photos/6631414/pexels-photo-6631414.jpeg"
    },
    {
      icon: Wallet,
      title: "BukkaPay Wallet",
      description: "Store funds securely, pay instantly, and withdraw to any bank account in Africa.",
      span: "md:col-span-4"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade security with encrypted transactions and fraud protection.",
      span: "md:col-span-4"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Receive payments directly to your bank or wallet with same-day settlements.",
      span: "md:col-span-6"
    },
    {
      icon: Send,
      title: "Payment Reminders",
      description: "Automatically remind clients about pending payments to improve collection rates.",
      span: "md:col-span-6"
    }
  ];
  
  return (
    <section id="features" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#1A2421] mt-4 font-outfit">
            Everything You Need<br />to Get Paid
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`${feature.span} bg-white border border-[#E2DCD0] rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${feature.image ? 'relative overflow-hidden' : ''}`}
              variants={fadeUp}
              data-testid={`feature-card-${index}`}
            >
              {feature.image && (
                <div className="absolute inset-0 -z-10 opacity-10">
                  <img src={feature.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="w-14 h-14 bg-[#EAE5D9] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#1A362D]" />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-medium text-[#1A2421] font-outfit">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-[#586C62] mt-3 font-manrope">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in minutes with just your email and phone number. Verify your identity to unlock all features."
    },
    {
      number: "02",
      title: "Generate Payment Link",
      description: "Create a payment link with amount, description, and optional invoice. Share it via WhatsApp, email, or SMS."
    },
    {
      number: "03",
      title: "Get Paid Instantly",
      description: "Receive payments via card or wallet. Funds settle instantly to your BukkaPay wallet or bank account."
    }
  ];
  
  return (
    <section id="how-it-works" className="bg-[#1A362D] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#F7F5F0] mt-4 font-outfit">
            Start Collecting in<br />3 Simple Steps
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={fadeUp}
              data-testid={`step-${index + 1}`}
            >
              <span className="text-8xl font-bold text-[#F7F5F0]/10 absolute -top-8 -left-4 font-outfit">{step.number}</span>
              <div className="relative z-10 pt-12">
                <h3 className="text-xl sm:text-2xl tracking-tight font-medium text-[#F7F5F0] font-outfit">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#F7F5F0]/70 mt-4 font-manrope">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 text-[#F7F5F0]/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Use Cases
const UseCases = () => {
  const cases = [
    {
      icon: Users,
      title: "Freelancers",
      description: "Invoice clients globally and get paid in your local currency. Track all your projects in one dashboard.",
      image: "https://images.unsplash.com/photo-1765648763932-43a3e2f8f35c"
    },
    {
      icon: Building2,
      title: "Small Businesses",
      description: "Accept payments from customers, manage invoices, and reconcile your books effortlessly.",
      image: "https://images.pexels.com/photos/36827824/pexels-photo-36827824.jpeg"
    },
    {
      icon: ShoppingBag,
      title: "Merchants",
      description: "Sell online or in-store with payment links. Perfect for e-commerce and marketplace sellers.",
      image: null
    },
    {
      icon: HomeIcon,
      title: "Rental Collections",
      description: "Collect rent, utilities, and service bills with automated reminders and tracking.",
      image: null
    }
  ];
  
  return (
    <section id="use-cases" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#1A2421] mt-4 font-outfit">
            Built for Africa,<br />Made for Everyone
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {cases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-[#E2DCD0] rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              variants={fadeUp}
              data-testid={`use-case-${index}`}
            >
              {useCase.image && (
                <div className="absolute inset-0 -z-10 opacity-5">
                  <img src={useCase.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#EAE5D9] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-7 h-7 text-[#1A362D]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl tracking-tight font-medium text-[#1A2421] font-outfit">
                    {useCase.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#586C62] mt-3 font-manrope">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for freelancers getting started",
      features: [
        "Unlimited payment links",
        "Basic invoicing",
        "Withdraw to bank account",
        "Email support",
        "1.5% transaction fee"
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
        "Everything in Starter",
        "Advanced invoicing & quotes",
        "Priority settlements",
        "Team accounts (up to 5)",
        "1.0% transaction fee",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Business",
        "Unlimited team accounts",
        "Custom integrations",
        "Dedicated account manager",
        "Custom transaction fees",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="bg-[#EAE5D9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#1A2421] mt-4 font-outfit">
            Simple, Transparent<br />Pricing
          </h2>
          <p className="text-base leading-relaxed text-[#586C62] mt-4 max-w-xl mx-auto font-manrope">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white border ${plan.popular ? 'border-[#1A362D] ring-2 ring-[#1A362D]' : 'border-[#E2DCD0]'} rounded-2xl p-8 sm:p-10 relative`}
              variants={fadeUp}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D1603D] text-white text-xs font-bold px-4 py-1 rounded-full font-manrope">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-medium text-[#1A2421] font-outfit">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#1A2421] font-outfit">{plan.price}</span>
                {plan.period && <span className="text-[#586C62] font-manrope">{plan.period}</span>}
              </div>
              <p className="text-sm text-[#586C62] mt-2 font-manrope">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1A362D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#586C62] font-manrope">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full mt-8 rounded-full py-4 font-medium font-manrope transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#1A362D] text-white hover:bg-[#142922]' 
                    : 'border border-[#E2DCD0] text-[#1A2421] hover:border-[#1A2421]'
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

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      quote: "BukkaPay transformed how I collect payments from international clients. I used to wait weeks for wire transfers, now I get paid in hours.",
      author: "Adaeze Okonkwo",
      role: "Freelance Designer, Lagos",
      avatar: "https://images.pexels.com/photos/7413964/pexels-photo-7413964.jpeg"
    },
    {
      quote: "Managing rent collections for my 50+ properties was a nightmare. BukkaPay's automated reminders and tracking saved me countless hours.",
      author: "Kwame Asante",
      role: "Property Manager, Accra",
      avatar: null
    },
    {
      quote: "Our marketplace processed $100K in its first month using BukkaPay. The integration was seamless and settlements are lightning fast.",
      author: "Fatima Mwangi",
      role: "E-commerce Founder, Nairobi",
      avatar: null
    }
  ];
  
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#D1603D] font-manrope">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#1A2421] mt-4 font-outfit">
            Loved by Businesses<br />Across Africa
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-[#E2DCD0] rounded-2xl p-8 sm:p-10"
              variants={fadeUp}
              data-testid={`testimonial-${index}`}
            >
              <p className="text-lg italic text-[#1A2421] font-cormorant leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-[#EAE5D9] rounded-full overflow-hidden">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#1A362D] font-bold font-outfit">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-[#1A2421] font-manrope">{testimonial.author}</p>
                  <p className="text-sm text-[#586C62] font-manrope">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="bg-[#1A362D] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-medium text-[#F7F5F0] font-outfit">
            Ready to Start<br />Getting Paid?
          </h2>
          <p className="text-lg leading-relaxed text-[#F7F5F0]/70 mt-6 max-w-xl mx-auto font-manrope">
            Join 50,000+ freelancers and businesses across Africa who trust BukkaPay for their payment needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="bg-[#D1603D] text-white rounded-full px-8 py-4 font-medium font-manrope hover:bg-[#B55234] transition-all duration-300 flex items-center justify-center gap-2 group" data-testid="cta-primary">
              Create Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-[#F7F5F0]/30 text-[#F7F5F0] rounded-full px-8 py-4 font-medium font-manrope hover:border-[#F7F5F0] transition-all duration-300" data-testid="cta-secondary">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const links = {
    product: ["Features", "Pricing", "API Docs", "Integrations"],
    company: ["About Us", "Careers", "Blog", "Press"],
    resources: ["Help Center", "Community", "Status", "Contact"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  };
  
  return (
    <footer className="bg-[#1A2421] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#F7F5F0] rounded-xl flex items-center justify-center">
                <span className="text-[#1A362D] font-bold text-lg font-outfit">B</span>
              </div>
              <span className="text-xl font-bold text-[#F7F5F0] font-outfit">BukkaPay</span>
            </div>
            <p className="text-sm text-[#F7F5F0]/60 font-manrope">
              Making payments simple for Africa.
            </p>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-[#F7F5F0] uppercase tracking-wider mb-4 font-manrope">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#F7F5F0]/60 hover:text-[#F7F5F0] transition-colors font-manrope">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-[#F7F5F0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#F7F5F0]/60 font-manrope">
            © 2025 BukkaPay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#F7F5F0]/60 hover:text-[#F7F5F0] transition-colors" data-testid="social-twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-[#F7F5F0]/60 hover:text-[#F7F5F0] transition-colors" data-testid="social-linkedin">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-[#F7F5F0]/60 hover:text-[#F7F5F0] transition-colors" data-testid="social-instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
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
    <div className="bg-[#F7F5F0]">
      <Header />
      <Hero />
      <TrustMarquee />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Testimonials />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
