import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { useState } from "react";
import { X, Play } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title:"Gallery — Brightfield School" }, { name:"description", content:"Photos and videos from life at Brightfield." }]}),
  component: Gallery,
});

const photos = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=80",
  "https://images.unsplash.com/photo-1610484826917-0f101a7c0c6f?w=900&q=80",
  "https://images.unsplash.com/photo-1571260898934-29ce8b51c5a4?w=900&q=80",
];

const videos = [
  { title: "Annual Day 2024 Highlights", thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80" },
  { title: "Sports Meet Recap", thumb: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80" },
  { title: "Campus Tour", thumb: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Glimpses of Brightfield." />
      <Section>
        <SectionTitle eyebrow="Photos" title="Captured moments" />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {photos.map((p,i)=>(
            <button key={i} onClick={()=>setOpen(p)} className="block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl group">
              <img src={p} alt="" loading="lazy" className="w-full group-hover:scale-105 transition-transform duration-500" />
            </button>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Videos" title="Watch & explore" />
        <div className="grid md:grid-cols-3 gap-5">
          {videos.map(v=>(
            <button key={v.title} className="group relative rounded-2xl overflow-hidden bg-card border border-border">
              <img src={v.thumb} alt={v.title} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-card/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-primary fill-current ml-1"/>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-primary-foreground font-semibold">{v.title}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {open && (
        <div onClick={()=>setOpen(null)} className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur p-4 flex items-center justify-center animate-fade-up">
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-card flex items-center justify-center"><X className="h-5 w-5"/></button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-glow" />
        </div>
      )}
    </>
  );
}
