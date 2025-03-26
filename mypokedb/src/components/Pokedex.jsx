import pokemons from '../assets/pokemons';
import PokemonCard from './PokemonCard';

function Pokedex() {
  return (
    <section className="pokedex">
        <h2 className="pokedex__title">Pokedex</h2>
        <section className="pokedex__list">
            {
              pokemons.map(pokemon => {
                return <PokemonCard 
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              })
            }
        </section>
    </section>
  )
}

export default Pokedex
