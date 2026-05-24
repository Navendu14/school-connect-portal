import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { Mail, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { PRINCIPAL_NAME, PRINCIPAL_QUALIFICATIONS } from "@/config/config";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title: "Faculty — Rise & Shine Public School" }, { name: "description", content: "Meet our team of experienced and passionate educators." }] }),
  component: Faculty,
});

interface Teacher {
  id: string;
  name: string;
  qualification: string;
  designation: string;
}

const principal: Teacher = {
  id: "1",
  name: PRINCIPAL_NAME,
  qualification: PRINCIPAL_QUALIFICATIONS,
  designation: "Principal",
};

function Faculty() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://risenshineps.com/api/teacher/get_teachers.php")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch faculty data.");
        return res.json();
      })
      .then((data: Teacher[]) => {
        setTeachers([principal, ...data]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHero eyebrow="Faculty" title="Teachers who change the way students see the world." subtitle="Meet our specialist educators." />
      <Section>
        {loading && (
          <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading faculty…</span>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-destructive">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teachers.map((f) => (
              <div key={f.id} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="p-5">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src="/img/principal/image.png" alt={f.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">{f.designation}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.qualification}</p>
                  
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}