import { useState, useEffect } from "react";

const PlaceholderImage = ({
  width = 600,
  height = 400,
  text = "Placeholder Image",
  bgColor = "#0ea5e9",
  textColor = "#ffffff",
}) => {
  const [id, setId] = useState("");

  // Generate a random ID for the gradient
  useEffect(() => {
    setId(`placeholder-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={bgColor} stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#${id})`} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontFamily="sans-serif"
        fontSize={width > 200 ? "24px" : "16px"}
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
};

export default PlaceholderImage;
