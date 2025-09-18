# 🚀 SpaceX API Viewer


![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

---

### Projeto desenvolvido por João Vitor Nicolau dos Santos e Uriel Monte Paz de Araújo em parceria com o professor Alexandre Gomes

---

## 📖 Sobre o Projeto
O **SpaceX API Viewer** é um aplicativo mobile desenvolvido com **React Native + Expo** que consome a [SpaceX API](https://github.com/r-spacex/SpaceX-API) para exibir informações sobre lançamentos, foguetes, missões e muito mais.  
A proposta é oferecer uma interface elegante e responsiva inspirada na identidade visual da **SpaceX**.

---

## ✨ Recursos

- ✅ Listagem de lançamentos (passados e futuros)  
- ✅ Detalhes de cada lançamento (missão, foguete, vídeo, etc.)  
- ✅ Consulta de foguetes e cápsulas  
- ✅ Interface responsiva e moderna com Styled Components  
- ✅ Suporte a **Dark Mode**  
- ✅ Integração com vídeos oficiais (YouTube)  

---


## 🛠 Tecnologias Utilizadas

- [Expo](https://expo.dev/)  
- [React Native](https://reactnative.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Styled Components](https://styled-components.com/)  
- [Axios](https://axios-http.com/)  

---

## ⚡ Instalação e Uso

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/spacex-api-viewer.git
cd spacex-api-viewer
```

Instale as dependências:

```bash
pnpm install
```

Corrija dependências nativas com o Expo:

```bash
expo install --fix
```

Inicie o servidor de desenvolvimento:

```bash
pnpm start
```

Para rodar no dispositivo:

```bash
pnpm android   # ou pnpm ios
```

---

## 📂 Estrutura de Pastas

```bash
spacex-api-viewer/
├── assets/              # Imagens, ícones e fontes
├── src/
│   ├── api/             # Configuração da API
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas principais
│   ├── navigation/      # Rotas e navegação
│   ├── theme/           # Estilos e tema global
│   ├── utils/           # Funções auxiliares
│   └── App.tsx          # Ponto de entrada
└── package.json
```

---

## 🎨 Paleta de Cores SpaceX

```ts
export const colors = {
  primary: "#005288", // Azul SpaceX
  secondary: "#FFFFFF", // Branco
  accent: "#FF6F61", // Detalhes
  dark: "#0B0D17", // Fundo escuro
  gray: "#A0A0A0", // Cinza neutro
};
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas!  
Siga os passos:

1. Faça um **fork** do projeto  
2. Crie uma branch (\`git checkout -b feature/nova-funcionalidade\`)  
3. Commit suas mudanças (\`git commit -m 'feat: adiciona nova funcionalidade'\`)  
4. Faça um push para sua branch (\`git push origin feature/nova-funcionalidade\`)  
5. Abra um **Pull Request**  

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para usar, modificar e compartilhar.  

---

## 🌌 Inspire-se. Explore. Conquiste o espaço.
