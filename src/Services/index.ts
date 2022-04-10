import axios from "axios";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})


export const optionfetch = (query:string) => ({
    method: 'post',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // query: '{ getPokemon(pokemon: dragonite){num species}}'
        query
    })
})



export const listaPokemon = () => {
    fetch('https://graphqlpokemon.favware.tech/', {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: '{ getPokemon(pokemon: dragonite){num species}}'
        })
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        return []
    })
}


