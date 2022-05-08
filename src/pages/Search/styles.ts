import { Animated, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  margin-left: ${RFValue(16)}px ;
  
`;

export const Header = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    right: -${RFValue(30)}px;
    top: -${RFValue(30)}px;
    opacity: 0.1;
    
`;

export const Icons = styled.View`
    padding: ${RFValue(8)}px ${RFValue(0)}px;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
    `;


export const BoxInput = styled.View`
    flex-direction:row ;
    background-color: #e7dada;
    align-items:center ;
    
    margin-right: ${RFValue(12)}px ; 
    border-radius: ${RFValue(15)}px ;
    `;

export const Input = styled.TextInput`
    padding: ${RFValue(12)}px ;
    margin-right: ${RFValue(12)}px ; 
    width: 85%;
    
`;
export const IconSearch = styled.Image`
      width: ${RFValue(30)}px;
      height: ${RFValue(30)}px;
             
`;
export const Card = styled.TouchableOpacity`
    height: ${RFValue(140)}px; 
    background-color: #FFF;
    border-radius: ${RFValue(16)}px;
    width:${RFValue(290)}px;
`;


export const BoxCard = styled.View`
    padding-top: ${RFValue(32)}px;
    width:${RFValue(250)}px;
    margin-left: ${RFValue(2)}px;
`;


export const Number = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(16)}px;
    color: #000;
    padding-left: ${RFValue(8)}px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(22)}px;
    color: #000;
    text-transform: capitalize;  //transforma a primeira letra em maiusculo.
`;

export const TypeVertical = styled.View`
     padding-top: ${RFValue(8)}px;
     margin-right: ${RFValue(10)}px;
     padding-left: ${RFValue(8)}px;
`;

export const TypeBox = styled.View`
    /* background-color: rgba(96,226,200, 0.9); */
    background-color: rgba(16, 3, 63, 0.8);
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    border-radius: ${RFValue(14)}px;
    margin-bottom: ${RFValue(8)}px;   
      
`;
export const Type = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: ${RFValue(12)}px;    
`;

export const BoxImage = styled.View`
    z-index:1;
`;

export const Img = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(80)}px;

`;

export const SectionBody = styled.View`
   flex-direction: row;
   margin-top: ${RFValue(8)}px;
   justify-content: space-between;
   width: 100%;
`;



