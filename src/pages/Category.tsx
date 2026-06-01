import { useMemo, useState } from "react";
import { Link, useParams, useSearch } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { cn } from "@/lib/utils";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappForCategory } from "@/lib/whatsapp";
import NotFound from "./not-found";

type SortKey = "popular" | "price-asc" | "price-desc" | "name";

export function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const search = useSearch();
  const initialSub = new URLSearchParams(search).get("sub") ?? "all";

  const category = getCategoryBySlug(params.slug);
  const [activeSub, setActiveSub] = useState<string>(initialSub);
  const [sort, setSort] = useState<SortKey>("popular");
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allProducts = useMemo(
    () => (category ? getProductsByCategory(category.slug) : []),
    [category],
  );

  const maxAvailablePrice = useMemo(
    () => Math.max(100, ...allProducts.map((p) => p.price)),
    [allProducts],
  );

  const filtered = useMemo(() => {
    let items = allProducts;
    if (activeSub !== "all") {
      items = items.filter((p) => p.subcategory === activeSub);
    }
    items = items.filter((p) => p.price <= maxPrice);
    items = [...items].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "popular":
        default:
          return Number(b.popular) - Number(a.popular);
      }
    });
    return items;
  }, [allProducts, activeSub, maxPrice, sort]);

  if (!category) return <NotFound />;

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-14">
          <nav className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 text-white/70 mb-3 sm:mb-4 flex-wrap">
            <Link href="/" className="hover:text-white">Início</Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-white">Categoria</span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="text-[hsl(var(--brand-orange))] font-bold">{category.name}</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                {category.name}
              </h1>
              <p className="mt-2 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl">{category.tagline}</p>
            </div>
            <WhatsappButton
              message={whatsappForCategory(category.name)}
              label={`Pedir em ${category.name}`}
              size="md"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Subcategory chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin -mx-4 px-4 sm:mx-0 sm:px-0">
          <SubChip
            active={activeSub === "all"}
            onClick={() => setActiveSub("all")}
            label="Todos os produtos"
          />
          {category.subcategories.map((s) => (
            <SubChip
              key={s.id}
              active={activeSub === s.id}
              onClick={() => setActiveSub(s.id)}
              label={s.name}
            />
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Filters sidebar */}
          <aside className="hidden lg:block">
            <FiltersPanel
              sort={sort}
              setSort={setSort}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              maxAvailablePrice={maxAvailablePrice}
              category={category.slug}
            />
          </aside>

          <div className="min-w-0">
            <div className="flex items-center justify-between mb-4 sm:mb-5 gap-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "produto" : "produtos"}
              </p>
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full bg-muted text-xs sm:text-sm font-bold"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filtros
              </button>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="hidden lg:inline-block px-3 py-2 rounded-full bg-muted text-sm font-semibold border-0 outline-none cursor-pointer"
              >
                <option value="popular">Mais populares</option>
                <option value="name">Nome (A–Z)</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
              >
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <MobileFiltersDrawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        sort={sort}
        setSort={setSort}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        maxAvailablePrice={maxAvailablePrice}
        category={category.slug}
      />

      {/* Other categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-xl font-black text-[hsl(var(--brand-navy))] mb-4">
          Veja também
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.id}
                href={`/categoria/${c.slug}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-card-border hover:border-[hsl(var(--brand-orange))] hover:shadow-md transition group"
              >
                <span className="font-bold text-[hsl(var(--brand-navy))]">{c.name}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--brand-orange))]" />
              </Link>
            ))}
        </div>
      </section>
    </PageLayout>
  );
}

function SubChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border",
        active
          ? "bg-[hsl(var(--brand-navy))] text-white border-[hsl(var(--brand-navy))] shadow-md"
          : "bg-white text-[hsl(var(--brand-navy))] border-card-border hover:border-[hsl(var(--brand-orange))]",
      )}
    >
      {label}
    </button>
  );
}

type FilterProps = {
  sort: SortKey;
  setSort: (s: SortKey) => void;
  maxPrice: number;
  setMaxPrice: (n: number) => void;
  maxAvailablePrice: number;
  category: string;
};

function FiltersPanel({
  sort,
  setSort,
  maxPrice,
  setMaxPrice,
  maxAvailablePrice,
}: FilterProps) {
  return (
    <div className="bg-white rounded-2xl border border-card-border p-5 sticky top-32">
      <div className="flex items-center gap-2 mb-5">
        <SlidersHorizontal className="w-4 h-4 text-[hsl(var(--brand-orange))]" />
        <h3 className="font-black text-[hsl(var(--brand-navy))]">Filtros</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            Ordenar por
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="mt-2 w-full px-3 py-2 rounded-lg bg-muted text-sm font-semibold border-0 outline-none cursor-pointer"
          >
            <option value="popular">Mais populares</option>
            <option value="name">Nome (A–Z)</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            Preço máximo
          </label>
          <div className="mt-2 text-lg font-black text-[hsl(var(--brand-navy))]">
            até {maxPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </div>
          <input
            type="range"
            min={10}
            max={Math.ceil(maxAvailablePrice)}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-[hsl(var(--brand-orange))]"
          />
          <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
            <span>R$ 10</span>
            <span>R$ {Math.ceil(maxAvailablePrice).toLocaleString("pt-BR")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFiltersDrawer({
  open,
  onClose,
  ...props
}: FilterProps & { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white rounded-t-3xl shadow-2xl transition-transform",
          open ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-card-border">
          <h3 className="font-black text-[hsl(var(--brand-navy))]">Filtros</h3>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-muted inline-flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4">
          <FiltersPanel {...props} />
        </div>
      </div>
    </>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-card-border p-10 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-muted inline-flex items-center justify-center mb-4">
        <SlidersHorizontal className="w-7 h-7 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-black text-[hsl(var(--brand-navy))]">
        Nenhum produto encontrado
      </h3>
      <p className="mt-2 text-muted-foreground">
        Tente ajustar os filtros ou a faixa de preço.
      </p>
    </div>
  );
}
