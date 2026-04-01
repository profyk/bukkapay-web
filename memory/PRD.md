# BukkaPay Website PRD

## Original Problem Statement
Build a world-class, elegant website for BukkaPay by cloning and enhancing the repository https://github.com/profyk/bukkapay-web. BukkaPay is a payment platform that enables individuals, businesses, and service providers in Africa to send, receive, and collect payments easily, both locally and across borders.

## Product Overview
BukkaPay is a fintech platform combining multiple payment methods into one system, with a strong focus on payment collection. Users can create simple payment links to request and receive money from anyone in the world.

## User Personas
1. **Freelancers** - Need to invoice international clients and get paid in local currency
2. **Small Businesses** - Accept payments, manage invoices, reconcile books
3. **Merchants** - Sell online/in-store with payment links
4. **Property Managers/Landlords** - Collect rent, utilities, service bills
5. **Enterprise Businesses** - Custom payment solutions with API integration

## Core Requirements (Static)
- Professional landing page showcasing BukkaPay's value proposition
- Clear feature presentation (digital wallet, QR payments, virtual cards, landlord dashboard)
- Transparent pricing display
- Trust indicators and availability regions
- Mobile-responsive design
- Multiple pages (About, Privacy, Terms, etc.)

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Framer Motion, react-fast-marquee
- **Backend**: FastAPI, MongoDB
- **Design**: Modern violet/indigo gradient theme
- **Typography**: Outfit (headings), Inter (body)
- **Assets**: Cloned from BukkaPay GitHub repository

## What's Been Implemented (Jan 2026)

### Landing Page Sections
- [x] Hero section with phone mockup from BukkaPay repo
- [x] Trust marquee with partner logos
- [x] Features grid (7 features: Digital Wallet, Scan to Pay, Landlord Dashboard, Instant Transfers, Virtual Cards, Secure Payments, Real-time History)
- [x] Phone mockup showcases (QR Code, Landlord Dashboard, Business Dashboard)
- [x] How It Works (3-step process)
- [x] Security section with animated rings
- [x] For Business section
- [x] Pricing (Personal Free, Business $15/mo, Enterprise Custom)
- [x] Availability section (17 countries across Africa, Asia, Europe)
- [x] FAQ section with accordion
- [x] CTA section
- [x] Footer with social links

### Additional Pages
- [x] About page with mission and contact info
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Cookie Policy page
- [x] Acceptable Use page
- [x] 404 Not Found page

### Technical Features
- [x] Smooth scroll navigation
- [x] Mobile-responsive hamburger menu
- [x] Framer Motion animations
- [x] Glassmorphism header on scroll
- [x] Hover effects on cards
- [x] data-testid attributes for testing
- [x] Phone mockups with float animation
- [x] Backend API health check

### Assets from BukkaPay Repo
- [x] logo.png - BukkaPay logo
- [x] hero-mockup.png - Mobile app mockup
- [x] hero-bg.png - Billboard background
- [x] qr-code-screen.jpg - QR payment screen
- [x] landlord-dashboard-screen.jpg - Property management
- [x] business-dashboard-screen.jpg - Business dashboard

## Prioritized Backlog

### P0 - Must Have (Next Phase)
- [ ] User authentication (signup/login)
- [ ] User dashboard
- [ ] Wallet functionality
- [ ] Virtual card creation

### P1 - Should Have
- [ ] QR code payment links
- [ ] Invoice generator
- [ ] Bank account linking
- [ ] Transaction history

### P2 - Nice to Have
- [ ] Stripe integration
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Multi-language support

## Next Tasks
1. Implement user authentication with JWT
2. Create user dashboard layout
3. Build digital wallet functionality
4. Add virtual card creation flow
5. Implement QR code payment links
