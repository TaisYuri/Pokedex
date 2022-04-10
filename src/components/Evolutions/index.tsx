import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, ContainerCard, Photo, Title, Number ,Name} from './styles'

interface IEvolutions{
    namePoke: string
}

interface IItemsEvolutions{
    item: string
    number: string;
    name: string;
    image: string;
}


export function Evolutions({namePoke}:IEvolutions){
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [pokemon, setPokemon] = useState<any>({})
    const name = namePoke
    let evolutions: Array<IItemsEvolutions> = []

    const conectionGraphqL = (name:string) => {
        fetch('https://graphql-pokemon2.vercel.app/', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // query: '{ getPokemon(pokemon: dragonite){num species}}'
                query: `{ pokemon(name: "${name}") {name evolutions{ id number name image}} }`
            })
        })
        .then(resp => resp.json())
        .then(dados => {
            setPokemon(dados.data.pokemon)   
         })
     }
     
     if(name)
     conectionGraphqL(String(name)) 

    
     if(pokemon.evolutions === null){
         return <>
          <Title>Evolutions</Title>
          <Text style={{color: '#000'}}>No evolution or last evolution</Text>
          </>
     }else{
         evolutions  = pokemon.evolutions !== undefined ? pokemon.evolutions : []
     }


     return(
        <View >
            <Title>Evolutions</Title>
            <Card  >
            {evolutions.map( (item) => 
                <ContainerCard key={item.number} onPress={() => navigation.navigate('FeaturePokemon', item)}>
                    <Number>#{item.number}</Number> 
                    <Name>{item.name}</Name> 
                    <Photo source={{ uri: item.image}} style={{width: 100, height: 100}} resizeMode='contain'/>
                </ContainerCard>
            )}
            </Card>
     
        </View>
     )
}