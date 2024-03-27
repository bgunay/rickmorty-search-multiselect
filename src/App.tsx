import { BrowserRouter } from "react-router-dom";

import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

import { FavoritesProvider } from "./contexts/FavoritesContext";

import { Routes } from "./routes";

import GlobalStyles from "./styles/global";
import * as S from "./styles/app";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <S.Container>
          <Sidebar />

          <Routes />

          <Footer />
        </S.Container>
      </FavoritesProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export { App };
