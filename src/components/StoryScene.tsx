"use client";
import React from "react";
import { PixelCat } from "./PixelCat";
import { PixelTulip } from "./PixelTulip";
import { DialogueBox, GameDialogueLine } from "./DialogueBox";

interface SceneProps {
  title?: string;
  date?: string;
  lines?: string[];
  children?: React.ReactNode;
  catVariant?: "sitting" | "sleeping" | "happy" | "surprised" | "holdingTulip" | "celebrating";
  catPosition?: "left" | "right" | "bottom";
  showTulip?: boolean;
  className?: string;
}

export function StoryScene({ title, date, lines, children, catVariant = "sitting", catPosition = "right", showTulip = false, className = "" }: SceneProps) {
  return (
    <div className={`w-full max-w-[560px] mx-auto px-5 py-10 md:py-14 ${className}`}>
      {date && <div className="pixel-font text-[10px] tracking-widest text-violet2 border border-violet2/30 bg-lavender/20 inline-block px-2 py-1 mb-4">{date}</div>}
      {title && <h2 className="pixel-font text-[22px] md:text-[26px] text-navy mb-6 leading-tight">{title}</h2>}

      <div className="relative">
        {catPosition === "left" && (
          <div className="absolute -left-2 -top-8 md:-left-12 z-10 hidden md:block">
            <PixelCat variant={catVariant} size={48} />
          </div>
        )}

        <div className="space-y-4">
          {lines?.map((line, i) => (
            <DialogueBox key={i} className="animate-[bounceSoft_0.5s_ease-out]">
              {line}
            </DialogueBox>
          ))}
          {children}
        </div>

        {catPosition === "right" && (
          <div className="flex justify-end mt-6">
            <PixelCat variant={catVariant} size={52} />
          </div>
        )}

        {catPosition === "bottom" && (
          <div className="flex justify-center mt-8">
            <PixelCat variant={catVariant} size={56} animate />
          </div>
        )}

        {showTulip && (
          <div className="flex justify-center gap-3 mt-8">
            <PixelTulip variant="small" size={22} color="blue" />
            <PixelTulip variant="small" size={22} color="violet" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ProgrammingQuestionScene({ lines, afterLines, gameDialogue, dateLabel }: { lines: string[]; afterLines: string[]; gameDialogue: any[]; dateLabel: string }) {
  return (
    <div className="w-full max-w-[560px] mx-auto px-5 py-10 md:py-14">
      <div className="pixel-font text-[10px] tracking-widest text-violet2 border border-violet2/30 bg-lavender/20 inline-block px-2 py-1 mb-4">{dateLabel}</div>
      <h2 className="pixel-font text-[22px] md:text-[26px] text-navy mb-6">Then we graduated</h2>

      <div className="space-y-4 mb-8">
        {lines.map((line, i) => (
          <DialogueBox key={i}>{line}</DialogueBox>
        ))}
      </div>

      {/* game dialogue box */}
      <div className="bg-navy border-[4px] border-navy p-4 md:p-5 mb-8 relative" style={{ boxShadow: "6px 6px 0 #1a1f3d" }}>
        <div className="pixel-font text-[10px] text-lavender mb-4 tracking-widest">THOUGHTS.EXE</div>
        <div className="space-y-1">
          {gameDialogue.map((d, i) => (
            <GameDialogueLine key={i} speaker={d.speaker} text={d.text} isMessage={d.isMessage} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-lavender/60 pixel-font text-[10px]">
          <span className="w-2 h-4 bg-lavender animate-blink inline-block"></span> PRESS ENTER TO SEND
        </div>
      </div>

      <div className="space-y-4">
        {afterLines.map((line, i) => (
          <DialogueBox key={i} variant={i === afterLines.length - 1 ? "thought" : "default"}>
            {line}
          </DialogueBox>
        ))}
      </div>

      <div className="flex justify-start mt-6 gap-3 items-end">
        <PixelCat variant="surprised" size={56} />
        <div className="pixel-font text-[10px] text-midnight/50 bg-paper border border-navy px-2 py-1">confused cat noises</div>
      </div>
    </div>
  );
}
