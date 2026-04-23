import b25 from "@/assets/buque-25.webp";
import b26 from "@/assets/buque-26.webp";
import b27 from "@/assets/buque-27.webp";
import b28 from "@/assets/buque-28.webp";
import b29 from "@/assets/buque-29.webp";
import b30 from "@/assets/buque-30.webp";
import b31 from "@/assets/buque-31.webp";
import b32 from "@/assets/buque-32.webp";
import b33 from "@/assets/buque-33.webp";
import b35 from "@/assets/buque-35.webp";

const images = [b25, b26, b27, b28, b29, b30, b31, b32, b33, b35];

export const BuqueCarousel = () => {
  const loop = [...images, ...images];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-4 w-max animate-marquee"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="h-48 w-48 sm:h-64 sm:w-64 shrink-0 overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={src}
              alt={`Buquê de velas artesanais ${(i % images.length) + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
