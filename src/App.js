import { CSSReset } from './components/CSSReset';
import { ShowPokemon } from './components/pokeList';
import { PokedexContainer, Reset } from './components/pokeList/pokeList.styled';


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


{/* <a target="_blank" href="https://icons8.com/icon/63311/pokebola">Pokebola</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }