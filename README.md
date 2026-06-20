# Poupar Agro Comercial

Site de e-commerce para produtos agropecuários, ferramentas, elétricos e mais.

## Deploy

Deploy automático via GitHub Actions para GitHub Pages em: https://jovax-qa.github.io/agro_claudia/

Projeto de e-commerce desenvolvido no Replit e adaptado para GitHub Pages.

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
