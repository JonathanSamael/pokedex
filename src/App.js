import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/themeContext";
import { AppRoutes } from "./routes";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
