const terms = [
  'PLC Integration',
  'Manufacturing Intelligence',
  'Process Monitoring',
  'Visual Inspection',
  'SOP Adherence',
  'Workflow Validation',
  'Cycle-Level Traceability',
  'Real-Time Intervention',
  'Edge AI',
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {terms.map((term) => (
        <span key={term} className="flex items-center">
          <span className="whitespace-nowrap px-10 font-mono text-xs uppercase tracking-[0.36em] text-steel-600">
            {term}
          </span>
          <span className="h-1 w-1 bg-accent/70" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-line bg-panel py-6" data-testid="capability-marquee">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
