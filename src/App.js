import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonPage } from "./components/pages/PokemonPage";
import { ShowPokemon } from "./components/pokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPokemon/>}/>
          <Route path="/pokemon/:id" element={<PokemonPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
