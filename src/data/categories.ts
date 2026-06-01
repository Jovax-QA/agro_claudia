export type Subcategory = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    id: "ferragens",
    slug: "ferragens",
    name: "Ferragens",
    tagline: "Ferramentas e materiais para qualquer obra",
    icon: "Wrench",
    image: "images/cat-ferragens.png",
    subcategories: [
      { id: "ferramentas-manuais", name: "Ferramentas Manuais" },
      { id: "ferramentas-eletricas", name: "Ferramentas Elétricas" },
      { id: "parafusos-fixadores", name: "Parafusos & Fixadores" },
      { id: "materiais-construcao", name: "Materiais de Construção" },
    ],
  },
  {
    id: "hidraulica",
    slug: "hidraulica",
    name: "Hidráulica",
    tagline: "Tudo para sua instalação de água",
    icon: "Droplets",
    image: "images/cat-hidraulica.png",
    subcategories: [
      { id: "tubos-conexoes", name: "Tubos & Conexões" },
      { id: "registros-valvulas", name: "Registros & Válvulas" },
      { id: "caixas-dagua", name: "Caixas d'água" },
      { id: "bombas", name: "Bombas" },
    ],
  },
  {
    id: "agropecuaria",
    slug: "agropecuaria",
    name: "Agropecuária",
    tagline: "Ração, sementes e itens para o campo e pet",
    icon: "Wheat",
    image: "images/cat-agropecuaria.png",
    subcategories: [
      { id: "racao-pet", name: "Ração Pet" },
      { id: "racao-aves", name: "Ração Aves & Pássaros" },
      { id: "suplementos", name: "Suplementos & Medicamentos" },
      { id: "cercas-telas", name: "Cercas & Telas" },
      { id: "sementes", name: "Sementes" },
    ],
  },
  {
    id: "eletrica",
    slug: "eletrica",
    name: "Elétrica",
    tagline: "Materiais elétricos com segurança",
    icon: "Zap",
    image: "images/cat-eletrica.png",
    subcategories: [
      { id: "fios-cabos", name: "Fios & Cabos" },
      { id: "tomadas-interruptores", name: "Tomadas & Interruptores" },
      { id: "lampadas", name: "Lâmpadas" },
      { id: "disjuntores", name: "Disjuntores" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
