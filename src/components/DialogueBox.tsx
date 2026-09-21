"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  speaker?: string;
  className?: string;
  variant?: "default" | "thought" | "message";
}

export function DialogueBox({ children, speaker, className = "", variant = "default" }: Props) {
  if (variant === "message") {
    return (
      <div className={`relative bg-violet2 border-[3px] border-navy p-3 md:p-4 text-white max-w-[85%] ml-auto ${className}`} style={{ boxShadow: "4px 4px 0 #1a1f3d" }}>
        <p className="font-body text-[15px] leading-relaxed">{children}</p>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-violet2 border-r-[3px] border-b-[3px] border-navy rotate-45"></div>
      </div>
    );
  }

  if (variant === "thought") {
    return (
      <div className={`relative bg-paper border-[3px] border-dashed border-navy/40 p-3 md:p-4 max-w-[90%] ${className}`}>
        <p className="font-body text-[15px] leading-relaxed text-midnight/80 italic">{children}</p>
      </div>
    );
  }

  return (
    <div className={`dialogue-box p-4 md:p-5 ${className}`}>
      {speaker && <div className="pixel-font text-[11px] text-violet2 mb-2 uppercase tracking-widest">{speaker}</div>}
      <div className="font-body text-[15px] md:text-[16px] leading-[1.6] text-navy">{children}</div>
    </div>
  );
}

export function GameDialogueLine({ speaker, text, isMessage }: { speaker: string; text: string; isMessage?: boolean }) {
  return (
    <div className={`flex ${isMessage ? "justify-end" : "justify-start"} mb-3`}>
      {isMessage ? (
        <div className="bg-violet2 border-[3px] border-navy px-4 py-2 text-white max-w-[80%] text-[14px]" style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
          <span className="pixel-font text-[10px] opacity-70 block mb-1">YOU</span>
          {text}
        </div>
      ) : (
        <div className="flex gap-2 items-start">
          <div className="w-8 h-8 bg-navy border-2 border-navy flex items-center justify-center shrink-0 mt-1">
            <span className="pixel-font text-[10px] text-white">ME</span>
          </div>
          <div className="bg-paper border-[3px] border-navy px-4 py-2 max-w-[75%] text-[14px]" style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
}
