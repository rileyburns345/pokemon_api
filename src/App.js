import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [pokemonList, setPokemonList] = useState([])

  const getPokemon = (e) => {
    e.preventDefault()
    console.log('hello3')
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemonList(response.results)
        }).catch(err=>{
            console.log(err);
        });

  }
  
  console.log('pokemon:', pokemonList)
  


  

  return (
    <div className="App">
      <form onSubmit={getPokemon}>
      <button type="submit">Fetch Pokemon</button>
      </form>
      {
        pokemonList.map((pokemon) => 
          <div>{pokemon.name}</div>
        )
      }

      {
        console.log('ymmm')
      }
    </div>
  );
}

export default App;
