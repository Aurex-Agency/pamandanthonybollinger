import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Music, Radio, Guitar, Cross, Menu, X, Mail, Phone, MapPin, Calendar, Facebook, Youtube, Instagram, Volume2, VolumeX } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Counter } from "@/components/Counter";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import coupleAsset from "@/assets/couple-sunset.asset.json";
import stageAsset from "@/assets/stage-faithful.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthony & Pam Bollinger | Faithful Journey Tour" },
      { name: "description", content: "Husband-and-wife duo from Bruce, MS sharing oldies, country, and gospel. Book Anthony & Pam Bollinger for your church, theater, or event." },
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

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg width="140" height="14" viewBox="0 0 120 12" fill="none" className={className} aria-hidden>
      <path d="M0 6C30 6 30 2 60 2C90 2 90 6 120 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="60" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}

function LivingProofPlayer() {
  const [unmuted, setUnmuted] = useState(false);
  const videoId = "Ak4UieGPQ5c";
  const src = unmuted
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&playsinline=1&controls=1&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&modestbranding=1&rel=0`;

  return (
    <div className="reveal relative">
      <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
      <div className="relative aspect-video overflow-hidden shadow-2xl bg-black">
        <iframe
          key={unmuted ? "on" : "off"}
          src={src}
          title="Anthony & Pam Bollinger — I'm Living Proof"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        {!unmuted && (
          <button
            onClick={() => setUnmuted(true)}
            aria-label="Turn audio on"
            className="absolute inset-0 flex flex-col items-center justify-center bg-burgundy-deep hover:bg-burgundy-deep/95 transition group overflow-hidden"
          >
            <img
              src={stageAsset.url}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay grayscale contrast-125"
            />
            <div className="absolute inset-0 dark-grain opacity-30 pointer-events-none" />
            <span className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber text-burgundy-deep flex items-center justify-center shadow-2xl border-4 border-gold/40 group-hover:scale-110 transition-transform">
              <Volume2 size={32} fill="currentColor" />
            </span>
            <span className="relative mt-5 text-cream text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              Tap to Hear the Story
            </span>
          </button>
        )}
        {unmuted && (
          <button
            onClick={() => setUnmuted(false)}
            aria-label="Turn audio off"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-burgundy-deep/80 text-cream border border-gold/40 flex items-center justify-center hover:bg-amber hover:text-burgundy-deep transition"
          >
            <VolumeX size={16} />
          </button>
        )}
        <CornerFrame />
      </div>
    </div>
  );
}

function CornerFrame() {
  return (
    <>
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-gold/40 pointer-events-none" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-gold/40 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-gold/40 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-gold/40 pointer-events-none" />
    </>
  );
}

function Home() {
  useReveal();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Toaster />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-md border-b border-burgundy/15">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-burgundy text-xl tracking-tight">
            Anthony <span className="text-amber italic font-normal">&</span> Pam
          </a>
          <nav className="hidden md:flex items-center gap-9">
            {nav.slice(0, 3).map((n) => (
              <a key={n.href} href={n.href} className="nav-link text-[11px] tracking-[0.25em] uppercase font-bold text-sienna hover:text-burgundy transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#booking" className="stamped bg-amber text-burgundy-deep px-6 py-2.5 rounded-sm font-bold tracking-widest uppercase text-[11px]">
              Book Us
            </a>
          </nav>
          <button className="md:hidden text-burgundy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-cream border-t border-burgundy/15 px-6 py-4 space-y-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sienna font-semibold tracking-widest uppercase text-xs py-1.5">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-burgundy">
        <img
          src={stageAsset.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay grayscale contrast-125 scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 ink-vignette opacity-70" />
        <div className="absolute inset-0 dark-grain opacity-20 pointer-events-none" />
        <CornerFrame />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="animate-fade-up flex items-center justify-center gap-4 mb-7">
            <div className="h-px w-12 bg-gold/50" />
            <p className="text-gold tracking-[0.35em] text-[10px] md:text-xs font-bold uppercase">
              Bruce, Mississippi · Est. 2021
            </p>
            <div className="h-px w-12 bg-gold/50" />
          </div>

          <h1 className="animate-fade-up font-display text-cream leading-[0.92] mb-4 letterpress">
            <span className="block italic font-medium text-5xl md:text-7xl lg:text-8xl">
              Anthony <span className="text-amber not-italic">&</span> Pam
            </span>
            <span className="block font-bold tracking-tight text-6xl md:text-8xl lg:text-[9rem] mt-1">
              Bollinger
            </span>
          </h1>

          <div className="animate-fade-up-delay flex justify-center text-amber mb-7">
            <Flourish />
          </div>

          <p className="animate-fade-up-delay font-sans text-cream/85 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mx-auto mb-12">
            A friendly mix of oldies and gospel.{" "}
            <span className="not-italic font-semibold text-gold">Sharing what God has done</span>{" "}
            through music and testimony.
          </p>

          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#booking" className="stamped bg-amber text-burgundy-deep px-10 py-4 rounded-sm font-display font-bold tracking-widest uppercase text-sm">
              Book the Duo
            </a>
            <a href="#story" className="px-10 py-4 border-2 border-gold/40 text-cream rounded-sm font-display font-medium tracking-wide text-sm hover:bg-gold/10 transition">
              Hear Our Story
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
          <span className="text-cream text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">The Testimony</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* STATS — playbill */}
      <section className="bg-cream paper-grain py-16 md:py-20 border-y border-burgundy/15">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
          {[
            { n: 33, suffix: "", label: "Years Married" },
            { n: 100, suffix: "+", label: "Dates a Year" },
            { n: 100000, suffix: "+", label: "People Reached" },
            { n: 9, suffix: "", label: "Countries" },
          ].map((s, i) => (
            <div key={s.label} className={`reveal relative px-4 ${i < 3 ? "md:border-r md:border-gold/40" : ""}`}>
              <div className="font-display font-bold text-5xl md:text-6xl text-sienna leading-none mb-3">
                <Counter end={s.n} suffix={s.suffix} />
              </div>
              <p className="text-burgundy/70 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="relative bg-paper paper-grain py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="reveal md:col-span-5 md:sticky md:top-28">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-amber rotate-[-1.5deg]" />
              <img
                src={coupleAsset.url}
                alt="Anthony and Pam Bollinger"
                className="relative w-full object-cover aspect-[4/5] shadow-2xl grayscale-[0.15]"
              />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-burgundy" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-burgundy" />
            </div>
            <p className="mt-6 text-center text-xs tracking-[0.3em] uppercase text-sienna font-bold">
              Anthony & Pam · Bruce, Mississippi
            </p>
          </div>

          <div className="reveal md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" />
              <p className="text-sienna tracking-[0.3em] text-xs uppercase font-bold">Our Story</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-burgundy mb-3 leading-[1.05]">
              A Faithful Journey,
              <span className="block italic font-medium text-sienna">Together.</span>
            </h2>
            <div className="flex text-amber mb-8"><Flourish /></div>

            <div className="space-y-6 text-burgundy-deep/85 leading-[1.85] text-[1.02rem]">
              <p className="dropcap">We have known each other since Jr High, and although our paths went in different ways, God brought us together in February 1994. After a few short months, we knew we were meant to be together. On July 17, 1994 we married at Pam's church in Memphis. This July will be 33 years. We have three children, two boys and a girl, and five grandkids, three boys and two girls. To say we are blessed is an understatement.</p>
              <p>We both have been involved in music since our childhood years. Pam has played piano at church and sang with a ladies trio. Her specials on Sundays would put a smile on the faces of the congregation and stir the spirit for worship. Today, along with our schedule of over 100 dates a year, she still serves as pianist at our church, Mt Moriah Baptist.</p>
              <p>I grew up in a home filled with music. My Dad was playing music when I was born. In 1963, Daddy and four of his cousins started a cover band, William Morgan and the Five C's. They played for eleven years and were regarded as one of the best bands in the southeast. At the age of five I was put on a drum stool and played my first song; the rest just seemed to fall into place. After the C's, Daddy moved to Southern Gospel and I was the drummer. That was 1972. By the time I was 14, I was playing piano for the quartet and singing lead. I worked on my first studio session at 13. One of the biggest blessings through the years: I got to walk on stages for 39 years with my Dad.</p>
            </div>

            <blockquote className="my-10 border-l-4 border-amber pl-6 py-2">
              <p className="font-display italic text-burgundy text-3xl md:text-4xl leading-tight">
                "It's a God thing. I'm living proof."
              </p>
            </blockquote>

            <div className="space-y-6 text-burgundy-deep/85 leading-[1.85] text-[1.02rem]">
              <p>One of the first times Pam and I really got to work together musically was when I had a quartet called "The Father's Sons". We were booked at The Jim Stafford Theater in Branson, Missouri in two weeks and our tenor singer had to leave the group. She fit right in. My family made the decision to start a Branson-style theatre in our hometown of Bruce, MS. It consisted of our entire family. For nine and a half years, we played forty two-and-a-half-hour shows a year. In that period, we sang to over one hundred thousand people from across the country and nine foreign countries.</p>
              <p>In 2021, I was diagnosed with COVID-19. That was on a Thursday. I put myself in quarantine, but by Monday, I had Pam call an ambulance because I could not breathe. The next 35 days would be the catalyst for our ministry today. Double COVID pneumonia and 11 days on the vent, they gave my family very little hope of survival. But with literally thousands of prayers, God sent a miracle and I'm still here. We began our ministry in late 2021 and it has been such a blessing. Today we travel all over the southeast sharing what God has done for us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE PLAY */}
      <section id="music" className="relative bg-burgundy text-cream py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 dark-grain opacity-15 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-gold/60" />
              <p className="text-gold tracking-[0.3em] text-xs uppercase font-bold">What We Play</p>
              <div className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream mb-4 leading-tight letterpress">
              From The Hits
              <span className="block italic font-medium text-gold">to the Hymns.</span>
            </h2>
            <div className="flex justify-center text-amber mb-6"><Flourish /></div>
            <p className="text-cream/75 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              A friendly mix of oldies from the 60s, 70s, and 80s. Pop, R&B, and Country, with every performance capped off by gospel music, both covers and originals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Radio, title: "Oldies", desc: "60s, 70s & 80s favorites" },
              { icon: Music, title: "R&B & Pop", desc: "Soulful, timeless classics" },
              { icon: Guitar, title: "Country", desc: "Down-home & familiar" },
              { icon: Cross, title: "Gospel", desc: "Covers & originals" },
            ].map((c, i) => (
              <div
                key={c.title}
                className="reveal relative bg-cream paper-grain text-burgundy p-8 rounded-sm border border-gold/40 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-amber/60" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-amber/60" />
                <div className="w-12 h-12 rounded-full bg-amber/15 text-amber flex items-center justify-center mb-5 border border-amber/30">
                  <c.icon size={22} />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-sienna font-bold mb-1">No. 0{i + 1}</p>
                <h3 className="font-display font-bold text-3xl text-burgundy mb-2">{c.title}</h3>
                <div className="h-px w-10 bg-amber mb-3" />
                <p className="text-sm text-burgundy-deep/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATCH & LISTEN */}
      <section id="listen" className="relative bg-burgundy-deep py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 dark-grain opacity-25 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="reveal text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-gold/50" />
              <p className="text-gold tracking-[0.3em] text-xs uppercase font-bold animate-pulse">★ New Single · Out Now</p>
              <div className="h-px w-10 bg-gold/50" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-cream mb-5 leading-[1.02] letterpress">
              <span className="italic font-medium text-gold">"I'm Living</span>
              <span className="italic font-medium text-gold"> Proof."</span>
            </h2>
            <div className="flex justify-center text-amber mb-6"><Flourish /></div>
            <p className="text-cream/85 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Eleven days on the ventilator. Thousands of prayers. One song that came out of it.
              <span className="block mt-3 text-cream/65 italic">This is Anthony's testimony, set to music.</span>
            </p>
          </div>

          <LivingProofPlayer />

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-gold/80">
            <span>Out Now</span>
            <span className="text-gold/40">·</span>
            <span>Streaming Soon</span>
            <span className="text-gold/40">·</span>
            <span>Radio Add Date TBA</span>
          </div>

          <div className="reveal mt-10 text-center">
            <a href="#booking" className="stamped inline-block bg-amber text-burgundy-deep px-10 py-4 rounded-sm font-display font-bold tracking-widest uppercase text-sm">
              Book the Living Proof Tour
            </a>
            <p className="mt-5 text-cream/60 italic font-light text-sm">
              Tap the speaker to hear the song that almost didn't get sung.
            </p>
          </div>
        </div>
      </section>


      {/* BOOKING */}
      <section id="booking" className="bg-cream paper-grain py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-amber" />
              <p className="text-sienna tracking-[0.3em] text-xs uppercase font-bold">Booking</p>
              <div className="h-px w-10 bg-amber" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-burgundy leading-tight">
              Let's Bring the Music
              <span className="block italic font-medium text-sienna">to You.</span>
            </h2>
            <div className="flex justify-center text-amber mt-5"><Flourish /></div>
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-14">
            <div className="reveal md:col-span-2 space-y-7">
              <p className="text-burgundy-deep/85 leading-relaxed text-lg">
                We travel over 100 dates a year across the southeast: churches, theaters, conferences, and community events. We'd love to hear about yours.
              </p>
              <div className="space-y-4">
                <a href="tel:6629835538" className="flex items-center gap-4 text-burgundy hover:text-amber transition group">
                  <span className="w-10 h-10 rounded-full bg-amber/15 border border-amber/40 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-cream transition"><Phone size={16} /></span>
                  <span className="font-semibold tracking-wide">662-983-5538</span>
                </a>
                <a href="mailto:booking@bollingerministries.com" className="flex items-center gap-4 text-burgundy hover:text-amber transition group">
                  <span className="w-10 h-10 rounded-full bg-amber/15 border border-amber/40 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-cream transition"><Mail size={16} /></span>
                  <span className="font-semibold tracking-wide">booking@bollingerministries.com</span>
                </a>
                <div className="flex items-center gap-4 text-burgundy">
                  <span className="w-10 h-10 rounded-full bg-amber/15 border border-amber/40 flex items-center justify-center text-amber"><MapPin size={16} /></span>
                  <span className="font-semibold tracking-wide">Bruce, Mississippi</span>
                </div>
                <div className="flex items-center gap-4 text-burgundy">
                  <span className="w-10 h-10 rounded-full bg-amber/15 border border-amber/40 flex items-center justify-center text-amber"><Calendar size={16} /></span>
                  <span className="font-semibold tracking-wide">Booking Sunday Morning & Evening Services</span>
                </div>
              </div>
              <blockquote className="border-l-4 border-amber pl-5 py-2 text-burgundy/80 italic font-display text-xl">
                "Their concert was the most moving evening our church has had in years."
              </blockquote>
            </div>

            <form
              className="reveal md:col-span-3 relative bg-paper paper-grain p-8 md:p-10 border border-burgundy/20 shadow-xl"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                toast.success("Thank you! We'll be in touch soon.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-amber/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-amber/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber/60" />

              <p className="text-[10px] tracking-[0.3em] uppercase text-sienna font-bold mb-1">Booking Inquiry</p>
              <h3 className="font-display text-2xl text-burgundy mb-6">Tell us about your event</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Event Date" name="date" type="date" />
              </div>
              <div className="mb-6">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-bold text-sienna mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  maxLength={1000}
                  className="w-full bg-cream border border-burgundy/25 rounded-sm px-4 py-3 text-burgundy-deep focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/30 transition"
                />
              </div>
              <button type="submit" className="stamped w-full bg-burgundy text-cream py-4 rounded-sm font-display font-bold tracking-widest uppercase text-sm">
                Send Booking Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-burgundy-deep text-cream/80 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 dark-grain opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="font-display text-3xl text-cream mb-2">
            Anthony <span className="text-amber italic font-normal">&</span> Pam Bollinger
          </div>
          <div className="flex justify-center text-amber my-4"><Flourish /></div>
          <p className="italic text-cream/60 mb-8 font-light">Sharing what God has done for us.</p>
          <div className="flex justify-center gap-4 mb-8">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center hover:bg-amber hover:text-burgundy-deep hover:border-amber transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="text-[10px] tracking-[0.4em] text-gold/70 font-bold space-x-3">
            <span>#ITSAGODTHING</span><span>·</span><span>#IMLIVINGPROOF</span>
          </div>
          <p className="text-xs text-cream/40 mt-6 tracking-wider">© {new Date().getFullYear()} A.R. Bollinger Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] font-bold text-sienna mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full bg-cream border border-burgundy/25 rounded-sm px-4 py-3 text-burgundy-deep focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/30 transition"
      />
    </div>
  );
}
