import img1 from "@/assets/feed/image0_1.jpeg.asset.json";
import img2 from "@/assets/feed/image1.jpeg.asset.json";
import img3 from "@/assets/feed/image4.jpeg.asset.json";
import img4 from "@/assets/feed/image5.jpeg.asset.json";
import img5 from "@/assets/feed/img_0662.jpg.asset.json";
import img6 from "@/assets/feed/img_0663.jpg.asset.json";
import img7 from "@/assets/feed/img_0665.jpg.asset.json";
import img8 from "@/assets/feed/img_0668.png.asset.json";
import img9 from "@/assets/feed/img_0676.jpg.asset.json";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function PhotoMarquee() {
  const loop = [...photos, ...photos];
  return (
    <section className="bg-burgundy-deep py-10 md:py-14 overflow-hidden border-y border-gold/20">
      <div
        className="relative w-full overflow-hidden select-none"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          touchAction: "pan-y",
        }}
      >
        <div
          className="flex gap-5 md:gap-7 w-max animate-marquee-x"
          style={{ pointerEvents: "none" }}
        >
          {loop.map((p, i) => (
            <div
              key={i}
              className="shrink-0 h-48 sm:h-64 md:h-80 w-auto rounded-lg overflow-hidden ring-1 ring-gold/30 shadow-lg"
            >
              <img
                src={p.url}
                alt=""
                draggable={false}
                className="h-full w-auto object-cover block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
