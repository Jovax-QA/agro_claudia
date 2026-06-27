---
agente: EdgeCaser
fluxo: Testes de Edge Case AgroClaudia
data: 2026-06-22
missao: Testar limites, bordas e casos extremos do sistema
---

## Contexto

URL: https://jovax-qa.github.io/agro_claudia/
Persona: Usuário tentando quebrar o sistema
Abordagem: Testar cenários extremos e incomuns

## Cenários de Edge Case a Testar

### 1. Busca
- [ ] Busca com campo vazio
- [ ] Busca com espaços em branco
- [ ] Busca com caracteres especiais (@#$%)
- [ ] Busca com termo muito longo (> 100 caracteres)
- [ ] Busca com emoji
- [ ] Busca com termo inexistente
- [ ] Busca com termo parcial
- [ ] Múltiplas buscas rápidas consecutivas

### 2. Navegação
- [ ] Acessar URL inválida (ex: /pagina-inexistente)
- [ ] Acessar URL com parâmetros inválidos
- [ ] Navegar para trás no meio de um fluxo
- [ ] Refresh no meio de carregamento
- [ ] Abrir múltiplas abas do mesmo site
- [ ] Navegar com botão direito -> abrir em nova aba

### 3. Produtos
- [ ] Clicar rapidamente em múltiplos produtos
- [ ] Clicar no mesmo produto múltiplas vezes
- [ ] Acessar produto com ID inválido na URL
- [ ] Acessar categoria vazia (se existir)

### 4. WhatsApp
- [ ] Clicar múltiplas vezes no botão WhatsApp
- [ ] Abrir WhatsApp em dispositivo sem WhatsApp instalado
- [ ] Testar com número de telefone formatado errado (se aplicável)

### 5. Responsividade
- [ ] Redimensionar janela rapidamente
- [ ] Rotacionar dispositivo (mobile)
- [ ] Zoom extremo (muito grande ou muito pequeno)
- [ ] Testar em orientação paisagem vs retrato

### 6. Performance
- [ ] Simular conexão lenta (network throttling)
- [ ] Deixar aba aberta por longo período
- [ ] Navegar com muitos tabs abertos
- [ ] Testar com CPU throttling

### 7. Scroll
- [ ] Scroll muito rápido
- [ ] Scroll até o fim e voltar
- [ ] Scroll no meio de carregamento
- [ ] Scroll com trackpad vs mouse

### 8. Interações
- [ ] Hover em todos os elementos interativos
- [ ] Clique duplo em botões
- [ ] Clique direito em elementos
- [ ] Arrastar elementos (se aplicável)

## Registro da Sessão

### Edge Case 1: Busca com campo vazio
**Data/Hora**: [PREENCHER DURANTE EXECUÇÃO]
**Passos para reproduzir**: 
**Comportamento observado**: 
**Comportamento esperado**: 
**Sistema quebrou?**: SIM/NÃO
**Sistema se recuperou?**: SIM/NÃO
**Evidência**: 

### Edge Case 2: Acessar URL inválida
**Data/Hora**: [PREENCHER DURANTE EXECUÇÃO]
**Passos para reproduzir**: 
**Comportamento observado**: 
**Comportamento esperado**: 
**Sistema quebrou?**: SIM/NÃO
**Sistema se recuperou?**: SIM/NÃO
**Evidência**: 

### Edge Case 3: Refresh no meio de carregamento
**Data/Hora**: [PREENCHER DURANTE EXECUÇÃO]
**Passos para reproduzir**: 
**Comportamento observado**: 
**Comportamento esperado**: 
**Sistema quebrou?**: SIM/NÃO
**Sistema se recuperou?**: SIM/NÃO
**Evidência**: 

[Continuar para outros edge cases...]

## Conclusão

**Total testado**: 0/0
**Quebrou o sistema**: 0
**Sistema se recuperou**: 0
**Comportamento inesperado mas não quebrou**: 0

**Problemas críticos encontrados**:
- 
- 

**Problemas não críticos encontrados**:
- 
- 

**Comportamentos interessantes (não bugs)**:
- 
- 

**Sistema é robusto contra**: 
- 
- 

**Sistema é vulnerável a**:
- 
- 
