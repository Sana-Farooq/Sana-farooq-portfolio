import myPic from '../assets/images/my-pic.png';
import useTypedRole from '../hooks/useTypedRole';

export default function Hero() {
  const typedRole = useTypedRole();

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-[6vw] pt-32 pb-20"
    >
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
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="btn-primary font-bold">
            View My Work <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center relative mt-10 lg:mt-0">
        <div
          className="absolute inset-0 m-auto w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(109,123,255,0.18) 0%,transparent 70%)' }}
        ></div>
        <img
          className="rounded-2xl w-100 h-100 relative animate-float border border-[rgba(109,123,255,0.15)]"
          src={myPic}
          alt="Sana Farooq"
        />
      </div>
    </section>
  );
}