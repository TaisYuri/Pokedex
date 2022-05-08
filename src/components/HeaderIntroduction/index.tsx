import React, { useState } from 'react';
import { Container, Header, Icons, Number, Title, Type, TypeBox, TypeSection } from './styes';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

interface IIntroduction {
    dataPoke: Itens;
}

interface Itens {
    name?: string;
    number?: string;
    types?: Array<object>;
}


export const HeaderIntroduction = ({ dataPoke }: IIntroduction) => {
    const [heart, setHeart] = useState(false);
    const navigation = useNavigation();

    return (
        <Container>
            <Header source={require('../../assets/pokeball.png')} style={{ position: 'absolute' }} />
            <Icons>
                <Feather name='arrow-left' color={'#333'} size={30} onPress={() => navigation.goBack()} />
                <AntDesign name={heart ? 'heart' : 'hearto'} size={30} color='#f33e3e' onPress={() => setHeart(!heart)} />
            </Icons>
            <Title>{dataPoke?.name}</Title>
            <Number>#0{dataPoke?.number}</Number>

            {/* TIPO */}
            <TypeSection>
                {dataPoke?.types !== undefined && dataPoke?.types.map((item: object, index: number) => 
                    <TypeBox key={`${index}+${item}`}>
                        <Type>{item}</Type>
                    </TypeBox>)
                }
            </TypeSection>
        </Container>
    )
}