import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navItems = [
  { label: 'Industries', path: '/#industries' },
  { label: 'About', path: '/#why-biztel' },
  { label: 'Contact', path: '/#book-demo' },
];

const productLinks = [
  { label: 'AI Supervisor', path: '/#ai-supervisor' },
  { label: 'Process Monitoring', path: '/#ai-supervisor' },
  { label: 'Visual Inspection', path: '/#ai-supervisor' },
];

const platformLinks = [
  { label: 'Decision Layer', path: '/#ai-decision-layer' },
  { label: 'Future Functions', path: '/#future-vision' },
  { label: 'Production Proof', path: '/#production-proof' },
];

export function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<'products' | 'platform' | null>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const go = (path: string) => {
    setMenu(null);
    setMobileOpen(false);
    onNavigate(path);
  };

  const dropdown = (items: typeof productLinks) => (
    <div className="absolute left-0 top-full w-[280px] border border-line bg-ink p-2 shadow-2xl shadow-black/30">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => go(item.path)}
          className="block w-full border-b border-line/70 px-4 py-3 text-left text-sm text-steel-300 last:border-b-0 hover:bg-navy3 hover:text-white"
        >
          {item.label}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-[92px] border-b transition-colors duration-200 ${scrolled ? 'border-line bg-ink/95 backdrop-blur-md' : 'border-transparent bg-ink/45'}`}>
      <div className="container-x flex h-full items-center justify-between">
        <button onClick={() => go('/')} aria-label="Go to homepage">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <div className="relative" onMouseEnter={() => setMenu('products')} onMouseLeave={() => setMenu(null)}>
            <button onClick={() => setMenu(menu === 'products' ? null : 'products')} className="flex items-center gap-1 text-base text-steel-300 hover:text-white" aria-expanded={menu === 'products'}>
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {menu === 'products' && dropdown(productLinks)}
          </div>
          <div className="relative" onMouseEnter={() => setMenu('platform')} onMouseLeave={() => setMenu(null)}>
            <button onClick={() => setMenu(menu === 'platform' ? null : 'platform')} className="flex items-center gap-1 text-base text-steel-300 hover:text-white" aria-expanded={menu === 'platform'}>
              Platform <ChevronDown className="h-4 w-4" />
            </button>
            {menu === 'platform' && dropdown(platformLinks)}
          </div>
          {navItems.map((item) => (
            <button key={item.label} onClick={() => go(item.path)} className="text-base text-steel-300 hover:text-white">
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => go('/#book-demo')} className="btn-primary hidden lg:inline-flex">
          Book a Demo <ArrowUpRight className="h-4 w-4" />
        </button>

        <button className="border border-line p-2 text-steel-200 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-b border-line bg-ink px-6 pb-6 lg:hidden" aria-label="Mobile navigation">
          {[...productLinks, ...platformLinks, ...navItems].map((item) => (
            <button key={`${item.label}-${item.path}`} onClick={() => go(item.path)} className="block w-full border-b border-line py-4 text-left text-sm text-steel-200">
              {item.label}
            </button>
          ))}
          <button onClick={() => go('/#book-demo')} className="btn-primary mt-5 w-full">
            Book a Demo <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </header>
  );
}
