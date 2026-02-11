# Cool Ideas - Tema WordPress

## Instalação

1. Copie a pasta `wordpress-theme` para `wp-content/themes/coolideas`
2. Adicione um arquivo `screenshot.png` (1200×900px) na raiz do tema
3. No painel WordPress, vá em **Aparência > Temas** e ative "Cool Ideas Landing Page"
4. Em **Configurações > Leitura**, defina a página inicial como "Sua página estática mais recente"

## Estrutura de Arquivos

```
coolideas/
├── style.css           → CSS completo do tema (cores, layout, componentes)
├── functions.php       → Registro de scripts, menus, Customizer e AJAX
├── header.php          → Header fixo com menu responsivo
├── footer.php          → Footer + botão WhatsApp flutuante
├── front-page.php      → Template da landing page (Hero, Serviços, etc.)
├── index.php           → Template padrão para blog/posts
├── screenshot.png      → Prévia do tema (criar manualmente)
└── assets/
    └── js/
        └── main.js     → Scroll effects, menu mobile, reveal, form AJAX
```

## Personalização via Customizer

No painel WordPress, vá em **Aparência > Personalizar**:

- **WhatsApp**: Número com DDI
- **Informações de Contato**: Telefone, e-mail, endereço
- **Redes Sociais**: URLs do Instagram, LinkedIn e Facebook

## Formulário de Contato

O formulário envia e-mails via `wp_mail()` usando AJAX. O destinatário é o e-mail configurado no Customizer (ou o admin do WordPress por padrão).

Para garantir que os e-mails sejam entregues, instale um plugin SMTP como **WP Mail SMTP**.

## Requisitos

- WordPress 5.0+
- PHP 7.4+
- Nenhum plugin obrigatório (tema 100% standalone)
