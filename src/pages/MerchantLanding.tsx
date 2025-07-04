import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import AnimatedBackground from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const MerchantLanding = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      {/* Mesh background image with blur and dark overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/A4%20-%2023.png"
          alt="Mesh background"
          className="w-full h-full object-cover blur-md opacity-60"
          draggable={false}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Optional: keep subtle animated overlay for extra depth */}
      <AnimatedBackground />
      {/* Custom NavBar for Merchant with For Shoppers top right */}
      <nav className="fixed top-0 inset-x-0 flex items-center justify-between px-6 py-4 max-w-[1100px] mx-auto z-10">
        <Link to="/" aria-label="Yumi Home" className="text-text-primary hover:text-accent transition-colors">
          <svg className="w-24 h-auto" width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="18" fill="currentColor" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" letterSpacing="-0.03em">
              Yu<tspan fill="#C9F299">m</tspan>i
            </text>
          </svg>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm font-medium px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm border border-white/10 shadow-sm"
            style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
          >
            For Shoppers
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M7 9h4m0 0l-2-2M11 9l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            </svg>
          </Link>
          <a
            href="https://cal.com/your-booking-link" // placeholder
            className="bg-accent text-background font-medium px-6 py-2 rounded-md hover:-translate-y-[2px] transition-transform hover:glow shadow-lg shadow-accent/10 flex items-center gap-2"
          >
            Book a Call
          </a>
        </div>
      </nav>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1100px]"
      >
        <motion.h2
          variants={item}
          className="text-[clamp(2rem,6vw,3rem)] font-semibold tracking-tightish"
        >
          Yumi for Merchants
        </motion.h2>

        <motion.ul variants={item} className="mt-8 space-y-4 text-left">
          <li className="flex gap-2">
            <span className="text-accent font-medium">2.5% </span>
            <span className="text-text-secondary">flat fee (vs 3-8% traditional BNPL)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-medium">Native crypto payment –</span>
            <span className="text-text-secondary">accept any coin on any chain</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-medium">Referral boost:</span>
            <span className="text-text-secondary">bring a Klarna merchant → fee – 0.1%</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-medium">30-min</span>
            <span className="text-text-secondary">SDK install + custom dev support</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-medium">Payout in stable-coins or</span>
            <span className="text-text-secondary">fiat, your choice</span>
          </li>
        </motion.ul>

        <motion.p
          variants={item}
          className="mt-12 italic text-text-secondary"
        >
          “Join our pilot: <span className="text-accent font-medium">100+</span> merchants already live.”
        </motion.p>
      </motion.div>

      <footer className="absolute bottom-6 inset-x-0 text-center text-xs text-text-secondary space-x-2">
        <span>© 2025 Yumi</span>
        <span>•</span>
        <a
          href="#"
          className="hover:text-accent transition-colors"
        >
          Terms
        </a>
        <span>•</span>
        <a
          href="#"
          className="hover:text-accent transition-colors"
        >
          Privacy
        </a>
      </footer>
    </main>
  );
};

export default MerchantLanding; 