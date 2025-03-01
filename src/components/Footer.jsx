import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/Shreey001",
      label: "GitHub",
    },
    {
      icon: <FiTwitter size={20} />,
      url: "https://twitter.com/shreeyjan001",
      label: "Twitter",
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://linkedin.com/in/shreejan-bhattarai",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={20} />,
      url: "mailto:shreejanbhattarai@gmail.com",
      label: "Email",
    },
  ];

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white dark:bg-secondary-900 pt-12 pb-8 border-t border-secondary-200 dark:border-secondary-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">
              ShreeyJan
              <span className="text-secondary-500 dark:text-secondary-400">
                .dev
              </span>
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 max-w-xs">
              Frontend developer specializing in creating beautiful, responsive,
              and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
              Contact
            </h3>
            <div className="space-y-2 text-secondary-600 dark:text-secondary-400">
              <p>Butwal, Rupendehi</p>
              <p>shreejanbhattarai@gmail.com</p>
              <p>+977 9866583430</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-secondary-200 dark:border-secondary-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            © {currentYear} ShreeyJan. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
