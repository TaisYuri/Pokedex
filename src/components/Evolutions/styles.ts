import styled from "styled-components/native";

export const Card = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContainerCard = styled.TouchableOpacity`
    padding: 10px;
    background-color: #FFF;
    margin-right: 10px;
    margin-left: 24px;
    margin-bottom: 4px;
    width: 140px;
    border-radius: 15px;
    box-shadow: 3px 1px 5px #000;
    elevation: 7;

`;


export const Photo = styled.Image`
   align-self:center ;
`;

export const Number = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: #000;
`;

export const Name = styled.Text`
    font-size: 19px;
    padding-bottom: 8px;
    color: #000;
`;

export const Title = styled.Text`
    font-size: 20px;
    padding-bottom: 8px;
    color: #000;
`;
