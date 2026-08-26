import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navItems = [
  { label: 'Products', path: '/products/ai-supervisor' },
  { label: 'AI Teammates', path: '/ai-teammates' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const go = (path: string) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-[92px] border-b transition-colors duration-200 ${scrolled ? 'border-line bg-ink/95 backdrop-blur-md' : 'border-transparent bg-ink/45'}`}>
      <div className="container-x flex h-full items-center justify-between">
        <button onClick={() => go('/')} aria-label="Go to homepage">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => go(item.path)} className="text-base text-steel-300 hover:text-white">
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => go('/contact#book-demo')} className="btn-primary hidden lg:inline-flex">
          Book a Demo <ArrowUpRight className="h-4 w-4" />
        </button>

        <button className="border border-line p-2 text-steel-200 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-b border-line bg-ink px-6 pb-6 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button key={`${item.label}-${item.path}`} onClick={() => go(item.path)} className="block w-full border-b border-line py-4 text-left text-sm text-steel-200">
              {item.label}
            </button>
          ))}
          <button onClick={() => go('/contact#book-demo')} className="btn-primary mt-5 w-full">
            Book a Demo <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </header>
  );
}
