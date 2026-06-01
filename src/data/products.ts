export type ProductBadge = "OFERTA" | "NOVO" | "MAIS VENDIDO" | "OFERTA DA SEMANA";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageColor: string;
  specifications: { label: string; value: string }[];
  badges: ProductBadge[];
  featured: boolean;
  popular: boolean;
};

const I = (filename: string) => `images/${filename}`;

export const products: Product[] = [
  // ========== AGROPECUÁRIA ==========
  {
    id: "agro-001",
    name: "Ração SoftCat Select Gatos Adultos 10,1kg",
    brand: "SoftCat",
    category: "agropecuaria",
    subcategory: "racao-pet",
    description: "Ração super premium para gatos adultos, com salmão e arroz, controle de pelos e saúde urinária.",
    longDescription:
      "Alimento completo e balanceado de alta palatabilidade. Auxilia no controle da formação de bolas de pelo, fortalece o sistema imunológico e mantém a saúde do trato urinário do seu gato adulto.",
    price: 184.9,
    originalPrice: 219.9,
    image: I("prod-racao-cat.png"),
    imageColor: "from-amber-100 to-amber-200",
    specifications: [
      { label: "Peso", value: "10,1 kg" },
      { label: "Idade", value: "Adulto" },
      { label: "Sabor", value: "Salmão e Arroz" },
      { label: "Tipo", value: "Super Premium" },
    ],
    badges: ["OFERTA DA SEMANA"],
    featured: true,
    popular: true,
  },
  {
    id: "agro-002",
    name: "Ração Biotron Nativos Cães Adultos 15kg",
    brand: "Biotron",
    category: "agropecuaria",
    subcategory: "racao-pet",
    description: "Alimento natural com ingredientes selecionados, sem corantes artificiais. Para cães adultos de todos os portes.",
    price: 169.9,
    originalPrice: 199.9,
    image: I("prod-racao-dog.png"),
    imageColor: "from-orange-100 to-amber-200",
    specifications: [
      { label: "Peso", value: "15 kg" },
      { label: "Idade", value: "Adulto" },
      { label: "Porte", value: "Todos" },
      { label: "Tipo", value: "Premium Especial" },
    ],
    badges: ["OFERTA", "MAIS VENDIDO"],
    featured: true,
    popular: true,
  },
  {
    id: "agro-003",
    name: "Mistura para Pássaros GranNature 5kg",
    brand: "GranNature",
    category: "agropecuaria",
    subcategory: "racao-aves",
    description: "Mix completo de sementes selecionadas para periquitos, calopsitas e pássaros silvestres.",
    price: 64.9,
    image: I("prod-racao-aves.png"),
    imageColor: "from-yellow-100 to-orange-200",
    specifications: [
      { label: "Peso", value: "5 kg" },
      { label: "Indicação", value: "Pássaros silvestres" },
      { label: "Composição", value: "Mix de sementes" },
    ],
    badges: ["NOVO"],
    featured: true,
    popular: false,
  },
  {
    id: "agro-004",
    name: "Sementes de Pastagem Brachiária 1kg",
    brand: "Agrocomp",
    category: "agropecuaria",
    subcategory: "sementes",
    description: "Sementes para formação de pastagem de alta produtividade. Excelente para gado de corte e leite.",
    price: 32.9,
    image: I("prod-sementes.png"),
    imageColor: "from-lime-100 to-green-200",
    specifications: [
      { label: "Peso", value: "1 kg" },
      { label: "Tipo", value: "Brachiária Brizantha" },
      { label: "Pureza", value: "98%" },
    ],
    badges: [],
    featured: false,
    popular: true,
  },
  {
    id: "agro-005",
    name: "Tela Galvanizada para Cerca 1,5m x 25m",
    brand: "Belgo",
    category: "agropecuaria",
    subcategory: "cercas-telas",
    description: "Tela hexagonal galvanizada de alta resistência para cercas, viveiros e telhados.",
    price: 289.9,
    originalPrice: 339.9,
    image: I("prod-cerca.png"),
    imageColor: "from-slate-100 to-slate-300",
    specifications: [
      { label: "Altura", value: "1,5 m" },
      { label: "Comprimento", value: "25 m" },
      { label: "Material", value: "Aço galvanizado" },
      { label: "Malha", value: "1,5 polegadas" },
    ],
    badges: ["OFERTA"],
    featured: false,
    popular: false,
  },
  {
    id: "agro-006",
    name: "Suplemento Mineral para Bovinos 30kg",
    brand: "AgroMix",
    category: "agropecuaria",
    subcategory: "suplementos",
    description: "Suplemento mineral completo para bovinos em pasto. Aumenta ganho de peso e fertilidade.",
    price: 149.9,
    image: I("placeholder.png"),
    imageColor: "from-amber-100 to-yellow-300",
    specifications: [
      { label: "Peso", value: "30 kg" },
      { label: "Indicação", value: "Bovinos a pasto" },
      { label: "Fósforo", value: "60 g/kg" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },

  // ========== FERRAGENS ==========
  {
    id: "ferr-001",
    name: "Alicate de Pressão Vise-Grip 10\" Irwin",
    brand: "Irwin",
    category: "ferragens",
    subcategory: "ferramentas-manuais",
    description: "Alicate de pressão clássico Vise-Grip com ajuste rápido e mordente curvo. Profissional.",
    price: 129.9,
    originalPrice: 159.9,
    image: I("prod-alicate.png"),
    imageColor: "from-red-100 to-red-200",
    specifications: [
      { label: "Tamanho", value: '10"' },
      { label: "Material", value: "Aço carbono" },
      { label: "Tipo", value: "Mordente curvo" },
      { label: "Garantia", value: "Vitalícia" },
    ],
    badges: ["OFERTA", "MAIS VENDIDO"],
    featured: true,
    popular: true,
  },
  {
    id: "ferr-002",
    name: "Trena Irwin 5m com Trava",
    brand: "Irwin",
    category: "ferragens",
    subcategory: "ferramentas-manuais",
    description: "Trena profissional 5 metros com fita amarela de alta visibilidade, trava automática e clip.",
    price: 38.9,
    image: I("prod-trena.png"),
    imageColor: "from-yellow-100 to-yellow-300",
    specifications: [
      { label: "Comprimento", value: "5 m" },
      { label: "Largura da fita", value: "19 mm" },
      { label: "Trava", value: "Automática" },
    ],
    badges: ["MAIS VENDIDO"],
    featured: true,
    popular: true,
  },
  {
    id: "ferr-003",
    name: "Furadeira de Impacto 650W Bosch",
    brand: "Bosch",
    category: "ferragens",
    subcategory: "ferramentas-eletricas",
    description: "Furadeira de impacto profissional 650W com mandril de 13mm e velocidade variável.",
    price: 359.9,
    originalPrice: 429.9,
    image: I("prod-furadeira.png"),
    imageColor: "from-blue-100 to-blue-300",
    specifications: [
      { label: "Potência", value: "650 W" },
      { label: "Mandril", value: "13 mm" },
      { label: "Velocidade", value: "0–3000 rpm" },
      { label: "Tensão", value: "127 V" },
    ],
    badges: ["OFERTA DA SEMANA"],
    featured: true,
    popular: true,
  },
  {
    id: "ferr-004",
    name: "Caixa de Parafusos Sortidos 500 peças",
    brand: "Ciser",
    category: "ferragens",
    subcategory: "parafusos-fixadores",
    description: "Kit com 500 parafusos e buchas em diferentes tamanhos. Maleta organizadora inclusa.",
    price: 89.9,
    image: I("prod-parafusos.png"),
    imageColor: "from-zinc-100 to-zinc-300",
    specifications: [
      { label: "Quantidade", value: "500 peças" },
      { label: "Material", value: "Aço zincado" },
      { label: "Inclui", value: "Maleta organizadora" },
    ],
    badges: ["NOVO"],
    featured: false,
    popular: true,
  },
  {
    id: "ferr-005",
    name: "Cimento CP-II 50kg Votoran",
    brand: "Votoran",
    category: "ferragens",
    subcategory: "materiais-construcao",
    description: "Cimento Portland Composto CP-II-Z-32 indicado para concreto e argamassa em geral.",
    price: 39.9,
    image: I("placeholder.png"),
    imageColor: "from-stone-200 to-stone-400",
    specifications: [
      { label: "Peso", value: "50 kg" },
      { label: "Tipo", value: "CP-II-Z-32" },
      { label: "Aplicação", value: "Concreto e argamassa" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },
  {
    id: "ferr-006",
    name: "Martelo Unha 27mm Cabo Madeira",
    brand: "Tramontina",
    category: "ferragens",
    subcategory: "ferramentas-manuais",
    description: "Martelo unha clássico com cabo de madeira de eucalipto e cabeça forjada.",
    price: 42.9,
    image: I("placeholder.png"),
    imageColor: "from-amber-200 to-amber-400",
    specifications: [
      { label: "Peso", value: "27 mm / 500g" },
      { label: "Cabo", value: "Madeira de eucalipto" },
      { label: "Cabeça", value: "Aço forjado" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },

  // ========== HIDRÁULICA ==========
  {
    id: "hidr-001",
    name: "Tubo PVC Soldável 25mm 6m Tigre",
    brand: "Tigre",
    category: "hidraulica",
    subcategory: "tubos-conexoes",
    description: "Tubo de PVC soldável marrom 25mm para água fria. Barra de 6 metros.",
    price: 34.9,
    image: I("prod-tubo-pvc.png"),
    imageColor: "from-amber-50 to-amber-100",
    specifications: [
      { label: "Diâmetro", value: "25 mm" },
      { label: "Comprimento", value: "6 m" },
      { label: "Tipo", value: "Soldável" },
      { label: "Aplicação", value: "Água fria" },
    ],
    badges: ["MAIS VENDIDO"],
    featured: true,
    popular: true,
  },
  {
    id: "hidr-002",
    name: "Caixa d'água Polietileno 1000L Fortlev",
    brand: "Fortlev",
    category: "hidraulica",
    subcategory: "caixas-dagua",
    description: "Caixa d'água em polietileno azul de 1000 litros com tampa. Proteção UV e antibacteriana.",
    price: 549.9,
    originalPrice: 649.9,
    image: I("prod-caixa-agua.png"),
    imageColor: "from-blue-100 to-blue-300",
    specifications: [
      { label: "Capacidade", value: "1000 L" },
      { label: "Material", value: "Polietileno" },
      { label: "Cor", value: "Azul" },
      { label: "Inclui", value: "Tampa" },
    ],
    badges: ["OFERTA DA SEMANA"],
    featured: true,
    popular: true,
  },
  {
    id: "hidr-003",
    name: "Registro de Esfera 3/4\" Soldável",
    brand: "Deca",
    category: "hidraulica",
    subcategory: "registros-valvulas",
    description: "Registro de esfera soldável em PVC com manopla preta. Fechamento total da água.",
    price: 28.9,
    image: I("prod-registro.png"),
    imageColor: "from-slate-100 to-slate-300",
    specifications: [
      { label: "Diâmetro", value: '3/4"' },
      { label: "Tipo", value: "Esfera" },
      { label: "Conexão", value: "Soldável" },
    ],
    badges: [],
    featured: false,
    popular: true,
  },
  {
    id: "hidr-004",
    name: "Bomba d'água Periférica 1/2 CV Schneider",
    brand: "Schneider",
    category: "hidraulica",
    subcategory: "bombas",
    description: "Bomba d'água periférica monoestágio para uso residencial. Vazão de até 2400 L/h.",
    price: 459.9,
    image: I("placeholder.png"),
    imageColor: "from-red-100 to-red-300",
    specifications: [
      { label: "Potência", value: "1/2 CV" },
      { label: "Vazão", value: "Até 2400 L/h" },
      { label: "Tensão", value: "127/220 V" },
    ],
    badges: ["NOVO"],
    featured: false,
    popular: false,
  },
  {
    id: "hidr-005",
    name: "Joelho 90° PVC 25mm Tigre",
    brand: "Tigre",
    category: "hidraulica",
    subcategory: "tubos-conexoes",
    description: "Joelho de PVC soldável 90 graus 25mm para conexões hidráulicas.",
    price: 3.9,
    image: I("placeholder.png"),
    imageColor: "from-stone-100 to-stone-200",
    specifications: [
      { label: "Diâmetro", value: "25 mm" },
      { label: "Ângulo", value: "90°" },
      { label: "Tipo", value: "Soldável" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },
  {
    id: "hidr-006",
    name: "Adaptador Soldável Curto 25mm x 3/4\"",
    brand: "Tigre",
    category: "hidraulica",
    subcategory: "tubos-conexoes",
    description: "Adaptador soldável curto com rosca para união entre PVC e metal.",
    price: 4.5,
    image: I("placeholder.png"),
    imageColor: "from-stone-100 to-stone-200",
    specifications: [
      { label: "Diâmetro", value: '25mm x 3/4"' },
      { label: "Tipo", value: "Soldável com rosca" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },

  // ========== ELÉTRICA ==========
  {
    id: "elet-001",
    name: "Fio Flexível 2,5mm² 100m Azul",
    brand: "Sil",
    category: "eletrica",
    subcategory: "fios-cabos",
    description: "Cabo flexível 750V 2,5mm² com isolação antichama. Rolo de 100 metros.",
    price: 289.9,
    originalPrice: 339.9,
    image: I("prod-fio.png"),
    imageColor: "from-blue-100 to-blue-300",
    specifications: [
      { label: "Bitola", value: "2,5 mm²" },
      { label: "Comprimento", value: "100 m" },
      { label: "Tensão", value: "750 V" },
      { label: "Cor", value: "Azul" },
    ],
    badges: ["OFERTA"],
    featured: true,
    popular: true,
  },
  {
    id: "elet-002",
    name: "Tomada 2P+T 10A Branca Pial",
    brand: "Pial Plus+",
    category: "eletrica",
    subcategory: "tomadas-interruptores",
    description: "Tomada padrão brasileiro 2P+T 10A na cor branca. Compatível com plug NBR 14136.",
    price: 14.9,
    image: I("prod-tomada.png"),
    imageColor: "from-zinc-50 to-zinc-200",
    specifications: [
      { label: "Corrente", value: "10 A" },
      { label: "Padrão", value: "2P+T NBR 14136" },
      { label: "Cor", value: "Branca" },
    ],
    badges: [],
    featured: false,
    popular: true,
  },
  {
    id: "elet-003",
    name: "Lâmpada LED Bulbo 9W Branca Fria E27",
    brand: "Philips",
    category: "eletrica",
    subcategory: "lampadas",
    description: "Lâmpada LED bulbo 9W com 850 lumens, 6500K. Equivale a uma incandescente de 60W.",
    price: 12.9,
    originalPrice: 19.9,
    image: I("prod-lampada.png"),
    imageColor: "from-yellow-50 to-yellow-200",
    specifications: [
      { label: "Potência", value: "9 W" },
      { label: "Fluxo luminoso", value: "850 lm" },
      { label: "Cor", value: "6500K (Branca Fria)" },
      { label: "Soquete", value: "E27" },
    ],
    badges: ["OFERTA", "MAIS VENDIDO"],
    featured: true,
    popular: true,
  },
  {
    id: "elet-004",
    name: "Disjuntor Monopolar 25A Curva C Steck",
    brand: "Steck",
    category: "eletrica",
    subcategory: "disjuntores",
    description: "Disjuntor termomagnético monopolar 25A curva C para padrão DIN.",
    price: 19.9,
    image: I("placeholder.png"),
    imageColor: "from-zinc-100 to-zinc-300",
    specifications: [
      { label: "Corrente", value: "25 A" },
      { label: "Polos", value: "1" },
      { label: "Curva", value: "C" },
      { label: "Padrão", value: "DIN" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },
  {
    id: "elet-005",
    name: "Interruptor Simples 1 Tecla Branco",
    brand: "Pial Plus+",
    category: "eletrica",
    subcategory: "tomadas-interruptores",
    description: "Interruptor simples de 1 tecla 10A branco com placa 4x2 inclusa.",
    price: 11.9,
    image: I("placeholder.png"),
    imageColor: "from-zinc-50 to-zinc-200",
    specifications: [
      { label: "Tipo", value: "Simples 1 tecla" },
      { label: "Corrente", value: "10 A" },
      { label: "Cor", value: "Branca" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },
  {
    id: "elet-006",
    name: "Fita Isolante 20m Preta Antichama",
    brand: "3M",
    category: "eletrica",
    subcategory: "fios-cabos",
    description: "Fita isolante PVC 20 metros antichama, alta aderência.",
    price: 9.9,
    image: I("placeholder.png"),
    imageColor: "from-zinc-200 to-zinc-400",
    specifications: [
      { label: "Comprimento", value: "20 m" },
      { label: "Largura", value: "19 mm" },
      { label: "Cor", value: "Preta" },
    ],
    badges: [],
    featured: false,
    popular: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getOnSaleProducts(): Product[] {
  return products.filter(
    (p) => p.badges.includes("OFERTA") || p.badges.includes("OFERTA DA SEMANA"),
  );
}

export function getPopularProducts(): Product[] {
  return products.filter((p) => p.popular);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q),
  );
}
