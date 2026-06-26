---
agente: Orquestrador
fluxo: Teste Completo AgroClaudia
data: 2026-06-22
missao: Planejar e coordenar testes abrangentes do e-commerce AgroClaudia
---

## Contexto

Projeto: AgroClaudia - Poupar Agro Comercial
URL: https://jovax-qa.github.io/agro_claudia/
Cliente: Poupar Agro Comercial (Claudia)
Tipo: E-commerce de produtos agropecuários, ferramentas, elétricos e pet

## Objetivo da Missão

Executar testes abrangentes do sistema de e-commerce AgroClaudia, cobrindo:
- Carregamento de imagens
- Funcionalidade de filtros e busca
- Transições e animações
- Interações de botões
- Paginação
- Comportamento de scroll
- Fluxos de usuário e jornada
- Integração com WhatsApp
- Responsividade
- Performance

## Distribuição de Missões

### Explorer Agent
**Objetivo**: Explorar o site como um usuário novo, descobrindo caminhos e comportamentos.
**Foco**:
- Navegação natural sem roteiro
- Descoberta de categorias e produtos
- Identificação de estados inesperados
- Mapeamento de fluxos possíveis

### Validator Agent
**Objetivo**: Validar critérios de aceite e comportamentos esperados.
**Foco**:
- Funcionalidades principais (busca, filtros, navegação)
- Integração com WhatsApp
- Informações de contato
- Consistência de dados

### EdgeCaser Agent
**Objetivo**: Testar limites e casos extremos.
**Foco**:
- Campos vazios e inválidos em busca
- Navegação com URLs inválidas
- Refresh no meio de fluxos
- Dispositivos diferentes (mobile, tablet)
- Conexão lenta simulada

### Asserter Agent
**Objetivo**: Analisar achados e gerar relatório final com classificação de severidade.
**Foco**:
- Consolidar registros dos outros agentes
- Classificar problemas por severidade
- Gerar relatório executivo
- Identificar dependências pendentes

## Heurísticas Específicas

### E-commerce
- Imagens de produtos carregam corretamente?
- Preços são exibidos corretamente?
- Categorias são claras e navegáveis?
- Busca retorna resultados relevantes?

### WhatsApp Integration
- Botão de WhatsApp é visível e acessível?
- Link abre corretamente no WhatsApp?
- Mensagem pré-preenchida faz sentido?
- Funciona em mobile e desktop?

### Performance
- Carregamento inicial é aceitável?
- Transições são suaves?
- Não há travamentos?
- Imagens são otimizadas?

## Critérios de Sucesso

- Todos os agentes completarem suas sessões
- Relatório final gerado com achados classificados
- Dependências documentadas em tabela
- Evidências coletadas (screenshots/logs)
- Plano de ação para correções

## Próximos Passos

1. Iniciar sessão do Explorer Agent
2. Iniciar sessão do Validator Agent
3. Iniciar sessão do EdgeCaser Agent
4. Consolidar achados no Asserter Agent
5. Gerar relatório final
6. Documentar dependências pendentes
