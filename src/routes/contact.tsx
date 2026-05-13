import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title:"Contact — Brightfield School" }, { name:"description", content:"Get in touch with Brightfield School. Address, phone, email and contact form." }]}),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Toaster />
      <PageHero eyebrow="Contact Us" title="We'd love to hear from you." subtitle="Whether it's a question about admissions or a campus visit, our team is here." />

      <Section>
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: MapPin, title: "Visit", text: "12 Garden Road, Sector 21, New Delhi 110075" },
            { icon: Phone, title: "Call", text: "+91 98765 43210 / +91 11 4567 8900" },
            { icon: Mail, title: "Email", text: "info@brightfield.edu.in" },
          ].map(c=>(
            <div key={c.title} className="p-6 rounded-2xl bg-card border border-border">
              <div className="h-11 w-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-3"><c.icon className="h-5 w-5"/></div>
              <div className="font-display font-semibold">{c.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form
            onSubmit={(e)=>{e.preventDefault();toast.success("Message sent! We'll get back within 24 hours.");(e.target as HTMLFormElement).reset();}}
            className="p-8 rounded-2xl bg-card border border-border space-y-5"
          >
            <h3 className="text-2xl font-display font-bold">Send us a message</h3>
            <div className="space-y-2"><Label>Name</Label><Input required /></div>
            <div className="space-y-2"><Label>Email</Label><Input required type="email" /></div>
            <div className="space-y-2"><Label>Phone</Label><Input type="tel" /></div>
            <div className="space-y-2"><Label>Message</Label><Textarea required rows={5} /></div>
            <Button type="submit" size="lg" className="w-full rounded-full">Send Message</Button>
          </form>

          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden border border-border h-80 lg:h-[420px]">
              <iframe
                title="School location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.5%2C77.4%2C28.7&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary"/>
                <h4 className="font-display font-semibold">Office Hours</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex justify-between"><span>Mon – Fri</span><span>8:00 AM – 4:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 1:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
