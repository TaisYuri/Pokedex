import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, Text, View } from 'react-native';

import { Container, Box } from './styles';
import { IPokedex } from './types';
import { SvgUri } from 'react-native-svg';
import { useQuery } from '@apollo/client';
import { api } from '../../Services';
import { GET_POKEMON_BY_NAME } from '../../Services/Graphql/getPokemon';
import { HeaderIntroduction } from '../../components/HeaderIntroduction';
import { Cards, Indicator } from '../../components/Indicator';
import { CardMaxMin } from '../../components/CardMaxMin';
import { BaseStats } from '../../components/BaseStats';
import { Powers } from '../../components/Powers';
import { Evolutions } from '../../components/Evolutions';
import { Loading } from '../../components/Loading';


export function FeaturePokemon() {
    const [pokemonUser, setPokemonUser] = useState<IPokedex>();

    let dataPoke: object | any = {}
    const scrollX = useRef(new Animated.Value(0)).current;
    const route = useRoute<any>();

    //CONEXÃO VIA API
    async function GetImageSVG(name: string) {
        await api.get(`${name}`.toLowerCase())
            // await api.get(`${route.params?.id}`.toLowerCase())
            .then((response) => {
                setPokemonUser(response.data)
            })
    }

    //CONEXÃO VIA APOLLO
    const getPoke = (name: string) => {
        const { data, loading } = useQuery(GET_POKEMON_BY_NAME, { variables: { name } })
        if (loading) return <Loading/>;
        if (!data) return <Text>Not found</Text>;

        dataPoke = data !== undefined ? data.pokemon : []
        // console.log(dataPoke);
    }


    GetImageSVG(`${route.params?.name}`)
    getPoke(`${route.params?.name}`)


    return (
        <Container >
            <HeaderIntroduction dataPoke={dataPoke} />

            {/* IMAGEM DO POKEMON    */}
            <View />
            <SvgUri width={240} height={240} uri={pokemonUser?.sprites.other.dream_world.front_default} strokeWidth="1" stroke="rgb(0,0,0, 0.2)" style={{ zIndex: 99, alignSelf: 'center' }} />

            <Box>
                <Indicator data={Cards} scrollX={scrollX} />
                <ScrollView
                    horizontal
                    contentContainerStyle={{ width: Dimensions.get('window').width * 3 }}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false, })}
                    pagingEnabled
                >

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: (Dimensions.get('window').width - 40) }}>
                            <CardMaxMin dataPoke={dataPoke} />
                            <BaseStats dataPoke={dataPoke} />
                        </View>
                        <View>
                            <Powers dataPoke={dataPoke} />
                        </View>
                        <View style={{ width: Dimensions.get('window').width, paddingLeft: 15 }}>
                            <Evolutions namePoke={dataPoke?.name} key={route.params?.id} />
                        </View>
                    </View>

                </ScrollView>
            </Box>
        </Container>
    );
}


