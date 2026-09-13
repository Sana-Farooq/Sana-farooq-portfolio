import logo from '../assets/images/logo.svg';
export default function Footer() {
  return (
    <footer className="px-[6vw] py-10 border-t border-[rgba(109,123,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#hero">
        <img className="h-10 w-auto" src={logo} alt="SF." />
      </a>
      <p className="font-mono text-xs text-[#3a4a5a] text-center">
        © 2026 Sana Farooq — Built with React &amp; Tailwind CSS
      </p>
      <a href="#hero" className="font-mono text-xs text-[#7a8a9a] hover:text-cyan transition-colors">
        <i className="fa-solid fa-arrow-up"></i> back to top
      </a>
    </footer>
  );
}