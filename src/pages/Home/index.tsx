import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import { Header, Title, Container, Space, SectionIcons } from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { } from 'react-native-svg';
import { api } from '../../Services';
import { Loading } from '../../components/Loading';
import { Fabbutton } from '../../components/Fabbutton';
import { PokemonItem } from '../../components/PokemonItem';



export function Home() {

    const [listPokemon, setListPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    // let quantity = [...Array(10)].map(()=>(Math.random() * 100).toFixed(0));
    const quantity: number = 20 
      // quantidade de cards presente na home
    let arrayCards: Array<string> = []
    var obj: object = {}

    const gerarNumeroNaoContido = (quantity: number[]): string | number => {
        const newNumber = (Math.random() * 150).toFixed(0);
        return quantity.includes(parseInt(newNumber)) ? gerarNumeroNaoContido(quantity) : parseInt(newNumber);   //checa se o numero NOVO consta dentro de NUMS. Caso sim, executa de novo a função. Caso não, retorna NOVO. 
    };

    const gerarLista = () => {
        const numeros = Array(quantity)  //gera um Array 
            .fill(quantity)  //gera a quantidade de numeros de acordo com array 
            .reduce((nums) => [...nums, gerarNumeroNaoContido(nums)], []);  //adiciona o num gerado na lista. 
        arrayCards = numeros;

        arrayCards.map(item => consultar(item))
    };


    async function consultar(num: string) {
        setLoading(true)
        await api.get(`${num}`)
            .then((response) => {
                // setPokemonUser(response.data.id)
                obj = {
                    id: response.data?.id,
                    name: response.data?.name,
                    types: response.data?.types,
                    sprites: response.data?.sprites,

                };
                setListPokemon((oldArray): any => [...oldArray, obj]);
            })
            .catch((error: string[]) => {
                console.log(error)
            })
        setLoading(false)
    }

    const reload = () => {
        setListPokemon([])
        gerarLista()

    }

    useEffect(() => reload(), [])



    return (
        <>

            {loading ? <Loading /> :
                <>
                    <Fabbutton onPress={() => navigation.navigate('Search')} />
                    <Container>
                        <Header source={require('../../assets/pokeball.png')} style={{ position: 'absolute' }} />
                        <SectionIcons>
                            <Feather name='arrow-left' color='#333' size={32} onPress={() => navigation.navigate('Introduction')} />
                            <Feather name='download-cloud' color='#333' size={32} onPress={reload} />
                        </SectionIcons>
                        <Title>Pokedex</Title>

                        <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                            {listPokemon.map((item, index) => <PokemonItem item={item} key={index * 10} />)}
                            <Space />

                        </ScrollView>

                    </Container>
                </>
            }
        </>
    );
}

