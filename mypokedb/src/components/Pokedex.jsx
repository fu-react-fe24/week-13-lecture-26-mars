import pokemons from '../assets/pokemons';

function Pokedex() {
  return (
    <section className="pokedex">
        <h2 className="pokedex__title">Pokedex</h2>
        <section className="pokedex__list">
            {
                pokemons[0].name
            }
        </section>
    </section>
  )
}

export default Pokedex
