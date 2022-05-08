import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding-top: ${RFValue(20)}px;
    align-items: center;
    flex: 1;
    /* background-color: rgb(16, 3, 63); */

`;

export const Card = styled.View`  
    align-items: center;
    background-color:#FFF;
    border-radius: ${RFValue(9)}px;
    padding-top: ${RFValue(20)}px;
    padding-right: ${RFValue(16)}px;

    height: ${RFValue(400)}px;
    width:${RFValue(260)}px ;

    `;

export const Name = styled.Text`
    font-size: ${RFValue(38)}px;
    font-weight: bold;    
    color: #000;
`;

export const Number = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    align-self: flex-end;
    padding-top: ${RFValue(8)}px;
    padding-bottom: ${RFValue(8)}px;
    color: #000;
`;

export const TypeBox = styled.View`
    background-color: rgba(96,226,200, 0.9);
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    border-radius: ${RFValue(20)}px;
    margin-bottom: ${RFValue(8)}px;   
    flex-direction: row ;
      
`;
export const Type = styled.Text`
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: ${RFValue(12)}px;    
`;

export const Image = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px; 
    margin-top: ${RFValue(20)}px ;
`;

export const Logo = styled.Image`
    width: ${RFValue(240)}px;
    height: ${RFValue(90)}px;
    margin-bottom: ${RFValue(100)}px; 
`;


export const ButtonGo = styled.TouchableOpacity`
    background-color: #E52246;
    width: 40%;
    border-radius: ${RFValue(20)}px;
    margin-top: ${RFValue(35)}px;
    margin-left: ${RFValue(50)}px;
`;

export const TextButton = styled.Text`
    color:  #FFF;
    font-size: ${RFValue(23)}px;
    font-weight: bold;
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    text-align: center;
`;
export const Localization = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: ${RFValue(5)}px;
    left: ${RFValue(5)}px;
`;

export const Pointer = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    margin-right: ${RFValue(10)}px;
`;

export const LocalText = styled.Text`
    color:  #FFF;
    font-size: ${RFValue(16)}px;
    max-width: ${RFValue(170)}px;
`;