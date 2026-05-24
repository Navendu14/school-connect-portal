import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { Section, SectionTitle } from "@/components/site/Page";

const BASE_URL = "https://www.risenshineps.com";
const API_URL = "https://www.risenshineps.com/api/achievement/get_student_achievement.php";
const INITIAL_SHOW = 6;

interface Achievement {
  id: string;
  name: string;
  description: string;
  img_url: string;
}

export default function AchievementsSection() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch achievements");
        return res.json();
      })
      .then((data: Achievement[]) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const visible = showAll ? achievements : achievements.slice(0, INITIAL_SHOW);
  const hasMore = achievements.length > INITIAL_SHOW;

  return (
    <Section className="!pt-0">
      <SectionTitle eyebrow="Achievements" title="Our Students Shine" />

      {loading && (
        <div className="text-center text-muted-foreground py-10">Loading achievements...</div>
      )}

      {error && (
        <div className="text-center text-destructive py-10">
          Could not load achievements: {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid md:grid-cols-3 gap-5">
            {visible.map((a) => (
              <div key={a.id} className="p-5 rounded-2xl bg-card border border-border flex gap-4">
                <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0 bg-muted">
                  {a.img_url ? (
                    <img
                      src={a.img_url}
                      alt={a.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.classList.add("gradient-accent", "flex", "items-center", "justify-center");
                        }
                      }}
                    />
                  ) : (
                    <div className="h-full w-full gradient-accent flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-accent-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-sm text-muted-foreground">{a.description}</div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="px-6 py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium"
              >
                {showAll ? "Show Less" : `Show More (${achievements.length - INITIAL_SHOW} more)`}
              </button>
            </div>
          )}
        </>
      )}
    </Section>
  );
}