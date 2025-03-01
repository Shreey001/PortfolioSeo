import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import Seo from "../components/Seo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Set success state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message:
          "Your message has been sent successfully! I will get back to you soon.",
      });
    } catch (error) {
      // Set error state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message:
          "There was an error sending your message. Please try again later.",
      });
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      value: "shreejanbhattarai@gmail.com",
      link: "mailto:shreejanbhattarai@gmail.com",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      value: "+977 9866583430 ",
      link: "tel:+9779866583430",
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Location",
      value: "Butwal, Rupendehi",
      link: "https://maps.google.com/?q=Butwal,+Rupendehi",
    },
  ];

  // Social links
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
  ];

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with me for job opportunities, freelance work, or just to say hello."
        keywords="contact, web developer, freelance, hire developer, react developer"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
              Get In{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg text-secondary-600 dark:text-secondary-300 mb-12 text-center max-w-3xl mx-auto px-4">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you! Fill out the form below or reach out
              through any of my contact channels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <AnimatedSection className="lg:col-span-1" direction="left">
              <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-5 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4 sm:space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <div className="p-2 sm:p-3 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-3 sm:mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 break-words">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                  Connect with me
                </h3>

                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 sm:p-3 rounded-md bg-secondary-100 dark:bg-secondary-700 text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-5 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                {formStatus.isSubmitted ? (
                  <motion.div
                    className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{formStatus.message}</p>
                    <button
                      onClick={() =>
                        setFormStatus((prev) => ({
                          ...prev,
                          isSubmitted: false,
                        }))
                      }
                      className="mt-4 text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    {formStatus.isError && (
                      <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
                        <p>{formStatus.message}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                        placeholder="Your message"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-secondary-50 dark:bg-secondary-800/20">
        <div className="container">
          <h2 className="section-title text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            Here are answers to some common questions about my services and work
            process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "I specialize in frontend development with React, responsive web design, and full-stack development with Node.js. I can help with everything from simple websites to complex web applications.",
              },
              {
                question: "What is your typical project process?",
                answer:
                  "My process typically includes an initial consultation, planning and wireframing, design approval, development, testing, and deployment. I maintain clear communication throughout to ensure your vision is realized.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question:
                  "Do you offer maintenance services after the project is complete?",
                answer:
                  "Yes, I offer ongoing maintenance and support services to ensure your website or application continues to function optimally. We can discuss maintenance packages based on your specific needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <h2 className="section-title text-center">My Location</h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-center max-w-2xl mx-auto mb-12">
            Based in San Francisco, but working with clients worldwide.
          </p>

          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="Location Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948553!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623252234927!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;
