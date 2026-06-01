import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { WhatsappButton } from "@/components/WhatsappButton";
import {
  STORE_ADDRESS,
  WHATSAPP_DISPLAY,
  STORE_HOURS,
  whatsappGeneral,
} from "@/lib/whatsapp";

export function ContactPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14 md:py-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[11px] sm:text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-orange))]"
          >
            Fale conosco
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-balance"
          >
            Estamos pertinho de você
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl mx-auto"
          >
            No bairro Argentina, em Criciúma/SC. Venha pessoalmente ou peça pelo WhatsApp — atendimento de gente como a gente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <WhatsappButton message={whatsappGeneral()} label="Falar agora" size="lg" />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ContactCard icon={MapPin} title="Endereço">
            <p className="text-foreground font-semibold">{STORE_ADDRESS}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Estacionamento na frente da loja para quem chega de carro.
            </p>
          </ContactCard>

          <ContactCard icon={MessageCircle} title="WhatsApp">
            <p className="text-foreground font-semibold">{WHATSAPP_DISPLAY}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Respondemos rápido nos horários de atendimento.
            </p>
            <div className="mt-4">
              <WhatsappButton
                message={whatsappGeneral()}
                label="Iniciar conversa"
                size="sm"
              />
            </div>
          </ContactCard>

          <ContactCard icon={Clock} title="Horário">
            {STORE_HOURS.map((h) => (
              <div key={h.days} className="flex items-center justify-between py-1.5 border-b border-card-border last:border-0">
                <span className="font-bold text-[hsl(var(--brand-navy))] text-sm">{h.days}</span>
                <span className="text-sm text-muted-foreground">{h.hours}</span>
              </div>
            ))}
          </ContactCard>
        </div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-card-border shadow-sm aspect-[4/3]"
          >
            <iframe
              title="Mapa Poupar Agro Comercial"
              src="https://www.google.com/maps?q=Rua+Fortaleza,+584,+Argentina,+Cricium,+SC&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl bg-[hsl(var(--brand-navy))] text-white p-6 sm:p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-[hsl(var(--brand-orange))]/30 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Como prefere falar com a gente?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                Para pedidos, dúvidas, orçamentos ou para saber se temos um produto específico — escolha o canal mais prático pra você.
              </p>

              <div className="mt-7 space-y-3">
                <ContactRow
                  icon={MessageCircle}
                  label="WhatsApp (mais rápido)"
                  value={WHATSAPP_DISPLAY}
                  href={`https://wa.me/5548988042128`}
                />
                <ContactRow
                  icon={Phone}
                  label="Telefone"
                  value={WHATSAPP_DISPLAY}
                  href="tel:+5548988042128"
                />
                <ContactRow
                  icon={Mail}
                  label="E-mail"
                  value="contato@pouparagro.com.br"
                  href="mailto:contato@pouparagro.com.br"
                />
                <ContactRow
                  icon={MapPin}
                  label="Endereço"
                  value={STORE_ADDRESS}
                  href="https://www.google.com/maps?q=Rua+Fortaleza,+584,+Argentina,+Cricium,+SC"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactCard({
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
      className="bg-white rounded-2xl border border-card-border p-6 hover:shadow-md transition"
    >
      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--brand-orange))]/15 text-[hsl(var(--brand-orange))] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-black text-lg text-[hsl(var(--brand-navy))] mb-2">{title}</h4>
      <div>{children}</div>
    </motion.div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/10 transition"
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[hsl(var(--brand-orange))]" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-white/60 font-bold">
          {label}
        </div>
        <div className="font-bold">{value}</div>
      </div>
    </a>
  );
}
