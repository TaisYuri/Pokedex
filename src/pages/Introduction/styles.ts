import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: rgb(16, 3, 63);
    justify-content: center;
    padding-left: ${RFValue(16)}px;
`;

export const SectionIcon = styled.View`
   
`;
export const Logo = styled.Image`
    width: ${RFValue(220)}px;
    height: ${RFValue(70)}px;
`;

export const Pokeball = styled.Image`
    width: ${RFValue(65)}px;
    height: ${RFValue(65)}px;
    margin-left: ${RFValue(86)}px;
    
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
