import type { Product } from "@/data/products";

export const WHATSAPP_NUMBER = "5548988042128";
export const WHATSAPP_DISPLAY = "(48) 98804-2128";
export const STORE_NAME = "Poupar Agro Comercial";
export const STORE_ADDRESS = "R. Fortaleza, 584 - Argentina, Criciúma/SC";
export const STORE_HOURS = [
  { days: "Segunda a Sexta", hours: "08:00 às 18:30" },
  { days: "Sábado", hours: "08:00 às 17:00" },
  { days: "Domingo", hours: "Fechado" },
];

function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsapp(message: string): void {
  window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
}

export function whatsappForProduct(product: Product): string {
  const lines = [
    `Olá, *${STORE_NAME}*!`,
    "",
    `Tenho interesse no produto:`,
    `*${product.name}*`,
    `Marca: ${product.brand}`,
    `Preço: ${formatPrice(product.price)}`,
    "",
    "Podem me ajudar com mais informações sobre disponibilidade e formas de pagamento?",
  ];
  return lines.join("\n");
}

export function whatsappGeneral(): string {
  return `Olá, *${STORE_NAME}*! Vim pelo catálogo online e gostaria de mais informações.`;
}

export function whatsappForCategory(categoryName: string): string {
  return `Olá, *${STORE_NAME}*! Tenho interesse em produtos da categoria *${categoryName}*. Podem me ajudar?`;
}

export { formatPrice };
