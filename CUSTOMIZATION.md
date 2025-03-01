# Portfolio Customization Guide

This document provides instructions on how to customize your portfolio website to make it your own.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Theme Customization](#theme-customization)
3. [Content Customization](#content-customization)
4. [Adding Projects](#adding-projects)
5. [Adding Skills](#adding-skills)
6. [Images and Assets](#images-and-assets)
7. [Contact Form](#contact-form)
8. [SEO Optimization](#seo-optimization)

## Personal Information

### Update Basic Information

1. Open `index.html` and update the following:

   - Title and meta tags
   - OG tags for social media sharing
   - Your name and profession

2. Update your name and domain in the Header and Footer components:
   - `src/components/Header.jsx`: Update the logo text
   - `src/components/Footer.jsx`: Update the copyright information and contact details

## Theme Customization

### Colors

The portfolio uses a color system defined in `tailwind.config.js`. You can customize the primary and secondary color palettes:

```javascript
// tailwind.config.js
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  },
}
```

### Fonts

To change the fonts:

1. Update the font imports in `src/index.css`
2. Update the font family in `tailwind.config.js`

## Content Customization

### Home Page

Edit `src/pages/Home.jsx` to update:

- Hero section text and image
- Featured projects
- Skills overview
- Call-to-action section

### About Page

Edit `src/pages/About.jsx` to update:

- Your bio and personal information
- Skills and proficiency levels
- Work experience
- Education
- Personal interests

### Projects Page

Edit `src/pages/Projects.jsx` to update:

- Project categories
- Project details
- Development process
- Testimonials

### Contact Page

Edit `src/pages/Contact.jsx` to update:

- Contact information
- Social links
- FAQ section
- Map location

## Adding Projects

To add a new project:

1. Open `src/pages/Projects.jsx`
2. Add a new project object to the `allProjects` array:

```javascript
{
  id: 7, // Increment this number
  title: 'Your Project Title',
  description: 'Project description...',
  image: <PlaceholderImage text="Project Name" bgColor="#yourColor" />,
  // Or use an actual image:
  // image: '/path/to/your/image.jpg',
  tags: ['React', 'Node.js', 'Your Technologies'],
  category: 'frontend', // or 'backend', 'fullstack'
  liveUrl: 'https://your-project-url.com',
  githubUrl: 'https://github.com/yourusername/project',
  featured: false // Set to true to feature on the home page
}
```

3. If you want to feature this project on the home page, also add it to the `featuredProjects` array in `src/pages/Home.jsx`

## Adding Skills

To add or update your skills:

1. Open `src/pages/About.jsx`
2. Modify the `skillCategories` array to add or update skill categories and individual skills

## Images and Assets

### Adding Real Images

1. Place your images in the `src/assets` directory
2. Import and use them in your components:

```javascript
import myImage from "../assets/my-image.jpg";

// Then use it in your component
<img src={myImage} alt="Description" />;
```

### Profile Picture

Replace the placeholder profile image in `src/pages/About.jsx` with your actual profile picture.

### Project Images

Replace the placeholder project images in `src/pages/Projects.jsx` and `src/pages/Home.jsx` with actual project screenshots.

## Contact Form

The contact form in `src/pages/Contact.jsx` is currently set up to simulate form submission. To connect it to a real backend:

1. Create a backend API endpoint to handle form submissions
2. Update the `handleSubmit` function in `src/pages/Contact.jsx` to send data to your API

```javascript
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

  try {
    // Send data to your API
    const response = await fetch("https://your-api-endpoint.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

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
```

## SEO Optimization

### Page-Specific SEO

Each page uses the `Seo` component to set page-specific meta tags. Update these in each page file:

```javascript
<Seo
  title="Your Page Title"
  description="Your page description for search engines"
  keywords="keyword1, keyword2, keyword3"
/>
```

### Global SEO

Update the global SEO settings in `index.html` for site-wide meta tags.

### Structured Data

Consider adding structured data for better SEO. You can add this in the `Seo` component or directly in `index.html`.
