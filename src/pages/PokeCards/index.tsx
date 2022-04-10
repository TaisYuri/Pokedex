import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';

import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, Container, Name, Number, Type, TypeBox, Image, Logo, ButtonGo, TextButton, Localization, Pointer, LocalText } from './styles'
import { GET_LIST_TOP_POKEMONS } from '../../Services/Graphql/getPokemon';
import { Loading } from '../../components/Loading';


export function PokeCards() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();  
    let dataPoke: object | any = {}


    //CONEXÃO VIA APOLLO
    function getPoke() {
        const { data, loading } = useQuery(GET_LIST_TOP_POKEMONS)
        if (loading) return <Loading/>;
        dataPoke = data !== undefined ? data.pokemons : []
    }


    return (
        <LinearGradient colors={['red', 'yellow', 'green']} style={{ flex: 1 }} >
            <Container>
                {getPoke()}
             
                <Logo source={require('../../assets/logo.png')} />
                <Carousel
                    layout={"tinder"}
                    layoutCardOffset={9}
                    data={dataPoke}
                    sliderWidth={330}
                    itemWidth={350}
                    lockScrollWhileSnapping={true}
                    autoplay={true}
                    renderItem={( item: any) =>
                        <Shadow radius={9}>
                            <Card >
                                <Name>{item.name}</Name>
                                <Number>#{item.number}</Number>
                                {item.types.map((types: string) =>
                                    <TypeBox key={types}>
                                        <Type>{types}</Type>
                                    </TypeBox>
                                )}
                                <Image source={{ uri: item.image }} resizeMode='contain' />
                            </Card>
                        </Shadow>}
                    
                    activeAnimationType={'spring'}
                    containerCustomStyle={{ paddingLeft: 20 }}

                />

               
            </Container >
        </LinearGradient >
    )
}