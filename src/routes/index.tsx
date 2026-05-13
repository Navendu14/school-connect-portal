import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, GraduationCap, Newspaper, Calendar, Quote, Star, Users, Trophy, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/site/Page";
import hero from "@/assets/hero-school.jpg";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brightfield Senior Sec. School — Where Curiosity Builds Character" },
      { name: "description", content: "CBSE affiliated co-ed school in New Delhi. Admissions open for 2026-27. Explore academics, faculty, facilities and more." },
      { property: "og:title", content: "Brightfield Senior Sec. School" },
      { property: "og:description", content: "Nurturing curious minds and confident leaders since 1985." },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Users, label: "Students", value: "2,400+" },
  { icon: GraduationCap, label: "Faculty", value: "140" },
  { icon: Trophy, label: "Awards", value: "85+" },
  { icon: BookOpen, label: "Years", value: "40" },
];

const highlights = [
  { icon: Award, title: "Academic Excellence", text: "100% board pass rate with 38 students scoring above 95% in 2025." },
  { icon: Building2, title: "World-class Facilities", text: "Smart classrooms, robotics lab, 25,000-book library, and Olympic-sized track." },
  { icon: Star, title: "Holistic Development", text: "30+ clubs across arts, sports, and sciences nurturing every interest." },
];

const news = [
  { date: "Nov 28, 2025", tag: "Notice", title: "Half-yearly examination schedule released for Classes IX–XII" },
  { date: "Nov 22, 2025", tag: "Result", title: "Brightfield wins Inter-school Robotics Championship 2025" },
  { date: "Nov 15, 2025", tag: "Admission", title: "Admissions open for 2026-27 — Pre-primary to Class XI" },
  { date: "Nov 02, 2025", tag: "Event", title: "Annual Day 'Kaleidoscope' scheduled for December 14" },
];

const events = [
  { date: "Dec 14", title: "Annual Day — Kaleidoscope", desc: "An evening of music, dance and theatre.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
  { date: "Dec 21", title: "Winter Sports Meet", desc: "Athletics, football, basketball finals.", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" },
  { date: "Jan 10", title: "Science Symposium", desc: "Student-led research showcase.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" },
];

const testimonials = [
  { name: "Aanya Sharma", role: "Alumna, Class of 2024", text: "Brightfield gave me more than grades — it gave me a community of mentors who believed in me long before I believed in myself." },
  { name: "Rajiv Mehra", role: "Parent", text: "The teachers genuinely know my child. The communication, the care, the rigor — it's everything we hoped for." },
  { name: "Ishaan Gupta", role: "Student, Class XII", text: "From robotics club to debate team, there's space here for every kind of thinker." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
                <span className="h-2 w-2 rounded-full bg-accent" /> Admissions 2026-27 Now Open
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05]">
                Where curiosity <span className="text-gradient">builds character.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                A CBSE co-educational school in New Delhi, shaping confident, kind and capable young people for forty years.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full shadow-glow">
                  <Link to="/admissions">Admissions Open <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 gradient-hero rounded-3xl blur-2xl opacity-30" />
              <img src={hero} alt="Brightfield School campus" width={1920} height={1080} className="relative rounded-3xl shadow-card aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-card p-4 max-w-[220px]">
                <div className="flex items-center gap-2 text-accent">
                  {[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-current"/>))}
                </div>
                <p className="text-sm font-medium mt-2">Rated #4 in Delhi NCR</p>
                <p className="text-xs text-muted-foreground">Education World 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <SectionTitle eyebrow="Why Brightfield" title="An education that travels with them for life." />
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-5">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-display font-semibold">{h.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* News + Events */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Latest" title="News & Notices" />
            <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">
              {news.map((n,i)=>(
                <Link to="/notices" key={i} className="block p-5 hover:bg-secondary/60 transition-colors">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">{n.tag}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-snug">{n.title}</p>
                </Link>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-4"><Link to="/notices">All notices <ArrowRight className="ml-1 h-4 w-4"/></Link></Button>
          </div>
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Upcoming" title="Events & Activities" />
            <div className="grid sm:grid-cols-3 gap-4">
              {events.map((e,i)=>(
                <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-card transition-shadow">
                  <img src={e.img} alt={e.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-4">
                    <div className="text-xs font-semibold text-primary">{e.date}</div>
                    <h4 className="mt-1 font-display font-semibold">{e.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-4"><Link to="/events">All events <ArrowRight className="ml-1 h-4 w-4"/></Link></Button>
          </div>
        </div>
      </Section>

      {/* CTA strip */}
      <Section className="!py-0">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Begin your child's Brightfield journey.</h3>
              <p className="mt-3 opacity-90">Applications for 2026-27 close on January 31. Schedule a campus tour today.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Book a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle eyebrow="Voices" title="What our community says." center />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t,i)=>(
            <div key={i} className="p-7 rounded-2xl bg-card border border-border relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-5 right-5"/>
              <p className="text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
