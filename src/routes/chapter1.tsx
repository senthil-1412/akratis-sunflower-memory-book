import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chapter1")({
  head: () => ({
    meta: [
      { title: "Chapter One — Our Beginning" },
      { name: "description", content: "Our story started with one reply to a Never Never story." },
      { property: "og:title", content: "Chapter One — Our Beginning" },
      { property: "og:description", content: "Our story started with one reply to a Never Never story." },
    ],
  }),
  component: Chapter1,
});

function Chapter1() {
  return (
    <main className="paper-bg flex min-h-screen items-center justify-center p-4">
      <div className="animate-fade-up flex w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl md:h-[700px] md:flex-row">
        <div className="flex flex-col items-center justify-center border-border bg-paper-left p-10 md:w-1/2 md:border-r-2 md:p-[55px]">
          <img src="/images/nevernever.jpg" alt="Never Never by Colleen Hoover" className="w-[220px] rounded-xl shadow-xl transition duration-500 hover:scale-105 md:w-[260px]" />
          <h3 className="mt-8 text-center font-serif text-[28px] text-ink-soft">The Book That Started Everything</h3>
          <p className="mt-5 text-center leading-[1.8] text-ink-muted">Sometimes one book can unknowingly begin another story.</p>
        </div>
        <div className="flex flex-col justify-center bg-paper p-10 text-ink-soft md:w-1/2 md:p-[55px]">
          <span className="text-[13px] uppercase tracking-[3px] text-ink-muted">Chapter One</span>
          <h1 className="my-4 font-serif text-[42px] font-bold text-ink md:text-[55px]">Our Beginning</h1>
          <div className="mb-6 h-[3px] w-[90px] bg-primary" />
          <div className="space-y-5 leading-[1.9]">
            <p>Every story has a beginning. Ours started with something beautifully unexpected.</p>
            <p>One day, you posted <b>Never Never</b> by Colleen Hoover on Snapchat.</p>
            <p>I replied to that story.</p>
            <p>At that moment, neither of us knew that one simple reply would become the first page of our own story.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
