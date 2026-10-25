import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { letter } from "@/lib/letter";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter for Akrati 💌" },
      { name: "description", content: "A birthday letter for my best best friend." },
      { property: "og:title", content: "A Letter for Akrati 💌" },
      { property: "og:description", content: "A birthday letter for my best best friend." },
    ],
  }),
  component: Letter,
});

function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <main className="paper-bg flex min-h-screen items-center justify-center px-4 py-16">
      {!open ? (
        <button onClick={() => setOpen(true)} className="animate-fade-up group text-center">
          <div className="animate-heartbeat text-[110px]">💌</div>
          <p className="mt-4 font-serif text-3xl font-bold text-foreground">A letter for you</p>
          <p className="mt-2 text-foreground/80">Tap to open</p>
        </button>
      ) : (
        <article className="animate-fade-up w-full max-w-3xl rounded-2xl bg-paper p-8 shadow-2xl md:p-14">
          <div className="space-y-5 font-serif text-lg leading-[1.9] text-ink-soft">
            {letter.map((p, i) => (
              <p key={i} className={i === 0 ? "text-3xl font-bold text-ink" : i === letter.length - 1 ? "text-xl italic text-ink" : ""}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-right font-serif text-2xl font-bold text-ink">— Senthil</p>
          <div className="mt-10 text-center">
            <Link to="/" className="love-btn inline-block px-10">Back to Start 🌻</Link>
          </div>
        </article>
      )}
    </main>
  );
}
