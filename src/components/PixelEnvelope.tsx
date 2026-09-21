"use client";
import React, { useState } from "react";
import { PixelCat } from "./PixelCat";
import { PixelTulip } from "./PixelTulip";

interface Props {
  onOpen: () => void;
  forLine: string;
  subtitle: string;
  buttonText: string;
}

export function PixelEnvelope({ onOpen, forLine, subtitle, buttonText }: Props) {
  const [isOpening, setIsOpening] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      {/* clouds */}
      <div className="flex gap-8 mb-8 opacity-60">
        <div className="w-12 h-6 bg-white border-2 border-navy rounded-[2px]" style={{ boxShadow: "2px 2px 0 #1a1f3d" }}></div>
        <div className="w-8 h-4 bg-white border-2 border-navy mt-2 rounded-[2px]" style={{ boxShadow: "2px 2px 0 #1a1f3d" }}></div>
      </div>

      <div className="text-center mb-8">
        <h1 className="pixel-font text-4xl md:text-5xl text-navy mb-3 tracking-tight">{forLine}</h1>
        <p className="text-midnight/70 text-lg font-body">{subtitle}</p>
      </div>

      <div className="relative">
        {/* cat sitting next to envelope */}
        <div className="absolute -left-16 md:-left-20 bottom-0 z-10">
          <PixelCat variant="sitting" size={56} animate />
        </div>

        {/* tulip */}
        <div className="absolute -right-8 -top-6 z-10 rotate-12">
          <PixelTulip variant="single" size={36} color="blue" />
        </div>

        {/* envelope */}
        <div
          className={`relative w-[280px] h-[180px] md:w-[340px] md:h-[220px] bg-paper border-[4px] border-navy cursor-pointer transition-all duration-500 ${
            isOpening ? "scale-95 rotate-1" : "hover:scale-[1.02]"
          }`}
          style={{
            boxShadow: "8px 8px 0 #1a1f3d",
            imageRendering: "pixelated",
          }}
          onClick={handleOpen}
        >
          {/* envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-[50%] bg-[#f0e6d3] border-b-[4px] border-navy origin-top transition-transform duration-500 ${
              isOpening ? "rotate-x-180" : ""
            }`}
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              transformStyle: "preserve-3d",
              transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-softpink border-2 border-navy flex items-center justify-center">
              <div className="w-3 h-3 bg-navy" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}></div>
            </div>
          </div>

          {/* letter inside */}
          <div className="absolute top-[20%] left-[8%] right-[8%] bottom-[8%] bg-white border-2 border-navy/20 p-3">
            <div className="space-y-2">
              <div className="h-2 bg-navy/10 w-3/4"></div>
              <div className="h-2 bg-navy/10 w-full"></div>
              <div className="h-2 bg-navy/10 w-5/6"></div>
              <div className="h-2 bg-lavender/40 w-1/2 mt-4"></div>
            </div>
            {/* small heart */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-softpink border border-navy"></div>
          </div>

          {/* envelope front bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-paper border-t-[4px] border-navy flex items-center justify-center">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[200%] h-[2px] bg-navy rotate-12"></div>
              </div>
            </div>
          </div>

          {/* wax seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-violet2 border-[3px] border-navy rounded-[2px] flex items-center justify-center z-20">
            <div className="w-6 h-6 bg-paper border-2 border-navy flex items-center justify-center">
              <div className="w-2 h-2 bg-softpink"></div>
            </div>
          </div>
        </div>

        {/* shadow */}
        <div className="mt-4 w-[280px] md:w-[340px] h-3 bg-navy/10 mx-auto blur-[2px] rounded-full"></div>
      </div>

      <button
        onClick={handleOpen}
        className="pixel-button mt-10 px-8 py-4 text-lg tracking-wide"
        disabled={isOpening}
      >
        {isOpening ? "Opening..." : buttonText}
      </button>

      <p className="mt-6 text-xs text-midnight/40 pixel-font">made with care, for one person only</p>
    </div>
  );
}
