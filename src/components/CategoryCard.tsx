import { Link } from "wouter";
import { motion } from "framer-motion";
import { Wrench, Droplets, Wheat, Zap, ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

const ASSET_BASE = import.meta.env.BASE_URL;

const iconMap = {
  Wrench,
  Droplets,
  Wheat,
  Zap,
} as const;

type CategoryCardProps = {
  category: Category;
  index?: number;
  variant?: "tile" | "card";
};

export function CategoryCard({ category, index = 0, variant = "card" }: CategoryCardProps) {
  const Icon = (iconMap[category.icon as keyof typeof iconMap] ?? Wrench);

  if (variant === "tile") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Link
          href={`/categoria/${category.slug}`}
          className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-card-border hover:border-[hsl(var(--brand-orange))] hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand-navy))] flex items-center justify-center text-white shrink-0 group-hover:bg-[hsl(var(--brand-orange))] transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-bold text-sm text-[hsl(var(--brand-navy))]">
            {category.name}
          </span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/categoria/${category.slug}`}
        className="group relative block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      >
        <div className="aspect-[4/3] overflow-hidden bg-[hsl(var(--brand-navy))]/10 relative">
          <img
            src={`${ASSET_BASE}${category.image}`}
            alt={category.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy))] via-[hsl(var(--brand-navy))]/40 to-transparent" />
        </div>

        <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end text-white">
          <div className={cn(
            "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 backdrop-blur",
            "bg-[hsl(var(--brand-orange))] shadow-lg",
          )}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-2xl font-black tracking-tight leading-tight">{category.name}</h3>
          <p className="hidden sm:block text-sm text-white/80 mt-1 line-clamp-2">{category.tagline}</p>
          <div className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-90 group-hover:opacity-100 group-hover:gap-3 transition-all">
            <span>Ver produtos</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
