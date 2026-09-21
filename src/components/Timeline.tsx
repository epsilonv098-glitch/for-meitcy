"use client";
import React from "react";
import { storyData } from "@/data/story";
import { PixelTulip } from "./PixelTulip";
import { PixelHeart } from "./PixelHeart";
import { PixelStar } from "./PixelStar";

export function Timeline() {
  return (
    <div className="w-full max-w-[560px] mx-auto px-4 py-8">
      <h2 className="pixel-font text-2xl md:text-3xl text-navy text-center mb-2">{storyData.timeline.title}</h2>
      <p className="text-center text-midnight/60 text-sm mb-10 font-body">September 23, 2024 to September 23, 2026</p>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[4px] bg-navy"></div>

        <div className="space-y-10">
          {storyData.timeline.items.map((item, idx) => (
            <div key={idx} className="relative flex gap-4 md:gap-6">
              {/* dot */}
              <div className={`relative z-10 w-[40px] h-[40px] md:w-[48px] md:h-[48px] border-[3px] border-navy flex items-center justify-center shrink-0 mt-1 ${item.highlight ? "bg-violet2" : "bg-paper"}`} style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
                {item.icon === "eye" && <div className="w-3 h-3 bg-navy rounded-[1px]"></div>}
                {item.icon === "cap" && <div className="w-5 h-3 bg-midnight border border-navy"></div>}
                {item.icon === "code" && <span className="pixel-font text-[10px] text-navy">&lt;/&gt;</span>}
                {item.icon === "chat" && <div className="w-4 h-3 bg-softblue border border-navy"></div>}
                {item.icon === "heart" && <PixelHeart size={16} />}
                {item.icon === "star" && <PixelStar size={16} />}
                {item.icon === "tulip" && <PixelTulip variant="small" size={20} color="violet" />}
              </div>

              {/* content */}
              <div className={`flex-1 border-[3px] border-navy p-4 ${item.highlight ? "bg-lavender/30" : "bg-paper"}`} style={{ boxShadow: "4px 4px 0 #1a1f3d" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="pixel-font text-[10px] text-violet2 bg-white border border-navy px-2 py-0.5">{item.date}</span>
                  {item.highlight && <span className="pixel-font text-[9px] bg-navy text-white px-1.5 py-0.5">IMPORTANT</span>}
                </div>
                <h3 className="pixel-font text-[14px] md:text-[15px] text-navy mb-1">{item.label}</h3>
                <p className="font-body text-[13px] md:text-[14px] leading-[1.5] text-midnight/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* small tulip divider */}
      <div className="flex justify-center gap-2 mt-12 opacity-60">
        <PixelTulip variant="small" size={18} color="blue" />
        <PixelTulip variant="small" size={18} color="violet" />
        <PixelTulip variant="small" size={18} color="pink" />
      </div>
    </div>
  );
}
