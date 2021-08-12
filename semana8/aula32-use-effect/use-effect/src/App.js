
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import React, {useEffect, useState} from "react";





const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  return (
    <div></div>
  )
}

const getUsers = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(response => setPokeList(response.data.results))
  .catch(err => console.log(err))
}

useEffect(() => {
  getUsers()
}, [])

    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </div>
    );


export default App;

