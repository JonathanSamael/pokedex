import { CSSReset } from './components/CSSReset';
import { ShowPokemon } from './components/pokemon';
import { PokedexContainer } from './components/pokemon/pokeList.styled';


function App() {
  return (
    <>
      <CSSReset />
      
      <PokedexContainer>
        <ShowPokemon />
      </PokedexContainer>
    </>
  );
}

export default App;