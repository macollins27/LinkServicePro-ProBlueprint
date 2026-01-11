type FeatureTestimonialProps = {
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
};

export default function FeatureTestimonial({ quote }: FeatureTestimonialProps) {
  if (!quote) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Quote */}
            <div className="rounded-2xl bg-[#0E2A47] text-white p-8">
              <blockquote className="text-xl leading-relaxed mb-4" data-testid="quote-text">
                "{quote.text}"
              </blockquote>
              <div className="text-white/80">
                <div className="font-semibold" data-testid="quote-author">— {quote.author}</div>
                {quote.role && <div className="text-sm" data-testid="quote-role">{quote.role}</div>}
              </div>
            </div>

            {/* Video placeholder */}
            <div 
              className="aspect-[16/9] rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center"
              role="img"
              aria-label="Watch 60-second story"
            >
              <button 
                className="flex flex-col items-center gap-2 hover:opacity-80 transition"
                aria-label="Watch 60-second story"
                data-testid="button-video-play"
              >
                <div className="w-16 h-16 rounded-full bg-[#0B5FFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Watch 60-second story</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
