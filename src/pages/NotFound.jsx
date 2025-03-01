import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
              404
            </h1>
            <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto my-6"></div>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-secondary-600 dark:text-secondary-300 mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FiHome /> Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FiArrowLeft /> Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
