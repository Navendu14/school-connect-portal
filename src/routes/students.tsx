import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { Users, Heart, FileText, Trophy, Shield } from "lucide-react";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [{ title: "Students — Brightfield School" }, { name:"description", content:"Student strength, RTE info, TC process, achievements and rules." }]}),
  component: Students,
});

function Students() {
  return (
    <>
      <PageHero eyebrow="Students" title="A community of 2,400 — and growing." />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Users, label: "Total Strength", value: "2,412" },
            { icon: Users, label: "Pre-primary–V", value: "892" },
            { icon: Users, label: "VI–X", value: "1,028" },
            { icon: Users, label: "XI–XII", value: "492" },
          ].map(s=>(
            <div key={s.label} className="p-6 rounded-2xl bg-card border border-border">
              <s.icon className="h-5 w-5 text-primary mb-3"/>
              <div className="text-3xl font-display font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Heart className="h-7 w-7 text-primary mb-3"/>
            <h3 className="text-2xl font-display font-bold">RTE — Right to Education</h3>
            <p className="mt-3 text-muted-foreground">Brightfield reserves 25% seats at entry level for children from economically weaker sections under the RTE Act, 2009. Applications are processed through the Directorate of Education, GNCTD.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 287 RTE students currently enrolled</li>
              <li>• Free tuition, books, uniform and meals</li>
              <li>• Dedicated counsellor support</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <FileText className="h-7 w-7 text-primary mb-3"/>
            <h3 className="text-2xl font-display font-bold">Transfer Certificate (TC)</h3>
            <ol className="mt-4 space-y-3 text-sm">
              {["Submit a written request to the Principal at least 7 days in advance.","Clear all dues and return library books / school property.","Collect TC and report card from the front office on the appointed date.","Migration certificate (Class XII) issued post-board results."].map((s,i)=>(
                <li key={i} className="flex gap-3"><span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center shrink-0">{i+1}</span>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Achievements" title="Our Students Shine" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Aanya Sharma", award: "AIR 12, NEET 2025", icon: Trophy },
            { name: "Robotics Team", award: "Gold, FIRST Tech Challenge", icon: Trophy },
            { name: "Kabir Singh", award: "National Bharatanatyam Champion", icon: Trophy },
            { name: "Debate Society", award: "Winners, Doon School Invitational", icon: Trophy },
            { name: "Maya Patel", award: "Selected, IOAA Indian Camp", icon: Trophy },
            { name: "U-17 Cricket", award: "Zonal Champions, CBSE", icon: Trophy },
          ].map(a=>(
            <div key={a.name} className="p-5 rounded-2xl bg-card border border-border flex gap-4">
              <div className="h-12 w-12 rounded-xl gradient-accent flex items-center justify-center shrink-0"><a.icon className="h-5 w-5 text-accent-foreground"/></div>
              <div><div className="font-semibold">{a.name}</div><div className="text-sm text-muted-foreground">{a.award}</div></div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Code of Conduct" title="Rules & Discipline" />
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Be punctual — gates close at 7:55 AM.",
            "Wear the prescribed uniform and ID card daily.",
            "Mobile phones are not permitted on campus.",
            "Treat every member of the community with respect.",
            "No physical or verbal aggression of any kind.",
            "Maintain academic integrity in all assessments.",
            "Care for school property and the environment.",
            "Parents must inform the school of any absence in writing.",
          ].map((r,i)=>(
            <div key={i} className="p-4 rounded-xl bg-card border border-border flex gap-3"><Shield className="h-5 w-5 text-primary shrink-0 mt-0.5"/><span className="text-sm">{r}</span></div>
          ))}
        </div>
      </Section>
    </>
  );
}
