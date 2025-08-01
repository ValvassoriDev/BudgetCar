# 🚗 BudgetCar

**BudgetCar** é uma aplicação web interativa para consultar veículos, visualizar informações e perguntar à uma IA especializada sobre automóveis. A proposta é unir experiência visual limpa com tecnologia de ponta (IA generativa) para facilitar comparações e orçamentos de carros.

---

## ✨ Funcionalidades

- Listagem visual de veículos em cards modernos
- Integração com API da IA (Google Gemini)
- Sistema de perguntas sobre veículos com resposta em Markdown
- Design responsivo e clean
- Interface intuitiva com navegação por páginas

---

## 📸 Interface

A interface utiliza um sistema de grid com cards que exibem:
- Imagem do carro
- Modelo e informações em lista
- Estilo visual padronizado com destaque para contraste e tipografia clara

---

## 🛠️ Tecnologias Utilizadas

- **React.js**
- **CSS3 (customizado, sem frameworks)**
- **Google Gemini API** (IA generativa)
- **Fetch API**
- **Vite** (opcional, caso tenha sido usado no setup)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/ValvassoriDev/BudgetCar.git
cd BudgetCar/budgetcar

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev

🧩 Estrutura do Projeto
bash
Copiar
Editar
budgetcar/
│
├── components/
│   └── CardCarro.jsx         # Card visual com dados dos veículos
├── pages/
│   ├── Home.jsx              # Página principal com lista de veículos
│   └── Perguntar.jsx         # Página para interação com IA
├── App.jsx                   # Roteamento das páginas
├── main.jsx                  # Entry point
├── Perguntar.css             # Estilo da página de perguntas
├── Home.css                  # Estilo da página principal
└── assets/                   # Imagens dos carros

🔐 API Gemini
A funcionalidade "Perguntar à IA" usa o modelo gemini-2.5-flash da Google. Para usá-la, você deve obter uma chave de API e inserir no campo indicado.

📌 Status
🚧 Em desenvolvimento — melhorias contínuas na responsividade, acessibilidade e UX.