import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blue")({
  head: () => ({
    meta: [
      { title: "Chapter Two: You're My Blue 💙 — For Akrati" },
      { name: "description", content: "Every peaceful shade of blue reminds me of you." },
      { property: "og:title", content: "Chapter Two: You're My Blue 💙" },
      { property: "og:description", content: "Every peaceful shade of blue reminds me of you." },
    ],
  }),
  component: Blue,
});

const floaters = [
  ["🌻", "left-[8%] top-[12%]", "0s"],
  ["💙", "right-[10%] top-[20%]", "1.5s"],
  ["☀️", "left-[12%] bottom-[15%]", "3s"],
  ["🌻", "right-[14%] bottom-[10%]", "2s"],
  ["🌼", "left-[45%] top-[5%]", "4s"],
];

function Blue() {
  return (
    <main className="paper-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      {floaters.map(([e, pos, d], i) => (
        <span key={i} className={`animate-float pointer-events-none absolute text-4xl opacity-70 md:text-5xl ${pos}`} style={{ animationDelay: d }}>{e}</span>
      ))}
      <section className="animate-fade-up relative w-full max-w-3xl rounded-[30px] bg-paper p-8 text-center shadow-2xl md:p-14">
        <span className="text-[13px] uppercase tracking-[3px] text-ink-muted">Chapter Two</span>
        <h1 className="my-4 font-serif text-[42px] font-bold text-ink md:text-[60px]">You're My Blue 💙</h1>
        <blockquote className="mx-auto mt-6 max-w-2xl font-serif text-lg italic leading-[1.8] text-ink-soft md:text-xl">
          “Some people have a favourite colour. Mine became blue because, somehow, it reminds me of our friendship and all the little memories we've shared.”
        </blockquote>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[["☁️", "The sky is blue."], ["🌊", "The ocean is blue."], ["🦋", "Even butterflies wear blue."]].map(([e, t], i) => (
            <div key={t} className="animate-fade-up rounded-2xl bg-paper-left p-6 shadow-md" style={{ animationDelay: `${300 + i * 250}ms`, animationFillMode: "both" }}>
              <div className="text-4xl">{e}</div>
              <p className="mt-3 font-medium text-ink">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-serif text-2xl font-bold text-ink">Somehow, every peaceful shade of blue reminds me of you. 💙</p>
        <p className="mx-auto mt-6 max-w-2xl leading-[1.8] text-ink-soft">
          You became someone I could laugh with, share random thoughts with, and create unforgettable memories with. Sometimes, it's the smallest moments that make a friendship truly special.
        </p>
        <Link to="/chapter2" className="love-btn mt-10 inline-block px-10">See Our Memories →</Link>
      </section>
    </main>
  );
}
