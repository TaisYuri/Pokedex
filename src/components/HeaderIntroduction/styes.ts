import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #FFF;
`;

export const Header = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    right: -${RFValue(30)}px;
    top: -${RFValue(30)}px;
    opacity: 0.1;
    
`;
export const Icons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(8)}px ${RFValue(16)}px;
    margin-top: ${RFValue(12)}px;
`;


export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(8)}px;
    text-transform: capitalize;
    color: #000;

`;

export const Number = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: right;
    margin-right: ${RFValue(16)}px;
    color: #000;
`;

export const TypeSection = styled.View`
   flex-direction: row;
   margin-left: ${RFValue(16)}px;

`;
export const TypeBox = styled.View`   
   margin-right: ${RFValue(8)}px;
   padding: ${RFValue(5)}px ${RFValue(16)}px;
   background-color: rgba(43, 216, 52, 0.7);
   border-radius: ${RFValue(20)}px;

`;

export const Type = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: bold;
    color: #000;
`;