import React from 'react';
import { Image } from 'react-native';
import { BarProgress, Base, Container, FleeRate, FleeRateText, Progress, Stats, StatsText, ValueStats } from './styes';

interface IBaseStats {
    dataPoke: ICardItens;
}

interface ICardItens {
    maxHP?: string;
    maxCP?: string;
    fleeRate?: string;
}


export const BaseStats = ({ dataPoke }: IBaseStats) => {
    return (
        <Container>
            <Base>Base Stats</Base>
            <ValueStats>{dataPoke?.maxHP !== undefined && dataPoke?.maxHP}</ValueStats>
            <Stats>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/188/188985.png' }} style={{ width: 25, height: 25 }} />
                <StatsText>maxHP</StatsText>
                <BarProgress>
                    <Progress style={{ width: dataPoke?.maxHP !== undefined ? parseInt(dataPoke?.maxHP) * 0.1 : 0 }} />
                </BarProgress>
            </Stats>
            <ValueStats>{dataPoke?.maxCP !== undefined && dataPoke?.maxCP}</ValueStats>
            <Stats>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/188/188934.png' }} style={{ width: 25, height: 25 }} />
                <StatsText>maxCP</StatsText>
                <BarProgress>
                    <Progress style={{ width: dataPoke?.maxCP !== undefined ? parseInt(dataPoke?.maxCP) * 0.1 : 0 }} />
                </BarProgress>
            </Stats>
            <FleeRate>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/188/188966.png' }} style={{ width: 30, height: 30, marginRight: 20,  transform: [{ rotate: '-90deg' }] }} />
                <FleeRateText>fleeRate: </FleeRateText>
                <FleeRateText>{dataPoke?.fleeRate !== undefined && dataPoke?.fleeRate}</FleeRateText>
            </FleeRate>
        </Container>
    )
}