import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  HandshakeIcon,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Logo } from "@/components/Logo";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { WhatsappButton } from "@/components/WhatsappButton";
import { categories } from "@/data/categories";
import {
  getFeaturedProducts,
  getPopularProducts,
} from "@/data/products";
import {
  STORE_ADDRESS,
  WHATSAPP_DISPLAY,
  STORE_HOURS,
  whatsappGeneral,
} from "@/lib/whatsapp";

const ASSET_BASE = import.meta.env.BASE_URL;

export function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const popular = getPopularProducts().slice(0, 5);

  return (
    <PageLayout>
      <Hero />
      <Trust />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <SectionHeading
          eyebrow="Categorias"
          title="Encontre o que precisa"
          subtitle="Da ferramenta ao alimento do pet — temos tudo, sem complicação."
        />
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {categories.map((c, i) => (
            <CategoryCard key={c.id} category={c} index={i} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <SectionHeading
          eyebrow="Em destaque"
          title="Os queridinhos da loja"
          subtitle="O que mais sai pela porta — escolhidos por quem vive nosso dia a dia."
        />
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <CallToActionBanner />

      {/* Popular */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <SectionHeading
          eyebrow="Mais vendidos"
          title="Top da casa"
          subtitle="Produtos que o pessoal de Criciúma já aprovou."
        />
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {popular.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Store info */}
      <StoreInfoSection />
    </PageLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-orange))]/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-navy))]/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14 md:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="dark" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 sm:mt-7 text-3xl sm:text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-balance"
          >
            Temos tudo
            <br />
            <span className="text-[hsl(var(--brand-orange))]">que você precisa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-xl text-balance"
          >
            Ferragens, hidráulica, agropecuária e elétrica num só lugar.
            Peça pelo WhatsApp e a gente separa pra você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
          >
            <WhatsappButton
              message={whatsappGeneral()}
              label="Pedir pelo WhatsApp"
              size="lg"
            />
            <Link
              href="/categoria/agropecuaria"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 font-bold text-sm transition"
            >
              Ver catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-sm sm:max-w-md mx-auto px-6 sm:px-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--brand-orange))]/40 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5">
              <img
                src={`${ASSET_BASE}images/hero-store.png`}
                alt="Loja Poupar Agro Comercial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 bg-white text-[hsl(var(--brand-navy))] p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 max-w-[180px] sm:max-w-[200px]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--whatsapp))]/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--whatsapp))]" />
              </div>
              <div className="min-w-0">
                <div className="font-black text-xs sm:text-sm leading-tight">Atendimento rápido</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">no WhatsApp</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: ShieldCheck, label: "Marcas confiáveis", sub: "Tigre, Bosch, Irwin, Philips e mais" },
    { icon: Truck, label: "Pertinho de você", sub: "Bairro Argentina · Criciúma" },
    { icon: HandshakeIcon, label: "Atendimento humano", sub: "Gente que entende do assunto" },
  ];

  return (
    <section className="bg-[hsl(var(--brand-cream))] border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[hsl(var(--brand-navy))]/8 text-[hsl(var(--brand-navy))] flex items-center justify-center shrink-0">
              <it.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[hsl(var(--brand-navy))]">
                {it.label}
              </div>
              <div className="text-[11px] text-muted-foreground">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToActionBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[hsl(var(--brand-navy))] text-white p-6 sm:p-8 md:p-12 grid md:grid-cols-[1fr_auto] items-center gap-5 sm:gap-6">
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[hsl(var(--brand-orange))]/30 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative min-w-0">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-orange))]">
            Faça seu pedido agora
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-balance">
            Não achou o produto? Manda no WhatsApp que a gente acha.
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
            Atendimento personalizado das 8h às 19h · Sáb. 8h–17h (sem fechar ao meio dia). Pedidos, dúvidas e orçamentos sem complicação.
          </p>
        </div>
        <WhatsappButton
          message={whatsappGeneral()}
          label="Falar agora"
          size="lg"
          className="relative shrink-0"
        />
      </div>
    </section>
  );
}

function StoreInfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <InfoCard icon={MapPin} title="Onde estamos">
          <p>{STORE_ADDRESS}</p>
          <p className="text-muted-foreground text-sm mt-1">
            Bem no coração do bairro Argentina.
          </p>
        </InfoCard>
        <InfoCard icon={Phone} title="Fale com a gente">
          <p>{WHATSAPP_DISPLAY}</p>
          <p className="text-muted-foreground text-sm mt-1">
            Atendemos por WhatsApp e na loja.
          </p>
        </InfoCard>
        <InfoCard icon={Clock} title="Horário de funcionamento">
          {STORE_HOURS.map((h) => (
            <p key={h.days} className="text-sm">
              <span className="font-bold">{h.days}:</span> {h.hours}
            </p>
          ))}
        </InfoCard>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-card-border p-6 hover:shadow-md transition"
    >
      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--brand-orange))]/15 text-[hsl(var(--brand-orange))] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-black text-lg text-[hsl(var(--brand-navy))]">{title}</h4>
      <div className="mt-2 text-foreground">{children}</div>
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-block text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-orange))]">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-black text-[hsl(var(--brand-navy))] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
