import React from "react";
import OgImage from "../components/OgImage";
import Seo from "../components/Seo";

const OgPreview = () => {
  return (
    <>
      <Seo
        title="OpenGraph Image Preview"
        description="Preview and generate OpenGraph images for social sharing"
      />

      <section className="pt-32 pb-20">
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
            OpenGraph Image Preview
          </h1>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 mb-10">
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 text-center">
              This is a preview of how your portfolio will appear when shared on
              social media. Take a screenshot of the image below (1200x630px)
              and save it as public/og-image.jpg.
            </p>

            <div className="overflow-hidden rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 mb-8 max-w-full mx-auto">
              <div
                className="scale-[0.5] origin-top-left mx-auto"
                style={{ width: "600px", height: "315px" }}
              >
                <OgImage />
              </div>
            </div>

            <div className="text-center">
              <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                <strong>Note:</strong> The image is scaled down to fit on
                screen. The actual image should be 1200x630px.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
              Customize OpenGraph Image
            </h2>

            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Edit the OgImage.jsx component to customize this image with your
              own:
            </p>

            <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`
// In OgImage.jsx
const OgImage = ({
  name = "Your Name",
  title = "Your Title",
  description = "Your description here",
  baseColor = "#yourColor",
  accentColor = "#yourAccentColor",
  ...
`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
              SEO Best Practices
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-secondary-600 dark:text-secondary-300">
              <li>
                <strong>OpenGraph Image:</strong> Create an eye-catching
                1200x630px image for social sharing
              </li>
              <li>
                <strong>Title & Description:</strong> Each page should have a
                unique, descriptive title and meta description
              </li>
              <li>
                <strong>Structured Data:</strong> Add detailed JSON-LD for
                better search engine understanding
              </li>
              <li>
                <strong>Semantic HTML:</strong> Use proper heading tags (h1, h2,
                etc.) and semantic elements
              </li>
              <li>
                <strong>Image Alt Text:</strong> Provide descriptive alternative
                text for all images
              </li>
              <li>
                <strong>Canonical URLs:</strong> Use canonical URLs to prevent
                duplicate content issues
              </li>
              <li>
                <strong>Mobile Optimization:</strong> Ensure your site is fully
                responsive and mobile-friendly
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OgPreview;
