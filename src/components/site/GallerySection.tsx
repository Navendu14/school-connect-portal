import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Section, SectionTitle } from "@/components/site/Page";
import { galleryApiUrl } from "@/config/config";

const API_URL = galleryApiUrl;  // defined in src/config/config.ts
const IMG_BASE = "/img/gallery/";

interface Album {
  id: string;
  title: string;
  date: string;
  image_links: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}



export function GallerySection({ limit }: { limit?: number }) {

  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const visibleAlbums = limit ? albums.slice(0, limit) : albums;

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch gallery data");
        return r.json();
      })
      .then((data: Album[]) => setAlbums(data)) // trust API order
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Section>
        <div className="flex justify-center py-20 text-muted-foreground animate-pulse">
          Loading gallery…
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <div className="flex justify-center py-20 text-destructive">{error}</div>
      </Section>
    );
  }

  return (
    <>
      {visibleAlbums.map((album) => {
        const images = album.image_links.split(",").map((f) => IMG_BASE + f.trim());
        return (
          <Section key={album.id}>
            <SectionTitle
              eyebrow={formatDate(album.date)}
              title={album.title}
            />
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(src)}
                  className="block w-full mb-4 break-inside-avoid overflow-hidden rounded-xl group"
                >
                  <img
                    src={src}
                    alt={`${album.title} — photo ${i + 1}`}
                    loading="lazy"
                    className="w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur p-4 flex items-center justify-center animate-fade-up"
        >
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-card flex items-center justify-center">
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-glow"
          />
        </div>
      )}
    </>
  );
}