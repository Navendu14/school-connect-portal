import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { BookOpen, FlaskConical, Calculator, Calendar } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({ meta: [
    { title: "Academics — Brightfield School" },
    { name: "description", content: "CBSE curriculum, classes from Pre-primary to Class XII, Science and Commerce streams." },
  ]}),
  component: Academics,
});

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Rigorous, joyful, future-ready learning." subtitle="A CBSE curriculum delivered by 140 specialist teachers, supported by labs, libraries and a calendar built around real learning rhythms." />

      <Section>
        <SectionTitle eyebrow="Curriculum" title="CBSE — built on inquiry and competence." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Foundational (Pre-Primary–II)", text: "Play-based, multilingual, focused on motor skills and early numeracy." },
            { icon: BookOpen, title: "Preparatory & Middle (III–VIII)", text: "NCERT-aligned, with art, music, sport, coding and second language." },
            { icon: BookOpen, title: "Secondary & Sr. Secondary (IX–XII)", text: "CBSE board curriculum with stream electives and project work." },
          ].map(c => (
            <div key={c.title} className="p-6 rounded-2xl bg-card border border-border">
              <c.icon className="h-6 w-6 text-primary mb-3"/>
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Streams" title="Choices for Classes XI & XII" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: FlaskConical, title: "Science", subjects: ["Physics","Chemistry","Mathematics","Biology","Computer Science","English"], color: "from-primary to-primary-glow" },
            { icon: Calculator, title: "Commerce", subjects: ["Accountancy","Business Studies","Economics","Mathematics / Informatics","English","Entrepreneurship"], color: "from-accent to-primary" },
          ].map(s => (
            <div key={s.title} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground">
                  <s.icon className="h-5 w-5"/>
                </div>
                <h3 className="text-2xl font-display font-bold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.subjects.map(sub => (
                  <span key={sub} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{sub}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Calendar" title="Academic Year 2025–26" />
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr><th className="text-left p-4 font-semibold">Term / Event</th><th className="text-left p-4 font-semibold">Dates</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Session begins","April 1, 2025"],
                ["Summer break","May 26 – June 30"],
                ["Half-yearly examinations","September 15 – 27"],
                ["Autumn break","October 19 – 26"],
                ["Annual Day","December 14"],
                ["Pre-board (XII)","January 5 – 17, 2026"],
                ["Annual examinations","February 23 – March 14"],
              ].map(([e,d])=>(
                <tr key={e}><td className="p-4">{e}</td><td className="p-4 text-muted-foreground flex items-center gap-2"><Calendar className="h-4 w-4 text-primary"/>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
