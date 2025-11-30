# DOCUMENTAÇÃO - MENU HAMBURGUER (3 RISCOS)

## 📋 RESUMO
O menu hamburguer (3 riscos) é um componente responsivo que funciona apenas em mobile (até 768px e 480px) e abre um painel lateral igual ao do desktop quando clicado.

---

## 📁 ARQUIVOS ENVOLVIDOS

### 1. **sejaM.html** (Estrutura HTML)
**Localização dos elementos:**

```html
<!-- LINHA 14-18: Botão do Menu Hamburguer (3 riscos) -->
<button class="menu-toggle" id="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
</button>

<!-- LINHA 20-29: Sidebar (Painel Lateral) -->
<nav class="sidebar">
    <img src="logo.png" alt="Logo Tio Gil">
    <div id="sidebar">
        <button class="nav-item">Home</button>
        <button class="nav-item">Blog</button>
        <button class="nav-item">Sobre</button>
        <button class="nav-item">Contato</button>
    </div>
</nav>
```

**O que cada elemento faz:**
- `.menu-toggle` = Botão com os 3 riscos (spans)
- `.sidebar` = Painel lateral que desliza quando aberto
- `.nav-item` = Botões de navegação dentro do sidebar

---

### 2. **sejaM.css** (Estilos e Responsividade)

#### A. Estilos base do menu (Linhas 115-139)
```css
.menu-toggle { ... }        /* Botão dos 3 riscos */
.menu-toggle span { ... }   /* Cada risco (linha) */
.menu-toggle.active span... /* Animação dos riscos ao clicar */
```

**O que faz:**
- Define como os 3 riscos aparecem
- Anima os riscos para virar um X quando aberto
- Estilos: flexbox, cor (#5170FF), transição suave

#### B. Breakpoint 768px (Linhas 176-242)
**Estilos para tablets/celulares médios:**
```css
@media (max-width: 768px) {
    .sidebar { 
        /* width: 250px, position: fixed */
        /* transform: translateX(-100%) - começa escondido */
        /* transition: transform 0.3s ease - desliza com animação */
    }
    
    .sidebar.active {
        /* transform: translateX(0) - fica visível */
    }
    
    .menu-toggle {
        /* position: fixed - fica no canto */
        /* z-index: 10000 - fica acima de tudo */
    }
    
    .nav-item { ... } /* Estilo dos botões */
}
```

#### C. Breakpoint 480px (Linhas 333-395)
**Estilos para celulares pequenos:**
- Mesmos principios do 768px
- Alguns ajustes de tamanho/padding

---

### 3. **script.js** (Funcionalidade JavaScript)

**Localização do código:** Linhas 1-26

```javascript
/* ETAPA 1: Pega os elementos do HTML */
const menuToggle = document.getElementById('menu-toggle');     // Botão 3 riscos
const sidebar = document.querySelector('.sidebar');             // Painel lateral
const navItems = document.querySelectorAll('.nav-item');        // Botões de nav

/* ETAPA 2: Clique no botão de menu */
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');    // Anima riscos para X
    sidebar.classList.toggle('active');       // Abre/fecha sidebar
});

/* ETAPA 3: Clique em um item de navegação */
navItems.forEach(item => {
    item.addEventListener('click', function() {
        menuToggle.classList.remove('active');    // Remove X dos riscos
        sidebar.classList.remove('active');       // Fecha sidebar
    });
});

/* ETAPA 4: Clique fora do menu */
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        // Fecha o menu se clicar fora dele
    }
});
```

**O que cada parte faz:**
- Encontra os elementos no HTML
- Adiciona listeners de clique
- Adiciona/remove classes "active" para abrir/fechar
- A classe "active" dispara as animações CSS

---

## 🎯 COMO FUNCIONA (Fluxo)

1. **HTML**: Define botão com 3 spans e sidebar com logo/menu
2. **CSS Desktop**: Sidebar visível na lateral (250px fixed)
3. **CSS Mobile**: Sidebar escondida (translateX(-100%))
4. **JavaScript - Clique nos 3 riscos**: 
   - Adiciona classe "active" ao .menu-toggle → riscos viram X
   - Adiciona classe "active" ao .sidebar → sidebar desliza pra dentro
5. **CSS animação**: A transição suave (0.3s) mostra o movimento
6. **Clique em item**: Remove "active" → menu fecha, riscos voltam ao normal

---

## 🔧 ONDE EDITAR SE PRECISAR

| O que mudar | Onde editar |
|-------------|------------|
| Cor dos riscos | `sejaM.css` linha 132: `.menu-toggle span { background-color: #5170FF; }` |
| Tamanho dos riscos | `sejaM.css` linha 131-133: `width: 25px; height: 3px;` |
| Velocidade animação | `sejaM.css` linha 133: `transition: all 0.3s ease;` (mudar 0.3s) |
| Posição do botão | `sejaM.css` linha 195: `top: 1rem; left: 1rem;` |
| Botões do menu | `sejaM.html` linha 24-27: adicione/remova `<button class="nav-item">` |
| Largura sidebar | `sejaM.css` linha 183: `width: 250px !important;` |
| Cor fundo sidebar | `sejaM.css` linha 188: `background-color: #C9D3FF !important;` |

---

## ⚠️ IMPORTANTE

✅ **Arquivos necessários:**
- sejaM.html (HTML)
- sejaM.css (Estilos)
- script.js (Funcionalidade)
- style.css (Estilos base do site - já existe)

✅ **Classes CSS fundamentais:**
- `.menu-toggle` = Botão com 3 riscos
- `.menu-toggle.active` = Estado ativo (riscos viram X)
- `.sidebar` = Painel lateral
- `.sidebar.active` = Estado aberto do sidebar
- `.nav-item` = Botões de navegação

✅ **IDs fundamentais:**
- `#menu-toggle` = Identificador do botão
- `#sidebar` = Identificador da div com botões de nav

---

## 📱 BREAKPOINTS

| Tamanho | Breakpoint | Comportamento |
|---------|-----------|--------------|
| Desktop | > 1024px | Sidebar 250px no lado, menu hamburguer escondido |
| Tablet | 768px - 1024px | Sidebar no lado, menu hamburguer escondido |
| Celular médio | 480px - 768px | Menu hamburguer visível, sidebar desliza |
| Celular pequeno | < 480px | Menu hamburguer visível, sidebar desliza |

---

## 🎨 ANIMAÇÕES

**Riscos virando X:**
```
Posição normal:
━━━
━━━  
━━━

Clicado:
  ╲
   
  ╱
```

**Sidebar deslizando:**
```
Fechado:  ║
           ║  (escondido à esquerda)

Aberto:   ║ LOGO
          ║ Home
          ║ Blog
          ║ Sobre
          ║ Contato
```

---

## 🚀 RESUMO RÁPIDO

Para os 3 riscos funcionar, você PRECISA de:

1. ✅ **HTML**: `<button class="menu-toggle" id="menu-toggle">` com 3 `<span>`
2. ✅ **HTML**: `<nav class="sidebar">` com `<div id="sidebar">` e `.nav-item`
3. ✅ **CSS**: Classes `.menu-toggle` e `.menu-toggle.active` com animações
4. ✅ **CSS**: Classes `.sidebar` e `.sidebar.active` com posicionamento
5. ✅ **CSS**: Media queries `@media (max-width: 768px)` e `@media (max-width: 480px)`
6. ✅ **JavaScript**: Event listeners nos 3 elementos (menu, sidebar, nav-items)
7. ✅ **JavaScript**: Lógica de adicionar/remover classe "active"

Sem qualquer um desses, o menu não funciona! 🔑
