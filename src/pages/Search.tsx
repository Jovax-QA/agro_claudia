import { useMemo, useState } from "react";
import { useSearch, useLocation } from "wouter";
import { Search as SearchIcon, X } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { searchProducts } from "@/data/products";
import { whatsappGeneral } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Link } from "wouter";

export function SearchPage() {
  const search = useSearch();
  const [, navigate] = useLocation();
  const initialQ = new URLSearchParams(search).get("q") ?? "";
  const [q, setQ] = useState(initialQ);

  const results = useMemo(() => searchProducts(initialQ), [initialQ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/buscar?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <PageLayout>
      <section className="bg-brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Buscar produtos
          </h1>
          <form onSubmit={handleSubmit} className="mt-5 max-w-2xl relative">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Ração, alicate, tubo PVC, lâmpada..."
              className="w-full h-14 pl-14 pr-32 rounded-full bg-white text-foreground outline-none focus:ring-4 focus:ring-[hsl(var(--brand-orange))]/40 transition"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute right-28 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-muted inline-flex items-center justify-center"
                aria-label="Limpar"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 h-10 rounded-full bg-[hsl(var(--brand-orange))] text-white font-bold text-sm hover:bg-[hsl(var(--brand-orange))]/90 transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        {initialQ ? (
          <p className="text-sm text-muted-foreground mb-6">
            <span className="font-bold text-foreground">{results.length}</span>{" "}
            {results.length === 1 ? "resultado" : "resultados"} para
            <span className="text-[hsl(var(--brand-navy))] font-black"> “{initialQ}”</span>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground mb-6">
            Digite o que procura — buscamos por nome, marca e categoria.
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {results.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : initialQ ? (
          <div className="bg-white rounded-3xl border border-card-border p-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted inline-flex items-center justify-center mb-4">
              <SearchIcon className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-black text-[hsl(var(--brand-navy))]">
              Não encontramos esse produto no catálogo
            </h3>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Mas podemos ter na loja! Manda no WhatsApp que a gente confere pra você na hora.
            </p>
            <div className="mt-6">
              <WhatsappButton
                message={`Olá, Poupar Agro! Estou procurando por: ${initialQ}. Vocês têm?`}
                label="Perguntar no WhatsApp"
                size="md"
              />
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-black text-[hsl(var(--brand-navy))] mb-4">
              Ou explore por categoria
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/categoria/${c.slug}`}
                  className="p-5 rounded-2xl bg-white border border-card-border hover:border-[hsl(var(--brand-orange))] hover:shadow-md transition"
                >
                  <div className="font-black text-[hsl(var(--brand-navy))]">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.tagline}</div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <WhatsappButton
                message={whatsappGeneral()}
                label="Falar no WhatsApp"
                size="md"
              />
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
