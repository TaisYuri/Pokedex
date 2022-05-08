import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { GET_POKEMON_BY_NAME } from '../../Services/Graphql/getPokemon';
import { BoxCard, BoxImage, BoxInput, IconSearch,Card, Container, Header, Icons, Img, Input, Name, Number, SectionBody, Type, TypeBox, TypeVertical } from './styles';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Shadow } from 'react-native-shadow-2';
import { Loading } from '../../components/Loading';


export function Search() {
    const [input, setInput] = useState('')
    let dataPoke: object | any = {}
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
   

    //CONEXÃO VIA APOLLO
    const getPoke = (name: string) => {
        const { data, loading } = useQuery(GET_POKEMON_BY_NAME, { variables: { name } })
        if (loading) return <Loading/>;
        if (!data) return <Text>Not found</Text>;

        dataPoke = data !== undefined ? data.pokemon : []

    }

    getPoke(input)


    const clear=() => {
        setInput('')
    }

    return (
        <Container>
            <Header source={require('../../assets/pokeball.png')} style={{ position: 'absolute' }} />
            <Icons>
                <Feather name='arrow-left' color={'#333'} size={30} onPress={() => navigation.goBack()} />
            </Icons>

            <BoxInput>
                <Input value={input} onChangeText={text => setInput(text)}
                    placeholder='Quem é este pokemon?'
                />
                {input === '' ? 
                <TouchableOpacity>
                    <IconSearch source={{ uri:'https://cdn-icons.flaticon.com/png/512/3104/premium/3104567.png?token=exp=1649026384~hmac=1425479e5fc4aa2390bf40bc36d84dd1'}} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={clear}>
                    <IconSearch source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1619/1619829.png' }}  />
                </TouchableOpacity>
                }
            </BoxInput>

            <BoxCard >
                {!!dataPoke && dataPoke !== null && !!input ?
                    <Shadow radius={16} >
                        <Card onPress={() => navigation.navigate('FeaturePokemon', dataPoke)}>
                            
                                <Number>#{dataPoke.number}<Name> {dataPoke.name}</Name> </Number>
                                <SectionBody >
                                    <TypeVertical>
                                        {dataPoke?.types !== undefined && dataPoke?.types.map((item: object, index: number) =>
                                            <TypeBox key={`${index}+${item}`}>
                                                <Type>{item}</Type>
                                            </TypeBox>
                                        )}
                                    </TypeVertical>
                                    <BoxImage >
                                        <Img source={{ uri: dataPoke?.image !== undefined && dataPoke?.image }} resizeMode='contain' />
                                    </BoxImage>
                                </SectionBody>
                           
                        </Card>
                    </Shadow>
                    : null}
            </BoxCard>
        </Container>


    )
}