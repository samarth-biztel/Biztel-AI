import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const productItems = [
  { label: 'AI Supervisor', path: '/products/ai-supervisor' },
  { label: 'AI Teammates', path: '/ai-teammates' },
];

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Header({ onNavigate, currentPath }: HeaderProps) {
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

  const isProductsActive = productItems.some((item) => item.path === currentPath);
  const navClass = (active: boolean) =>
    `text-base transition-colors ${active ? 'text-white' : 'text-steel-300 hover:text-white'}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-[92px] border-b transition-colors duration-200 ${scrolled ? 'border-line bg-ink/95 backdrop-blur-md' : 'border-transparent bg-ink/45'}`}>
      <div className="container-x flex h-full items-center justify-between">
        <button onClick={() => go('/')} aria-label="Go to homepage">
          <Logo />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <button onClick={() => go('/')} className={navClass(currentPath === '/')}>
            Home
          </button>

          <div className="group relative py-8">
            <button
              className={`${navClass(isProductsActive)} inline-flex items-center gap-2`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full min-w-[220px] border border-line bg-ink opacity-0 shadow-2xl shadow-black/30 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {productItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`block w-full px-5 py-4 text-left text-sm transition-colors hover:bg-panel hover:text-accent ${currentPath === item.path ? 'text-white' : 'text-steel-300'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <button key={item.label} onClick={() => go(item.path)} className={navClass(currentPath === item.path)}>
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
          <button onClick={() => go('/')} className="block w-full border-b border-line py-4 text-left text-sm text-steel-200">
            Home
          </button>
          <div className="border-b border-line py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-steel-600">Products</p>
            <div className="mt-3 space-y-1">
              {productItems.map((item) => (
                <button
                  key={`${item.label}-${item.path}`}
                  onClick={() => go(item.path)}
                  className="block w-full py-2 text-left text-sm text-steel-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
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
