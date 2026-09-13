import Reveal from './Reveal';

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'SQL', 'PHP', 'Laravel', 'GitHub', 'Vercel'];

const cards = [
  { icon: 'fa-solid fa-bolt-lightning', title: 'Fast Delivery', text: 'Shipping production-ready features without cutting corners.' },
  { icon: 'fa-solid fa-sitemap', title: 'Clean Architecture', text: 'Scalable, maintainable code built to last years, not months.' },
  { icon: 'fa-solid fa-palette', title: 'UI Polish', text: 'Pixel-perfect interfaces that delight every user.' },
  { icon: 'fa-solid fa-lock', title: 'Secure & Reliable', text: 'Security-first mindset with 99.9% uptime standards.' },
];

export default function About() {
  return (
    <section id="about" className="px-[6vw] py-28 bg-surface border-t border-b border-[rgba(109,123,255,0.08)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
        <div>
          <span className="tag">About Me</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-tight">
            Crafting digital <span className="text-cyan">experiences</span> that matter
          </h2>
          <p className="text-[#7a8a9a] mt-5 leading-relaxed text-[15.5px]">
            I'm a full-stack developer with 1+ years of experience building everything from SaaS
            platforms to real-time APIs. I care deeply about performance, clean architecture, and the
            user experience.
          </p>
          <p className="text-[#7a8a9a] mt-4 leading-relaxed text-[15.5px]">
            When I'm not coding, I'm exploring new tech, contributing to open-source, or designing
            systems that scale. I believe the best code is invisible — it just works.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {techStack.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              index={i}
              className="bg-card border border-[rgba(109,123,255,0.1)] rounded-xl p-6 hover:border-[rgba(109,123,255,0.3)] transition-colors"
            >
              <div className="text-2xl mb-3"><i className={card.icon}></i></div>
              <p className="font-display font-semibold text-sm text-[#e8eef5] mb-2">{card.title}</p>
              <p className="text-xs text-[#7a8a9a] leading-relaxed">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}