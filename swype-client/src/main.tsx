import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import reset from 'styled-reset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');


${reset}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    font-family: 'NanumSquareRound', sans-serif;
  }

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

ul, ol {
  list-style: none;
}
`;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
