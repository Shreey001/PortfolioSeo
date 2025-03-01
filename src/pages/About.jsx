import { motion } from "framer-motion";
import {
  FiDownload,
  FiCode,
  FiDatabase,
  FiLayout,
  FiTool,
  FiGitBranch,
  FiCloud,
} from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import Seo from "../components/Seo";
// import PlaceholderImage from "../components/PlaceholderImage";
import profile from "../assets/social/profile.jpg";

// Placeholder resume - replace with your actual resume file
// import resumePdf from "../assets/resume.pdf";
// Using a placeholder URL instead of a real file
const resumePdf = "#"; // This will be a placeholder that keeps the download button but doesn't try to download a real file

const About = () => {
  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <FiDatabase />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "Design",
      icon: <FiLayout />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <FiTool />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Webpack/Vite", level: 75 },
        { name: "Jest/Testing Library", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
  ];

  // Experience data
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead frontend development for enterprise applications, mentoring junior developers, and implementing best practices for code quality and performance.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency XYZ",
      period: "2018 - 2021",
      description:
        "Developed responsive web applications for various clients using React, Redux, and modern CSS frameworks.",
    },
    {
      title: "Web Developer Intern",
      company: "Startup ABC",
      period: "2017 - 2018",
      description:
        "Assisted in developing and maintaining company websites and web applications.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      description:
        "Focused on web development, algorithms, and software engineering principles.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2017",
      description:
        "Intensive 12-week program covering modern web development technologies and practices.",
    },
  ];

  return (
    <>
      <Seo
        title="About Me"
        description="Learn more about my background, skills, and experience as a web developer."
        keywords="web developer, frontend developer, react developer, javascript, portfolio, about"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="w-full md:w-1/3 flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-[300px]">
                {/* Simple image container */}
                <div className="relative z-10 overflow-hidden rounded-lg shadow-md">
                  <img
                    src={profile}
                    alt="ShreeyJan"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Download resume button overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/70 via-primary-600/0 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 z-20 rounded-lg">
                  <motion.a
                    href={resumePdf}
                    onClick={(e) => {
                      if (resumePdf === "#") {
                        e.preventDefault();
                        alert(
                          "This is a placeholder. Add your actual resume PDF to make this download work."
                        );
                      }
                    }}
                    className="px-4 py-2 bg-white text-primary-600 rounded-lg shadow-md flex items-center gap-2 hover:bg-primary-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload /> Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-2/3 mt-8 md:mt-0 text-center md:text-left">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Me
                </span>
              </motion.h1>

              <motion.div
                className="space-y-4 text-secondary-600 dark:text-secondary-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p>
                  Hello! I'm{" "}
                  <strong className="text-secondary-900 dark:text-white">
                    ShreeyJan
                  </strong>
                  , a passionate frontend developer with over 5 years of
                  experience in creating beautiful, responsive, and
                  user-friendly web applications.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks like React, with
                  a strong focus on creating performant and accessible user
                  interfaces. My approach combines technical expertise with an
                  eye for design to deliver exceptional digital experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying outdoor activities. I believe in continuous learning
                  and staying updated with the latest trends in web development.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href={resumePdf}
                  onClick={(e) => {
                    if (resumePdf === "#") {
                      e.preventDefault();
                      alert(
                        "This is a placeholder. Add your actual resume PDF to make this download work."
                      );
                    }
                  }}
                  className="btn-primary flex items-center gap-2"
                >
                  <FiDownload /> Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <AnimatedSection className="py-20 bg-secondary-50 dark:bg-secondary-800/20">
        <div className="container">
          <h2 className="section-title text-center">My Skills</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            I've worked with a variety of technologies and tools throughout my
            career. Here's a breakdown of my technical skills and proficiency
            levels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-4 sm:p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 sm:p-3 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          className="h-1.5 sm:h-2 rounded-full bg-primary-600 dark:bg-primary-400"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * skillIndex }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Work Experience</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            My professional journey in the world of web development.
          </p>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary-200 dark:before:bg-primary-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 -translate-x-1/2" />
                <div className="mb-1 text-primary-600 dark:text-primary-400 font-medium">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <div className="text-secondary-600 dark:text-secondary-400 mb-3">
                  {exp.company}
                </div>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 bg-secondary-50 dark:bg-secondary-800/20">
        <div className="container">
          <h2 className="section-title text-center">Education</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            My academic background and continuous learning journey.
          </p>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-12 last:mb-0 bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mb-1 text-primary-600 dark:text-primary-400 font-medium">
                  {edu.period}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="text-secondary-600 dark:text-secondary-400 mb-3">
                  {edu.institution}
                </div>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Interests Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Beyond Coding</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            When I'm not in front of a computer, here's what I enjoy doing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 text-primary-600 dark:text-primary-400 mx-auto">
                🏃‍♂️
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Fitness & Running
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                I enjoy staying active with regular workouts and long-distance
                running.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 text-primary-600 dark:text-primary-400 mx-auto">
                📚
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Reading
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                I love reading books on technology, science fiction, and
                personal development.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 text-primary-600 dark:text-primary-400 mx-auto">
                ✈️
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Traveling
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Exploring new places and experiencing different cultures
                broadens my perspective.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default About;
