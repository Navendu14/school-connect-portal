import { ADDRESS, EMAIL, PHONE, PRIMARY_SCHL_NAME, SCHOOL_NAME } from "@/config/config";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="font-display text-lg font-bold">{SCHOOL_NAME}{PRIMARY_SCHL_NAME}</div>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Nurturing curious minds and confident leaders since 2005. A Bhartiya Shiksha Board affiliated co-educational institution.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              {
                icon: Facebook,
                link: "https://www.facebook.com/RiseandShineScl",
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/risenshineps/",
              },
              {
                icon: Youtube,
                link: "https://www.youtube.com/@riseshinepublicschoolhaldw5107",
              },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/about", "About"], ["/academics", "Academics"], ["/admissions", "Admissions"], ["/faculty", "Faculty"], ["/gallery", "Gallery"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-primary">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/notices", "Notices"], ["/events", "Events & Activities"], ["/students", "Students"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-primary">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {ADDRESS}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {PHONE}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {EMAIL}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rise & Shine Public School. All rights reserved.</p>
          <p>Affiliated to Bhartiya Shiksha Board | Affiliation No. UKOF26020171</p>
        </div>
      </div>
    </footer>
  );
}
