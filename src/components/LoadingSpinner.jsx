import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="w-16 h-16 border-4 border-secondary-300 dark:border-secondary-700 border-t-primary-600 dark:border-t-primary-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
