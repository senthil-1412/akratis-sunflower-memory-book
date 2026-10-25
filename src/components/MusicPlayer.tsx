import { useEffect, useState } from "react";
import song from "@/assets/tum-se-hi.mp3.asset.json";

let audio: HTMLAudioElement | null = null;
const listeners = new Set<(p: boolean) => void>();

function getAudio() {
  if (!audio) {
    audio = new Audio(song.url);
    audio.loop = true;
    audio.volume = 0.6;
    audio.addEventListener("play", () => listeners.forEach((l) => l(true)));
    audio.addEventListener("pause", () => listeners.forEach((l) => l(false)));
  }
  return audio;
}

export function playSong() {
  getAudio().play().catch(() => {});
}

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    listeners.add(setPlaying);
    return () => void listeners.delete(setPlaying);
  }, []);
  return (
    <button
      onClick={() => {
        const a = getAudio();
        if (a.paused) playSong();
        else a.pause();
      }}
      aria-label={playing ? "Pause song" : "Play song"}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-paper px-4 py-3 text-sm font-medium text-ink shadow-xl ring-1 ring-black/5"
    >
      <span className={playing ? "animate-heartbeat" : ""}>{playing ? "🎵" : "▶️"}</span>
      {playing ? "Tum Se Hi" : "Play our song"}
    </button>
  );
}
