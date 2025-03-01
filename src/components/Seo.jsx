import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description = "Professional web developer portfolio showcasing projects and skills.",
  keywords = "web developer, frontend, react, portfolio, ui designer",
  ogImage = "/og-image.jpg",
  ogUrl = "https://shreejanbhattarai.com.np",
  articleMeta = null,
  schema = null,
  language = "en",
}) => {
  const defaultTitle = "ShreeyJan | Web Developer & Designer";
  const fullTitle = title ? `${title} | ShreeyJan` : defaultTitle;
  const siteUrl = "https://shreejanbhattarai.com.np";
  const canonicalUrl = `${siteUrl}${ogUrl !== siteUrl ? ogUrl : ""}`;

  // Default structured data for a portfolio website if none provided
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: "ShreeyJan",
      description: description,
      jobTitle: "Web Developer & Designer",
      url: canonicalUrl,
      sameAs: [
        "https://github.com/yourusername",
        "https://linkedin.com/in/yourusername",
        // Add other social profiles
      ],
    },
  };

  // Use provided schema or fall back to default
  const structuredData = schema || defaultSchema;

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Viewport and Character Set */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Color Scheme */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="color-scheme" content="light dark" />

      {/* Robots Instructions */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={articleMeta ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content={`${fullTitle} - Preview Image`} />
      <meta property="og:site_name" content="ShreeyJan Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta
        property="twitter:image:alt"
        content={`${fullTitle} - Preview Image`}
      />
      <meta name="twitter:creator" content="@yourtwitterhandle" />

      {/* Article Meta */}
      {articleMeta && (
        <>
          <meta
            property="article:published_time"
            content={articleMeta.publishedTime}
          />
          <meta
            property="article:modified_time"
            content={articleMeta.modifiedTime}
          />
          <meta property="article:author" content={articleMeta.author} />
          {articleMeta.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon Links */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default Seo;
