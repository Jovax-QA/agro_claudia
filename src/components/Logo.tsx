import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
};

export function Logo({ className, variant = "light", showTagline = false }: LogoProps) {
  const navy = variant === "dark" ? "text-white" : "text-[hsl(var(--brand-navy))]";
  const orange = "text-[hsl(var(--brand-orange))]";
  const subtle = variant === "dark" ? "text-white/80" : "text-[hsl(var(--brand-navy))]/80";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative shrink-0">
        <div className="grid grid-cols-2 gap-[2px] w-12 h-12">
          <div className={cn("rounded-tl-md flex items-center justify-center text-white font-black text-base", "bg-[hsl(var(--brand-orange))]")}>
            <PawIcon className="w-5 h-5" />
          </div>
          <div className={cn("rounded-tr-md flex items-center justify-center text-white font-black text-base", "bg-[hsl(var(--brand-navy))]")}>
            <WrenchIcon className="w-5 h-5" />
          </div>
          <div className={cn("rounded-bl-md flex items-center justify-center text-white font-black text-base", "bg-[hsl(var(--brand-navy))]")}>
            <BirdIcon className="w-5 h-5" />
          </div>
          <div className={cn("rounded-br-md flex items-center justify-center text-white font-black text-base", "bg-[hsl(var(--brand-orange))]")}>
            <DollarIcon className="w-5 h-5" />
          </div>
        </div>
        {/* Roof */}
        <div
          className={cn(
            "absolute -top-[7px] left-1/2 -translate-x-1/2 w-14 h-3",
            variant === "dark" ? "bg-white" : "bg-[hsl(var(--brand-navy))]",
          )}
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("font-black text-2xl tracking-tight", navy)}>
          POUPAR
        </span>
        <span className={cn("font-bold text-[10px] tracking-[0.2em] uppercase", orange)}>
          Agro Comercial
        </span>
        {showTagline && (
          <span className={cn("text-[10px] mt-1 italic", subtle)}>
            Temos tudo que você precisa
          </span>
        )}
      </div>
    </div>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="6" cy="9" r="2" />
      <circle cx="10" cy="5" r="2" />
      <circle cx="14" cy="5" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M12 11c-3 0-6 3-6 6 0 2 2 3 4 3h4c2 0 4-1 4-3 0-3-3-6-6-6z" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.6-.4-.4-2.6 2.5-2.5z" />
    </svg>
  );
}

function BirdIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 6a3 3 0 1 0-3 3v3l-7 7h4l5-5h2l3-3v-2h-3a2 2 0 0 1-1-2z" />
    </svg>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v18M16 7H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8" />
    </svg>
  );
}
