import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding-top: ${RFValue(15)}px;
`;
export const Info = styled.View`
    margin-right: ${RFValue(8)}px;
    margin-left: ${RFValue(8)}px;
    align-items: center;
`;
export const TextInfo = styled.Text`
    font-size: ${RFValue(15)}px;
    text-align: center;
    color: #000;
`;

export const Divider = styled.View`
    height: ${RFValue(80)}px;
    width: ${RFValue(3)}px;
    background-color: rgba(0,0,0, 0.2); 
`;