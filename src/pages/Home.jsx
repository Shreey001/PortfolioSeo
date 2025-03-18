import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiLayout, FiServer } from "react-icons/fi";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import Seo from "../components/Seo";
import PlaceholderImage from "../components/PlaceholderImage";
// import developer from "../assets/social/dev.jpg";
import developer from "../assets/social/developer.png";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project6 from "../assets/projects/project6.png";
import project3 from "../assets/projects/project3.png";

const Home = () => {
  // Featured projects data
  const featuredProjects = [
    {
      title: "Trendify-Fashion E-Commerce Platform",
      description:
        "Full-stack Fashion clothing e-commerce solution with user authentication, payment processing, and order management.",
      image: project2,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://trendify-frontend-dusky.vercel.app/",
      githubUrl: "https://github.com/Shreey001/Trendify-Fashion-Ecommerce-Site",
      featured: true,
    },
    {
      title: "Vistagram-Connect and Inspire",
      description:
        "A fullstack social media platform with user authentication, post creation, and real-time updates.",
      image: project3,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://vistagram.vercel.app",
      githubUrl: "https://github.com/Shreey001/vistagram",
      featured: true,
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      image: project6,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://portfolio-seo-nu.vercel.app/",
      githubUrl: "https://github.com/Shreey001/PortfolioSeo",
      featured: true,
    },
  ];

  // Core skills data
  const coreSkills = [
    {
      icon: <FiCode size={24} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern JavaScript frameworks.",
      level: 90,
    },
    {
      icon: <FiServer size={24} />,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications with Node.js and Express.",
      level: 80,
    },
    {
      icon: <FiLayout size={24} />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and beautiful user experiences with attention to detail.",
      level: 75,
    },
  ];

  return (
    <>
      <Seo
        title="Home"
        description="Professional web developer specializing in creating beautiful, responsive web applications with React."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Building{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  digital experiences
                </span>{" "}
                that inspire
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-secondary-600 dark:text-secondary-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm a frontend developer specializing in creating beautiful,
                responsive, and user-friendly web applications with modern
                technologies.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/projects"
                  className="btn-primary flex items-center gap-2"
                >
                  View My Work <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="w-full md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative flex justify-center md:justify-end">
                {/* Mac-style window with image */}
                <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] bg-white dark:bg-secondary-800 rounded-lg shadow-xl overflow-hidden">
                  {/* Mac window header */}
                  <div className="h-6 bg-secondary-100 dark:bg-secondary-700 flex items-center px-3 border-b border-secondary-200 dark:border-secondary-600">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs mx-auto text-secondary-500 dark:text-secondary-400 font-medium">
                      developer-profile.jsx
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="w-full">
                    <img
                      src={developer}
                      alt="ShreeyJan"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-20 bg-secondary-50 dark:bg-secondary-800/20">
        <div className="container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-3">
                Showcasing My Best Work
              </div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                A selection of my recent work. These projects showcase my skills
                and experience in web development.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn-secondary inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Projects <FiArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Core Skills</h2>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              I specialize in frontend development with a focus on creating
              responsive, accessible, and performant web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="btn-secondary inline-flex items-center gap-2"
            >
              More About Me <FiArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary-600 dark:bg-primary-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              I'm currently available for freelance work and open to new
              opportunities. Let's create something amazing together!
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary-600 hover:bg-primary-50 rounded-lg shadow-md transition-all duration-300 font-medium text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Home;
