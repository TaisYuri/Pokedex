import React from 'react'
import { Dimensions } from 'react-native';
import { Container, DotAnimated } from './sytles';
import { IIindicator } from './types';


export const Indicator = ({ data, scrollX }: IIindicator) => {
    const Width= Dimensions.get('window').width
   
    return (
      <Container >
        {data.map((_: number, i: number) => {
          const inputRange = [(i - 1) * Width, i * Width, (i + 1) * Width];
  
          const dotColor = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [
              '#9c9797',
             'rgba(43, 216, 52, 0.7)',
             '#9c9797',
            ],
            extrapolate: 'clamp',
          });
  
          return (
            <DotAnimated
              style={[{ backgroundColor: dotColor }]}
              key={i.toString()}
            />
          );
        })}
      </Container>
    );
  };

  
// Quantidade de DOTS presente na tela.
export const Cards =[ 
    { id: 1},
    { id: 2},
    { id: 3},
]