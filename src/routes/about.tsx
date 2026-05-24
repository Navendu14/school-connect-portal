import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/site/Page";
import { Eye, Target, Award, Building, FileText, ScrollText } from "lucide-react";
import library from "@/assets/library.jpg";
import { CHAIRMAN_NAME, MANAGER_NAME, PRINCIPAL_MESSAGE, PRINCIPAL_NAME, SCHOOL_HISTORY } from "@/config/config";
import { Certificate } from "crypto";
import {
  Music,
  Monitor,
  Library,
  FlaskConical,
  Bus,
  HeartPulse,
} from "lucide-react";

import { useState } from "react";



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Rise & Shine Public School" },
      { name: "description", content: "Learn about Rise & Shine School's history, vision, mission, leadership and infrastructure." },
    ],
  }),
  component: About,
});

function About() {
  const [showAllDocs, setShowAllDocs] = useState(false);

  const documents = [
    ["Affiliation Certificate", "Affiliation_Certificate.pdf"],
    ["Land Certificate", "Land_Certificate.pdf"],
    ["Society Registration", "Society_Renewal.pdf"],
    ["Land Lease / NOC", "NOC.pdf"],
    ["Building Safety Certificate", "Building_Safety_Certificate.pdf"],
    ["Fire Safety Certificate", "Fire_Safety_Certificate.pdf"],
    ["Last 3 Years' Result", "last-3-years-result.pdf"],
    ["Management", "management.pdf"],
    ["Managing Committee", "Managing_Committee.pdf"],
    ["Mandatory Disclosure", "Mandatory_Disclosure_Details.pdf"],
    ["Parent Teacher Association", "PTA.pdf"],
    ["Recognition Certificate", "Recognition_Certificate.pdf"],
    ["Sanitation Certificate", "Sanitation_Certificate.pdf"],
    ["Self Certification", "Self_Certification.pdf"],
  ];
  return (
    <>
      <PageHero eyebrow="About Us" title="Twenty years of learning, leading, and lifting each other up." subtitle="Established in 2005, Rise & Shine is a Bhartiya Shiksha Board co-educational school serving students from Pre-primary to Class XII." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src="/img/bg/image1.jpg" alt="image" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-card aspect-[4/3] object-cover" />
          <div>
            <SectionTitle eyebrow="Our Story" title="Start of a Legacy" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {SCHOOL_HISTORY.split("\n").map((line, index) => <p key={index}>{line}</p>)}
              </p>
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
          <SectionTitle eyebrow="Principal's Message" title={PRINCIPAL_NAME} />
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <img src="/img/principal/image.png" alt="Principal" loading="lazy" className="rounded-2xl aspect-square object-cover w-full max-w-[200px]" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{PRINCIPAL_MESSAGE.split("\n").map((line, index) => <p key={index}>{line}</p>)}</p>
              <p className="font-semibold text-foreground">— {PRINCIPAL_NAME}, Principal</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Leadership" title="School Management" />

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: `${CHAIRMAN_NAME}`,
              role: "Chairman",
              image: "/img/chairman/image.jpg",
            },
            {
              name: `${PRINCIPAL_NAME}`,
              role: "Principal",
              image: "/img/principal/image.png",
            },
            {
              name: `${MANAGER_NAME}`,
              role: "Manager",
              image: "/img/manager/image.jpg",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <img
                src={m.image}
                alt={m.name}
                className="h-20 w-20 rounded-full object-cover mx-auto mb-3 border"
              />

              <div className="font-semibold">{m.name}</div>

              <div className="text-xs text-muted-foreground mt-1">
                {m.role}
              </div>
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
                ["Bhartiya Shiksha Board Affiliation", "No. UKOF26020171 (Class XII)"],
                ["School Recognition", "Govt. of NCT of Delhi"],
                ["Bhartiya Shiksha Board Curriculum Partner", "since 2026"],
              ].map(([t, d]) => (
                <li key={t} className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div><div className="font-medium text-sm">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Documents" title="Mandatory Disclosures" />
            <ul className="space-y-3">
              {(showAllDocs ? documents : documents.slice(0, 5)).map(([d, file]) => (
                <li
                  key={d}
                  className="p-4 rounded-xl bg-card border border-border flex items-center justify-between hover:bg-secondary/50 transition-colors cursor-pointer"
                  onClick={() => window.open(`/documents/certificate/${file}`, "_blank")}
                >
                  <div className="flex items-center gap-3">
                    <ScrollText className="h-4 w-4 text-primary" />
                    <span className="text-sm">{d}</span>
                  </div>

                  <span className="text-xs text-primary font-medium">
                    View PDF
                  </span>
                </li>
              ))}
            </ul>

            {documents.length > 5 && (
              <button
                onClick={() => setShowAllDocs(!showAllDocs)}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                {showAllDocs ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionTitle eyebrow="Campus" title="Infrastructure" center />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Music, title: "Music Room", text: "A creative space where students explore music, instruments, and cultural activities to enhance artistic talent." },
            { icon: Monitor, title: "Computer Lab", text: "A technology-enabled computer lab that provides students with digital learning and practical computer skills." },
            { icon: Library, title: "Library", text: "A well-stocked library with academic and story books that encourages reading habits and self-learning among students." },
            { icon: FlaskConical, title: "Science Labs", text: "Modern science labs equipped with practical tools and resources to help students learn through experiments and innovation." },
            { icon: Bus, title: "Transport Facility", text: "Safe and reliable transport services ensuring comfortable travel for students from different locations." },
            { icon: HeartPulse, title: "Medical Room", text: "A dedicated medical room with basic healthcare facilities to ensure students safety and well-being during school hours." },
          ].map(f => (
            <div key={f.title} className="p-6 rounded-2xl bg-card border border-border">
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
