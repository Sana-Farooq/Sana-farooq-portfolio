import useTypedRole from '../hooks/useTypedRole';
import myPic from '../assets/images/my-pic.png';
import projects from '../data/projects';

const stack = [
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel' },
  { name: 'Tailwind', icon: 'fa-solid fa-wind' },
  { name: 'PHP', icon: 'fa-brands fa-php' },
  { name: 'MySQL', icon: 'fa-solid fa-database' },
];

const totalProjects = projects.length;

export default function Hero() {
  const typedRole = useTypedRole();

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-[6vw] pt-32 pb-20"
    >
      {/* Left */}
      <div className="max-w-xl animate-fadeUp">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan tracking-widest bg-[rgba(109,123,255,0.08)] border border-[rgba(109,123,255,0.2)] px-4 py-2 rounded-full mb-7">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse2"></span>
          Available for work
        </div>

        <h1 className="font-display font-extrabold text-6xl mb-2">
          Hi, I'm <span style={{ color: '#6d7bff' }}>Sana</span>
        </h1>
        <h4 className="font-display font-bold text-4xl mb-2">
          I'm a <span style={{ color: '#6d7bff' }}>{typedRole}</span>
          <span className="typed-cursor">|</span>
        </h4>
        <p className="text-white leading-relaxed max-w-md mb-10">
          I build performant, scalable web applications — from pixel-perfect UIs to robust backend
          systems. Turning complex problems into clean, elegant code.
        </p>

        <div className="flex gap-4 flex-wrap mb-10">
          <a href="#projects" className="btn-primary font-bold">
            View My Work <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
          <a href="/resume.pdf" download className="btn-outline">
            Download CV <i className="fa-solid fa-download"></i>
          </a>
        </div>

        <div>
          <p className="font-mono text-[11px] text-[#7a8a9a] uppercase tracking-widest mb-3">
            Building with
          </p>
          <div className="flex gap-4 flex-wrap">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-[#7a8a9a] hover:text-cyan transition-colors"
                title={tech.name}
              >
                <i className={`${tech.icon} text-lg`}></i>
                <span className="font-mono text-xs hidden sm:inline">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — image side */}
      <div className="flex justify-center items-center relative mt-10 lg:mt-0">
        <div
          className="absolute inset-0 m-auto w-[26rem] h-[26rem] pointer-events-none opacity-60"
          style={{
            backgroundImage: 'radial-gradient(rgba(109,123,255,0.35) 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            maskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 75%)',
          }}
        ></div>
        <div
          className="absolute inset-0 m-auto w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(109,123,255,0.18) 0%,transparent 70%)' }}
        ></div>

        <img
          className="rounded-2xl w-100 h-100 relative animate-float border border-[rgba(109,123,255,0.15)]"
          src={myPic}
          alt="Sana Farooq"
        />

        <div className="absolute top-6 -left-4 sm:left-2 bg-surface border border-[rgba(109,123,255,0.25)] rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
          <p className="font-display font-extrabold text-xl text-cyan leading-none">{totalProjects}</p>
          <p className="font-mono text-[10px] text-[#7a8a9a] mt-1">Projects shipped</p>
        </div>

        <div className="absolute bottom-8 -right-4 sm:right-2 bg-surface border border-[rgba(109,123,255,0.25)] rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
          <p className="font-mono text-xs text-[#e8eef5] flex items-center gap-2">
            <i className="fa-brands fa-laravel text-cyan"></i> Full-stack ready
          </p>
        </div>
      </div>
    </section>
  );
}