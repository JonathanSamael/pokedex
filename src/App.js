import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./components/contexts/themeContext";
import { PokemonPage } from "./components/pages/PokemonPage";
import { ShowPokemon } from "./components/pokemon";

function App() {
 
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPokemon />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
