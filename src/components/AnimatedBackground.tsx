import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(201,242,153,0.05)_0%,transparent_70%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    />
  );
};

export default AnimatedBackground; 