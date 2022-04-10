import React from 'react';
import { Image } from 'react-native';
import { Container, Divider, Info, TextInfo } from './styes';

interface ICardMaxMin{
    dataPoke: ICardItens;
}

interface ICardItens{
    height?: IMaxMin
    weight?: IMaxMin;
}

interface IMaxMin{
    minimum?: string
    maximum?: string;
}

export const CardMaxMin = ({ dataPoke }: ICardMaxMin) => {
    return (
        <Container>
            <Info>
                <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/3251/premium/3251164.png?token=exp=1648947760~hmac=18470bc1a3007e58a149e0ae6cbe7cee'}} style={{ width: 40, height: 40 ,marginBottom: 10}} />
                <TextInfo>min: {dataPoke?.height !== undefined && dataPoke?.height.minimum}</TextInfo>
                <TextInfo>max:{dataPoke?.height !== undefined && dataPoke?.height.maximum}</TextInfo>
            </Info>
            <Divider />
            <Info>
                <Image source={{ uri:'https://cdn-icons.flaticon.com/png/512/847/premium/847523.png?token=exp=1648947520~hmac=68bf8dc651bb185ee57a94ecbaa3f4b8'}} style={{ width: 40, height: 40, marginBottom: 10 }} />
                <TextInfo>min: {dataPoke?.weight !== undefined && dataPoke?.weight.minimum}</TextInfo>
                <TextInfo>max: {dataPoke?.weight !== undefined && dataPoke?.weight.maximum}</TextInfo>
            </Info>
        </Container>
    )
}