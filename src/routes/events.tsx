// routes/events.tsx
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { EventCard } from "@/components/site/EventCard";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Activities — Rise & Shine Public School" },
      { name: "description", content: "Sports, cultural and academic events at Rise & Shine." },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events & Activities"
        title="There's always something happening."
        subtitle="Sports, cultural and academic events that build skill, courage and joy."
      />
      <Section>
        <EventCard />
      </Section>
    </>
  );
}