import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding-top: ${RFValue(16)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    margin-left: ${RFValue(12)}px;
    margin-top: ${RFValue(15)}px;
    color: #000;
    
`;
export const Header = styled.Image`
    width: ${RFValue(130)}px;
    height: ${RFValue(130)}px;
    right: -${RFValue(12)}px;
    top: -${RFValue(12)}px;
    opacity: 0.1;
`;
export const Space = styled.View`
    height: ${RFValue(100)}px; 
    width: 100%;
`;
export const SectionIcons = styled.View`
   justify-content: space-between;
   flex-direction: row;
   padding: ${RFValue(5)}px ${RFValue(12)}px
`;