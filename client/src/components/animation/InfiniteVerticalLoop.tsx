type Item = { src: string; alt?: string; label?: string };

export default function InfiniteVerticalLoop({
  items,
  reverse = false,
  speedSeconds = 28,
  className = "",
}: {
  items: Item[];
  reverse?: boolean;
  speedSeconds?: number;
  className?: string;
}) {
  const prefersReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduce) {
    return (
      <div className={className}>
        <ul className="grid grid-cols-2 gap-3">
          {items.slice(0, 6).map((it, i) => (
            <li key={i}>
              <figure className="relative">
                <img
                  src={it.src}
                  alt={it.alt ?? ""}
                  loading="lazy"
                  decoding="async"
                  className="w-[180px] sm:w-[200px] aspect-[4/3] object-cover"
                  style={{ borderRadius: '6px' }}
                />
                {it.label && (
                  <figcaption className="mt-1 text-[11px] sm:text-xs text-white/90">
                    {it.label}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // duplicate for seamless 200% track
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <div
        className={`${reverse ? "animate-marqueeDown" : "animate-marqueeUp"} flex flex-col gap-3 will-change-transform`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {doubled.map((it, i) => (
          <figure key={i} className="relative">
            <img
              src={it.src}
              alt="" // decorative in motion; descriptive alt retained in reduced-motion path
              loading="lazy"
              decoding="async"
              className="w-[180px] sm:w-[200px] aspect-[4/3] object-cover"
              style={{ borderRadius: '6px' }}
            />
            {it.label && (
              <figcaption
                className="
                  absolute left-2 bottom-2 z-10
                  px-2 py-1
                  text-[11px] sm:text-xs font-medium
                  text-white bg-black/70 ring-1 ring-white/20
                  pointer-events-none
                "
                style={{ borderRadius: '4px' }}
              >
                {it.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
