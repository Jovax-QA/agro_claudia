# AgroClaudia - Poupar Agro Comercial

## Sobre o Projeto

Site de e-commerce para a **Poupar Agro Comercial**, loja de produtos agropecuários, ferramentas, elétricos e mais, localizada em Criciúma/SC.

### Cliente

- **Nome da Loja**: Poupar Agro Comercial
- **Proprietária**: Claudia
- **Endereço**: Rua Fortaleza, 584, Bairro Argentina, Criciúma/SC
- **Telefone/WhatsApp**: (48) 98804-2128
- **E-mail**: contato@pouparagro.com.br
- **Tempo de atuação**: 20+ anos em Criciúma

### O que foi desenvolvido

E-commerce completo com catálogo de produtos, categorias, busca, integração com WhatsApp e informações de contato da loja. O projeto foi desenvolvido para digitalizar a presença da Poupar Agro Comercial, permitindo que clientes visualizem produtos e façam pedidos diretamente pelo WhatsApp.

### Funcionalidades

- Catálogo de produtos com mais de 1.500 itens
- 4 categorias principais: Agropecuária, Elétrica, Ferragens, Pet
- Busca de produtos
- Páginas de categoria e produto detalhadas
- Integração direta com WhatsApp para pedidos
- Informações completas de contato e localização
- Design responsivo (mobile, tablet, desktop)
- Animações suaves e modernas

## Deploy

**URL em Produção**: https://jovax-qa.github.io/agro_claudia/

Deploy automático via GitHub Actions para GitHub Pages.

## Configurações para GitHub Pages

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar localmente

```bash
npm run dev
```

### 3. Build para GitHub Pages

```bash
npm run build:gh
```

## Configuração no GitHub

1. **Vá para Settings > Pages** no seu repositório
2. Em "Build and deployment", selecione **GitHub Actions**
3. O workflow já está configurado em `.github/workflows/deploy.yml`

## O que foi ajustado do Replit para GitHub Pages

- **package.json**: Todas dependências do shadcn/ui + Radix + extras adicionadas
- **vite.config.ts**: Configuração standalone (sem dependências externas do Replit workspace)
- **tsconfig.json**: Removido extends de arquivos externos
- **base path**: Configurado como `/poupar-agro/` para GitHub Pages
- **404.html**: Adicionado para SPA routing funcionar

## Estrutura do projeto

- `src/App.tsx` - Roteamento principal
- `src/pages/` - Páginas (Home, Category, Product, Contact, Search)
- `src/components/` - Componentes reutilizáveis
- `src/components/ui/` - Componentes shadcn/ui
- `src/data/` - Dados dos produtos

## Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- Wouter (router)
- TanStack Query
- Recharts
