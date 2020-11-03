import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import axios from 'axios';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  

  const GetPokemon = (e) => {
    e.preventDefault()
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{
          console.log('res: ', response.data.results)
          setPokemonList(response.data.results)
        })
        .catch(err => {
          console.log(err)
        })
  }

  console.log('pokemonList:',pokemonList)
  
  // const writePokeName = () => {
  //   document.getElementById("pokeContainer")
  //   for (let i = 0; i < pokemonList.length; i++){
  //     console.log(pokemonList[i])
  //   }
  // }
  

  return (
    <div className="App">
      <button type="submit" onClick={GetPokemon}>Fetch Pokemon</button>
      {
        pokemonList.map((pokemon, i) => 
      <div id={i}>{pokemon.name}</div>
        )
      }
    </div>
  );

}

export default App;
