import { useEffect, useRef, useState } from 'react';

const frontend = [
  { name: 'React', pct: 95 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'JavaScript', pct: 88 },
  { name: 'HTML5', pct: 96 },
];

const backend = [
  { name: 'Laravel', pct: 90 },
  { name: 'SQL', pct: 85 },
  { name: 'PHP', pct: 87 },
];

function SkillBar({ name, pct, animate }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-[#e8eef5]">{name}</span>
        <span className="font-mono text-xs text-cyan">{pct}%</span>
      </div>
      <div className="h-0.75 bg-card rounded-full overflow-hidden">
        <div className="bar-fill" style={{ width: animate ? `${pct}%` : '0%' }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="px-[6vw] py-28 bg-surface border-t border-b border-[rgba(109,123,255,0.08)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2">
          <span className="tag">Expertise</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-tight">
            My <span className="text-cyan">Skills</span>
          </h2>
          <p className="text-[#7a8a9a] text-[15px] leading-relaxed mt-5">
            One year of experience building modern web applications with a strong focus on frontend
            development, creating responsive and interactive user interfaces using current tools and
            best practices, along with practical experience in full-stack development including
            backend logic, API integration, and database design.
          </p>
          <div className="mt-8 p-6 bg-card border border-[rgba(109,123,255,0.1)] rounded-xl">
            <p className="font-mono text-xs text-cyan mb-4 uppercase tracking-widest">Current Focus</p>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill">Backend</span>
              <span className="tech-pill">Laravel</span>
              <span className="tech-pill">SQL</span>
              <span className="tech-pill">PHP</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
          <div>
            <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-4 pb-2 border-b border-[rgba(109,123,255,0.1)]">Frontend</p>
            <div className="space-y-4">
              {frontend.map((s) => (<SkillBar key={s.name} {...s} animate={animate} />))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-4 pb-2 border-b border-[rgba(109,123,255,0.1)]">Backend</p>
            <div className="space-y-4">
              {backend.map((s) => (<SkillBar key={s.name} {...s} animate={animate} />))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}