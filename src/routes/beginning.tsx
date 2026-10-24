import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/beginning")({
  head: () => ({
    meta: [
      { title: "Chapter One: Our Beginning — For Akrati" },
      { name: "description", content: "How it all started at the Wipro office." },
      { property: "og:title", content: "Chapter One: Our Beginning" },
      { property: "og:description", content: "How it all started at the Wipro office." },
    ],
  }),
  component: Beginning,
});

function Beginning() {
  return (
    <main className="paper-bg flex min-h-screen items-center justify-center px-4 py-16">
      <article className="animate-fade-up w-full max-w-3xl rounded-2xl bg-paper p-8 shadow-2xl md:p-14">
        <div className="text-center">
          <span className="text-[13px] uppercase tracking-[3px] text-ink-muted">Chapter One</span>
          <h1 className="my-4 font-serif text-[42px] font-bold text-ink md:text-[56px]">Our Beginning</h1>
          <div className="mx-auto h-[3px] w-[90px] bg-primary" />
        </div>
        <div className="mt-10 space-y-6 font-serif text-lg leading-[1.9] text-ink-soft md:text-xl">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:text-primary">
            Every story has a beginning, and ours started with a simple first meeting at the Wipro office.
          </p>
          <p>
            It was my first day at Wipro, and you were wearing a white formal shirt, khaki pants, and heels. That was the first time I saw you! 😂 I still remember how you were struggling to walk in those heels. Honestly, that was one of the funniest little things I noticed about you that day.
          </p>
          <p className="italic text-ink">
            Little did we know that this first meeting would be the beginning of a wonderful friendship filled with memories, laughter, and countless moments to look back on. ❤️✨
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link to="/blue" className="love-btn inline-block px-10">Chapter Two →</Link>
        </div>
      </article>
    </main>
  );
}
