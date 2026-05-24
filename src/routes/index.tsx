import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, GraduationCap, Newspaper, Calendar, Quote, Star, Users, Trophy, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/site/Page";
import { EventCard } from "@/components/site/EventCard";
import { NoticeCard } from "@/components/site/Noticecard";
import { GallerySection } from "@/components/site/GallerySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rise & Shine Public School — Where Curiosity Builds Character" },
      { name: "description", content: "Bhartiya Shiksha Board affiliated co-ed school in New Delhi. Admissions open for 2026-27. Explore academics, faculty, facilities and more." },
      { property: "og:title", content: "Rise & Shine Public School" },
      { property: "og:description", content: "Nurturing curious minds and confident leaders since 1985." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Award, title: "Quality Education", text: "We are committed to providing excellent education that combines traditional values with modern learning approaches to prepare students as responsible global citizens." },
  { icon: Building2, title: "Experienced & Dedicated Faculty", text: "Our trained and committed teachers focus on the academic, moral, and personal growth of every student." },
  { icon: Star, title: "Holistic Development", text: "We encourage students to develop confidence, creativity, discipline, and a positive attitude toward challenges in today’s competitive world." },
];

const testimonials = [
  { name: "Harshit Adhikari", role: "Class of 2023", text: "Rise & Shine gave me more than grades — it gave me a community of mentors who believed in me long before I believed in myself." },
  { name: "Rajiv Mehra", role: "Parent", text: "The teachers genuinely know my child. The communication, the care, the rigor — it's everything we hoped for." },
  { name: "Vidhi Karnatak", role: "Student, Class X", text: "My school has helped me grow not only in academics but also in confidence and communication skills. The teachers are supportive and always motivate us to do our best." },
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
                A Bhartiya Shiksha Board co-educational school in Haldwani, shaping confident, kind and capable young people.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full shadow-glow">
                  <Link to="/admissions">Admissions Open <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 gradient-hero rounded-3xl blur-2xl opacity-30" />
              <img src="/img/bg/image4.jpg" alt="Rise & Shine Public School campus" width={1920} height={1080} className="relative rounded-3xl shadow-card aspect-[4/3] object-fill" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <SectionTitle eyebrow="Why Rise & Shine " title="An education that travels with them for life." />
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

            <NoticeCard />

            <Button asChild variant="ghost" className="mt-4"><Link to="/notices">All notices <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Upcoming" title="Events & Activities" />

            <EventCard />

            <Button asChild variant="ghost" className="mt-4"><Link to="/events">All events <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="!pt-2">
        <SectionTitle eyebrow="Gallery" title="Glimpses of Rise & Shine." />
        <GallerySection limit={1} />
        <div className="mt-6">
          <Button asChild variant="ghost">
            <Link to="/gallery">View full gallery <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>

      {/* CTA strip */}
      <Section className="!py-0">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-14 text-primary-foreground">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Begin your child's Rise & Shine journey.</h3>
              <p className="mt-3 opacity-90">Applications for 2026-27 are opened.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle eyebrow="Voices" title="What our community says." center />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl bg-card border border-border relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-5 right-5" />
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
