# Portfolio Performance Optimization Guide

This guide provides strategies to optimize your portfolio website for better performance, accessibility, and user experience.

## Table of Contents

1. [Performance Metrics](#performance-metrics)
2. [Image Optimization](#image-optimization)
3. [Code Splitting](#code-splitting)
4. [Lazy Loading](#lazy-loading)
5. [Bundle Size Optimization](#bundle-size-optimization)
6. [Caching Strategies](#caching-strategies)
7. [Accessibility Improvements](#accessibility-improvements)
8. [Mobile Optimization](#mobile-optimization)

## Performance Metrics

Before optimizing, measure your current performance:

1. Use Lighthouse in Chrome DevTools
2. Check Web Vitals:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)
   - First Contentful Paint (FCP)
   - Time to Interactive (TTI)

## Image Optimization

### Use Modern Image Formats

Convert your images to WebP format:

```bash
npm install -g imagemin-cli imagemin-webp
imagemin ./src/assets/*.{jpg,png} --out-dir=./src/assets/optimized --plugin=webp
```

### Implement Responsive Images

Update your image components to use responsive images:

```jsx
<img
  src={smallImage}
  srcSet={`${smallImage} 400w, ${mediumImage} 800w, ${largeImage} 1200w`}
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Description"
  loading="lazy"
  width={400}
  height={300}
/>
```

### Use Image Components

Replace the PlaceholderImage component with real optimized images when ready:

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

const OptimizedImage = ({ src, alt, width, height, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative" style={{ width, height }}>
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage;
```

## Code Splitting

### Route-Based Code Splitting

Implement React.lazy and Suspense for route-based code splitting:

```jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

### Component-Level Code Splitting

For large components that aren't immediately visible:

```jsx
const ProjectGallery = lazy(() => import("./components/ProjectGallery"));

// In your component
{
  showGallery && (
    <Suspense fallback={<div>Loading gallery...</div>}>
      <ProjectGallery projects={projects} />
    </Suspense>
  );
}
```

## Lazy Loading

### Implement Intersection Observer

Create a custom hook for lazy loading components:

```jsx
// src/hooks/useIntersectionObserver.js
import { useState, useEffect, useRef } from "react";

export default function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}
```

Use the hook in your components:

```jsx
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function LazyComponent() {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: "100px",
    threshold: 0.1,
  });

  return (
    <div ref={ref}>{isVisible ? <HeavyComponent /> : <Placeholder />}</div>
  );
}
```

## Bundle Size Optimization

### Analyze Bundle Size

Install and run bundle analyzer:

```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to your vite.config.js:

```javascript
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  // other config...
});
```

### Tree Shaking

Ensure you're using ES modules and importing only what you need:

```jsx
// Bad
import * as Framer from "framer-motion";

// Good
import { motion, AnimatePresence } from "framer-motion";
```

### Optimize Dependencies

Review and optimize large dependencies:

```bash
npm install --save-dev depcheck
npx depcheck
```

Consider alternatives to heavy libraries:

- Use CSS animations instead of animation libraries when possible
- Replace moment.js with date-fns or dayjs
- Use smaller icon libraries or individual SVGs

## Caching Strategies

### Implement Service Worker

Add a service worker for caching static assets:

```bash
npm install --save-dev workbox-cli
```

Create a workbox-config.js file:

```javascript
module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,woff,woff2}"],
  swDest: "dist/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
      },
    },
  ],
};
```

Add to your build script:

```json
"scripts": {
  "build": "vite build && workbox generateSW workbox-config.js"
}
```

Register the service worker in your index.js:

```javascript
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}
```

## Accessibility Improvements

### Semantic HTML

Ensure you're using semantic HTML elements:

```jsx
// Bad
<div className="header">...</div>

// Good
<header>...</header>
```

### ARIA Attributes

Add ARIA attributes where needed:

```jsx
<button aria-label="Close menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
  <span className="sr-only">Close</span>
  <XIcon />
</button>
```

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```jsx
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="nav-link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
    >
      {children}
    </Link>
  );
}
```

### Color Contrast

Ensure sufficient color contrast for text:

```css
/* Bad */
.text-light {
  color: #aaaaaa;
  background-color: #ffffff;
}

/* Good */
.text-accessible {
  color: #595959;
  background-color: #ffffff;
}
```

## Mobile Optimization

### Responsive Design

Test your portfolio on various screen sizes:

```jsx
// In your Tailwind classes
<div className="w-full md:w-1/2 lg:w-1/3 p-4">{/* Content */}</div>
```

### Touch Targets

Ensure touch targets are large enough (at least 44x44px):

```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}
```

### Font Size

Use readable font sizes on mobile:

```css
.text {
  font-size: 16px; /* Minimum for readable text on mobile */
}

.heading {
  font-size: 24px;
}
```

### Reduce Motion

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In React components:

```jsx
import { useReducedMotion } from "framer-motion";

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      Content
    </motion.div>
  );
}
```
