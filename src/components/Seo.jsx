import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description = "Professional web developer portfolio showcasing projects and skills.",
  keywords = "web developer, frontend, react, portfolio, ui designer",
  ogImage = "/og-image.jpg",
  ogUrl = "https://shreejanbhattarai.com.np",
  articleMeta = null,
}) => {
  const defaultTitle = "ShreeyJan | Web Developer & Designer";
  const fullTitle = title ? `${title} | ShreeyJan` : defaultTitle;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={articleMeta ? "article" : "website"} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

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
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default Seo;
