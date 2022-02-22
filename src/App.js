import { useState } from "react";
import useFetch from "./hooks/useFetch";
import Poke from "./components/Poke";
import Searcher from "./components/Searcher";
import style from "./assets/css/cards.module.css";

function App() {
  const [searchPoke, setSearchPoke] = useState()
  const [arrayPokes] = useFetch({ pokemon: searchPoke });

  //console.log(arrayPokes);
  //console.log(arrayPokes.sprites.back_default)

  console.log(searchPoke)

  return (

    <div className={style.fullContent}>

      <div className={style.borderSearcher}>
        <h1 className={style.title}>Busca Pokemons</h1>
        <Searcher search={setSearchPoke} />

        {arrayPokes.length !== 0 &&
          <Poke image={arrayPokes.sprites} />
        }
      </div>


    </div>

  );
}

export default App;
