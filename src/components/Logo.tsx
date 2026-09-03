interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  showMark?: boolean;
}

export function Logo({ className = '', variant = 'full', showMark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="BiztelAI">
      {showMark && (
        <span className="relative block h-[30px] w-[30px] border border-steel-500/70" aria-hidden="true">
          <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-accent" />
        </span>
      )}
      {variant === 'full' && (
        <span className="font-display text-[22px] font-black uppercase leading-none tracking-normal text-white">
          BIZTEL<span className="text-accent">AI</span>
        </span>
      )}
    </div>
  );
}
