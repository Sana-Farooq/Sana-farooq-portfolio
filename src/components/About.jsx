import Reveal from './Reveal';
import projects from '../data/projects';

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'Bootstrap', 'SQL', 'PHP', 'Laravel', 'GitHub', 'Vercel'];

const liveProjectCount = projects.filter((p) => p.demo).length;
const totalProjectCount = projects.length;

const highlights = [
  {
    icon: 'fa-solid fa-database',
    title: 'Backends that run real businesses',
    text: 'Laravel admin panels for Mansha Motors and Fahad Motors — live systems dealerships use daily for inventory, sales, and installment tracking.',
  },
  {
    icon: 'fa-brands fa-react',
    title: 'React apps beyond tutorials',
    text: 'API-integrated frontends — a multi-model AI chat interface, a live news app, and utility tools — not just static UI.',
  },
  {
    icon: 'fa-solid fa-plug',
    title: 'Comfortable wiring things together',
    text: 'REST APIs, EmailJS, third-party services — connecting a frontend to whatever it actually needs to talk to.',
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Ships and hands off cleanly',
    text: 'Every project on GitHub, deployed and live — not sitting unfinished on a local machine.',
  },
];

export default function About() {
  return (
    <section id="about" className="px-[6vw] py-28 bg-surface border-t border-b border-[rgba(109,123,255,0.08)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
        {/* Left */}
        <div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-tight mb-5">
            I build the part after the mockup <span className="text-cyan">actually works</span>
          </h2>
          <p className="text-[#7a8a9a] leading-relaxed text-[15.5px]">
            I started in frontend — React, Tailwind, clean component-driven UI — and over the last
            year moved into full-stack work by building the backends those UIs actually needed:
            Laravel admin panels, MySQL schemas, and the APIs connecting them.
          </p>
          <p className="text-[#7a8a9a] mt-4 leading-relaxed text-[15.5px]">
            I'm not choosing between frontend and backend. I want to be the developer a small team
            can hand a feature to and trust it gets built, connected, and shipped — not just designed.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-[rgba(109,123,255,0.1)] rounded-xl p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-cyan">{totalProjectCount}</p>
              <p className="text-[11px] text-[#7a8a9a] mt-1">Shipped projects</p>
            </div>
            <div className="bg-card border border-[rgba(109,123,255,0.1)] rounded-xl p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-cyan">{liveProjectCount}</p>
              <p className="text-[11px] text-[#7a8a9a] mt-1">Live in production</p>
            </div>
            <div className="bg-card border border-[rgba(109,123,255,0.1)] rounded-xl p-4 text-center">
              <p className="font-display font-extrabold text-2xl text-cyan">2</p>
              <p className="text-[11px] text-[#7a8a9a] mt-1">Real client backends</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {techStack.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              index={i}
              className="bg-card border border-[rgba(109,123,255,0.1)] rounded-xl p-6 hover:border-[rgba(109,123,255,0.3)] transition-colors"
            >
              <div className="text-2xl mb-3 text-cyan"><i className={item.icon}></i></div>
              <p className="font-display font-semibold text-sm text-[#e8eef5] mb-2">{item.title}</p>
              <p className="text-xs text-[#7a8a9a] leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}