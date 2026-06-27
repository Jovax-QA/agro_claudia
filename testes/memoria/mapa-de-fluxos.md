# Mapa de Fluxos - AgroClaudia

## Fluxos Mapeados

### Fluxo 1: Homepage → Categoria
**Descrição**: Usuário acessa a homepage e navega para uma categoria específica
**Caminho**: `/` → `/categoria/:slug`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 2: Homepage → Produto
**Descrição**: Usuário acessa a homepage e clica diretamente em um produto em destaque
**Caminho**: `/` → `/produto/:id`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 3: Categoria → Produto
**Descrição**: Usuário navega por categoria e seleciona um produto
**Caminho**: `/categoria/:slug` → `/produto/:id`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 4: Busca → Produto
**Descrição**: Usuário realiza busca e seleciona um produto dos resultados
**Caminho**: `/buscar` → `/produto/:id`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 5: Homepage → Contato
**Descrição**: Usuário acessa página de contato
**Caminho**: `/` → `/contato`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 6: Produto → WhatsApp
**Descrição**: Usuário clica no botão de WhatsApp na página de produto
**Caminho**: `/produto/:id` → `wa.me/...`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 7: Homepage → WhatsApp (Geral)
**Descrição**: Usuário clica no botão de WhatsApp na homepage
**Caminho**: `/` → `wa.me/...`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

### Fluxo 8: Contato → WhatsApp
**Descrição**: Usuário clica no botão de WhatsApp na página de contato
**Caminho**: `/contato` → `wa.me/...`
**Estado**: [MAPEADO/NÃO MAPEADO]
**Data do mapeamento**: 
**Observações**: 

## Estados de Tela Identificados

### Homepage
**URL**: `/`
**Elementos principais**:
- Hero section com CTA
- Cards de categorias
- Produtos em destaque
- Banner CTA
- Produtos mais vendidos
- Informações da loja

### Página de Categoria
**URL**: `/categoria/:slug`
**Elementos principais**:
- Título da categoria
- Grid de produtos
- Filtros (se existirem)

### Página de Produto
**URL**: `/produto/:id`
**Elementos principais**:
- Imagem do produto
- Nome do produto
- Preço
- Marca
- Descrição
- Botão WhatsApp

### Página de Busca
**URL**: `/buscar`
**Elementos principais**:
- Campo de busca
- Resultados da busca

### Página de Contato
**URL**: `/contato`
**Elementos principais**:
- Endereço
- WhatsApp
- Horário de funcionamento
- Mapa

### Página 404
**URL**: [qualquer URL inválida]
**Elementos principais**:
- Mensagem de erro
- Link para homepage

## Padrões de Navegação

### Breadcrumbs
[EXISTE/NÃO EXISTE]
**Funcionamento**: 

### Menu de Navegação
[EXISTE/NÃO EXISTE]
**Funcionamento**: 

### Scroll to Top
[EXISTE/NÃO EXISTE]
**Funcionamento**: 

### Back Button
[EXISTE/NÃO EXISTE]
**Funcionamento**: 

## Fluxos Não Mapeados

- 
- 
- 

## Fluxos que Precisam de Investigação Adicional

- 
- 
- 
