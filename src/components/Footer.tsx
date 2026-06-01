import { Link } from "wouter";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/Logo";
import { categories } from "@/data/categories";
import {
  STORE_ADDRESS,
  WHATSAPP_DISPLAY,
  STORE_HOURS,
  whatsappGeneral,
  buildWhatsappUrl,
} from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/WhatsappButton";

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-20 bg-[hsl(var(--brand-navy))] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo variant="dark" showTagline />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Tudo o que sua casa, sua obra e seu pet precisam, num só lugar — pertinho de você em Criciúma.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(var(--brand-orange))] inline-flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(var(--brand-orange))] inline-flex items-center justify-center transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsappUrl(whatsappGeneral())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(var(--whatsapp))] inline-flex items-center justify-center transition-colors"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase text-xs tracking-widest text-[hsl(var(--brand-orange))] mb-4">
            Categorias
          </h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/categoria/${c.slug}`}
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase text-xs tracking-widest text-[hsl(var(--brand-orange))] mb-4">
            Loja
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/80 hover:text-white">Início</Link>
            </li>
            <li>
              <Link href="/contato" className="text-white/80 hover:text-white">Contato</Link>
            </li>
            <li>
              <a
                href={buildWhatsappUrl(whatsappGeneral())}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Pedidos por WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-black uppercase text-xs tracking-widest text-[hsl(var(--brand-orange))] mb-4">
            Encontre a gente
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/80">
              <MapPin className="w-4 h-4 mt-0.5 text-[hsl(var(--brand-orange))] shrink-0" />
              <span>{STORE_ADDRESS}</span>
            </li>
            <li className="flex items-start gap-2.5 text-white/80">
              <Phone className="w-4 h-4 mt-0.5 text-[hsl(var(--brand-orange))] shrink-0" />
              <span>{WHATSAPP_DISPLAY}</span>
            </li>
            <li className="flex items-start gap-2.5 text-white/80">
              <Clock className="w-4 h-4 mt-0.5 text-[hsl(var(--brand-orange))] shrink-0" />
              <div className="space-y-0.5">
                {STORE_HOURS.map((h) => (
                  <div key={h.days}>
                    <span className="font-semibold text-white">{h.days}:</span> {h.hours}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Poupar Agro Comercial · Todos os direitos reservados</p>
          <p>Catálogo online · Atualizado constantemente</p>
        </div>
      </div>
    </footer>
  );
}
