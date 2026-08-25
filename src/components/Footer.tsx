import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const columns = [
  {
    title: 'Product',
    links: [
      ['AI Supervisor', '/#ai-supervisor'],
      ['Process Monitoring', '/#ai-supervisor'],
      ['Visual Inspection', '/#ai-supervisor'],
    ],
  },
  {
    title: 'Platform',
    links: [
      ['AI Decision Layer', '/#ai-decision-layer'],
      ['AI Engineer Assistants', '/#future-vision'],
      ['Production Proof', '/#production-proof'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Industries', '/#industries'],
      ['Why BiztelAI', '/#why-biztel'],
      ['Book a Demo', '/#book-demo'],
    ],
  },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="about" className="bg-ink text-white">
      <div className="container-x grid gap-16 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <button onClick={() => onNavigate('/')} aria-label="Go to homepage">
            <Logo />
          </button>
          <p className="mt-8 max-w-md text-sm leading-7 text-steel-500">
            BiztelAI builds AI-powered systems that help manufacturing teams understand what is happening on the shop floor, validate processes, and automate actions.
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-steel-600">
            The AI Decision Layer for Manufacturing
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-steel-600">{column.title}</p>
            <ul className="mt-6 space-y-4">
              {column.links.map(([label, path]) => (
                <li key={label}>
                  <button onClick={() => onNavigate(path)} className="text-left text-sm text-steel-400 transition-colors hover:text-accent">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-steel-600 sm:flex-row sm:items-center">
          <p>&copy; 2026 BiztelAI. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.25em]">AI Supervisor - Station Intelligence</p>
        </div>
      </div>
    </footer>
  );
}
