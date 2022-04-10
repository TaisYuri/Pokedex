import React, { useEffect, useRef, useState } from 'react';
import { Image, Animated} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {Container, Logo, Pokeball,ButtonGo,TextButton ,SectionIcon, Localization, Pointer, LocalText} from './styles';

export function Introduction( ){

    const[poke, setPoke] = useState(0)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const animatedPoke = useRef( new Animated.Value(poke)).current;

    const back = ()=> {
        Animated.timing(animatedPoke,{
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    const front = ()=> {
        Animated.sequence([
        Animated.timing(animatedPoke,{
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }),
        Animated.timing(animatedPoke,{
            toValue: 0,
            duration: 1500,
            useNativeDriver: false
        }),
        Animated.timing(animatedPoke,{
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }),
        Animated.timing(animatedPoke,{
            toValue: 0,
            duration: 1500,
            useNativeDriver: false
        })
    ]).start();
    
    }

    const teste = () => {
        if (poke === 0) {
            setPoke(1)
            back();
        } else{
            setPoke(0)
            front();
        }
    }

    useEffect( ()=> {
        front()
        
        
    },[])

    return(        
        <Container>
           
                <Animated.View  style={{ 
                    marginTop: animatedPoke.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 150],
                    }),
                    width: 100,
                    backgroundColor: 'red'
                }}/>
                <Image source={require('../../assets/pngegg.png')} style={{position: 'absolute', top: -90}}/>
           <SectionIcon>
                <Logo source={require('../../assets/logo.png')} />
                <Pokeball source={require('../../assets/pokeball-color.png')} />

               
                <ButtonGo onPress={() => navigation.navigate('Home')}>
                    <TextButton>Go Pokedex</TextButton>
                </ButtonGo>
               
            </SectionIcon>
            <Localization>
                <Pointer source={require('../../assets/pointer.png')}/>
                <LocalText>Kanto (カントー地方, Kantō-chihō)</LocalText>
            </Localization>               
 
                
        </Container>

    )
}