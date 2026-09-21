"use client";
import React from "react";

type TulipVariant = "single" | "blooming" | "bouquet" | "small";

interface Props {
  variant?: TulipVariant;
  size?: number;
  className?: string;
  color?: "blue" | "violet" | "pink" | "mixed";
}

const imageMap: Record<string, string> = {
  single: "/pixel/flowers/tulip-single.png",
  blooming: "/pixel/flowers/tulip-blooming.png",
  bouquet: "/pixel/flowers/tulip-bouquet.png",
};

function SvgTulip({ variant = "single", size = 32, color = "blue" }: Props) {
  const colors: Record<string, string> = {
    blue: "#7aa5d6",
    violet: "#8a6bc9",
    pink: "#f4a7b9",
  };
  const flowerColor = color === "mixed" ? "#8a6bc9" : colors[color] || colors.blue;

  if (variant === "bouquet") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" shapeRendering="crispEdges" className="inline-block">
        {/* stems */}
        <rect x="11" y="12" width="1" height="8" fill="#4a8a4a" />
        <rect x="8" y="13" width="1" height="7" fill="#4a8a4a" />
        <rect x="14" y="13" width="1" height="7" fill="#4a8a4a" />
        {/* leaves */}
        <rect x="6" y="15" width="2" height="1" fill="#6ab06a" />
        <rect x="16" y="14" width="2" height="1" fill="#6ab06a" />
        {/* flowers */}
        <rect x="6" y="8" width="4" height="5" fill="#7aa5d6" />
        <rect x="7" y="7" width="2" height="1" fill="#7aa5d6" />
        <rect x="10" y="8" width="4" height="5" fill="#8a6bc9" />
        <rect x="11" y="7" width="2" height="1" fill="#8a6bc9" />
        <rect x="14" y="9" width="4" height="5" fill="#f4a7b9" />
        <rect x="15" y="8" width="2" height="1" fill="#f4a7b9" />
        {/* outlines */}
        <rect x="6" y="8" width="1" height="5" fill="#1a1f3d" />
        <rect x="9" y="8" width="1" height="5" fill="#1a1f3d" />
        <rect x="6" y="13" width="4" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  if (variant === "blooming") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 24" shapeRendering="crispEdges" className="inline-block">
        <rect x="7" y="10" width="2" height="10" fill="#4a8a4a" />
        <rect x="5" y="14" width="2" height="1" fill="#6ab06a" />
        <rect x="4" y="3" width="8" height="7" fill={flowerColor} />
        <rect x="5" y="2" width="6" height="1" fill={flowerColor} />
        <rect x="3" y="4" width="1" height="4" fill={flowerColor} />
        <rect x="12" y="4" width="1" height="4" fill={flowerColor} />
        <rect x="4" y="3" width="1" height="7" fill="#1a1f3d" />
        <rect x="11" y="3" width="1" height="7" fill="#1a1f3d" />
        <rect x="5" y="2" width="6" height="1" fill="#1a1f3d" />
        <rect x="5" y="10" width="6" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  // single
  return (
    <svg width={size} height={size} viewBox="0 0 16 24" shapeRendering="crispEdges" className="inline-block">
      <rect x="7" y="8" width="2" height="12" fill="#4a8a4a" />
      <rect x="5" y="12" width="2" height="1" fill="#6ab06a" />
      <rect x="5" y="3" width="6" height="6" fill={flowerColor} />
      <rect x="6" y="2" width="4" height="1" fill={flowerColor} />
      <rect x="5" y="3" width="1" height="6" fill="#1a1f3d" />
      <rect x="10" y="3" width="1" height="6" fill="#1a1f3d" />
      <rect x="6" y="2" width="4" height="1" fill="#1a1f3d" />
      <rect x="6" y="9" width="4" height="1" fill="#1a1f3d" />
    </svg>
  );
}

export function PixelTulip({ variant = "single", size = 32, className = "", color = "blue" }: Props) {
  const [imgError, setImgError] = React.useState(false);
  const imgSrc = imageMap[variant];

  if (variant === "small") {
    return <SvgTulip variant="single" size={size} className={className} color={color} />;
  }

  return (
    <div className={`inline-block ${className}`} style={{ imageRendering: "pixelated" as any }}>
      {imgSrc && !imgError ? (
        <img
          src={imgSrc}
          alt={`pixel tulip ${variant}`}
          width={size}
          height={size}
          style={{ imageRendering: "pixelated", width: size, height: size }}
          className="block"
          onError={() => setImgError(true)}
        />
      ) : (
        <SvgTulip variant={variant} size={size} color={color} />
      )}
    </div>
  );
}
