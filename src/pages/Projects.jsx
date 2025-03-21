import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection";
import Seo from "../components/Seo";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";

const Projects = () => {
  // All projects data
  const allProjects = [
    {
      id: 1,
      title: "Trendify-Fashion E-Commerce Platform",
      description:
        "Full-stack Fashion clothing e-commerce solution with user authentication, payment processing, and order management.",
      image: project2,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveUrl: "https://trendify-frontend-dusky.vercel.app/",
      githubUrl: "https://github.com/Shreey001/Trendify-Fashion-Ecommerce-Site",
      featured: true,
    },
    {
      id: 2,
      title: "Vistagram-Connect and Inspire",
      description:
        "A fullstack social media platform with user authentication, post creation, and real-time updates.",
      image: project3,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      liveUrl: "https://vistagram.vercel.app",
      githubUrl: "https://github.com/Shreey001/vistagram",
      featured: true,
    },
    {
      id: 3,
      title: "E-Tea-Nepal-a multi-vendor Tea selling website",
      description:
        "A fullstack tea buying and selling website with buyer, seller and admin with order management and payment integration.",
      image: project4,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://e-tea-nepal.vercel.app/",
      githubUrl: "https://github.com/Shreey001/eTeaNepal",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      image: project6,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://portfolio-seo-nu.vercel.app/",
      githubUrl: "https://github.com/Shreey001/PortfolioSeo",
      featured: true,
    },
    {
      id: 5,
      title: "Quiz App",
      description:
        "Quiz app with 10 questions to test your knowledge and score at last using HTML, CSS and JavaScript.",
      image: project5,
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveUrl: "https://quizapp-pink-mu.vercel.app/",
      githubUrl: "https://github.com/Shreey001/quizapp",
    },
    {
      id: 6,
      title: "Social Media Clone",
      description:
        "A Facebook-like frontend clone with theme and color change feature and responsive design.",
      image: project1,
      tags: ["React", "CSS", "Responsive Design"],
      category: "frontend",
      liveUrl: "https://socialmediaclone-one.vercel.app/",
      githubUrl: "https://github.com/Shreey001/socialmediaclone",
    },
  ];

  // Filter categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = allProjects;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort so featured projects come first
    filtered = [...filtered].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Seo
        title="Projects"
        description="Explore my portfolio of web development projects including frontend, backend, and full-stack applications."
        keywords="web developer, projects, portfolio, react, node.js, javascript, frontend, backend"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
              My{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Projects
              </span>
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-12 text-center max-w-3xl mx-auto">
              A collection of my work that showcases my skills and experience in
              building web applications. Each project reflects my passion for
              creating intuitive and engaging user experiences.
            </p>
          </AnimatedSection>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              {/* Search Input */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center w-full">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base flex-grow sm:flex-grow-0 ${
                      activeCategory === category.id
                        ? "bg-primary-600 text-white"
                        : "bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
                  </div>

                  {/* Divider if there are featured projects and we're showing all projects */}
                  {activeCategory === "all" &&
                    filteredProjects.some((project) => project.featured) &&
                    filteredProjects.some((project) => !project.featured) && (
                      <div className="my-16 flex items-center justify-center">
                        <div className="w-24 h-0.5 bg-primary-200 dark:bg-primary-800 mx-4"></div>
                        <span className="text-secondary-500 dark:text-secondary-400 text-sm font-medium">
                          More Projects
                        </span>
                        <div className="w-24 h-0.5 bg-primary-200 dark:bg-primary-800 mx-4"></div>
                      </div>
                    )}
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    No projects found
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Process Section */}
      <AnimatedSection className="py-20 bg-secondary-50 dark:bg-secondary-800/20">
        <div className="container">
          <h2 className="section-title text-center">My Development Process</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            I follow a structured approach to ensure each project is delivered
            with the highest quality and meets all requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding project requirements, goals, and target audience.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating wireframes, selecting technologies, and defining milestones.",
                icon: "📝",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Writing clean, efficient code following best practices and standards.",
                icon: "💻",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Testing, deployment, and providing documentation and support.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md relative"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4 text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div className="absolute top-4 right-4 text-4xl font-bold text-primary-100 dark:text-primary-900">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            What clients and collaborators say about working with me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with ShreeyJan was a fantastic experience. They delivered our project on time and exceeded our expectations with their attention to detail and creative solutions.",
                author: "Jane Smith",
                position: "CEO, Tech Startup",
                initials: "JS",
              },
              {
                quote:
                  "ShreeyJan is a highly skilled developer who brings both technical expertise and creative thinking to every project. I highly recommend their services.",
                author: "John Doe",
                position: "Marketing Director, Agency XYZ",
                initials: "JD",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white text-xl font-semibold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary-600 dark:bg-primary-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              I'm always interested in hearing about new projects and
              opportunities. Let's discuss how I can help bring your ideas to
              life.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 hover:bg-primary-50 rounded-lg shadow-md transition-all duration-300 font-medium text-lg inline-block"
            >
              Start a Project
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Projects;
