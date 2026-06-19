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
    id: "agropecuaria",
    slug: "agropecuaria",
    name: "Agropecuária e Jardinagem",
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
    id: "animais",
    slug: "animais",
    name: "Animais",
    tagline: "Produtos e cuidados para seus animais",
    icon: "PawPrint",
    image: "images/cat-agropecuaria.png",
    subcategories: [
      { id: "racao-cachorros", name: "Ração Cachorros" },
      { id: "racao-gatos", name: "Ração Gatos" },
      { id: "racao-aves", name: "Ração Aves" },
      { id: "acessorios", name: "Acessórios" },
      { id: "medicamentos", name: "Medicamentos" },
    ],
  },
  {
    id: "controle-pragas",
    slug: "controle-pragas",
    name: "Controle de Pragas",
    tagline: "Produtos para proteção contra pragas",
    icon: "Bug",
    image: "images/cat-agropecuaria.png",
    subcategories: [
      { id: "inseticidas", name: "Inseticidas" },
      { id: "herbicidas", name: "Herbicidas" },
      { id: "fungicidas", name: "Fungicidas" },
      { id: "repelentes", name: "Repelentes" },
      { id: "armadilhas", name: "Armadilhas" },
    ],
  },
  {
    id: "eletrica",
    slug: "eletrica",
    name: "Elétrica e Hidráulica",
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
  {
    id: "ferragens",
    slug: "ferragens",
    name: "Ferragens e Ferramentas",
    tagline: "Ferramentas e materiais para qualquer obra",
    icon: "Wrench",
    image: "images/cat-ferragens.png",
    subcategories: [
      { id: "ferramentas-manuais", name: "Ferramentas Manuais" },
      { id: "ferramentas-eletricas", name: "Ferramentas Elétricas" },
      { id: "parafusos-fixadores", name: "Parafusos & Fixadores" },
      { id: "materiais-construcao", name: "Materiais de Construção" },
      { id: "tubos-conexoes", name: "Tubos & Conexões" },
      { id: "registros-valvulas", name: "Registros & Válvulas" },
      { id: "caixas-dagua", name: "Caixas d'água" },
      { id: "bombas", name: "Bombas" },
    ],
  },
  
  {
    id: "pet-shop",
    slug: "pet-shop",
    name: "Pet Shop",
    tagline: "Tudo para o bem-estar do seu pet",
    icon: "Heart",
    image: "images/cat-agropecuaria.png",
    subcategories: [
      { id: "racao", name: "Ração" },
      { id: "brinquedos", name: "Brinquedos" },
      { id: "acessorios", name: "Acessórios" },
      { id: "higiene", name: "Higiene" },
      { id: "cama-casinhas", name: "Camas e Casinhas" },
    ],
  },
  
  
  
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
