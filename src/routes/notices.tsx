import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { Calendar, Download } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({ meta: [{ title:"Notices — Brightfield School" }, { name:"description", content:"Latest school announcements and circulars." }]}),
  component: Notices,
});

const notices = [
  { date: "Nov 28, 2025", tag: "Examination", title: "Half-yearly examination schedule released for Classes IX–XII", body: "Please find attached the date sheet. Reporting time is 8:30 AM. Students must carry their ID cards." },
  { date: "Nov 22, 2025", tag: "Achievement", title: "Brightfield wins Inter-school Robotics Championship 2025", body: "Our Class XI team brought home the gold at the FIRST Tech Challenge held at IIT Delhi." },
  { date: "Nov 15, 2025", tag: "Admission", title: "Admissions open for 2026-27 — Pre-primary to Class XI", body: "Applications can be submitted online through the Admissions page. Last date: January 31, 2026." },
  { date: "Nov 02, 2025", tag: "Event", title: "Annual Day 'Kaleidoscope' scheduled for December 14", body: "All parents are cordially invited to the school auditorium from 5:00 PM onwards." },
  { date: "Oct 28, 2025", tag: "Holiday", title: "School closed for Diwali break Oct 30 – Nov 04", body: "Classes resume on November 5. Wishing all our families a luminous Diwali." },
  { date: "Oct 12, 2025", tag: "Circular", title: "Updated transport routes effective November 1", body: "Please review the new pickup timings on the parent portal." },
  { date: "Sep 30, 2025", tag: "Workshop", title: "Career counselling sessions for Class XII begin Oct 6", body: "One-on-one sessions with our visiting career counsellor over a fortnight." },
];

const tagColors: Record<string,string> = {
  Examination: "bg-destructive/10 text-destructive",
  Achievement: "bg-accent/20 text-accent-foreground",
  Admission: "bg-primary/10 text-primary",
  Event: "bg-primary/10 text-primary",
  Holiday: "bg-secondary text-secondary-foreground",
  Circular: "bg-secondary text-secondary-foreground",
  Workshop: "bg-accent/20 text-accent-foreground",
};

function Notices() {
  return (
    <>
      <PageHero eyebrow="Notices" title="What's new at school." subtitle="The latest announcements, circulars and updates from Brightfield." />
      <Section>
        <div className="space-y-4">
          {notices.map((n,i)=>(
            <article key={i} className="p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className={`rounded-full px-3 py-1 font-medium ${tagColors[n.tag] ?? "bg-secondary"}`}>{n.tag}</span>
                <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3"/>{n.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.body}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <Download className="h-4 w-4"/> Download PDF
              </button>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
