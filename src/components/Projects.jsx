import { useState } from 'react';
import Reveal from './Reveal';
import projects, { filters } from '../data/projects';

const badgeStyles = {
  live: 'bg-emerald-500/10 text-white border-emerald-500/30',
  vercel: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = projects.filter(
    (p) => activeFilter === 'all' || p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <span className="tag">My Work</span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
            Featured <span className="text-cyan">Projects</span>
          </h2>
          <p className="text-[#7a8a9a] text-sm max-w-xs">
            A selection of work across various industries and stacks.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, i) => (
            <Reveal
              key={project.id}
              index={i}
              className="bg-surface border border-[rgba(109,123,255,0.1)] rounded-xl overflow-hidden card-hover relative"
            >
              <div className="h-44 border-b border-[rgba(109,123,255,0.1)] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <span
                  className={`absolute top-3 right-3 text-[15px] font-mono font-extrabold px-2 py-0.5 rounded-full backdrop-blur-sm border ${badgeStyles[project.badge.type]}`}
                >
                  {project.badge.label}
                </span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.pills.map((pill) => (
                    <span key={pill} className="tech-pill text-[10px]">{pill}</span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-lg text-[#e8eef5] mb-2">{project.title}</h3>
                <p className="text-xs text-[#7a8a9a] leading-relaxed mb-5">{project.description}</p>
                <div className="flex gap-4">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="font-mono text-xs text-cyan flex items-center gap-1 hover:opacity-70 transition-opacity">
                      <i className="fa-solid fa-up-right-from-square"></i> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="font-mono text-xs text-[#7a8a9a] flex items-center gap-1 hover:opacity-70 transition-opacity">
                      <i className="fa-solid fa-link"></i> GitHub
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}