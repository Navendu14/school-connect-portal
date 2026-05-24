// routes/notices.tsx
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { NoticeCard } from "@/components/site/Noticecard";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices — Rise & Shine Public School" },
      { name: "description", content: "Latest school announcements and circulars." },
    ],
  }),
  component: Notices,
});

function Notices() {
  return (
    <>
      <PageHero
        eyebrow="Notices"
        title="What's new at school."
        subtitle="The latest announcements, circulars and updates from Rise & Shine."
      />
      <Section>
        <NoticeCard />
      </Section>
    </>
  );
}