import React from "react";

/**
 * OgImage Component
 *
 * This component can be used to render an OpenGraph image that can be saved
 * and used for social media sharing. For best results, the rendered image
 * should be 1200x630px.
 *
 * Usage:
 * 1. Render this component with preferred props
 * 2. Take a screenshot (1200x630px) and save as public/og-image.jpg
 * 3. Use that image in your SEO component
 */
const OgImage = ({
  name = "ShreeyJan",
  title = "Web Developer & UI Designer",
  description = "Creating beautiful, responsive web applications with modern technologies.",
  baseColor = "#0ea5e9",
  accentColor = "#4f46e5",
  fontColor = "#ffffff",
  logo = null,
}) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${baseColor} 0%, ${accentColor} 100%)`,
    color: fontColor,
    width: "1200px",
    height: "630px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const codeElements = Array(5)
    .fill(null)
    .map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          fontSize: `${30 + Math.random() * 50}px`,
          opacity: 0.05 + Math.random() * 0.05,
          transform: `rotate(${Math.random() * 40 - 20}deg)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        {["<div>", "</>", "{code}", "</>"][Math.floor(Math.random() * 4)]}
      </div>
    ));

  return (
    <div style={gradientStyle}>
      {/* Background decorative elements */}
      {codeElements}

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {logo ? (
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        ) : (
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "24px",
              color: baseColor,
            }}
          >
            S
          </div>
        )}
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>Portfolio</div>
      </div>

      <div style={{ zIndex: 2 }}>
        <h1
          style={{ fontSize: "72px", fontWeight: "bold", margin: "0 0 15px 0" }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "normal",
            margin: "0 0 30px 0",
            opacity: 0.9,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "24px",
            maxWidth: "800px",
            lineHeight: 1.5,
            opacity: 0.8,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          fontSize: "20px",
          opacity: 0.7,
        }}
      >
        shreejanbhattarai.com.np
      </div>
    </div>
  );
};

export default OgImage;
