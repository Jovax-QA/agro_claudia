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
          <WhatsappButton
            message={whatsappForProduct(product)}
            label="Pedir no WhatsApp"
            size="sm"
            fullWidth
          />
        </div>
      </div>
    </motion.div>
  );
}
