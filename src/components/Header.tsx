import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsappButton } from "@/components/WhatsappButton";
import { categories } from "@/data/categories";
import { whatsappGeneral, WHATSAPP_DISPLAY, STORE_ADDRESS } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const [, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  };

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-card-border shadow-sm transition-opacity",
        open && "md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto",
      )}
    >
      {/* Top info bar */}
      <div className="hidden md:block bg-[hsl(var(--brand-navy))] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[hsl(var(--brand-orange))]" />
              {STORE_ADDRESS}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[hsl(var(--brand-orange))]" />
              {WHATSAPP_DISPLAY}
            </span>
          </div>
          <span className="font-semibold uppercase tracking-wider text-white/80">
            Seg. a Sex. 8h–18h30 · Sáb. 8h–17h
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-auto relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por produto, marca ou categoria..."
            className="w-full h-11 pl-11 pr-4 rounded-full bg-muted/60 border border-transparent focus:border-[hsl(var(--brand-orange))] focus:bg-white outline-none text-sm transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 h-8 rounded-full bg-[hsl(var(--brand-navy))] text-white text-xs font-bold hover:bg-[hsl(var(--brand-navy))]/90 transition"
          >
            Buscar
          </button>
        </form>

        <div className="ml-auto flex items-center gap-2">
          <WhatsappButton
            message={whatsappGeneral()}
            label="Fale Conosco"
            size="sm"
            className="hidden sm:inline-flex"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5 text-[hsl(var(--brand-navy))]" />
          </button>
        </div>
      </div>

      {/* Category nav (desktop) */}
      <nav className="hidden md:block border-t border-card-border bg-[hsl(var(--brand-cream))]/40">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
            <li>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-3 text-sm font-bold text-[hsl(var(--brand-navy))] hover:text-[hsl(var(--brand-orange))] transition"
              >
                Início
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/categoria/${c.slug}`}
                  className="inline-flex items-center px-4 py-3 text-sm font-bold text-[hsl(var(--brand-navy))] hover:text-[hsl(var(--brand-orange))] transition whitespace-nowrap"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contato"
                className="inline-flex items-center px-4 py-3 text-sm font-bold text-[hsl(var(--brand-navy))] hover:text-[hsl(var(--brand-orange))] transition whitespace-nowrap"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>

    {/* Mobile drawer rendered outside header so it can fully cover it */}
    <MobileDrawer open={open} onClose={() => setOpen(false)} query={query} setQuery={setQuery} onSearch={handleSearch} />
    </>
  );
}

function MobileDrawer({
  open,
  onClose,
  query,
  setQuery,
  onSearch,
}: {
  open: boolean;
  onClose: () => void;
  query: string;
  setQuery: (v: string) => void;
  onSearch: (e: React.FormEvent) => void;
}) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 md:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed top-0 right-0 z-[60] h-[100dvh] w-full sm:w-[88%] sm:max-w-sm bg-white shadow-2xl md:hidden transition-transform duration-300 flex flex-col",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-card-border bg-[hsl(var(--brand-navy))] text-white">
          <Logo variant="dark" />
          <button onClick={onClose} aria-label="Fechar menu" className="w-9 h-9 rounded-full hover:bg-white/10 inline-flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={onSearch} className="p-4 border-b border-card-border relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar produto..."
            className="w-full h-11 pl-10 pr-4 rounded-full bg-muted border-0 outline-none text-sm focus:ring-2 focus:ring-[hsl(var(--brand-orange))]"
          />
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </form>

        <nav className="flex-1 overflow-y-auto p-2">
          <Link
            href="/"
            onClick={onClose}
            className="block px-4 py-3 rounded-xl font-bold text-[hsl(var(--brand-navy))] hover:bg-muted"
          >
            Início
          </Link>
          {categories.map((c) => (
            <details key={c.id} className="group">
              <summary className="list-none flex items-center justify-between px-4 py-3 rounded-xl font-bold text-[hsl(var(--brand-navy))] cursor-pointer hover:bg-muted">
                <span>{c.name}</span>
                <span className="transition-transform group-open:rotate-90">›</span>
              </summary>
              <div className="ml-4 pl-3 border-l-2 border-[hsl(var(--brand-orange))]/40 my-1">
                <Link
                  href={`/categoria/${c.slug}`}
                  onClick={onClose}
                  className="block px-3 py-2 text-sm font-semibold text-[hsl(var(--brand-orange))]"
                >
                  Ver toda a categoria
                </Link>
                {c.subcategories.map((s) => (
                  <Link
                    key={s.id}
                    href={`/categoria/${c.slug}?sub=${s.id}`}
                    onClick={onClose}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-[hsl(var(--brand-navy))]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <Link
            href="/contato"
            onClick={onClose}
            className="block px-4 py-3 rounded-xl font-bold text-[hsl(var(--brand-navy))] hover:bg-muted"
          >
            Contato
          </Link>
        </nav>

        <div className="p-4 border-t border-card-border">
          <WhatsappButton
            message={whatsappGeneral()}
            label="Fale com a loja"
            size="md"
            fullWidth
          />
        </div>
      </aside>
    </>
  );
}
