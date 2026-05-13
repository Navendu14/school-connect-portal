import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CheckCircle2, FileText, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [{ title:"Admissions — Brightfield School" }, { name:"description", content:"Admissions open for 2026-27. Process, fees, documents and online application." }]}),
  component: Admissions,
});

const steps = [
  { t: "Enquiry & Tour", d: "Submit an online enquiry or visit the campus." },
  { t: "Application", d: "Complete the application form and upload documents." },
  { t: "Interaction", d: "Age-appropriate interaction with the child / parent meet." },
  { t: "Offer & Fee", d: "Receive offer letter and confirm seat with fee payment." },
];

const fees = [
  ["Pre-Primary", "₹6,500", "₹42,000", "₹15,000"],
  ["Primary (I–V)", "₹7,200", "₹48,000", "₹15,000"],
  ["Middle (VI–VIII)", "₹8,000", "₹52,000", "₹15,000"],
  ["Secondary (IX–X)", "₹9,200", "₹58,000", "₹15,000"],
  ["Sr. Secondary (XI–XII)", "₹10,500", "₹64,000", "₹15,000"],
];

function Admissions() {
  return (
    <>
      <Toaster />
      <PageHero eyebrow="Admissions 2026-27" title="Begin a journey that shapes a lifetime." subtitle="We welcome curious children and engaged families. Applications close January 31, 2026." />

      <Section>
        <SectionTitle eyebrow="Process" title="Four simple steps." />
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s,i)=>(
            <div key={i} className="relative p-6 rounded-2xl bg-card border border-border">
              <div className="text-5xl font-display font-bold text-primary/15 absolute top-3 right-4">0{i+1}</div>
              <div className="font-display text-lg font-semibold relative">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground relative">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Fee Structure" title="2026-27 (per term)" />
        <div className="rounded-2xl bg-card border border-border overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-secondary/60">
              <tr>{["Class","Tuition (Monthly)","Annual Charges","One-time Admission"].map(h=><th key={h} className="text-left p-4 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {fees.map(r => <tr key={r[0]}>{r.map((c,i)=><td key={i} className={`p-4 ${i===0?"font-medium":"text-muted-foreground"}`}>{c}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3">* Transport and meal charges are billed separately. RTE seats are fully exempt.</p>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <FileText className="h-7 w-7 text-primary mb-3"/>
            <h3 className="text-2xl font-display font-bold">Required Documents</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Birth certificate (original + copy)","Aadhaar card of child & parents","Last school's TC and report card (Class II onwards)","Passport-size photographs (4)","Address proof","Caste / EWS certificate (if applicable)","Vaccination record"].map(d=>(
                <li key={d} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0"/>{d}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <BookOpen className="h-7 w-7 text-primary mb-3"/>
            <h3 className="text-2xl font-display font-bold">Books & Syllabus</h3>
            <p className="mt-3 text-sm text-muted-foreground">We follow NCERT prescribed textbooks supplemented with select reference materials.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Class-wise booklist (PDF)","Class-wise stationery list (PDF)","Uniform guide (PDF)","Detailed syllabus per subject (PDF)"].map(d=>(
                <li key={d} className="flex justify-between p-3 bg-secondary/40 rounded-lg"><span>{d}</span><span className="text-primary text-xs font-medium">Download</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Apply Online" title="Admission enquiry form" />
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Application received! Our admissions team will reach out within 2 working days."); (e.target as HTMLFormElement).reset(); }}
          className="grid md:grid-cols-2 gap-5 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="space-y-2"><Label>Child's full name</Label><Input required placeholder="As on birth certificate" /></div>
          <div className="space-y-2"><Label>Date of birth</Label><Input required type="date" /></div>
          <div className="space-y-2"><Label>Class applying for</Label>
            <Select required><SelectTrigger><SelectValue placeholder="Select class"/></SelectTrigger>
              <SelectContent>{["Pre-Primary","Class I","Class II","Class III","Class IV","Class V","Class VI","Class VII","Class VIII","Class IX","Class XI"].map(c=><SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Stream (Class XI only)</Label>
            <Select><SelectTrigger><SelectValue placeholder="N/A"/></SelectTrigger>
              <SelectContent><SelectItem value="science">Science</SelectItem><SelectItem value="commerce">Commerce</SelectItem></SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Parent's name</Label><Input required /></div>
          <div className="space-y-2"><Label>Phone</Label><Input required type="tel" /></div>
          <div className="space-y-2 md:col-span-2"><Label>Email</Label><Input required type="email" /></div>
          <div className="space-y-2 md:col-span-2"><Label>Anything else we should know?</Label><Textarea rows={4} /></div>
          <Button type="submit" size="lg" className="md:col-span-2 rounded-full">Submit Application</Button>
        </form>
      </Section>
    </>
  );
}
