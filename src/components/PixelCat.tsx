"use client";

import React from "react";

type CatVariant = "sitting" | "sleeping" | "happy" | "surprised" | "holdingTulip" | "celebrating";

interface Props {
  variant?: CatVariant;
  size?: number;
  className?: string;
  animate?: boolean;
}

const imageMap: Record<CatVariant, string> = {
  sitting: "/pixel/cats/cat-sitting.png",
  sleeping: "/pixel/cats/cat-sleeping.png",
  happy: "/pixel/cats/cat-happy.png",
  surprised: "/pixel/cats/cat-surprised.png",
  holdingTulip: "/pixel/cats/cat-holding-tulip.png",
  celebrating: "/pixel/cats/cat-celebrating.png",
};

// Fallback SVG pixel cats - handcrafted 16x16 pixel grid
function SvgPixelCat({ variant, size = 64 }: { variant: CatVariant; size: number }) {
  // Simple pixel matrices, 1 = color
  // We use SVG rects with crispEdges
  const pixelSize = size / 16;

  // Define different cat faces via pixel patterns
  const renderPixels = () => {
    // Base cat shape - 16x16 grid
    // Colors: white #fffbf0, outline #1a1f3d, pink #f4a7b9, blue #7aa5d6
    const pixels: { x: number; y: number; color: string }[] = [];

    // Simple cat silhouette - we build per variant slightly different
    const base = [
      "   011110   ",
      "  01111110  ",
      " 0100000010 ",
      " 01 1  1 10 ",
      " 0111111110 ",
      " 0111111110 ",
      "  01111110  ",
      "  00111100  ",
    ];

    // For simplicity, we draw a pixel cat using rects
    // Outline
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 12; x++) {
        if (y < 3 && (x < 2 || x > 9)) continue;
        if (y === 0 && (x === 2 || x === 9)) {
          pixels.push({ x: x + 2, y: y + 2, color: "#1a1f3d" });
        } else if (y === 1 && x >= 2 && x <= 9) {
          pixels.push({ x: x + 2, y: y + 2, color: y === 1 && (x === 2 || x === 9) ? "#1a1f3d" : "#fffbf0" });
        }
      }
    }

    // Instead of complex, we use hardcoded SVG paths for each variant
    return null;
  };

  // Use actual SVG drawings - handcrafted pixel art
  if (variant === "sleeping") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
        {/* sleeping cat curled */}
        <rect x="3" y="6" width="10" height="6" fill="#fffbf0" />
        <rect x="2" y="7" width="1" height="5" fill="#1a1f3d" />
        <rect x="13" y="7" width="1" height="5" fill="#1a1f3d" />
        <rect x="3" y="5" width="10" height="1" fill="#1a1f3d" />
        <rect x="3" y="12" width="10" height="1" fill="#1a1f3d" />
        <rect x="4" y="4" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="4" width="2" height="2" fill="#fffbf0" />
        <rect x="4" y="3" width="2" height="1" fill="#1a1f3d" />
        <rect x="10" y="3" width="2" height="1" fill="#1a1f3d" />
        <rect x="3" y="4" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="4" width="1" height="2" fill="#1a1f3d" />
        <rect x="9" y="4" width="1" height="2" fill="#1a1f3d" />
        <rect x="12" y="4" width="1" height="2" fill="#1a1f3d" />
        {/* zzz */}
        <rect x="11" y="2" width="1" height="1" fill="#8a6bc9" />
        <rect x="12" y="1" width="1" height="1" fill="#8a6bc9" />
        <rect x="13" y="0" width="1" height="1" fill="#8a6bc9" />
        {/* tail */}
        <rect x="1" y="9" width="2" height="2" fill="#fffbf0" />
        <rect x="0" y="9" width="1" height="2" fill="#1a1f3d" />
        <rect x="1" y="8" width="2" height="1" fill="#1a1f3d" />
        <rect x="1" y="11" width="2" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  if (variant === "happy") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
        <rect x="4" y="3" width="8" height="8" fill="#fffbf0" />
        <rect x="3" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="12" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="4" y="3" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="11" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="3" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="10" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="12" y="2" width="1" height="2" fill="#1a1f3d" />
        {/* happy eyes closed */}
        <rect x="5" y="6" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="6" width="2" height="1" fill="#1a1f3d" />
        {/* smile */}
        <rect x="6" y="8" width="4" height="1" fill="#1a1f3d" />
        <rect x="7" y="9" width="2" height="1" fill="#f4a7b9" />
        {/* blush */}
        <rect x="4" y="8" width="1" height="1" fill="#f4a7b9" />
        <rect x="11" y="8" width="1" height="1" fill="#f4a7b9" />
        <rect x="3" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="10" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="2" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="9" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="13" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="3" y="14" width="3" height="1" fill="#1a1f3d" />
        <rect x="10" y="14" width="3" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  if (variant === "surprised") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
        <rect x="4" y="3" width="8" height="8" fill="#fffbf0" />
        <rect x="3" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="12" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="4" y="3" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="11" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="3" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="10" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="12" y="2" width="1" height="2" fill="#1a1f3d" />
        {/* big eyes */}
        <rect x="5" y="5" width="2" height="3" fill="#1a1f3d" />
        <rect x="9" y="5" width="2" height="3" fill="#1a1f3d" />
        <rect x="5" y="6" width="1" height="1" fill="#fffbf0" />
        <rect x="9" y="6" width="1" height="1" fill="#fffbf0" />
        {/* open mouth */}
        <rect x="7" y="9" width="2" height="2" fill="#1a1f3d" />
        <rect x="7" y="10" width="2" height="1" fill="#f4a7b9" />
        <rect x="3" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="10" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="2" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="9" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="13" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="3" y="14" width="3" height="1" fill="#1a1f3d" />
        <rect x="10" y="14" width="3" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  if (variant === "holdingTulip") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
        <rect x="4" y="3" width="8" height="8" fill="#fffbf0" />
        <rect x="3" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="12" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="4" y="3" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="11" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="3" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="10" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="12" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="5" y="6" width="1" height="1" fill="#1a1f3d" />
        <rect x="10" y="6" width="1" height="1" fill="#1a1f3d" />
        <rect x="7" y="8" width="2" height="1" fill="#1a1f3d" />
        {/* tulip */}
        <rect x="12" y="0" width="3" height="3" fill="#7aa5d6" />
        <rect x="13" y="3" width="1" height="4" fill="#4a8a4a" />
        <rect x="11" y="4" width="1" height="1" fill="#4a8a4a" />
        <rect x="3" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="10" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="2" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="9" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="13" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="3" y="14" width="3" height="1" fill="#1a1f3d" />
        <rect x="10" y="14" width="3" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  if (variant === "celebrating") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
        <rect x="4" y="3" width="8" height="8" fill="#fffbf0" />
        <rect x="3" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="12" y="4" width="1" height="7" fill="#1a1f3d" />
        <rect x="4" y="3" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="11" width="8" height="1" fill="#1a1f3d" />
        <rect x="4" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="2" width="2" height="2" fill="#fffbf0" />
        <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="3" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="10" y="1" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="12" y="2" width="1" height="2" fill="#1a1f3d" />
        <rect x="5" y="6" width="2" height="1" fill="#1a1f3d" />
        <rect x="9" y="6" width="2" height="1" fill="#1a1f3d" />
        <rect x="6" y="8" width="4" height="1" fill="#1a1f3d" />
        <rect x="7" y="9" width="2" height="1" fill="#f4a7b9" />
        {/* party hat */}
        <rect x="6" y="0" width="4" height="1" fill="#8a6bc9" />
        <rect x="7" y="1" width="2" height="1" fill="#c5b3e6" />
        <rect x="5" y="0" width="1" height="1" fill="#f4a7b9" />
        <rect x="10" y="0" width="1" height="1" fill="#f4a7b9" />
        {/* arms up */}
        <rect x="1" y="5" width="2" height="1" fill="#1a1f3d" />
        <rect x="1" y="6" width="2" height="2" fill="#fffbf0" />
        <rect x="13" y="5" width="2" height="1" fill="#1a1f3d" />
        <rect x="13" y="6" width="2" height="2" fill="#fffbf0" />
        <rect x="3" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="10" y="12" width="3" height="2" fill="#fffbf0" />
        <rect x="2" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="6" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="9" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="13" y="12" width="1" height="2" fill="#1a1f3d" />
        <rect x="3" y="14" width="3" height="1" fill="#1a1f3d" />
        <rect x="10" y="14" width="3" height="1" fill="#1a1f3d" />
      </svg>
    );
  }

  // default sitting
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" className="inline-block">
      <rect x="4" y="3" width="8" height="8" fill="#fffbf0" />
      <rect x="3" y="4" width="1" height="7" fill="#1a1f3d" />
      <rect x="12" y="4" width="1" height="7" fill="#1a1f3d" />
      <rect x="4" y="3" width="8" height="1" fill="#1a1f3d" />
      <rect x="4" y="11" width="8" height="1" fill="#1a1f3d" />
      <rect x="4" y="2" width="2" height="2" fill="#fffbf0" />
      <rect x="10" y="2" width="2" height="2" fill="#fffbf0" />
      <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
      <rect x="3" y="2" width="1" height="2" fill="#1a1f3d" />
      <rect x="6" y="2" width="1" height="2" fill="#1a1f3d" />
      <rect x="10" y="1" width="2" height="1" fill="#1a1f3d" />
      <rect x="9" y="2" width="1" height="2" fill="#1a1f3d" />
      <rect x="12" y="2" width="1" height="2" fill="#1a1f3d" />
      <rect x="5" y="6" width="1" height="1" fill="#1a1f3d" />
      <rect x="10" y="6" width="1" height="1" fill="#1a1f3d" />
      <rect x="7" y="8" width="2" height="1" fill="#1a1f3d" />
      <rect x="3" y="12" width="3" height="2" fill="#fffbf0" />
      <rect x="10" y="12" width="3" height="2" fill="#fffbf0" />
      <rect x="2" y="12" width="1" height="2" fill="#1a1f3d" />
      <rect x="6" y="12" width="1" height="2" fill="#1a1f3d" />
      <rect x="9" y="12" width="1" height="2" fill="#1a1f3d" />
      <rect x="13" y="12" width="1" height="2" fill="#1a1f3d" />
      <rect x="3" y="14" width="3" height="1" fill="#1a1f3d" />
      <rect x="10" y="14" width="3" height="1" fill="#1a1f3d" />
    </svg>
  );
}

export function PixelCat({ variant = "sitting", size = 64, className = "", animate = false }: Props) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`inline-block ${animate ? "animate-float" : ""} ${className}`} style={{ imageRendering: "pixelated" as any }}>
      {!imgError ? (
        <img
          src={imageMap[variant]}
          alt={`pixel cat ${variant}`}
          width={size}
          height={size}
          style={{ imageRendering: "pixelated", width: size, height: size }}
          className="block"
          onError={() => setImgError(true)}
        />
      ) : (
        <SvgPixelCat variant={variant} size={size} />
      )}
    </div>
  );
}
