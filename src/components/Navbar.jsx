import logo from '../assets/images/logo.svg';
const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#services', label: 'services' },
  { href: '#contact', label: 'contact' },
];

export default function Navbar() {
  return (
    <nav
      className="h-24 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5 backdrop-blur-xl border-b border-[rgba(109,123,255,0.08)]"
      style={{ background: 'rgba(8,8,16,0.88)' }}
    >
      <a href="#hero" className="flex items-center h-full">
        <img className="h-full max-h-16 w-auto object-contain" src={logo} alt="SF." />
      </a>
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a 
        href="#contact"
        className="nav-link border border-[rgba(109,123,255,0.35)] text-cyan px-5 py-2 rounded hover:bg-[rgba(109,123,255,0.1)] transition-colors"
      >
        hire me
      </a>
    </nav>
  );
}