import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const AnimatedCard = styled(Animated.View)`
    border-radius: 9px;
    margin: 8px 5px 18px 0px;
    padding: 8px 0px 8px 0px;
    width: 170px;
    height: 150px;
    /* background-color: rgba(0,0,0,0.01); */
    
`;

export const ContainerBackGround = styled.ImageBackground.attrs({
    imageStyle:({
        opacity: 0.1
    })
})`
    
`;
export const Number = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #000;
    padding-left: 8px;
    margin-top: 8px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #000;
    text-transform: capitalize;  //transforma a primeira letra em maiusculo.
`;

export const TypeVertical = styled.View`
     margin-top: 8px;
     margin-right: 10px;
     margin-left: 8px;
     flex-direction: row;
     align-items: center;
     justify-content:center ;

`;

export const TypeBox = styled.View`
    /* background-color: rgba(96,226,200, 0.9); */
    background-color: rgba(16, 3, 63, 0.8);
    padding: 8px 16px;
    border-radius: 14px;
    margin-right: 8px;   
    
`;
export const Type = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 13px;    
`;

export const BoxImage = styled.View`
    margin-left: 3px;
    height: 100px;
    margin-top: -20px;
    z-index:1;
`;

export const Img = styled.Image`
    width: 100px;
    height: 120px;
`;
export const ActionButton = styled(AnimatedTouchable)`
   padding: 8px 10px;
   /* background-color: rgba(96,226,200); */
   background-color:rgba(16, 3, 63, 0.8);
   border-bottom-left-radius: 9px;
   border-bottom-right-radius: 9px;
`;

export const ActionText = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 12px;    
`;

export const SectionBody = styled.View`
   flex-direction: row;
   margin-top: 8px;
   justify-content: space-between;
   width: 100%;
`;



