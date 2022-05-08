import { Animated, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const AnimatedCard = styled(Animated.View)`
    border-radius: 9px;
    margin-top: ${RFValue(12)}px;  
`;

export const ContainerBackGround = styled.ImageBackground.attrs({
    imageStyle:({
        opacity: 0.1
    })
})`
    
`;
export const Number = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    color: #000;
    padding-left: ${RFValue(8)}px;
    margin-top: ${RFValue(8)}px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(22)}px;
    color: #000;
    text-transform: capitalize;  //transforma a primeira letra em maiusculo.
`;

export const TypeVertical = styled.View`

`;

export const TypeBox = styled.View`
    background-color: rgba(16, 3, 63, 0.8);
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    border-radius: ${RFValue(14)}px;
    margin-bottom: ${RFValue(3)}px;   
    
`;
export const Type = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: ${RFValue(11)}px;    
`;

export const BoxImage = styled.View`
    margin-left: ${RFValue(3)}px;
    margin-top: -${RFValue(20)}px;
    z-index:1;
`;

export const Img = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(120)}px;
`;
export const ActionButton = styled(AnimatedTouchable)`
   padding: ${RFValue(8)}px ${RFValue(10)}px;
   background-color:rgba(16, 3, 63, 0.8);
   border-bottom-left-radius: ${RFValue(9)}px;
   border-bottom-right-radius: ${RFValue(9)}px;
`;

export const ActionText = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: ${RFValue(12)}px;    
`;

export const SectionBody = styled.View`
   flex-direction: row;
   margin-top: ${RFValue(8)}px;
   justify-content: space-between;
   width: 100%;
`;
export const Touchable = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;
    background-color: #FFF;
    border-radius: 9px;
    width: 310px;
`;



