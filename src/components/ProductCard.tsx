import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { formatPrice, whatsappForProduct } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/WhatsappButton";
import { ProductImage } from "@/components/ProductImage";
import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  OFERTA: "bg-[hsl(var(--brand-orange))] text-white",
  "OFERTA DA SEMANA": "bg-[hsl(var(--brand-orange))] text-white",
  NOVO: "bg-[hsl(var(--brand-navy))] text-white",
  "MAIS VENDIDO": "bg-amber-400 text-amber-950",
};

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount =
    product.originalPrice && product.price && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative bg-white rounded-2xl border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <Link href={`/produto/${product.id}`} className="block">
        <ProductImage product={product} className="aspect-square w-full" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 max-w-[70%]">
          {product.badges.map((b) => (
            <span
              key={b}
              className={cn(
                "inline-flex items-center text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm w-fit",
                badgeStyles[b] ?? "bg-zinc-800 text-white",
              )}
            >
              {b}
            </span>
          ))}
        </div>

        {discount > 0 && (
          <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-[hsl(var(--brand-orange))] text-white flex items-center justify-center font-black shadow-md text-sm">
            -{discount}%
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2.5 sm:gap-3 min-w-0">
        <Link href={`/produto/${product.id}`} className="block min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--brand-orange))] truncate">
            {product.brand}
          </p>
          <h3 className="mt-1 font-bold text-xs sm:text-sm leading-snug text-foreground line-clamp-2 group-hover:text-[hsl(var(--brand-navy))] break-words">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto min-w-0">
          {product.price ? (
            <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
              {product.originalPrice && (
                <span className="text-[11px] sm:text-xs text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-lg sm:text-xl font-black text-[hsl(var(--brand-navy))] leading-none">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <p className="text-xs font-bold text-[hsl(var(--brand-navy))]">
              Consulte preço
            </p>
          )}
          <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1">
            no PIX / cartão. Consulte!
          </p>
        </div>

        <WhatsappButton
          message={whatsappForProduct(product)}
          label="Pedir no WhatsApp"
          size="sm"
          fullWidth
        />
      </div>
    </motion.div>
  );
}
