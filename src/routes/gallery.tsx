import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Page";
import { GallerySection } from "@/components/site/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Rise & Shine Public School" },
      { name: "description", content: "Photos from life at Rise & Shine." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Glimpses of Rise & Shine." />
      <GallerySection />
    </>
  );
}