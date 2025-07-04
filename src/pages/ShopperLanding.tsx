import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import AnimatedBackground from '../components/AnimatedBackground';

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ShopperLanding = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <AnimatedBackground />
      <NavBar variant="shopper" />

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-[1100px]">
        <motion.h1
          variants={item}
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-tight tracking-tighter"
        >
          Buy Now, Pay Later for{' '}
          <span className="text-accent">the Next Generation of Money</span>.
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-6 text-xl font-normal text-text-secondary tracking-tightish"
        >
          4 payments • 0 % interest • Earn while you shop
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-8 text-sm text-text-secondary/90 tracking-wide max-w-xl mx-auto"
        >
          Pay with your wallet or crypto card. DeFi yield offsets the final installment.
        </motion.p>
      </motion.div>

      <footer className="absolute bottom-6 inset-x-0 text-center text-xs text-text-secondary space-x-2">
        <span>© 2025 Yumi</span>
        <span>•</span>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Twitter
        </a>
        <span>•</span>
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Discord
        </a>
      </footer>
    </main>
  );
};

export default ShopperLanding; 