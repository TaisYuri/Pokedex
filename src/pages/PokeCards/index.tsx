import React from 'react';
import { useQuery } from '@apollo/client';

import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { Card, Container, Name, Number, Type, TypeBox, Image, Logo } from './styles'
import { GET_LIST_TOP_POKEMONS } from '../../Services/Graphql/getPokemon';
import { Loading } from '../../components/Loading';


interface IPokeCards {
    item: IItemPokeCards;
}

interface IItemPokeCards {
    name: string;
    number: string;
    types: Array<string>;
    image: string;
}

export function PokeCards() {

    //CONEXÃO VIA APOLLO
    const { data, loading } = useQuery(GET_LIST_TOP_POKEMONS)
    if (loading) return <Loading />;
    const dataPoke = data !== undefined ? data.pokemons : []

    return (
        <LinearGradient colors={['red', 'yellow', 'green']} style={{ flex: 1 }} >
            <Container>
                <Logo source={require('../../assets/logo.png')} />
                <Carousel
                    layout={"tinder"}
                    layoutCardOffset={9}
                    data={dataPoke}
                    sliderWidth={330}
                    itemWidth={350}
                    lockScrollWhileSnapping={true}
                    autoplay={true}
                    renderItem={({ item }: IPokeCards) =>
                        <Shadow radius={18}>
                            <Card >
                                <Name>{item.name}</Name>
                                <Number>#{item.number}</Number>
                                {item?.types !== undefined && item?.types.map((types: string) =>
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