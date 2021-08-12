
import axios from "axios";
import React, {useState, useEffect} from "react";


const PokeCard = () => {
    const [pokemon, setPokemon] = useState({})
    return (
      <div></div>
    )
  }

  getUsers = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => setPokeList(response.data.results))
    .catch(err => console.log(err))
  }  

  useEffect(() => {
    ${setPokemon}
  }, [])

  useEffect(() => {
    ${pokemon}
  }, [])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}

export default PokeCard;
