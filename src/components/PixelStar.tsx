"use client";
import React from "react";

interface Props {
  size?: number;
  className?: string;
  variant?: "star" | "sparkle";
}

export function PixelStar({ size = 16, className = "", variant = "star" }: Props) {
  if (variant === "sparkle") {
    return (
      <svg width={size} height={size} viewBox="0 0 12 12" shapeRendering="crispEdges" className={`inline-block ${className}`}>
        <rect x="5" y="0" width="2" height="2" fill="#fffbf0" />
        <rect x="5" y="10" width="2" height="2" fill="#fffbf0" />
        <rect x="0" y="5" width="2" height="2" fill="#fffbf0" />
        <rect x="10" y="5" width="2" height="2" fill="#fffbf0" />
        <rect x="5" y="2" width="2" height="8" fill="#c5b3e6" />
        <rect x="2" y="5" width="8" height="2" fill="#c5b3e6" />
        <rect x="5" y="5" width="2" height="2" fill="#fffbf0" />
        <rect x="2" y="2" width="1" height="1" fill="#7aa5d6" />
        <rect x="9" y="9" width="1" height="1" fill="#7aa5d6" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 10 10" shapeRendering="crispEdges" className={`inline-block ${className}`}>
      <rect x="4" y="0" width="2" height="2" fill="#f7e07a" />
      <rect x="3" y="2" width="4" height="1" fill="#f7e07a" />
      <rect x="2" y="3" width="6" height="1" fill="#f7e07a" />
      <rect x="1" y="4" width="8" height="2" fill="#f7e07a" />
      <rect x="2" y="6" width="6" height="1" fill="#f7e07a" />
      <rect x="3" y="7" width="4" height="1" fill="#f7e07a" />
      <rect x="4" y="8" width="2" height="2" fill="#f7e07a" />
      {/* outline */}
      <rect x="4" y="0" width="2" height="1" fill="#1a1f3d" />
      <rect x="3" y="1" width="1" height="1" fill="#1a1f3d" />
      <rect x="6" y="1" width="1" height="1" fill="#1a1f3d" />
      <rect x="2" y="2" width="1" height="1" fill="#1a1f3d" />
      <rect x="7" y="2" width="1" height="1" fill="#1a1f3d" />
      <rect x="1" y="3" width="1" height="1" fill="#1a1f3d" />
      <rect x="8" y="3" width="1" height="1" fill="#1a1f3d" />
      <rect x="0" y="4" width="1" height="2" fill="#1a1f3d" />
      <rect x="9" y="4" width="1" height="2" fill="#1a1f3d" />
    </svg>
  );
}

export function PixelCloud({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size / 2} viewBox="0 0 16 8" shapeRendering="crispEdges" className={`inline-block ${className}`}>
      <rect x="2" y="3" width="12" height="3" fill="#fffbf0" />
      <rect x="3" y="2" width="10" height="1" fill="#fffbf0" />
      <rect x="4" y="1" width="8" height="1" fill="#fffbf0" />
      <rect x="2" y="3" width="12" height="1" fill="#1a1f3d" style={{ opacity: 0.1 }} />
      <rect x="2" y="2" width="1" height="3" fill="#1a1f3d" />
      <rect x="3" y="1" width="1" height="1" fill="#1a1f3d" />
      <rect x="4" y="0" width="8" height="1" fill="#1a1f3d" />
      <rect x="12" y="1" width="1" height="1" fill="#1a1f3d" />
      <rect x="13" y="2" width="1" height="3" fill="#1a1f3d" />
      <rect x="2" y="6" width="12" height="1" fill="#1a1f3d" />
    </svg>
  );
}
