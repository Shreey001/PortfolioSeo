import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  liveUrl,
  githubUrl,
  featured = false,
}) => {
  const [hovered, setHovered] = useState(false);

  // Check if image is a React component or a URL
  const isImageComponent = typeof image !== "string";

  return (
    <motion.article
      className={`rounded-xl overflow-hidden ${
        featured
          ? "bg-gradient-to-br from-white to-primary-50 dark:from-secondary-800 dark:to-primary-900/30 shadow-xl border border-primary-100 dark:border-primary-900/50"
          : "bg-white dark:bg-secondary-800 shadow-lg"
      } h-full flex flex-col`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Featured Badge
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <FiStar className="text-yellow-300" />
            Featured
          </div>
        </div>
      )} */}
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        {isImageComponent ? (
          // If image is a React component
          <div className="w-full h-full">{image}</div>
        ) : (
          // If image is a URL
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: hovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
        <motion.div
          className="absolute inset-0 bg-primary-900/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex space-x-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-primary-600 hover:bg-primary-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={20} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-primary-600 hover:bg-primary-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      {/* Project Info */}
      <div className="p-6 flex-grow flex flex-col">
        <h3
          className={`${
            featured ? "text-2xl" : "text-xl"
          } font-bold text-secondary-900 dark:text-white mb-2`}
        >
          {title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-300 mb-4 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 ${
                featured
                  ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                  : "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
              } text-xs font-medium rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
