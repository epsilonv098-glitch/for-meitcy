"use client";
import React from "react";

interface Props {
  size?: number;
  className?: string;
  color?: string;
}

export function PixelHeart({ size = 16, className = "", color = "#f4a7b9" }: Props) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className={`inline-block ${className}`} style={{ imageRendering: "pixelated" as any }}>
      {!imgError ? (
        <img
          src="/pixel/deco/heart.png"
          alt="pixel heart"
          width={size}
          height={size}
          style={{ imageRendering: "pixelated", width: size, height: size }}
          className="block"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg width={size} height={size} viewBox="0 0 10 9" shapeRendering="crispEdges" className="block">
          <rect x="2" y="1" width="2" height="2" fill={color} />
          <rect x="6" y="1" width="2" height="2" fill={color} />
          <rect x="1" y="2" width="8" height="3" fill={color} />
          <rect x="2" y="5" width="6" height="2" fill={color} />
          <rect x="3" y="7" width="4" height="1" fill={color} />
          <rect x="4" y="8" width="2" height="1" fill={color} />
          {/* outline */}
          <rect x="2" y="0" width="2" height="1" fill="#1a1f3d" />
          <rect x="6" y="0" width="2" height="1" fill="#1a1f3d" />
          <rect x="1" y="1" width="1" height="2" fill="#1a1f3d" />
          <rect x="4" y="1" width="2" height="1" fill="#1a1f3d" />
          <rect x="8" y="1" width="1" height="2" fill="#1a1f3d" />
          <rect x="0" y="2" width="1" height="3" fill="#1a1f3d" />
          <rect x="9" y="2" width="1" height="3" fill="#1a1f3d" />
          <rect x="1" y="5" width="1" height="2" fill="#1a1f3d" />
          <rect x="8" y="5" width="1" height="2" fill="#1a1f3d" />
          <rect x="2" y="7" width="1" height="1" fill="#1a1f3d" />
          <rect x="7" y="7" width="1" height="1" fill="#1a1f3d" />
          <rect x="3" y="8" width="1" height="1" fill="#1a1f3d" />
          <rect x="6" y="8" width="1" height="1" fill="#1a1f3d" />
          <rect x="4" y="9" width="2" height="1" fill="#1a1f3d" />
        </svg>
      )}
    </div>
  );
}
