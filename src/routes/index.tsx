import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { playSong } from "@/components/MusicPlayer";
import kittyImg from "@/assets/kitty.png";

const PASSWORD = "sunflower";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Akrati 🌻 — Our Story" },
      { name: "description", content: "A little something made just for you." },
      { property: "og:title", content: "Happy Birthday Akrati 🌻" },
      { property: "og:description", content: "A little something made just for you." },
    ],
  }),
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const [fading, setFading] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const unlock = () => {
    if (value !== PASSWORD) return setError("❌ Wrong Password");
    setError("");
    playSong();
    setFading(true);
    setTimeout(() => setUnlocked(true), 800);
  };

  return (
    <main className={`photo-bg flex h-screen items-center justify-center overflow-hidden px-4 py-8 transition-opacity duration-1000 ${leaving ? "opacity-0" : ""}`}>
      {!unlocked ? (
        <section className={`glass-card animate-fade-up w-[90%] max-w-[430px] rounded-[25px] p-[45px] text-center transition-opacity duration-1000 ${fading ? "opacity-0" : ""}`}>
          <div className="animate-heartbeat text-[70px]">🌻</div>
          <h1 className="mt-4 text-[38px] font-bold leading-tight">Hey Akrati 🌻</h1>
          <p className="mt-4 leading-[1.8] opacity-95">A little something made just for you.</p>
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && unlock()}
            placeholder="Enter Our Secret Password"
            className="mt-[30px] w-full rounded-[15px] bg-glass p-[15px] text-[17px] text-foreground outline-none placeholder:text-foreground"
          />
          <button onClick={unlock} className="love-btn mt-[25px] w-full">Open It 🌻</button>
          {error && <p className="mt-5 font-semibold text-error-soft">{error}</p>}
        </section>
      ) : (
        <section className="glass-card animate-fade-up w-[90%] max-w-[900px] overflow-y-auto rounded-[30px] p-8 text-center md:p-[60px]">
          <img
            src={kittyImg}
            alt="Cute birthday kitten with a sunflower"
            width={1024}
            height={1024}
            className="animate-heartbeat mx-auto w-[170px] rounded-[28px] shadow-lg md:w-[210px]"
          />
          <h1 className="mt-5 text-[36px] font-bold leading-tight md:text-[56px]">Happy Birthday, Akrati! 🎂💗</h1>
          <p className="mt-5 text-lg leading-[1.8] md:text-2xl">
            Wishing you lots of happiness, love, and success. So lucky to have you as my friend! May your smile always stay bright, and may all your dreams come true. 🌻✨
          </p>
          <p className="mt-4 text-xl font-semibold md:text-2xl">Stay happy and keep shining! 💕🫶🏻</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row">
            <button
              className="love-btn w-full md:w-[250px]"
              onClick={() =>
                alert("Akrati, thank you for being my best best friend. You make me the happiest version of myself 🌻")
              }
            >
              Click Me 🌻
            </button>
            <button
              className="love-btn w-full md:w-[250px]"
              onClick={() => {
                setLeaving(true);
                setTimeout(() => navigate({ to: "/beginning" }), 900);
              }}
            >
              Start Our Story →
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
