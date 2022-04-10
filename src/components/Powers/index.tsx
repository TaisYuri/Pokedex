import React from 'react'
import { Image } from 'react-native';
import { Card, Container, Info, TextInfo, Title } from './styles'
import { Shadow } from 'react-native-shadow-2';


interface IPowers {
    dataPoke: Itens;
}

interface Itens {
    resistant?: Array<object>
    weaknesses?: Array<object>
}

export const Powers = ({ dataPoke }: IPowers) => {

    return (
        <Container>
            <Title>Resistant</Title>
            <Shadow radius={9}>
                <Card>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1616/1616442.png' }} style={{ width: 70, height: 70 }} />
                    <Info>
                        {dataPoke?.resistant !== undefined && dataPoke?.resistant.map((item: object, index: number) =>
                            <TextInfo key={`${index}+${item}`}>{item}</TextInfo>                            
                        )}
                    </Info>
                </Card>
            </Shadow>

            <Title>Weaknesses</Title>
            <Shadow radius={9}>
                <Card>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1616/1616468.png' }} style={{ width: 70, height: 70 }} />
                    <Info>
                        {dataPoke?.weaknesses !== undefined && dataPoke?.weaknesses.map((item: object, index: number) =>
                            <TextInfo key={`${index}+${item}`}>{item}</TextInfo>
                        )}
                    </Info>
                </Card>
            </Shadow>
        </Container>
    )
}