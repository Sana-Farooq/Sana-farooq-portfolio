import Reveal from './Reveal';

const testimonials = [
  { quote: '"I had a great experience working with you Miss Sana. You was responsible, creative, and paid attention to every detail. The website turned out even better than I expected. Would definitely work with you again. Thank you so much"', initials: 'AS', name: 'Areeb Sarwar', role: 'CEO, VartexSoft' },
  { quote: "\"Delivered a complex dashboard on time and on budget. Alex communicates clearly and the attention to detail is unlike any freelancer I've worked with.\"", initials: 'JK', name: 'James Kim', role: 'Founder, DataPulse' },
  { quote: '"Our e-commerce revenue doubled after Alex rebuilt the frontend. The UI is stunning and the checkout conversion rate went up by 40%."', initials: 'RP', name: 'Rachel Patel', role: 'CEO, BrandKart' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <span className="tag">What Clients Say</span>
        <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-12">
          Client <span className="text-cyan">Testimonials</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} index={i} className="bg-surface border border-[rgba(109,123,255,0.1)] rounded-xl p-7 hover:border-[rgba(109,123,255,0.25)] transition-colors">
              <div className="flex gap-1 mb-4">
                <span className="text-amber-400 text-sm">★★★★★</span>
              </div>
              <p className="text-sm text-[#7a8a9a] leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(109,123,255,0.1)] border border-[rgba(109,123,255,0.25)] flex items-center justify-center font-display font-bold text-sm text-cyan shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[#e8eef5]">{t.name}</p>
                  <p className="font-mono text-[11px] text-[#7a8a9a]">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}