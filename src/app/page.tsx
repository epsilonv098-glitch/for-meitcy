"use client";
import React, { useState, useEffect } from "react";
import { storyData } from "@/data/story";
import { PixelEnvelope } from "@/components/PixelEnvelope";
import { StoryScene, ProgrammingQuestionScene } from "@/components/StoryScene";
import { Timeline } from "@/components/Timeline";
import { FinalLetter, YesNoSection } from "@/components/Confession";
import { PixelCat } from "@/components/PixelCat";
import { PixelTulip } from "@/components/PixelTulip";
import { PixelHeart } from "@/components/PixelHeart";
import { DialogueBox } from "@/components/DialogueBox";

type Stage = "opening" | "chapter1" | "chapter2" | "chapter3" | "timeline" | "realization" | "letter" | "confession" | "result";

export default function Home() {
  const [stage, setStage] = useState<Stage>("opening");
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState<string | null>(null);

  // Track visit
  useEffect(() => {
    fetch("/api/response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response: "visit", timestamp: new Date().toISOString() }),
    }).catch(() => {});
  }, []);

  const handleResponse = async (resp: "yes" | "no") => {
    try {
      await fetch("/api/response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          response: resp,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });
    } catch (e) {
      console.log("response tracking failed", e);
    }

    if (resp === "yes") {
      setYesClicked(true);
      setStage("result");
      // small confetti with hearts
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(100);
      }
    } else {
      if (noCount >= 5) {
        setNoClicked(true);
        setStage("result");
      } else {
        setNoCount((c) => c + 1);
      }
    }
  };

  const nextStage = (next: Stage) => {
    setStage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-offwhite relative overflow-x-hidden">
      {/* subtle grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#1a1f3d 1px, transparent 1px), linear-gradient(90deg, #1a1f3d 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      {/* header - tiny pixel bar */}
      <header className="sticky top-0 z-40 bg-paper border-b-[3px] border-navy px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-violet2 border border-navy"></div>
          <span className="pixel-font text-[10px] text-navy">FOR_MEITCY.EXE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <PixelHeart size={12} />
          <span className="pixel-font text-[8px] text-midnight/50">2 YEARS</span>
        </div>
      </header>

      {stage === "opening" && (
        <PixelEnvelope
          forLine={storyData.opening.forLine}
          subtitle={storyData.opening.subtitle}
          buttonText={storyData.opening.button}
          onOpen={() => nextStage("chapter1")}
        />
      )}

      {stage === "chapter1" && (
        <div>
          <StoryScene
            title={storyData.chapter1.title}
            date={storyData.chapter1.date}
            lines={storyData.chapter1.lines}
            catVariant="sitting"
            catPosition="right"
            showTulip
          />
          <div className="max-w-[560px] mx-auto px-5 pb-6">
            <div className="flex justify-between items-center">
              <button onClick={() => nextStage("opening")} className="pixel-button-secondary px-4 py-2 text-[11px]">
                Back
              </button>
              <button onClick={() => nextStage("chapter2")} className="pixel-button px-6 py-2.5 text-[12px]">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "chapter2" && (
        <div>
          <ProgrammingQuestionScene
            lines={storyData.chapter2.lines}
            afterLines={storyData.chapter2.afterDialogue}
            gameDialogue={storyData.chapter2.gameDialogue}
            dateLabel={storyData.chapter2.dateLabel}
          />
          <div className="max-w-[560px] mx-auto px-5 pb-10">
            <div className="flex justify-between items-center">
              <button onClick={() => nextStage("chapter1")} className="pixel-button-secondary px-4 py-2 text-[11px]">
                Back
              </button>
              <button onClick={() => nextStage("chapter3")} className="pixel-button px-6 py-2.5 text-[12px]">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "chapter3" && (
        <div>
          <StoryScene
            title={storyData.chapter3.title}
            lines={storyData.chapter3.lines}
            catVariant="sleeping"
            catPosition="bottom"
          >
            {/* easter egg nicknames */}
            <div className="mt-6 flex flex-wrap gap-2">
              {storyData.chapter3.easterEggs.map((egg, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setShowEasterEgg(egg);
                    setTimeout(() => setShowEasterEgg(null), 2000);
                  }}
                  className="pixel-font text-[9px] bg-lavender/20 border border-violet2/30 px-2 py-1 text-violet2 hover:bg-lavender/40 transition-colors"
                >
                  {egg}
                </button>
              ))}
            </div>
            {showEasterEgg && (
              <div className="mt-3 pixel-font text-[10px] bg-navy text-white px-3 py-2 inline-block">
                {showEasterEgg} - only you would get this, {storyData.nicknames.main}
              </div>
            )}
          </StoryScene>

          <div className="max-w-[560px] mx-auto px-5 pb-10">
            <div className="flex justify-between items-center">
              <button onClick={() => nextStage("chapter2")} className="pixel-button-secondary px-4 py-2 text-[11px]">
                Back
              </button>
              <button onClick={() => nextStage("timeline")} className="pixel-button px-6 py-2.5 text-[12px]">
                Next: Timeline
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "timeline" && (
        <div>
          <Timeline />
          <div className="max-w-[560px] mx-auto px-5 pb-10 pt-4">
            <div className="flex justify-between items-center">
              <button onClick={() => nextStage("chapter3")} className="pixel-button-secondary px-4 py-2 text-[11px]">
                Back
              </button>
              <button onClick={() => nextStage("realization")} className="pixel-button px-6 py-2.5 text-[12px]">
                What happened
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "realization" && (
        <div>
          <StoryScene
            title={storyData.realization.title}
            lines={storyData.realization.lines}
            catVariant="happy"
            catPosition="right"
            showTulip
          />
          <div className="max-w-[560px] mx-auto px-5 pb-10">
            <DialogueBox variant="thought" className="mb-8">
              Two years. From a crush in senior high to this letter. I already liked you. Then I got to know you. And I fell for you even more.
            </DialogueBox>
            <div className="flex justify-between items-center">
              <button onClick={() => nextStage("timeline")} className="pixel-button-secondary px-4 py-2 text-[11px]">
                Back
              </button>
              <button onClick={() => nextStage("letter")} className="pixel-button px-6 py-2.5 text-[12px]">
                Read my letter
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "letter" && <FinalLetter onNext={() => nextStage("confession")} />}

      {stage === "confession" && (
        <YesNoSection onYes={() => handleResponse("yes")} onNo={() => handleResponse("no")} noCount={noCount} yesClicked={yesClicked} noClicked={noClicked} />
      )}

      {stage === "result" && (
        <YesNoSection onYes={() => handleResponse("yes")} onNo={() => handleResponse("no")} noCount={noCount} yesClicked={yesClicked} noClicked={noClicked} />
      )}

      {/* footer */}
      <footer className="mt-12 border-t-[3px] border-navy bg-paper px-4 py-6">
        <div className="max-w-[560px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <PixelTulip variant="small" size={16} color="blue" />
            <span className="pixel-font text-[9px] text-midnight/50">{storyData.footer.madeFor}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="pixel-font text-[8px] text-midnight/40">{storyData.footer.date}</span>
            <span className="pixel-font text-[8px] bg-navy text-white px-2 py-1">{storyData.footer.note}</span>
          </div>
        </div>
      </footer>

      {/* progress dots */}
      {stage !== "opening" && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-paper border-[3px] border-navy px-3 py-2 flex gap-1.5 z-30" style={{ boxShadow: "3px 3px 0 #1a1f3d" }}>
          {["chapter1", "chapter2", "chapter3", "timeline", "realization", "letter", "confession"].map((s, i) => (
            <div key={s} className={`w-2 h-2 border border-navy ${stage === s || (stage === "result" && s === "confession") ? "bg-violet2" : "bg-white"}`}></div>
          ))}
        </div>
      )}
    </main>
  );
}
