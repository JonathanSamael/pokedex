import { useContext } from "react";
import { PokemonProvider } from "./contexts/pokemonContext";
import { ThemeContext, ThemeProvider } from "./contexts/themeContext";
import { AppRoutes } from "./routes";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <AppRoutes />
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default App;
