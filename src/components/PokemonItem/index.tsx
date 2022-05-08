import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Photo} from '../Evolutions/styles';
import {
  BoxImage,
  Name,
  Number,
  AnimatedCard,
  Type,
  TypeBox,
  TypeVertical,
  ActionButton,
  ActionText,
  SectionBody,
  Touchable,
} from './style';
import {IItemListPokemon} from './types';

export function PokemonItem({item}: IItemListPokemon) {
  const [hover, setHover] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const animatedPoke = useRef(new Animated.Value(0)).current;
  

  const openCard = () => {
    Animated.timing(animatedPoke, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeCard = () => {
    Animated.timing(animatedPoke, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setHover(false)
  };

  const checkCard = () => {
    if (!hover) {
      setHover(true);
      openCard();
    } else {
      setHover(false);
      closeCard();
    }
  };



  return (
    <AnimatedCard
      style={{
        marginLeft: animatedPoke.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 15],
        }),
        marginBottom: animatedPoke.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 25],
          }),
        height: animatedPoke.interpolate({
          inputRange: [0, 1],
          outputRange: [140, 160],
        }),
      }}
      key={item.number}>
      <Shadow radius={9}>
        <Touchable activeOpacity={0.9} onPress={checkCard}>
          <Number>
            #{item.number}
            <Name> {item.name}</Name>
          </Number>
          <SectionBody>
            <TypeVertical>
              {item.types.map((type: any) => (
                <TypeBox>
                  <Type>{type}</Type>
                </TypeBox>
              ))}
            </TypeVertical>
            <BoxImage>
              <Photo
                source={{uri: item.image}}
                style={{width: 90, height: 90, zIndex: 99, alignSelf: 'center'}}
                resizeMode="contain"
              />
            </BoxImage>
          </SectionBody>
        </Touchable>
        {hover ? (
          <ActionButton
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('FeaturePokemon', item);
              closeCard();
            }}
            style={{
              opacity: animatedPoke.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}>
            <ActionText>Status</ActionText>
          </ActionButton>
        ) : null}
      </Shadow>
    </AnimatedCard>
  );
}
