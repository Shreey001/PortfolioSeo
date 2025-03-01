import { motion } from "framer-motion";

const SkillCard = ({ icon, title, description, level = 0 }) => {
  const getProgressColor = () => {
    if (level >= 90) return "bg-green-500 dark:bg-green-400";
    if (level >= 70) return "bg-primary-500 dark:bg-primary-400";
    if (level >= 50) return "bg-yellow-500 dark:bg-yellow-400";
    return "bg-orange-500 dark:bg-orange-400";
  };

  return (
    <motion.div
      className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-secondary-600 dark:text-secondary-300 mb-4">
        {description}
      </p>

      {level > 0 && (
        <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2 mt-auto">
          <motion.div
            className={`h-2 rounded-full ${getProgressColor()}`}
            initial={{ width: "0%" }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
