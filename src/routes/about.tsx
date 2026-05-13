import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { Eye, Target, Award, Building, FileText, ScrollText } from "lucide-react";
import library from "@/assets/library.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Brightfield School" },
      { name: "description", content: "Learn about Brightfield School's history, vision, mission, leadership and infrastructure." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Forty years of learning, leading, and lifting each other up." subtitle="Established in 1985, Brightfield is a CBSE co-educational school serving over 2,400 students from Pre-primary to Class XII." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={library} alt="School library" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-card aspect-[4/3] object-cover" />
          <div>
            <SectionTitle eyebrow="Our Story" title="A school built around the child." />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>What began as a small neighbourhood school with 86 children has grown into one of Delhi's most respected educational institutions — but the heart of the place hasn't changed.</p>
              <p>We still believe that great schools are built one relationship at a time: between a teacher and a learner, between a child and an idea, between a family and a community of educators who care.</p>
              <p>Our graduates go on to top universities across India and abroad, but more importantly, they leave us as kind, curious and capable people.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", text: "To be a beacon of progressive, values-led education that prepares young people to thrive in a complex and changing world." },
            { icon: Target, title: "Our Mission", text: "To nurture every learner's intellect, creativity and character through rigorous academics, rich co-curricular life and an unwavering commitment to inclusion." },
          ].map((c) => (
            <div key={c.title} className="p-8 rounded-2xl bg-card border border-border">
              <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-5">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl gradient-soft border border-border p-8 md:p-12">
          <SectionTitle eyebrow="Principal's Message" title="Dr. Meera Krishnan" />
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Principal" loading="lazy" className="rounded-2xl aspect-square object-cover w-full max-w-[200px]" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>"At Brightfield, we believe education is not the filling of a pail but the lighting of a fire. Every morning, our teachers walk into classrooms ready to spark something — a question, an interest, a way of seeing the world that wasn't there yesterday."</p>
              <p>"We are proud of our results, but prouder still of the young people behind them — articulate, generous, brave."</p>
              <p className="font-semibold text-foreground">— Dr. Meera Krishnan, Principal</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Leadership" title="School Management" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { name: "Mr. Anil Verma", role: "Chairman" },
            { name: "Mrs. Sunita Rao", role: "Vice Chairperson" },
            { name: "Dr. Meera Krishnan", role: "Principal" },
            { name: "Mr. Rohit Bansal", role: "Vice Principal" },
          ].map((m) => (
            <div key={m.name} className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="h-20 w-20 rounded-full gradient-hero mx-auto mb-3" />
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SectionTitle eyebrow="Affiliations" title="Recognised & Accredited" />
            <ul className="space-y-3">
              {[
                ["CBSE Affiliation", "No. 2730XXX (Class XII)"],
                ["School Recognition", "Govt. of NCT of Delhi"],
                ["NCERT Curriculum Partner", "since 2012"],
                ["Cambridge Assessment", "ESOL exam centre"],
              ].map(([t,d])=>(
                <li key={t} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5"/>
                  <div><div className="font-medium text-sm">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Documents" title="Mandatory Disclosures" />
            <ul className="space-y-3">
              {["Affiliation Certificate","Trust Registration","Society Registration","Land Lease / NOC","Building Safety Certificate","Fire Safety Certificate","Last 3 Years' Result"].map(d=>(
                <li key={d} className="p-4 rounded-xl bg-card border border-border flex items-center justify-between hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3"><ScrollText className="h-4 w-4 text-primary"/><span className="text-sm">{d}</span></div>
                  <span className="text-xs text-primary font-medium">View PDF</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Campus" title="Infrastructure" center />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Building, title: "Smart Classrooms", text: "60 air-conditioned classrooms with interactive panels." },
            { icon: Award, title: "Sports Complex", text: "200m track, basketball, tennis & cricket facilities." },
            { icon: FileText, title: "Library", text: "25,000+ books and digital subscriptions." },
            { icon: Building, title: "Science Labs", text: "Dedicated Physics, Chemistry, Biology and Computer labs." },
            { icon: Building, title: "Auditorium", text: "Air-conditioned 600-seater with full A/V setup." },
            { icon: Building, title: "Medical Room", text: "Full-time nurse and on-call paediatrician." },
          ].map(f=>(
            <div key={f.title} className="p-6 rounded-2xl bg-card border border-border">
              <f.icon className="h-6 w-6 text-primary mb-3"/>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
