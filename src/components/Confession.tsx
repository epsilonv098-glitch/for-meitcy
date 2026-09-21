"use client";
import React, { useState } from "react";
import { storyData } from "@/data/story";
import { PixelCat } from "./PixelCat";
import { PixelTulip } from "./PixelTulip";
import { PixelHeart } from "./PixelHeart";
import { PixelStar } from "./PixelStar";

export function FinalLetter({ onNext }: { onNext: () => void }) {
  const [page, setPage] = useState(0);
  const paragraphs = storyData.letter.paragraphs;
  const perPage = 3;
  const totalPages = Math.ceil(paragraphs.length / perPage);
  const currentParas = paragraphs.slice(page * perPage, (page + 1) * perPage);

  return (
    <div className="w-full max-w-[580px] mx-auto px-4 py-8">
      <div className="bg-paper border-[4px] border-navy p-6 md:p-8 relative" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
        {/* paper lines */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1a1f3d 0 1px, transparent 1px 28px)" }}></div>

        <div className="relative">
          <div className="flex justify-between items-start mb-6">
            <div className="pixel-font text-[11px] text-violet2">LETTER.TXT</div>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-softpink border border-navy"></div>
              <div className="w-3 h-3 bg-softblue border border-navy"></div>
              <div className="w-3 h-3 bg-lavender border border-navy"></div>
            </div>
          </div>

          {page === 0 && <h2 className="pixel-font text-xl text-navy mb-6">{storyData.letter.greeting}</h2>}

          <div className="space-y-5 font-body text-[15px] leading-[1.7] text-navy">
            {currentParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {page === totalPages - 1 && (
            <div className="mt-8 pt-6 border-t-2 border-dashed border-navy/20">
              <p className="font-body text-[15px] leading-[1.7] text-navy mb-6">{storyData.letter.closing}</p>
              <p className="pixel-font text-[11px] text-midnight/60 mb-2">{storyData.letter.signature}</p>
              <p className="font-body text-[13px] italic text-midnight/70">{storyData.letter.ps}</p>
            </div>
          )}

          <div className="flex justify-between items-center mt-10">
            <span className="pixel-font text-[10px] text-midnight/40">
              {page + 1} / {totalPages}
            </span>
            <div className="flex gap-3">
              {page > 0 && (
                <button onClick={() => setPage(page - 1)} className="pixel-button-secondary px-4 py-2 text-[12px]">
                  Back
                </button>
              )}
              {page < totalPages - 1 ? (
                <button onClick={() => setPage(page + 1)} className="pixel-button px-5 py-2 text-[12px]">
                  Next
                </button>
              ) : (
                <button onClick={onNext} className="pixel-button px-6 py-2.5 text-[13px] animate-float">
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>

        {/* tulips around */}
        <div className="absolute -top-4 -right-4">
          <PixelTulip variant="small" size={28} color="blue" />
        </div>
        <div className="absolute -bottom-4 -left-4 rotate-12">
          <PixelTulip variant="small" size={24} color="violet" />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <PixelCat variant="sleeping" size={56} />
      </div>
    </div>
  );
}

export function YesNoSection({ onYes, onNo, noCount, yesClicked, noClicked }: { onYes: () => void; onNo: () => void; noCount: number; yesClicked: boolean; noClicked: boolean }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState("");

  const handleNoHover = () => {
    if (noCount < 5) {
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 60;
      setNoPos({ x, y });
      setShowMessage(storyData.responses.noPlayful[noCount % storyData.responses.noPlayful.length]);
    }
  };

  if (yesClicked) {
    return (
      <div className="w-full max-w-[560px] mx-auto px-5 py-12 text-center">
        <div className="bg-paper border-[4px] border-navy p-8 md:p-10 relative overflow-hidden" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
          <div className="absolute top-2 left-2 flex gap-1">
            {[...Array(6)].map((_, i) => (
              <PixelHeart key={i} size={12} />
            ))}
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <PixelStar key={i} size={12} />
            ))}
          </div>

          <div className="flex justify-center gap-2 mb-6">
            <PixelCat variant="celebrating" size={64} animate />
            <PixelCat variant="happy" size={64} animate />
          </div>

          <h2 className="pixel-font text-xl md:text-2xl text-navy mb-3 leading-tight">{storyData.responses.yes.title}</h2>
          <p className="pixel-font text-lg text-violet2 mb-6">{storyData.responses.yes.subtitle}</p>

          <div className="flex justify-center gap-2 mb-6">
            <PixelTulip variant="bouquet" size={64} />
          </div>

          <p className="font-body text-[15px] leading-[1.6] text-midnight/80 max-w-[400px] mx-auto">{storyData.responses.yes.message}</p>

          <div className="mt-8 flex justify-center gap-1 flex-wrap">
            {[...Array(12)].map((_, i) => (
              <PixelHeart key={i} size={14} />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <PixelStar size={16} />
            <span className="pixel-font text-[10px] text-midnight/40">September 23, 2026</span>
            <PixelStar size={16} />
          </div>
        </div>
      </div>
    );
  }

  if (noClicked) {
    return (
      <div className="w-full max-w-[560px] mx-auto px-5 py-12 text-center">
        <div className="bg-paper border-[4px] border-navy p-8 md:p-10" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
          <div className="flex justify-center mb-6">
            <PixelCat variant="sitting" size={64} />
          </div>
          <h2 className="pixel-font text-xl text-navy mb-2">{storyData.responses.no.title}</h2>
          <p className="font-body text-[15px] text-midnight/70 mb-6">{storyData.responses.no.subtitle}</p>
          <p className="font-body text-[14px] leading-[1.6] text-midnight/60 max-w-[380px] mx-auto mb-8">{storyData.responses.no.message}</p>
          <button onClick={() => window.location.reload()} className="pixel-button-secondary px-6 py-3 text-[13px]">
            {storyData.responses.no.button}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[560px] mx-auto px-5 py-12">
      <div className="bg-paper border-[4px] border-navy p-6 md:p-8 text-center relative" style={{ boxShadow: "8px 8px 0 #1a1f3d" }}>
        <div className="flex justify-center mb-4">
          <PixelCat variant="holdingTulip" size={72} />
        </div>

        <h2 className="pixel-font text-[20px] md:text-[24px] text-navy mb-8 leading-tight">{storyData.letter.question}</h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative min-h-[120px]">
          <button onClick={onYes} className="pixel-button px-10 py-4 text-[16px] w-[160px] z-10">
            YES
          </button>

          <div
            className="relative"
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)`, transition: "transform 0.2s steps(3)" }}
          >
            <button
              onClick={onNo}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="pixel-button-secondary px-10 py-4 text-[16px] w-[160px]"
            >
              NO
            </button>
          </div>
        </div>

        {showMessage && (
          <div className="mt-6 pixel-font text-[12px] text-violet2 bg-lavender/30 border border-violet2/30 inline-block px-3 py-1.5">
            {showMessage}
          </div>
        )}

        <div className="mt-8 flex justify-center gap-2">
          <PixelTulip variant="small" size={18} color="blue" />
          <PixelHeart size={14} />
          <PixelTulip variant="small" size={18} color="violet" />
        </div>
      </div>
    </div>
  );
}
