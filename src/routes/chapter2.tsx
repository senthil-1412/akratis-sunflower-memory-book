import { createFileRoute } from "@tanstack/react-router";

const memories = [
  ["🌻", "Things You Love", "You love sunflowers, chole bhature, masala dosa, veg momos, Messi, and oxidized earrings. These little things remind me of you."],
  ["☕", "Our Tea Time", "We usually go to Chai Sutta Bar for tea. It's become one of our usual plans, and I enjoy these simple moments with you."],
  ["🧇", "Our First Meeting", "I still remember the first time we met outside, near Maple Waffle Shop and Erode Amman Mess. It's a nice memory to look back on."],
  ["👗", "My Dress Selector", "You are the only person who chooses dresses for me. I don't know how you manage it, but I always end up asking for your opinion!"],
  ["💯", "Always Straightforward", "You have changed a lot of things in my character. Whenever I do something wrong, you are the first person to point it out. I really like this quality of yours because you always tell me things directly."],
  ["🫂", "My Best Friend", "Out of all my friends, you are my best best friend. I'm really happy to have a friend like you in my life."],
  ["😂", "The Happiest Version of Me", "I think I become the happiest version of myself when I'm with you. I can be myself, laugh freely, and enjoy even the smallest moments."],
  ["🏓", "Our Table Tennis Memories", "Even today, watching those old table tennis videos on my phone makes me smile. Those were some of our cutest and funniest moments."],
  ["🍜", "Trying New Dishes", "You always make me try new dishes. Because of you, I've started exploring more food, and it's always fun when we try something new together."],
  ["🎲", "Ludo Fights", "I love our fights, especially when we play Ludo. The arguments, blaming each other, and getting annoyed over a game are always funny. Somehow, we never get tired of it!"],
];

export const Route = createFileRoute("/chapter2")({
  head: () => ({
    meta: [
      { title: "Our Memories — For Akrati Sharma" },
      { name: "description", content: "Little things, big memories — for Akrati." },
      { property: "og:title", content: "Our Memories — For Akrati Sharma" },
      { property: "og:description", content: "Little things, big memories — for Akrati." },
    ],
  }),
  component: Chapter2,
});

function Chapter2() {
  return (
    <main className="paper-bg min-h-screen px-4 py-16">
      <div className="animate-fade-up mx-auto max-w-5xl text-center">
        <span className="text-[13px] uppercase tracking-[3px] text-ink-muted">Our Memories</span>
        <h1 className="my-4 font-serif text-[42px] font-bold text-ink md:text-[60px]">For Akrati Sharma</h1>
        <div className="mx-auto h-[3px] w-[90px] bg-primary" />
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        {memories.map(([icon, title, text], i) => (
          <article key={title} className="animate-fade-up rounded-2xl bg-paper p-8 shadow-xl transition duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}>
            <div className="text-4xl">{icon}</div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 leading-[1.8] text-ink-soft">{text}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-paper-left p-10 text-center shadow-xl">
        <div className="animate-heartbeat text-5xl">💌</div>
        <p className="mt-5 font-serif text-xl leading-[1.8] text-ink">
          I'm sorry for being rude to you in some situations. Sometimes I may not realise how I react, but I never mean to hurt you. Thanks for being patient with me even during those moments.
        </p>
      </div>
    </main>
  );
}
