import { gql } from '@apollo/client'

export const GET_POKEMON_BY_NUMBER = gql`
query GetPokemonByDexNumber($number: Int!) {
	getPokemonByDexNumber(number: $number){
		num
		species
		types
        color
		abilities { first hidden special }
		baseStats { hp attack defense speed }
		gender { male female }
		height
		weight
		sprite
		
	}
}
`

export const GET_POKEMON_ESSENCIAL = gql`
query GetPokemon($pokemon: PokemonEnum!) {
		getPokemon(pokemon: pokemon){
		  species
		  num
		  color
		}	
}
`
//-------------------------
export const GET_POKEMON_BY_NAME = gql`
query Pokemon($name: String) {	
	pokemon(name: $name){
		id
		number
		name
		types
		attacks {		  
		    special{
				name
				type
				damage
			}
		}
	
		height{ 
			minimum
			maximum
		}
		weight{ 
			minimum
			maximum
		}
		resistant
		weaknesses
		fleeRate
		maxCP
		maxHP
		image
	}
}
`
export const GET_LIST_TOP_POKEMONS = gql`
query GetList{
	pokemons(first: 50){
		id
		number
		name
		types
		image
	}
}
`;

