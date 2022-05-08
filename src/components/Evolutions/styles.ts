import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Card = styled.View`
    flex-direction: row;
    flex-wrap: wrap;

  
`;

export const ContainerCard = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;
    background-color: #FFF;
    margin-right: ${RFValue(10)}px;
    margin-left: ${RFValue(5)}px;
    margin-bottom: ${RFValue(4)}px;
    width: ${RFValue(140)}px;
    border-radius: ${RFValue(15)}px;
    box-shadow: 3px 1px 5px #000;
    elevation: 7;

`;


export const Photo = styled.Image`
   align-self:center ;
`;

export const Number = styled.Text`
   font-size: ${RFValue(12)}px;
   font-weight: bold;
   line-height: 32;
   color: #000;
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    padding-bottom: ${RFValue(8)}px;
    line-height: 32;
    color: #000;
    margin-left: ${RFValue(8)}px;
    `;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    padding-bottom: ${RFValue(8)}px;
    padding-top: ${RFValue(8)}px;
    color: #000;
    `;

    export const Information = styled.View`
        flex-direction: row;
        
    `;