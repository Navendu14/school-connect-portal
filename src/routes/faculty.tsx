import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title:"Faculty — Brightfield School" }, { name:"description", content:"Meet our team of experienced and passionate educators." }]}),
  component: Faculty,
});

const faculty = [
  { name: "Dr. Meera Krishnan", subject: "Principal", qual: "Ph.D. Education, M.A. English", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Mr. Rohit Bansal", subject: "Vice Principal | Mathematics", qual: "M.Sc. Mathematics, B.Ed.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Ms. Anjali Nair", subject: "Physics — XI & XII", qual: "M.Sc. Physics, NET", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Mr. Vikram Joshi", subject: "Chemistry — XI & XII", qual: "M.Sc. Chemistry, B.Ed.", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" },
  { name: "Mrs. Pooja Sinha", subject: "English — IX–XII", qual: "M.A. English, M.Ed.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Mr. Arjun Reddy", subject: "Computer Science", qual: "M.Tech CSE, B.Ed.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ms. Kavya Iyer", subject: "Biology", qual: "M.Sc. Biotechnology", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80" },
  { name: "Mr. Deepak Kumar", subject: "Commerce", qual: "M.Com., CA Inter", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Mrs. Ritu Malhotra", subject: "Hindi", qual: "M.A. Hindi, B.Ed.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Mr. Suresh Patel", subject: "Physical Education", qual: "M.P.Ed., NIS Diploma", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80" },
  { name: "Ms. Tanya Roy", subject: "Visual Arts", qual: "MFA, Delhi College of Art", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Mr. Imran Sheikh", subject: "Music", qual: "Sangeet Visharad", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80" },
];

function Faculty() {
  return (
    <>
      <PageHero eyebrow="Faculty" title="Teachers who change the way students see the world." subtitle="Meet a few of our 140 specialist educators." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {faculty.map(f=>(
            <div key={f.name} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">{f.subject}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{f.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.qual}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground"><Mail className="h-3.5 w-3.5"/> contact via office</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
