import { useState } from 'react';
import projects from '../data/projects';

function countTag(tag) {
  return projects.filter((p) => p.tags.includes(tag)).length;
}

const skills = [
  {
    name: 'React',
    category: 'frontend',
    icon: 'fa-brands fa-react',
    count: countTag('react'),
    note: 'Core stack',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: 'fa-brands fa-js',
    count: countTag('javascript'),
    note: 'Core stack',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'fa-solid fa-wind',
    count: countTag('tailwindcss'),
    note: 'Core stack',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: 'fa-brands fa-html5',
    count: countTag('html'),
    note: null,
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'fa-brands fa-bootstrap',
    count: countTag('bootstrap'),
    note: null,
  },
  {
    name: 'Laravel',
    category: 'backend',
    icon: 'fa-brands fa-laravel',
    count: countTag('laravel'),
    note: 'Core stack',
  },
  {
    name: 'PHP',
    category: 'backend',
    icon: 'fa-brands fa-php',
    count: countTag('php'),
    note: null,
  },
  {
    name: 'MySQL',
    category: 'backend',
    icon: 'fa-solid fa-database',
    count: countTag('mysql'),
    note: null,
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    icon: 'fa-brands fa-github',
    count: null,
    note: 'Every project',
  },
  {
    name: 'REST APIs',
    category: 'tools',
    icon: 'fa-solid fa-plug',
    count: countTag('rest-api'),
    note: null,
  },
  {
    name: 'Vercel',
    category: 'tools',
    icon: 'fa-solid fa-cloud-arrow-up',
    count: countTag('vercel'),
    note: null,
  },
  {
    name: 'EmailJS',
    category: 'tools',
    icon: 'fa-solid fa-envelope',
    count: countTag('emailjs'),
    note: null,
  },
];

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Tools', value: 'tools' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const visibleSkills = skills.filter((s) => activeTab === 'all' || s.category === activeTab);

  return (
    <section id="skills" className="px-[6vw] py-28 bg-surface border-t border-b border-[rgba(109,123,255,0.08)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
              My <span className="text-cyan">Skills</span>
            </h2>
            <p className="text-[#7a8a9a] text-[15px] leading-relaxed">
              Where a count is shown, it's how many of my own shipped projects actually used that
              skill — real evidence, not a self-rated score.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`filter-btn ${activeTab === tab.value ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-card border border-cyan-dim rounded-xl p-5 flex flex-col items-start gap-3 hover:border-cyan-mid hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[rgba(109,123,255,0.08)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-xl text-cyan group-hover:bg-[rgba(109,123,255,0.15)] transition-colors">
                <i className={skill.icon}></i>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-[#e8eef5]">{skill.name}</p>
                {skill.count !== null ? (
                  <p className="font-mono text-[10px] text-cyan mt-1">
                    {skill.count} project{skill.count === 1 ? '' : 's'}
                  </p>
                ) : skill.note ? (
                  <p className="font-mono text-[10px] text-[#7a8a9a] mt-1">{skill.note}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-card border border-cyan-dim rounded-xl inline-flex items-center gap-4 flex-wrap">
          <p className="font-mono text-xs text-cyan uppercase tracking-widest">Currently deepening</p>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">Laravel</span>
            <span className="tech-pill">SQL</span>
            <span className="tech-pill">API design</span>
          </div>
        </div>
      </div>
    </section>
  );
}