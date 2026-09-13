import { useState } from 'react';

// Add real testimonials here as you collect them. Each one needs:
// - quote: the client's actual words (never invent this, even anonymized)
// - initials: for the avatar circle
// - name: the real name if you have permission to use it, or a role-only
//   label like "Business Owner" if you're keeping it anonymous
// - project: what you built for them — lets readers see the real, checkable
//   work behind the quote without necessarily naming the company
const testimonials = [
  {
    quote:
      "I had a great experience working with you Miss Sana. You was responsible, creative, and paid attention to every detail. The website turned out even better than I expected. Would definitely work with you again. Thank you so much",
    initials: 'AS',
    name: 'Areeb Sarwar',
    role: 'CEO, VartexSoft',
    project: 'VartexSoft — client website',
  },

  // Waiting on the real quote before this goes live:
  // {
  //   quote: "...",
  //   initials: '??',
  //   name: 'Business Owner', // or the real name, with permission
  //   role: 'Car Dealership Management System client',
  //   project: 'Mansha Motors / Fahad Motors — admin panel',
  // },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="px-[6vw] py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-12 text-center">
          Client <span className="text-cyan">Testimonials</span>
        </h2>

        <div className="relative bg-surface border border-[rgba(109,123,255,0.1)] rounded-2xl p-8 sm:p-10">
          <div className="flex gap-1 mb-4 justify-center">
            <span className="text-amber-400 text-sm">★★★★★</span>
          </div>

          <p className="text-[15px] text-[#e8eef5] leading-relaxed mb-6 italic text-center">
            "{t.quote}"
          </p>

          <div className="flex flex-col items-center gap-1 mb-2">
            <div className="w-11 h-11 rounded-full bg-[rgba(109,123,255,0.1)] border border-[rgba(109,123,255,0.25)] flex items-center justify-center font-display font-bold text-sm text-cyan">
              {t.initials}
            </div>
            <p className="font-display font-semibold text-sm text-[#e8eef5] mt-2">{t.name}</p>
            <p className="font-mono text-[11px] text-[#7a8a9a]">{t.role}</p>
            <p className="font-mono text-[10px] text-cyan mt-1">{t.project}</p>
          </div>

          {testimonials.length > 1 && (
            <>
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous testimonial"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-[#7a8a9a] hover:text-cyan hover:border-cyan transition-colors"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next testimonial"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-[#7a8a9a] hover:text-cyan hover:border-cyan transition-colors"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === index ? 'bg-cyan' : 'bg-[rgba(109,123,255,0.2)]'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}