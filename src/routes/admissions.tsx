import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { CheckCircle2, FileText, BookOpen, Truck, Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { booksApiUrl, booksClassApiUrl, CONVEYANCE_CHARGES, feesApiUrl } from "@/config/config";
import BookPriceList from "@/components/site/BookPriceList";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [{ title: "Admissions — Rise & Shine Public School" }, { name: "description", content: "Admissions open for 2026-27. Process, fees, documents and online application." }] }),
  component: Admissions,
});

const steps = [
  { t: "Enquiry & Tour", d: "Visit the campus." },
  { t: "Application", d: "Complete the application form and submit documents." },
  { t: "Interaction", d: "Age-appropriate interaction with the child / parent meet." },
  { t: "Offer & Fee", d: "Receive offer letter and confirm seat with fee payment." },
];

type FeeEntry = { class: string; fees: string };

// Preferred display order for classes
const CLASS_ORDER = [
  "PLAYGROUP", "NURSERY", "L.KG", "U.KG",
  "I", "II", "III", "IV", "V",
  "VI", "VII", "VIII", "IX", "X",
  "XI Commerce", "XI Science",
];

function sortFees(data: FeeEntry[]): FeeEntry[] {
  return [...data].sort((a, b) => {
    const ai = CLASS_ORDER.indexOf(a.class);
    const bi = CLASS_ORDER.indexOf(b.class);
    if (ai === -1 && bi === -1) return a.class.localeCompare(b.class);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function formatFee(fee: string): string {
  const num = parseInt(fee, 10);
  if (isNaN(num)) return fee;
  return `₹${num.toLocaleString("en-IN")}`;
}

function Admissions() {
  const [fees, setFees] = useState<FeeEntry[]>([]);
  const [feesLoading, setFeesLoading] = useState(true);
  const [feesError, setFeesError] = useState(false);

  useEffect(() => {
    fetch(feesApiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data: FeeEntry[]) => {
        setFees(sortFees(data));
        setFeesLoading(false);
      })
      .catch(() => {
        setFeesError(true);
        setFeesLoading(false);
      });
  }, []);

  return (
    <>
      <Toaster />
      <PageHero eyebrow="Admissions 2026-27" title="Begin a journey that shapes a lifetime." subtitle="We welcome curious children and engaged families." />

      {/* Steps */}
      <Section>
        <SectionTitle eyebrow="Process" title="Four simple steps." />
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-card border border-border">
              <div className="text-5xl font-display font-bold text-primary/15 absolute top-3 right-4">0{i + 1}</div>
              <div className="font-display text-lg font-semibold relative">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground relative">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fee Structure */}
      <Section className="!pt-0">
        <SectionTitle eyebrow="Fee Structure" title="2026-27 (Monthly Tuition)" />

        {feesLoading && (
          <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">Loading fee details…</span>
          </div>
        )}

        {feesError && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-destructive">
            Unable to load fee details at this time. Please contact the admissions office.
          </div>
        )}

        {!feesLoading && !feesError && (
          <div className="rounded-2xl bg-card border border-border overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead className="bg-secondary/60">
                <tr>
                  {["Class", "Monthly Tuition Fee"].map((h) => (
                    <th key={h} className="text-left p-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fees.map((row) => (
                  <tr key={row.class}>
                    <td className="p-4 font-medium">{row.class}</td>
                    <td className="p-4 text-muted-foreground">{formatFee(row.fees)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>

      {/* Conveyance Charges */}
      <Section className="!pt-0">
        <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border">
          <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <Truck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold">Conveyance Charges</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              School bus facility is available for all routes. The transport fee is billed monthly, separate from tuition.
            </p>
            <p className="mt-3 text-2xl font-display font-semibold text-primary">
              {CONVEYANCE_CHARGES}
            </p>
          </div>
        </div>
      </Section>

      {/* Documents & Books */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <FileText className="h-7 w-7 text-primary mb-3" />
            <h3 className="text-2xl font-display font-bold">Required Documents</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Birth certificate (original + copy)",
                "Aadhaar card of child & parents",
                "Last school's TC and report card",
                "Passport-size photographs (with parents)",
                "Caste / EWS certificate (if applicable)",
              ].map((d) => (
                <li key={d} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <BookOpen className="h-7 w-7 text-primary mb-3" />
            <h3 className="text-2xl font-display font-bold">Books & Syllabus</h3>
            <p className="mt-1 mb-4 text-sm text-muted-foreground">
              We follow Bhartiya Shiksha Board prescribed textbooks supplemented.
            </p>
            <BookPriceList
              classApiUrl={booksClassApiUrl}
              booksApiUrl={booksApiUrl}
            />
          </div>
        </div>
      </Section>


    </>
  );
}
