import { useState, useEffect } from 'react';

const links = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-white">NY<span className="text-indigo-400">.</span></span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className="text-gray-300 hover:text-indigo-400 capitalize transition-colors">
                {l}
              </button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-gray-300 hover:text-indigo-400 capitalize text-left">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
