## ClimaAI

O ClimaAI é um sistema web de previsão do tempo, onde o usuário pesquisa por uma cidade e visualiza as condições climáticas atuais em tempo real.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack](#stack)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Configurações](#configurações)
- [Autor](#autor)

## Sobre o Projeto

O **ClimaAI** é um sistema web de previsão do tempo em tempo real. O sistema exibe automaticamente o clima de Los Angeles por padrão. O usuário pode pesquisar qualquer cidade pelo campo de busca, e visualizar temperatura, tipo de clima, umidade e velocidade do vento. O fundo da interface muda dinamicamente de acordo com o clima atual, junto com as imagens que ficam ao redor do card de clima.

## Funcionalidades

- **Consulta de clima**
  - Busca de clima por cidade.
  - Exibição de temperatura (°C), tipo de clima, umidade (%) e velocidade do vento (km/h).

- **User Interface**
  - Imagem e gradiente de fundo dinâmicos por condição climática: `Clear`, `Clouds`, `Rain`, `Snow`, `Haze` e `Mist`.

## Stack

- **Frontend**
  - **React**
  - **Vite**

## Estrutura do Projeto

- **`src/`**
  - **`App.jsx`**
  - **`main.jsx`**
  - **`index.css`**
  - **`Components/WeatherApp.jsx`**
  - **`Components/WeatherApp.css`**
  - **`assets/images/`**

## Instalação

Pré-requisitos:

- **Node.js**
- API key da **OpenWeatherMap** ([openweathermap.org](https://openweathermap.org))

1. **Instalar as dependências**

   ```bash
   npm install
   ```

2. **Criar o arquivo `.env` a partir do exemplo**

   ```bash
   cp .env.example .env
   ```

3. **Configurar as variáveis de ambiente no `.env`**

   - `VITE_WEATHER_API_KEY`
   - `VITE_WEATHER_API_URL`

## Executando o Projeto

```bash
npm run dev
```

Após rodar o comando, acesse a aplicação em `http://localhost:5173`.

## Configurações

As variáveis de ambiente estão em `.env.example`:

## Autor

**Guilherme Rocha (CoderRocha)**

- GitHub: [CoderRocha](https://github.com/coderrocha)
- LinkedIn: [Guilherme Rocha](https://www.linkedin.com/in/guilherme-rocha-da-silva)

---
