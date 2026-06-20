import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

const ASSET_BASE = import.meta.env.BASE_URL;

type ProductImageProps = {
  product: Product;
  className?: string;
  imgClassName?: string;
};

export function ProductImage({ product, className, imgClassName }: ProductImageProps) {
  const isExternalUrl = product.image.startsWith('http');
  const initials = getInitials(product.brand);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        product.imageColor,
        className,
      )}
    >
      {isExternalUrl || product.image !== 'placeholder.png' ? (
        <img
          src={isExternalUrl ? product.image : `${ASSET_BASE}${product.image}`}
          alt={product.name}
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110",
            imgClassName,
          )}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.parentElement?.querySelector('[data-placeholder]');
            if (placeholder) {
              (placeholder as HTMLElement).style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div data-placeholder className={cn(isExternalUrl || product.image !== 'placeholder.png' ? 'hidden' : 'flex')} style={{ display: isExternalUrl || product.image !== 'placeholder.png' ? 'none' : 'flex' }}>
        <PlaceholderProduct initials={initials} brand={product.brand} />
      </div>
    </div>
  );
}

function PlaceholderProduct({
  initials,
  brand,
}: {
  initials: string;
  brand: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-[hsl(var(--brand-navy))]/70">
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur shadow-sm flex items-center justify-center">
          <span className="font-black text-3xl tracking-tight">{initials}</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[hsl(var(--brand-orange))] shadow-md" />
      </div>
      <span className="mt-3 text-[10px] font-bold uppercase tracking-widest">{brand}</span>
    </div>
  );
}

function getInitials(brand: string): string {
  const words = brand.replace(/[^A-Za-z0-9 ]/g, "").trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return brand.slice(0, 2).toUpperCase();
}
