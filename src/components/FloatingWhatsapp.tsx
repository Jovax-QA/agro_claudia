import { motion } from "framer-motion";
import { buildWhatsappUrl, whatsappGeneral } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/WhatsappButton";

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={buildWhatsappUrl(whatsappGeneral())}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[hsl(var(--whatsapp))] text-white shadow-xl flex items-center justify-center animate-pulse-ring"
      aria-label="Falar no WhatsApp"
    >
      <WhatsappIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </motion.a>
  );
}
