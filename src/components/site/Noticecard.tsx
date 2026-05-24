// components/site/NoticeCard.tsx
// Smart component — fetches notices from API and renders all cards.
// Import this wherever you need to show the notices list.
import { useEffect, useState } from "react";
import { Calendar, ChevronDown, ChevronUp, FileText } from "lucide-react";

export interface NoticeDetail {
  id: number;
  date: string;
  notice_domain: string;
  notice_title: string;
  notice_description: string;
  documents: string[];
}

const API_URL = "https://www.risenshineps.com/api/notices/get_notice_detail.php";
const BASE_URL = "/documents/notices/"; // For relative document paths returned by the API

const tagColors: Record<string, string> = {
  Examination: "bg-destructive/10 text-destructive",
  Achievement:  "bg-accent/20 text-accent-foreground",
  Admission:    "bg-primary/10 text-primary",
  Event:        "bg-primary/10 text-primary",
  Holiday:      "bg-secondary text-secondary-foreground",
  Circular:     "bg-secondary text-secondary-foreground",
  Workshop:     "bg-accent/20 text-accent-foreground",
};

/** Single notice tile — private, only used inside this file */
function NoticeTile({ notice }: { notice: NoticeDetail }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = notice.notice_description.length > 120;

  return (
    <article className="p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
      {/* Tag + Date */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className={`rounded-full px-3 py-1 font-medium ${tagColors[notice.notice_domain] ?? "bg-secondary text-secondary-foreground"}`}>
          {notice.notice_domain}
        </span>
        <span className="text-muted-foreground flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(notice.date).toLocaleDateString("en-IN", {
            day: "2-digit", month: "short", year: "numeric",
          })}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 font-display text-lg font-semibold">{notice.notice_title}</h3>

      {/* Description with Read More */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {expanded ? notice.notice_description : notice.notice_description.slice(0, 120) + (hasMore ? "…" : "")}
      </p>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          {expanded
            ? <><ChevronUp className="h-3 w-3" /> Read less</>
            : <><ChevronDown className="h-3 w-3" /> Read more</>}
        </button>
      )}

      {/* Documents */}
      {notice.documents.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {notice.documents.map((doc, i) => {
            const href = doc.startsWith("http") ? doc : `${BASE_URL}${doc}`;
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/5 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                {doc.split("/").pop()}
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}

/** Skeleton placeholder shown while fetching */
function SkeletonTile() {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border animate-pulse space-y-3">
      <div className="flex gap-3">
        <div className="h-5 w-20 rounded-full bg-muted" />
        <div className="h-5 w-24 rounded bg-muted" />
      </div>
      <div className="h-5 w-2/3 rounded bg-muted" />
      <div className="h-3 w-full rounded bg-muted" />
      <div className="h-3 w-5/6 rounded bg-muted" />
    </div>
  );
}

/**
 * NoticeCard — fetches all notices and renders them in a stacked list.
 *
 * Props:
 *   limit?: number  — optionally cap how many notices to show (e.g. 3 for a homepage strip)
 *
 * Usage:
 *   <NoticeCard />           — show all notices
 *   <NoticeCard limit={3} /> — show only the first 3
 */
export function NoticeCard({ limit }: { limit?: number }) {
  const [notices, setNotices] = useState<NoticeDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchNotices() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          if (json.success) setNotices(json.data);
          else throw new Error("Failed to load notices.");
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message ?? "Network error.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchNotices();
    return () => { cancelled = true; };
  }, []);

  const displayed = limit ? notices.slice(0, limit) : notices;

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: limit ?? 4 }).map((_, i) => <SkeletonTile key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
        <p className="text-sm text-destructive font-medium">Could not load notices.</p>
        <p className="text-xs text-muted-foreground mt-1">{error}</p>
      </div>
    );
  }

  if (displayed.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="text-sm text-muted-foreground">No notices at the moment. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {displayed.map((notice) => (
        <NoticeTile key={notice.id} notice={notice} />
      ))}
    </div>
  );
}