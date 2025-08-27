# VisionHealth - Landing Page

## 📖 Sobre o Projeto

O **VisionHealth** é uma landing page moderna e responsiva para uma plataforma inovadora de triagem ocular digital que combina inteligência artificial, acompanhamento médico e educação preventiva. A página foi desenvolvida para apresentar os serviços e diferenciais da plataforma de forma atrativa e profissional.

## ✨ Características Principais

### 🎯 **Funcionalidades**
- ✅ Design responsivo otimizado para dispositivos móveis
- ✅ Interface intuitiva com navegação suave
- ✅ Animações e transições elegantes
- ✅ Menu hamburger para dispositivos móveis
- ✅ Seções organizadas com call-to-actions estratégicos
- ✅ Depoimentos de clientes com carousel
- ✅ Showcase de aplicativo mobile
- ✅ Integração com WhatsApp para contato

### 🎨 **Seções da Landing Page**
1. **Header com Navegação** - Logo, menu e CTA principal
2. **Hero Section** - Apresentação principal com proposta de valor
3. **Quem Somos** - Descrição da empresa e serviços
4. **Depoimento** - Testemunho real de cliente com foto
5. **Processo/Diferenciais** - Cards explicativos dos benefícios
6. **Dados Científicos** - Estatísticas da OMS sobre saúde ocular
7. **App Showcase** - Demonstração do aplicativo mobile
8. **Credibilidade** - Informações sobre tecnologia aprovada pelo FDA
9. **Contato para Parcerias** - CTA para parcerias institucionais
10. **Footer** - Informações da empresa e links sociais

## 🛠️ Tecnologias Utilizadas

- **React** 18+ - Biblioteca principal para interface
- **CSS3** - Estilização com variáveis CSS e flexbox/grid
- **JavaScript ES6+** - Funcionalidades interativas
- **SVG** - Ícones e ilustrações vetoriais
- **Responsive Design** - Mobile-first approach

## 📱 Responsividade

A landing page foi desenvolvida com foco em **mobile-first** e inclui:

### Breakpoints Principais:
- **320px** - Smartphones pequenos
- **480px** - Smartphones médios
- **768px** - Tablets
- **1024px** - Tablets grandes e laptops
- **1440px** - Desktops

### Recursos Mobile:
- Menu hamburger animado
- Navegação touch-friendly (mínimo 44px)
- Tipografia escalonável
- Imagens otimizadas para diferentes densidades
- Suporte a orientação landscape
- Prevenção de zoom indesejado no iOS

## 🚀 Como Usar

### Pré-requisitos
```bash
Node.js 14+ 
npm ou yarn
```

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd visionhealth

# Instale as dependências
npm install
# ou
yarn install
```

### Executar o Projeto
```bash
# Modo desenvolvimento
npm start
# ou
yarn start

# Build para produção
npm run build
# ou
yarn build
```

## 📁 Estrutura do Projeto

```
visionhealth/
├── README.md
├── VisionHealth.jsx       # Componente React principal
├── VisionHealth.css       # Estilos CSS responsivos
└── assets/
    ├── images/           # Imagens da landing page
    └── icons/            # Ícones SVG
```

## 🎨 Guia de Estilos

### Paleta de Cores
```css
:root {
  --white: #FFF;
  --blue: #0328EE;
  --primary-green: #5BA091;    /* Verde principal */
  --darker-green: #67B5A5;     /* Verde escuro */
  --dark-blue: #23406F;        /* Azul escuro */
  --text-primary: #374151;     /* Texto principal */
  --text-secondary: #6B7280;   /* Texto secundário */
  --text-tertiary: #4B5563;    /* Texto terciário */
  --background-gray: #F7F7F7;  /* Fundo cinza */
  --testimonial-blue: #A1BAC9; /* Azul depoimento */
  --dark-navy: #004366;        /* Azul marinho */
  --screening-blue: #08227E;   /* Azul da tela */
}
```

### Tipografia
- **Títulos**: Georgia (serif)
- **Corpo do texto**: Lato (sans-serif)
- **Interface**: DM Sans (sans-serif)
- **Decorativo**: Playfair Display (serif)

## 🔧 Customização

### Alterando Cores
Modifique as variáveis CSS no arquivo `VisionHealth.css`:

```css
:root {
  --primary-green: #SUA_COR;
  --dark-blue: #SUA_COR;
}
```

### Adicionando Novas Seções
1. Adicione o JSX no componente `VisionHealth.jsx`
2. Crie os estilos correspondentes no `VisionHealth.css`
3. Mantenha a responsividade com media queries

### Modificando Conteúdo
Todo o texto está em português e pode ser editado diretamente no arquivo JSX:

```jsx
// Exemplo: Alterar título principal
<h1 className="hero-title">
  Seu Novo Título Aqui
</h1>
```

## 📊 Performance

### Otimizações Implementadas:
- ✅ Imagens otimizadas e responsivas
- ✅ CSS minificado em produção
- ✅ Lazy loading de componentes
- ✅ Smooth scrolling nativo
- ✅ Transições CSS performáticas
- ✅ Suporte a telas de alta densidade (Retina)

## 🌐 Compatibilidade

### Navegadores Suportados:
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 7+)

### Dispositivos Testados:
- ✅ iPhone 6/7/8/X/11/12/13
- ✅ Samsung Galaxy S8+
- ✅ iPad Air/Pro
- ✅ Tablets Android
- ✅ Desktops HD/4K

## 🤝 Contribuindo

### Como Contribuir:
1. Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código:
- Use nomes descritivos para classes CSS
- Mantenha componentes React pequenos e focados
- Documente mudanças importantes
- Teste em dispositivos móveis
- Siga a estrutura de responsividade existente

## 📞 Contato e Suporte

### Funcionalidades de Contato:
- **WhatsApp**: Integração direta via botão
- **Formulário de Parceria**: Para empresas e ONGs
- **Demonstração Gratuita**: Agendamento de apresentação

### Para Desenvolvedores:
- Abra uma **Issue** para reportar bugs
- Use **Discussions** para sugestões
- Consulte a documentação antes de fazer perguntas

## 📋 Roadmap

### Próximas Funcionalidades:
- [ ] Integração com Google Analytics
- [ ] Sistema de A/B testing
- [ ] Otimização SEO avançada
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro
- [ ] Mais idiomas (inglês, espanhol)
- [ ] Animações micro-interações
- [ ] Chat bot integrado

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE) - veja o arquivo LICENSE para detalhes.

## 🙏 Agradecimentos

- Design baseado em melhores práticas de UX/UI
- Inspirado em landing pages de healthtech modernas
- Comunidade React pelos recursos e ferramentas
- Contribuidores do projeto

---

**VisionHealth** - Cuidando da sua visão com tecnologia e inovação 👁️✨

Desenvolvido com ❤️ para democratizar o acesso à saúde ocular no Brasil.
