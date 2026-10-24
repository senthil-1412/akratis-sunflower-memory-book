import { createFileRoute, Link } from "@tanstack/react-router";

import lovesImg from "@/assets/memories/loves.jpg";
import teaImg from "@/assets/memories/tea.jpg";
import firstMeetingImg from "@/assets/memories/first-meeting.jpg";
import dressImg from "@/assets/memories/dress.jpg";
import honestImg from "@/assets/memories/honest.jpg";
import bestfriendImg from "@/assets/memories/bestfriend.jpg";
import laughingImg from "@/assets/memories/laughing.jpg";
import ttImg from "@/assets/memories/tt.jpg";
import newDishesImg from "@/assets/memories/new-dishes.jpg";
import ludoImg from "@/assets/memories/ludo.jpg";
import tomJerryImg from "@/assets/memories/tom-jerry.jpg";

const memories = [
  ["🌻", "Things You Love", lovesImg, "You love sunflowers, chole bhature, masala dosa, veg momos, Messi, and oxidized earrings. These little things remind me of you."],
  ["☕", "Our Tea Time", teaImg, "We usually go to Chai Sutta Bar for tea. It's become one of our usual plans, and I enjoy these simple moments with you."],
  ["🧇", "Our First Meeting", firstMeetingImg, "I still remember the first time we met outside, near Maple Waffle Shop and Erode Amman Mess. It's a nice memory to look back on."],
  ["👗", "My Dress Selector", dressImg, "You are the only person who chooses dresses for me. I don't know how you manage it, but I always end up asking for your opinion!"],
  ["💯", "Always Straightforward", honestImg, "You have changed a lot of things in my character. Whenever I do something wrong, you are the first person to point it out. I really like this quality of yours because you always tell me things directly."],
  ["🫂", "My Best Friend", bestfriendImg, "Out of all my friends, you are my best best friend. I'm really happy to have a friend like you in my life."],
  ["😂", "The Happiest Version of Me", laughingImg, "I think I become the happiest version of myself when I'm with you. I can be myself, laugh freely, and enjoy even the smallest moments."],
  ["🏓", "Our Table Tennis Memories", ttImg, "Even today, watching those old table tennis videos on my phone makes me smile. Those were some of our cutest and funniest moments."],
  ["🍜", "Trying New Dishes", newDishesImg, "You always make me try new dishes. Because of you, I've started exploring more food, and it's always fun when we try something new together."],
  ["🎲", "Ludo Fights", ludoImg, "I love our fights, especially when we play Ludo. The arguments, blaming each other, and getting annoyed over a game are always funny. Somehow, we never get tired of it!"],
  ["🐭", "We're Like Tom & Jerry", tomJerryImg, "We fight, we chase, we annoy each other every single day — just like Tom and Jerry. But no matter what happens, we always end up back together, because that's what best friends do."],
] as const;

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
    <main className="paper-bg relative min-h-screen overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="animate-float absolute left-[6%] top-[12%] text-4xl opacity-25">🌻</span>
        <span className="animate-float absolute right-[8%] top-[22%] text-3xl opacity-25" style={{ animationDelay: "1.2s" }}>💙</span>
        <span className="animate-float absolute left-[10%] bottom-[18%] text-3xl opacity-25" style={{ animationDelay: "2.4s" }}>🫂</span>
        <span className="animate-float absolute right-[6%] bottom-[10%] text-4xl opacity-25" style={{ animationDelay: "3.1s" }}>🌻</span>
      </div>
      <div className="animate-fade-up relative mx-auto max-w-5xl text-center">
        <span className="text-[13px] uppercase tracking-[3px] text-foreground/80">Our Memories</span>
        <h1 className="my-4 font-serif text-[42px] font-bold text-foreground md:text-[60px]">For Akrati Sharma</h1>
        <div className="mx-auto h-[3px] w-[90px] bg-primary" />
      </div>
      <div className="relative mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">
        {memories.map(([icon, title, img, text], i) => (
          <article key={title} className="animate-fade-up group rounded-2xl bg-paper p-6 pt-5 shadow-xl transition duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}>
            <div className="relative h-[190px] overflow-hidden rounded-xl shadow-md md:h-[220px]">
              <img
                src={img}
                alt={title}
                loading="lazy"
                width={1152}
                height={576}
                className="memory-img h-full w-full"
                style={{ animationDelay: `${i * 1.3}s` }}
              />
              <span className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-full bg-paper text-2xl shadow-lg ring-1 ring-black/5">{icon}</span>
            </div>
            <h2 className="mt-10 font-serif text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-3 leading-[1.8] text-ink-soft">{text}</p>
          </article>
        ))}
      </div>
      <div className="relative mx-auto mt-14 max-w-3xl rounded-2xl bg-paper-left p-10 text-center shadow-xl">
        <div className="animate-heartbeat text-5xl">💌</div>
        <p className="mt-5 font-serif text-xl leading-[1.8] text-ink">
          I'm sorry for being rude to you in some situations. Sometimes I may not realise how I react, but I never mean to hurt you. Thanks for being patient with me even during those moments.
        </p>
      </div>
      <div className="relative mt-12 text-center">
        <Link to="/letter" className="love-btn inline-block px-10">Read My Letter 💌</Link>
      </div>
    </main>
  );
}
