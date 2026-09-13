import Reveal from './Reveal';

const services = [
  { icon: 'fa-solid fa-desktop', title: 'UI / Frontend Development', text: 'Pixel-perfect, responsive interfaces built with HTML, Tailwind CSS, and JavaScript — fast to load and smooth on any device.' },
  { icon: 'fa-brands fa-react', title: 'React Development', text: 'Dynamic, component-driven web apps using React — reusable components, state management, and smooth user experiences.' },
  { icon: 'fa-solid fa-palette', title: 'Landing Pages & Websites', text: 'Clean, conversion-focused landing pages and portfolio sites — designed with Tailwind CSS and built for speed.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'UI Fixes & Improvements', text: "Got a broken layout or slow frontend? I'll debug, refactor, and improve your existing site's look, feel, and performance." },
  { icon: 'fa-solid fa-rocket', title: 'Frontend to Fullstack', text: 'Expanding into PHP, Laravel & SQL — I can connect your frontend to a backend, build simple APIs, and manage databases for small projects.' },
  { icon: 'fa-solid fa-handshake', title: 'Freelance Collaboration', text: 'Need a reliable frontend dev for your project? Open to freelance work, short-term contracts, and long-term collaborations.' },
];

const processSteps = [
  { num: '01', title: 'Discovery', text: 'Goals, scope & requirements', active: false },
  { num: '02', title: 'Design', text: 'Wireframes & architecture', active: false },
  { num: '03', title: 'Build', text: 'Agile sprints & reviews', active: true },
  { num: '04', title: 'Test', text: 'QA, performance & security', active: false },
  { num: '05', title: 'Launch', text: 'Deploy & ongoing support', active: false },
];

export default function Services() {
  return (
    <section id="services" className="px-[6vw] py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="tag">What I Offer</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
              My <span className="text-cyan">Services</span>
            </h2>
          </div>
          <p className="text-[#7a8a9a] text-sm max-w-xs">End-to-end frontend services tailored to your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((service, i) => (
            <Reveal key={service.title} index={i} className="bg-surface border border-[rgba(109,123,255,0.1)] rounded-xl p-7 card-hover top-line relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[rgba(109,123,255,0.1)] border border-[rgba(109,123,255,0.2)] flex items-center justify-center text-2xl mb-5">
                <i className={service.icon}></i>
              </div>
              <h3 className="font-display font-bold text-lg text-[#e8eef5] mb-3">{service.title}</h3>
              <p className="text-[13.5px] text-[#7a8a9a] leading-relaxed">{service.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="bg-surface border border-[rgba(109,123,255,0.08)] rounded-2xl p-10">
          <h3 className="font-display font-bold text-2xl text-center text-[#e8eef5] mb-12">My Development Process</h3>
          <div className="relative grid grid-cols-5 gap-0">
            <div className="process-line"></div>
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center px-3 relative z-10">
                <div className={`w-13 h-13 rounded-full flex items-center justify-center font-mono text-sm text-cyan mb-4 border ${step.active ? 'bg-[rgba(109,123,255,0.12)] border-cyan' : 'bg-card border-[rgba(109,123,255,0.3)]'}`}>
                  {step.num}
                </div>
                <p className={`font-display font-semibold text-[13px] mb-1.5 ${step.active ? 'text-cyan' : 'text-[#e8eef5]'}`}>{step.title}</p>
                <p className="text-[11px] text-[#7a8a9a] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}