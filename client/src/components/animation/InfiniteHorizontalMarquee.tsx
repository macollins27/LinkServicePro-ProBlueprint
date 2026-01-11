type Logo = { src: string; alt: string; width?: number; height?: number };

export default function InfiniteHorizontalMarquee({
  items,
  speedSeconds = 40,
  className = "",
}: {
  items: Logo[];
  speedSeconds?: number;
  className?: string;
}) {
  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduce) {
    return (
      <ul className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 ${className}`}>
        {items.map((l, i) => (
          <li key={i} className="flex items-center justify-center h-12 sm:h-14 opacity-80">
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              decoding="async"
              width={l.width}
              height={l.height}
              className="max-h-full w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    );
  }

  const track = [...items, ...items];

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="flex animate-marqueeX gap-10 sm:gap-12 md:gap-16 will-change-transform items-center"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {track.map((l, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-14 w-24"
          >
            <img
              src={l.src}
              alt=""
              loading="eager"
              decoding="sync"
              width={l.width}
              height={l.height}
              className="h-full w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-90 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
