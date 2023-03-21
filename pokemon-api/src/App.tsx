import React, { useEffect, useState } from 'react';

import axios from 'axios';
import "./App.css"

import { Pokemon } from './indexinterface';
import {PokemonCompletion} from './components/PokemonCompletion';

const App:React.FC = () => {

  interface Pokemons{
      name:string;
      url:string;
  }
  

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(()=>{
    const getPokemon = async() =>{
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
        res.data.results.forEach(async(pokemon: Pokemons) =>{
          const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          // console.log(poke.data)
         setPokemons((p) => [...p,poke.data])
        });
    };
    getPokemon();
  },[])




  return (
    <div className="App">
      <div className='container'>
      <header className='pokemon-header'>Pokemon</header>
    <PokemonCompletion/>
      
      </div>
    </div>
  );
}

export default App;
