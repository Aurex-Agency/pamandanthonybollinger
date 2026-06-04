import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Music, Radio, Guitar, Cross, Menu, X, Mail, Phone, MapPin, Calendar, Facebook, Youtube, Instagram } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Counter } from "@/components/Counter";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import coupleAsset from "@/assets/couple-sunset.asset.json";
import stageAsset from "@/assets/stage-faithful.asset.json";
import singingAsset from "@/assets/singing.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthony & Pam Bollinger | Faithful Journey Tour" },
      { name: "description", content: "Husband-and-wife duo from Bruce, MS sharing a friendly mix of oldies, country, and gospel. Book Anthony & Pam Bollinger for your church, event, or theater." },
      { property: "og:title", content: "Anthony & Pam Bollinger Ministries" },
      { property: "og:description", content: "A friendly mix of oldies & gospel. Sharing what God has done." },
      { property: "og:image", content: coupleAsset.url },
      { name: "twitter:image", content: coupleAsset.url },
    ],
  }),
  component: Home,
});

const nav = [
  { href: "#story", label: "Our Story" },
  { href: "#music", label: "What We Play" },
  { href: "#listen", label: "Watch & Listen" },
  { href: "#booking", label: "Book Us" },
];

function Home() {
  useReveal();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Toaster />
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[oklch(0.16_0.04_255/0.85)] border-b border-[oklch(1_0_0/0.08)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-cream text-lg tracking-wide">
            Anthony <span className="text-gold">&</span> Pam
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-cream/80 hover:text-gold transition-colors">{n.label}</a>
            ))}
            <a href="#booking" className="text-sm bg-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:brightness-110 transition">Book Us</a>
          </nav>
          <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-navy-deep border-t border-[oklch(1_0_0/0.08)] px-6 py-4 space-y-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-cream/85 py-1">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img src={stageAsset.url} alt="Anthony & Pam Bollinger Faithful Journey Tour stage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.04_255/0.85)] via-[oklch(0.16_0.04_255/0.7)] to-[oklch(0.16_0.04_255/0.92)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="animate-fade-up text-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-6">Bruce, Mississippi · Est. 2021</p>
          <h1 className="animate-fade-up font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
            Anthony <span className="text-gold italic font-medium">&</span> Pam<br/>Bollinger
          </h1>
          <p className="animate-fade-up-delay text-cream/85 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            A friendly mix of oldies & gospel. Sharing what God has done.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="bg-gold text-navy-deep px-8 py-4 rounded-md font-semibold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-lg shadow-[oklch(0_0_0/0.3)]">
              Book Us
            </a>
            <a href="#story" className="border border-gold/70 text-gold px-8 py-4 rounded-md font-medium tracking-wide hover:bg-gold/10 transition-all">
              Hear Our Story
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-widest animate-pulse">SCROLL</div>
      </section>

      {/* WHAT WE PLAY */}
      <section id="music" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-burgundy tracking-[0.25em] text-xs uppercase mb-3">What We Play</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-5">From The Hits To The Hymns</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A friendly mix of oldies from the 60s, 70s, and 80s. Pop, R&B, and Country, with every performance capped off by gospel music, both covers and originals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Radio, title: "Oldies", desc: "60s, 70s & 80s favorites" },
              { icon: Music, title: "R&B & Pop", desc: "Soulful, timeless classics" },
              { icon: Guitar, title: "Country", desc: "Down-home & familiar" },
              { icon: Cross, title: "Gospel", desc: "Covers & originals" },
            ].map((c, i) => (
              <div key={c.title} className="reveal bg-card border border-border rounded-xl p-6 md:p-8 hover:border-gold hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4">
                  <c.icon size={22} />
                </div>
                <h3 className="font-display text-2xl text-navy mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="py-24 md:py-32 px-6 bg-[oklch(0.94_0.02_80)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-3 bg-gold/20 rounded-2xl rotate-2" />
            <img src={coupleAsset.url} alt="Anthony and Pam Bollinger at sunset" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" />
          </div>
          <div className="reveal">
            <p className="text-burgundy tracking-[0.25em] text-xs uppercase mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-6 leading-tight">A Faithful Journey, Together</h2>
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>We've been making music our whole lives. We met in junior high, found our way back to each other in 1994, and have been married 33 years — three children and five grandkids later, still singing side by side.</p>
              <p>Anthony started drumming at age five and spent 39 years on stage with his father. Together we ran a Branson-style family theatre right here in Bruce, Mississippi, where we welcomed over 100,000 guests from across the country and nine foreign countries.</p>
              <p>In 2021 everything changed. Anthony fought double COVID pneumonia and spent 11 days on a ventilator. The doctors gave little hope. Thousands of prayers later, by God's grace, he's still here. That miracle launched this ministry — and every song since has been a thank-you note.</p>
              <p className="font-display italic text-burgundy text-xl pt-2">"It's a God thing. I'm living proof."</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-navy-deep text-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: 33, suffix: "", label: "Years Married" },
            { n: 100, suffix: "+", label: "Dates a Year" },
            { n: 100000, suffix: "+", label: "People Reached" },
            { n: 9, suffix: "", label: "Countries" },
          ].map((s) => (
            <div key={s.label} className="reveal">
              <div className="font-display text-4xl md:text-6xl text-gold mb-2">
                <Counter end={s.n} suffix={s.suffix} />
              </div>
              <p className="text-cream/70 text-sm md:text-base tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WATCH & LISTEN */}
      <section id="listen" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-12">
            <p className="text-burgundy tracking-[0.25em] text-xs uppercase mb-3">Watch & Listen</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-5">Experience The Sound</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From a quiet hymn to a foot-tapping classic — hear what a night with Anthony & Pam feels like.
            </p>
          </div>
          <div className="reveal relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
            <img src={singingAsset.url} alt="Anthony & Pam Bollinger performing" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy-deep/50 flex items-center justify-center">
              <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold text-navy-deep flex items-center justify-center hover:scale-110 transition-transform shadow-2xl" aria-label="Play video">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
          </div>
          <p className="reveal text-center mt-6 text-muted-foreground italic">Featuring their latest single, <span className="text-burgundy not-italic font-semibold">"I'm Living Proof"</span> — coming soon to streaming & radio.</p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 md:py-32 px-6 bg-[oklch(0.94_0.02_80)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="reveal md:col-span-2">
            <p className="text-burgundy tracking-[0.25em] text-xs uppercase mb-3">Booking</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy mb-5 leading-tight">Let's Bring The Music To You</h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              We travel over 100 dates a year across the southeast — churches, theaters, conferences, and community events. We'd love to hear about yours.
            </p>
            <div className="space-y-4 text-foreground/85">
              <a href="tel:6629835538" className="flex items-center gap-3 hover:text-burgundy transition"><Phone size={18} className="text-gold"/> 662-983-5538</a>
              <a href="mailto:booking@bollingerministries.com" className="flex items-center gap-3 hover:text-burgundy transition"><Mail size={18} className="text-gold"/> booking@bollingerministries.com</a>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-gold"/> Bruce, Mississippi</div>
              <div className="flex items-center gap-3"><Calendar size={18} className="text-gold"/> Booking Sunday Morning & Evening Services</div>
            </div>
          </div>
          <form
            className="reveal md:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-border shadow-xl space-y-5"
            onSubmit={(e: FormEvent) => { e.preventDefault(); toast.success("Thank you! We'll be in touch soon."); (e.target as HTMLFormElement).reset(); }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Event Date" name="date" type="date" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Tell us about your event</label>
              <textarea name="message" rows={5} required maxLength={1000} className="w-full bg-background border border-input rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-gold transition" />
            </div>
            <button type="submit" className="w-full bg-navy text-cream py-4 rounded-md font-semibold tracking-wide hover:bg-navy-deep transition">
              Send Booking Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-cream/80 py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-display text-2xl text-cream mb-2">Anthony & Pam Bollinger</div>
          <p className="italic text-cream/60 mb-6">Sharing what God has done for us.</p>
          <div className="flex justify-center gap-5 mb-8">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-navy-deep hover:border-gold transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="text-xs tracking-wider text-cream/50 space-x-3">
            <span>#ITSAGODTHING</span><span>·</span><span>#IMLIVINGPROOF</span>
          </div>
          <p className="text-xs text-cream/40 mt-6">© {new Date().getFullYear()} A.R. Bollinger Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full bg-background border border-input rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
