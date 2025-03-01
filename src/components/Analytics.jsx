import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Analytics Component
 *
 * This component initializes Google Analytics and tracks page views.
 * To use it, add your measurement ID to your .env file as VITE_GA_MEASUREMENT_ID
 * and include this component in your app (typically in Layout.jsx).
 */
const Analytics = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Initialize Google Analytics
  useEffect(() => {
    // Skip if measurement ID is not set or in development
    if (!measurementId || import.meta.env.DEV) {
      console.log(
        "Google Analytics is disabled. Add VITE_GA_MEASUREMENT_ID to .env to enable."
      );
      return;
    }

    // Add Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", measurementId);

    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId]);

  // Track page views
  useEffect(() => {
    if (!measurementId || !window.gtag || import.meta.env.DEV) return;

    window.gtag("config", measurementId, {
      page_path: location.pathname + location.search,
    });
  }, [location, measurementId]);

  return null; // This component doesn't render anything
};

export default Analytics;
