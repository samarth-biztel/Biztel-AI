import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface RevealProps extends PropsWithChildren {
  id?: string;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className = '', delay = 0, y = 20, id }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`motion-reveal ${className}`}
      id={id}
      initial={reduced ? false : { opacity: 0, y }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduced ? 0 : 0.68, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Chapter({ n, label }: { n: string; label: string }) {
  return (
    <div className="chapter" data-testid={`chapter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <span className="text-accent">{n}</span>
      <span className="h-px w-12 bg-line" />
      <span>
        {label.split(/(BiztelAI)/).map((part, index) => (
          <span key={index} className={part === 'BiztelAI' ? 'normal-case' : undefined}>{part}</span>
        ))}
      </span>
    </div>
  );
}
