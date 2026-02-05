# 🎨 Guia de Design - Cool Ideas Landing Page
## Especificações para WordPress + Elementor Free

---

## 📋 ÍNDICE
1. [Paleta de Cores](#paleta-de-cores)
2. [Tipografia](#tipografia)
3. [Espaçamentos](#espaçamentos)
4. [Header](#header)
5. [Hero Section](#hero-section)
6. [Serviços](#serviços)
7. [Resultados](#resultados)
8. [Depoimentos](#depoimentos)
9. [Formulário de Contato](#formulário-de-contato)
10. [Footer](#footer)
11. [Botão WhatsApp](#botão-whatsapp)
12. [Responsividade](#responsividade)

---

## 🎨 PALETA DE CORES

### Cores Principais
| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Cool Teal (Primary)** | `#2A9D8F` | rgb(42, 157, 143) | Botões, links, destaques |
| **Cool Orange** | `#F97316` | rgb(249, 115, 22) | Gradientes, CTAs principais |
| **Cool Yellow** | `#FACC15` | rgb(250, 204, 21) | Gradientes (junto com laranja) |
| **Cool Dark** | `#141D2B` | rgb(20, 29, 43) | Fundos escuros, textos |
| **Cool Navy** | `#1A2744` | rgb(26, 39, 68) | Fundos secundários escuros |

### Cores de Texto
| Nome | HEX | Opacidade | Uso |
|------|-----|-----------|-----|
| Branco | `#FFFFFF` | 100% | Texto em fundo escuro |
| Branco Suave | `#FFFFFF` | 80% | Texto secundário em fundo escuro |
| Branco Muted | `#FFFFFF` | 60% | Texto terciário em fundo escuro |
| Dark Text | `#1E2A3B` | 100% | Texto em fundo claro |
| Gray Text | `#64748B` | 100% | Texto secundário em fundo claro |

### Gradientes
```css
/* Gradiente Laranja-Amarelo (CTAs principais) */
background: linear-gradient(135deg, #F97316 0%, #FACC15 100%);

/* Gradiente Hero (fundo escuro) */
background: linear-gradient(180deg, #141D2B 0%, #1A2744 100%);

/* Gradiente Teal (botões secundários) */
background: linear-gradient(135deg, #2A9D8F 0%, #34B3A4 100%);
```

### No Elementor:
- Vá em **Site Settings > Global Colors**
- Adicione cada cor como cor global
- Use os gradientes em backgrounds de seções

---

## 🔤 TIPOGRAFIA

### Fonte Principal
**Plus Jakarta Sans** (Google Fonts)

```
Link: https://fonts.google.com/specimen/Plus+Jakarta+Sans
```

### Configurações no Elementor:
1. Vá em **Site Settings > Typography**
2. Adicione Plus Jakarta Sans como fonte global

### Hierarquia de Títulos

| Elemento | Tamanho Desktop | Tamanho Mobile | Peso | Line Height |
|----------|-----------------|----------------|------|-------------|
| H1 (Hero) | 60px | 36px | 800 (ExtraBold) | 1.1 |
| H2 (Seções) | 48px | 32px | 800 (ExtraBold) | 1.2 |
| H3 (Cards) | 24px | 20px | 700 (Bold) | 1.3 |
| H4 (Subtítulos) | 20px | 18px | 600 (SemiBold) | 1.4 |
| Corpo | 18px | 16px | 400 (Regular) | 1.6 |
| Small | 14px | 14px | 500 (Medium) | 1.5 |

### Logo
```
COOL (branco, ExtraBold) + ideas (gradiente laranja-amarelo, ExtraBold)
Tamanho: 24px
```

---

## 📏 ESPAÇAMENTOS

### Container
- **Largura máxima:** 1280px
- **Padding lateral:** 24px (mobile) / 48px (desktop)

### Seções
| Elemento | Valor |
|----------|-------|
| Padding vertical seção | 80px (desktop) / 60px (mobile) |
| Gap entre elementos | 24px - 48px |
| Gap entre cards | 24px |
| Border radius cards | 16px |
| Border radius botões | 12px |

### Grid
- **Desktop:** 12 colunas
- **Tablet:** 6 colunas
- **Mobile:** 1 coluna

---

## 🔝 HEADER

### Especificações
- **Altura:** 80px
- **Background inicial:** Transparente
- **Background ao scroll:** `#141D2B` com 95% opacidade + blur
- **Position:** Fixed

### Estrutura (Elementor)
```
[Container Flex - Space Between]
├── [Logo] - Esquerda
├── [Menu Nav] - Centro (hidden mobile)
│   ├── Serviços
│   ├── Resultados
│   ├── Depoimentos
│   └── Contato
└── [Botão CTA] - Direita
    └── "Fale Conosco" (gradiente teal)
```

### Botão CTA Header
- **Background:** Gradiente Teal
- **Cor texto:** Branco
- **Padding:** 12px 24px
- **Border radius:** 8px
- **Box shadow:** `0 4px 20px rgba(42, 157, 143, 0.5)`

---

## 🦸 HERO SECTION

### Layout
- **Altura mínima:** 100vh
- **Background:** Gradiente Hero (Dark → Navy)
- **Grid:** 2 colunas (50/50) no desktop

### Coluna Esquerda
1. **Badge de localização**
   - Background: `rgba(255,255,255,0.1)`
   - Backdrop blur: 8px
   - Border radius: 50px (pill)
   - Padding: 8px 16px
   - Texto: "Desde 2017 em Itajaí - SC"
   - Indicador verde pulsante (8px círculo)

2. **Título Principal**
   ```
   Transformamos
   ideias em resultados (gradiente laranja)
   para sua marca
   ```
   - Tamanho: 60px desktop / 36px mobile
   - Line height: 1.1

3. **Subtítulo**
   - Cor: Branco 70%
   - Tamanho: 20px
   - Max-width: 500px

4. **Botões**
   - **CTA Principal:** "Quero mais clientes"
     - Gradiente laranja-amarelo
     - Ícone seta à direita
     - Padding: 16px 32px
   - **CTA Secundário:** "Ver resultados"
     - Border: 1px branco 30%
     - Background: transparente
     - Ícone play à esquerda

5. **Trust Badges**
   - Layout: Flex horizontal
   - Gap: 32px
   - Separador: linha vertical branca 20%
   ```
   150+ Clientes | 8+ Anos | 98% Satisfação
   ```

### Coluna Direita (Desktop only)
- Círculo decorativo com animação de rotação
- Cards flutuantes com estatísticas
- Logo centralizado com animação de pulse

---

## 💼 SERVIÇOS

### Layout Geral
- **Background:** Branco/Claro (`#FFFFFF`)
- **Padding:** 80px vertical

### Título da Seção
- **Texto:** "Nossos" + "Serviços" (gradiente)
- **Subtítulo:** Cor gray, max-width 600px, centralizado

### Grid de Cards
- **Desktop:** 3 colunas
- **Tablet:** 2 colunas
- **Mobile:** 1 coluna
- **Gap:** 24px

### Card de Serviço
```css
/* Especificações do Card */
background: #F8FAFC; /* ou white com borda sutil */
border: 1px solid #E2E8F0;
border-radius: 16px;
padding: 32px;
transition: all 0.3s ease;

/* Hover */
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(0,0,0,0.1);
border-color: #2A9D8F;
```

### Conteúdo do Card
1. **Ícone** (40x40px, cor teal)
2. **Título** (H3, 20px, bold)
3. **Descrição** (16px, cor gray)

### Serviços Listados
1. 📊 Branding & Identidade Visual
2. 📱 Gestão de Redes Sociais
3. 🎯 Tráfego Pago (Google & Meta Ads)
4. 🎬 Produção de Conteúdo
5. 🌐 Criação de Sites
6. 📈 Consultoria de Marketing

---

## 📊 RESULTADOS

### Layout
- **Background:** Gradiente Hero (escuro)
- **Padding:** 80px vertical

### Título
- Texto branco com "resultados" em gradiente laranja

### Grid de Métricas
- **Desktop:** 4 colunas
- **Mobile:** 2 colunas
- **Gap:** 24px

### Card de Métrica
```css
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 16px;
padding: 32px;
text-align: center;
```

### Conteúdo da Métrica
1. **Número grande** (48px, branco, extrabold)
2. **Label** (16px, branco 60%)

### Métricas
- `+2M` - Alcance mensal
- `150+` - Clientes atendidos
- `320%` - Aumento médio em vendas
- `98%` - Taxa de satisfação

---

## 💬 DEPOIMENTOS

### Layout
- **Background:** Branco
- **Padding:** 80px vertical

### Título
- "O que nossos" + "clientes dizem" (gradiente)

### Carousel/Grid
- **Desktop:** 3 cards visíveis
- **Mobile:** 1 card (com navegação)

### Card de Depoimento
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 16px;
padding: 32px;
box-shadow: 0 10px 40px rgba(0,0,0,0.08);
```

### Conteúdo
1. **Ícone Quote** (aspas, cor teal, 32px)
2. **Texto do depoimento** (16px, itálico, cor dark)
3. **Divisor** (linha horizontal, 1px, gray)
4. **Info do cliente:**
   - Avatar (48px, circular)
   - Nome (bold)
   - Cargo/Empresa (small, gray)
5. **Rating** (5 estrelas amarelas)

---

## 📝 FORMULÁRIO DE CONTATO

### Layout
- **Background:** `#F8FAFC` (cinza muito claro)
- **Padding:** 80px vertical

### Estrutura
- **Desktop:** 2 colunas (texto | formulário)
- **Mobile:** 1 coluna

### Coluna Esquerda
1. **Título:** "Vamos conversar?" (com gradiente)
2. **Subtítulo:** Descrição sobre orçamento gratuito
3. **Lista de benefícios** com ícones check verde

### Formulário
```css
background: #FFFFFF;
border-radius: 24px;
padding: 48px;
box-shadow: 0 20px 60px rgba(0,0,0,0.1);
```

### Campos
1. **Nome** - Input text
2. **E-mail** - Input email
3. **Telefone** - Input tel
4. **Empresa** - Input text
5. **Mensagem** - Textarea (4 linhas)

### Estilo dos Inputs
```css
background: #F8FAFC;
border: 1px solid #E2E8F0;
border-radius: 12px;
padding: 16px;
font-size: 16px;

/* Focus */
border-color: #2A9D8F;
box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
```

### Botão Submit
```css
background: linear-gradient(135deg, #F97316, #FACC15);
color: white;
font-weight: 700;
padding: 16px 32px;
border-radius: 12px;
width: 100%;
```

---

## 🦶 FOOTER

### Layout
- **Background:** Gradiente Hero (escuro)
- **Padding:** 64px top, 32px bottom

### Grid
- **Desktop:** 4 colunas
- **Mobile:** Stack vertical

### Colunas
1. **Brand (2 cols)**
   - Logo
   - Descrição (branco 60%)
   - Redes sociais (ícones circulares)

2. **Links**
   - Serviços
   - Resultados
   - Depoimentos
   - Contato

3. **Contato**
   - Telefone
   - Email
   - Endereço

### Redes Sociais
```css
/* Botão circular */
width: 40px;
height: 40px;
border-radius: 50%;
background: rgba(255,255,255,0.1);
display: flex;
align-items: center;
justify-content: center;

/* Hover */
background: #2A9D8F;
```

### Copyright
- Borda top: 1px branco 10%
- Padding top: 32px
- Texto: branco 50%, 14px

---

## 📱 BOTÃO WHATSAPP FLUTUANTE

### Especificações
```css
position: fixed;
bottom: 24px;
right: 24px;
width: 64px;
height: 64px;
background: #25D366; /* Verde WhatsApp */
border-radius: 50%;
box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
z-index: 9999;
```

### Ícone
- Ícone WhatsApp branco, 32px

### Animação
- Pulse sutil constante
- Scale 1.1 no hover

### Link
```
https://wa.me/5547999999999?text=Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Cool Ideas.
```

### No Elementor
- Use um widget de ícone com link
- Position: Fixed via CSS customizado
- Ou use plugin: "Suspended Social Buttons" ou similar

---

## 📱 RESPONSIVIDADE

### Breakpoints
| Dispositivo | Largura |
|-------------|---------|
| Desktop | > 1024px |
| Tablet | 768px - 1024px |
| Mobile | < 768px |

### Ajustes Mobile

#### Header
- Menu hamburger
- Logo menor (20px)

#### Hero
- Uma coluna
- Título 36px
- Esconder coluna visual direita
- Trust badges em 2x2 grid

#### Seções
- Padding: 60px vertical
- Cards em stack vertical
- Títulos menores

#### Formulário
- Full width
- Padding reduzido (24px)

---

## 🔧 PLUGINS RECOMENDADOS (Elementor Free)

1. **Essential Addons for Elementor** - Mais widgets gratuitos
2. **PowerPack Lite** - Efeitos e widgets extras
3. **Premium Addons** - Carrossel de depoimentos
4. **Contact Form 7** - Formulários (integrar com Elementor)
5. **Jenga** - Botão WhatsApp flutuante

---

## 📦 ASSETS NECESSÁRIOS

### Ícones
- Use **Lucide Icons** ou **Font Awesome**
- Ícones necessários:
  - Menu, X (hamburger)
  - ArrowRight, Play
  - Instagram, LinkedIn, Facebook
  - MessageCircle (WhatsApp)
  - Check, Star
  - Palette, Share2, Target, Video, Globe, TrendingUp

### Imagens
- Foto de avatar para depoimentos
- Possível imagem de fundo para hero (opcional)
- Logo da Cool Ideas (SVG preferível)

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Configurar cores globais
- [ ] Configurar tipografia (Plus Jakarta Sans)
- [ ] Criar Header com menu
- [ ] Hero Section com CTA
- [ ] Seção de Serviços (6 cards)
- [ ] Seção de Resultados (4 métricas)
- [ ] Seção de Depoimentos (3 cards)
- [ ] Formulário de Contato
- [ ] Footer com links e redes
- [ ] Botão WhatsApp flutuante
- [ ] Testar responsividade
- [ ] Otimizar SEO (meta tags)
- [ ] Testar velocidade

---

## 📞 SUPORTE

Dúvidas sobre implementação? Entre em contato!

---

*Guia criado para Cool Ideas - Agência de Marketing Digital*
*Itajaí, Santa Catarina - Brasil*
