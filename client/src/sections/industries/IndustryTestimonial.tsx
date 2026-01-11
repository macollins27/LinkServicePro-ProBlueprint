import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface IndustryTestimonialProps {
  testimonial?: Testimonial;
}

export default function IndustryTestimonial({ testimonial }: IndustryTestimonialProps) {
  if (!testimonial) return null;

  return (
    <section className="py-12 sm:py-16 bg-blue-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-lg border border-blue-100">
          <Quote className="w-10 h-10 text-[#0B5FFF] mb-6" />
          
          <blockquote>
            <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
              "{testimonial.quote}"
            </p>
          </blockquote>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B5FFF] to-[#0A54E6] flex items-center justify-center text-white font-bold text-lg">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p className="text-sm text-slate-600">
                  {testimonial.role}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
