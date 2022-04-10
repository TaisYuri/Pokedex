import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  margin-left: 16px ;
  
`;

export const Header = styled.Image`
    width: 200px;
    height: 200px;
    right: -30px;
    top: -30px;
    opacity: 0.1;
    
`;

export const Icons = styled.View`
    padding: 8px 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    `;


export const BoxInput = styled.View`
    flex-direction:row ;
    background-color: #e7dada;
    align-items:center ;
    
    margin-right: 12px ; 
    border-radius: 15px ;
    `;

export const Input = styled.TextInput`
    padding: 12px ;
    margin-right: 12px ; 
    width: 85%;
    
`;
export const IconSearch = styled.Image`
      width: 30px;
      height: 30px;
             
`;
export const Card = styled.TouchableOpacity`
    height: 140px; 
    background-color: #FFF;
    border-radius: 16px;
    width:350px;
`;


export const BoxCard = styled.View`
    padding-top: 32px;
    width:250px;
    margin-left: 2px;
`;


export const Number = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #000;
    padding-left: 8px;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #000;
    text-transform: capitalize;  //transforma a primeira letra em maiusculo.
`;

export const TypeVertical = styled.View`
     padding-top: 8px;
     margin-right: 10px;
     padding-left: 8px;
`;

export const TypeBox = styled.View`
    /* background-color: rgba(96,226,200, 0.9); */
    background-color: rgba(16, 3, 63, 0.8);
    padding: 8px 16px;
    border-radius: 14px;
    margin-bottom: 8px;   
      
`;
export const Type = styled.Text`
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 12px;    
`;

export const BoxImage = styled.View`
    z-index:1;
`;

export const Img = styled.Image`
    width: 100px;
    height: 80px;

`;

export const SectionBody = styled.View`
   flex-direction: row;
   margin-top: 8px;
   justify-content: space-between;
   width: 100%;
`;



