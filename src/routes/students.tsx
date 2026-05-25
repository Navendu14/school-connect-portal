import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { Heart, FileText, Shield } from "lucide-react";
import RTEStudentsSection from "@/components/site/RTEStudentsSection";
import TCStudentsSection from "@/components/site/TCStudentsSection";
import AchievementsSection from "@/components/site/AchievementsSection";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [{ title: "Students — Rise & Shine Public School" }, { name:"description", content:"Student strength, RTE info, TC process, achievements and rules." }]}),
  component: Students,
});

function Students() {
  return (
    <>
      <PageHero eyebrow="Students" title="A family of bright learners — growing every day." />

      <Section className="!pt-0 mt-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Heart className="h-7 w-7 text-primary mb-3"/>
            <h3 className="text-2xl font-display font-bold">RTE — Right to Education</h3>
            <p className="mt-3 text-muted-foreground">Rise & Shinere serves seats at entry level for children from economically weaker sections under the RTE Act, 2009. Applications are processed through the Directorate of Education, GNCTD.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Free tuition</li>
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
      
      <RTEStudentsSection />
      <TCStudentsSection />
      
      <AchievementsSection />

      <Section className="!pt-0">
        <SectionTitle eyebrow="Code of Conduct" title="Rules & Discipline" />
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Be punctual — gates close at 7:30 AM.",
            "Wear the prescribed uniform and ID card daily.",
            "Mobile phones are not permitted on campus.",
            "Treat every member of the community with respect.",
            "No physical or verbal aggression of any kind.",
            "Maintain academic integrity in all assessments.",
            "Care for school property and the environment.",
            "Parents must inform the school of any absence.",
          ].map((r,i)=>(
            <div key={i} className="p-4 rounded-xl bg-card border border-border flex gap-3"><Shield className="h-5 w-5 text-primary shrink-0 mt-0.5"/><span className="text-sm">{r}</span></div>
          ))}
        </div>
      </Section>
    </>
  );
}
