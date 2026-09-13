export default function CtaBand() {
  return (
    <div className="relative py-20 px-[6vw] text-center bg-surface border-t border-b border-[rgba(109,123,255,0.08)] overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(109,123,255,0.08) 0%,transparent 70%)' }}
      ></div>
      <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4 relative">Open to opportunities</p>
      <h2 className="font-display font-extrabold text-4xl lg:text-6xl tracking-tight mb-5 relative">
        Got a <span className="text-cyan">project</span> in mind?
      </h2>
      <p className="text-white mb-10 relative">Let's turn your idea into a polished, production-ready product.</p>
      <a href="#contact" className="btn-primary relative mx-auto">
        Start a Conversation <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}