import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TouchableOpacity, Animated, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { SvgUri } from 'react-native-svg';

import { BoxImage, Name, Number, AnimatedCard, Type, TypeBox, TypeVertical, ActionButton, ActionText, SectionBody } from './style';
import { IItemListPokemon } from './types';

interface IItems{
    type: IItemsValues   
}

interface IItemsValues{
    name:string
}


export function PokemonItem({ item }: IItemListPokemon) {
    const [hover, setHover] = useState(false)

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const animatedPoke = useRef(new Animated.Value(0)).current;


    const openCard = () => {
        Animated.timing(animatedPoke, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();

    }

    const closeCard = () => {
        Animated.timing(animatedPoke, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start();

    }

    const checkCard = () => {
        if (!hover) {
            setHover(true)
            openCard()
        } else {
            setHover(false)
            closeCard()
        }
    }


    return (
        <View style={{ marginLeft: 35 }}>
                <AnimatedCard style={{
                    width: animatedPoke.interpolate({
                        inputRange: [0, 1],
                        outputRange: [310, 350],
                    }),
                    marginLeft: animatedPoke.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -15],
                    }),
                    marginRight: animatedPoke.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 20],
                    }),
                    height: animatedPoke.interpolate({
                        inputRange: [0, 1],
                        outputRange: [140, 150],
                    }),

                }} key={item.id}>
                <LinearGradient colors={['rgba(163,163,163,0.5)', 'rgba(223,223,223,0.2)']} style={{borderRadius: 9}}>
                    {/* <ContainerBackGround source={require('../assets/pokeball.png')}  > */}
                    <TouchableOpacity activeOpacity={0.9} onPress={checkCard} >
                        <Number>#{item.id}<Name> {item.name}</Name> </Number>
                        <SectionBody >
                            <TypeVertical>
                                {item?.types.map((value: IItems, i: number) =>
                                    <TypeBox key={i}>
                                        <Type >{value.type.name}</Type>
                                    </TypeBox>
                                )}
                            </TypeVertical>
                            <BoxImage >
                                <SvgUri width={85} height={105} uri={item?.sprites.other.dream_world.front_default} style={{ zIndex: 1 }} />
                            </BoxImage>
                        </SectionBody>

                    </TouchableOpacity>
                    {/* </ContainerBackGround> */}
                    {hover
                        ? <ActionButton activeOpacity={0.7} onPress={() => { navigation.navigate('FeaturePokemon', item); closeCard();  }}
                            style={{
                                opacity: animatedPoke.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                })
                            }}
                        >
                            <ActionText>Status</ActionText>
                        </ActionButton>
                        : null}
                        </LinearGradient>
                </AnimatedCard>
        </View>

    )
}

//