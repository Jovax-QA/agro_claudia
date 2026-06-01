import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Truck, Tag, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { WhatsappButton } from "@/components/WhatsappButton";
import {
  getProductById,
  getRelatedProducts,
} from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { formatPrice, whatsappForProduct } from "@/lib/whatsapp";
import NotFound from "./not-found";
import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  OFERTA: "bg-[hsl(var(--brand-orange))] text-white",
  "OFERTA DA SEMANA": "bg-[hsl(var(--brand-orange))] text-white",
  NOVO: "bg-[hsl(var(--brand-navy))] text-white",
  "MAIS VENDIDO": "bg-amber-400 text-amber-950",
};

export function ProductPage() {
  const params = useParams<{ id: string }>();
  const product = getProductById(params.id);

  if (!product) return <NotFound />;

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6">
        <nav className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-[hsl(var(--brand-navy))]">Início</Link>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          {category && (
            <>
              <Link
                href={`/categoria/${category.slug}`}
                className="hover:text-[hsl(var(--brand-navy))]"
              >
                {category.name}
              </Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </>
          )}
          <span className="text-[hsl(var(--brand-navy))] font-bold line-clamp-1">
            {product.name}
          </span>
        </nav>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl border border-card-border shadow-sm overflow-hidden">
              <ProductImage product={product} className="aspect-square w-full" />

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex flex-col gap-1.5 sm:gap-2">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className={cn(
                      "inline-flex items-center text-[10px] sm:text-xs font-black tracking-wider uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm",
                      badgeStyles[b] ?? "bg-zinc-800 text-white",
                    )}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {discount > 0 && (
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[hsl(var(--brand-orange))] text-white flex items-center justify-center font-black shadow-lg text-sm sm:text-lg">
                  -{discount}%
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-orange))]">
              {product.brand}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-[hsl(var(--brand-navy))] tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="mt-4 sm:mt-5 flex items-baseline gap-2 sm:gap-3 flex-wrap">
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[hsl(var(--brand-navy))]">
                {formatPrice(product.price)}
              </span>
              {discount > 0 && (
                <span className="text-xs sm:text-sm font-black text-[hsl(var(--brand-orange))] bg-[hsl(var(--brand-orange))]/10 px-2.5 py-1 rounded-full">
                  Economiza {formatPrice(product.originalPrice! - product.price)}
                </span>
              )}
            </div>

            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              ou consulte condições no PIX e cartão pelo WhatsApp.
            </p>

            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              <WhatsappButton
                message={whatsappForProduct(product)}
                label="Comprar pelo WhatsApp"
                size="lg"
                className="flex-1 sm:flex-none"
              />
              <a
                href={`tel:+${5548988042128}`}
                className="inline-flex items-center justify-center px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border-2 border-[hsl(var(--brand-navy))] text-[hsl(var(--brand-navy))] font-bold text-xs sm:text-sm hover:bg-[hsl(var(--brand-navy))]/5 transition"
              >
                Ligar
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: "Retire na loja" },
                { icon: ShieldCheck, label: "Marca confiável" },
                { icon: Tag, label: "Melhor preço" },
              ].map((it) => (
                <div
                  key={it.label}
                  className="flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-muted/50"
                >
                  <it.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                  <span className="text-[11px] font-bold text-[hsl(var(--brand-navy))] leading-tight">
                    {it.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-card-border pt-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--brand-navy))]">
                Descrição
              </h2>
              <p className="mt-3 text-foreground leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            {product.specifications.length > 0 && (
              <div className="mt-8 border-t border-card-border pt-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--brand-navy))]">
                  Especificações
                </h2>
                <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specifications.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-muted/40"
                    >
                      <dt className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                        {s.label}
                      </dt>
                      <dd className="text-sm font-bold text-[hsl(var(--brand-navy))]">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-card-border">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-[hsl(var(--brand-navy))] tracking-tight">
              Você também pode gostar
            </h2>
            {category && (
              <Link
                href={`/categoria/${category.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-navy))] hover:text-[hsl(var(--brand-orange))]"
              >
                Ver todos <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
