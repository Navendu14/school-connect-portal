import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { useState } from "react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title:"Events & Activities — Brightfield School" }, { name:"description", content:"Sports, cultural and academic events at Brightfield." }]}),
  component: Events,
});

const cats = ["All","Sports","Cultural","Academic"] as const;

const events = [
  { cat:"Cultural", title:"Annual Day — Kaleidoscope", date:"Dec 14, 2025", desc:"An evening of dance, drama and music celebrating 40 years of Brightfield.", img:"https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80" },
  { cat:"Sports", title:"Winter Sports Meet", date:"Dec 21, 2025", desc:"Athletics finals across all houses including 100m, relay and field events.", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=80" },
  { cat:"Academic", title:"Science Symposium", date:"Jan 10, 2026", desc:"Student research presentations across physics, biology and earth sciences.", img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=80" },
  { cat:"Cultural", title:"Republic Day Parade", date:"Jan 26, 2026", desc:"Inter-house march past and patriotic performances.", img:"https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80" },
  { cat:"Academic", title:"Math Olympiad", date:"Feb 02, 2026", desc:"School-level qualifier for the Regional Mathematical Olympiad.", img:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80" },
  { cat:"Sports", title:"Inter-school Football Cup", date:"Feb 14, 2026", desc:"Hosting 16 schools from Delhi NCR for a week-long tournament.", img:"https://images.unsplash.com/photo-1551958219-acbc608c6377?w=900&q=80" },
  { cat:"Cultural", title:"Spring Music Concert", date:"Mar 08, 2026", desc:"Choir, orchestra and solo performances by senior students.", img:"https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=900&q=80" },
  { cat:"Academic", title:"Model UN", date:"Mar 21, 2026", desc:"Two-day MUN with delegates from across the city.", img:"https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=900&q=80" },
];

function Events() {
  const [active, setActive] = useState<typeof cats[number]>("All");
  const filtered = active === "All" ? events : events.filter(e => e.cat === active);
  return (
    <>
      <PageHero eyebrow="Events & Activities" title="There's always something happening." subtitle="Sports, cultural and academic events that build skill, courage and joy." />
      <Section>
        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map(c => (
            <button key={c} onClick={()=>setActive(c)} className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${active===c?"bg-primary text-primary-foreground border-primary shadow-soft":"bg-card text-foreground border-border hover:border-primary hover:text-primary"}`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(e=>(
            <article key={e.title} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"/>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-semibold text-primary">{e.cat}</span>
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{e.date}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
