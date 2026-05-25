// components/site/EventCard.tsx
// Smart component — fetches events from API and renders all cards.
// Import this wherever you need to show the events grid.

import { eventsApiUrl } from "@/config/config";
import { useEffect, useState } from "react";

export interface EventDetail {
  id: string;
  date: string;           // ISO "YYYY-MM-DD"
  event_title: string;
  event_description: string;
  bg_image: string;       // e.g. "/img/events/image1.jpg"
}

const API_URL = eventsApiUrl;  

/** Formats "2026-01-26" → "Jan 26, 2026" */
function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

const BASE_URL = "/img/events/";  // prefix for bg_image paths

/** Single event card — used internally by EventCard */
function EventTile({ event }: { event: EventDetail }) {
  const imgSrc = event.bg_image.startsWith("http")
    ? event.bg_image
    : `${BASE_URL}${event.bg_image}`;

  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-card transition-all group">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={event.event_title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80";
          }}
        />
      </div>
      <div className="p-5">
        <div className="text-xs text-muted-foreground">{formatDate(event.date)}</div>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
          {event.event_title}
        </h3>
        <p className={`text-sm text-muted-foreground mt-2 ${!expanded ? "line-clamp-3" : ""}`}>
          {event.event_description}
        </p>
        {event.event_description.length > 150 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs font-medium text-primary hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </article>
  );
}

/** Skeleton placeholder shown while fetching */
function SkeletonTile() {
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse">
      <div className="aspect-[16/10] bg-muted" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-24 rounded bg-muted" />
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-5/6 rounded bg-muted" />
      </div>
    </div>
  );
}

/**
 * EventCard — fetches all events and renders them in a responsive grid.
 *
 * Props:
 *   limit?: number  — optionally cap how many events to show (e.g. 3 for a homepage strip)
 *
 * Usage:
 *   <EventCard />             — show all events
 *   <EventCard limit={3} />   — show only the first 3
 */
export function EventCard({ limit }: { limit?: number }) {
  const [events, setEvents] = useState<EventDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchEvents() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const data: EventDetail[] = await res.json();
        if (!cancelled) setEvents(data);
      } catch (err) {
        if (!cancelled) setError((err as Error).message ?? "Failed to load events.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchEvents();
    return () => { cancelled = true; };
  }, []);

  const displayed = limit ? events.slice(0, limit) : events;

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit ?? 6 }).map((_, i) => <SkeletonTile key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
        <p className="text-sm text-destructive font-medium">Could not load events.</p>
        <p className="text-xs text-muted-foreground mt-1">{error}</p>
      </div>
    );
  }

  if (displayed.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground">No events scheduled at the moment. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map((event) => (
        <EventTile key={event.id} event={event} />
      ))}
    </div>
  );
}