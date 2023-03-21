import React from 'react'
import { Pokemon } from '../indexinterface';


interface props {
    pokemons: Pokemon[]
}

const PokemonCompletion: React.FC<props> = (props) => {
    const { pokemons } = props;
    return (
        <div>
            <section className='collection-container'>
            {pokemons.map((pokemon) =>
            {
                return(
                <div className=''>
                    {pokemon.name}
                </div>
                )
            }
            
            )}
            </section>
        </div>
    )
};

export default PokemonCompletion