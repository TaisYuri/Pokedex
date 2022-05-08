import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
     /* background-color: rgba(43, 216, 52, 0.7); */
     background-color: #FFF;
`;

export const Color = styled.View`

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
    margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    margin-left: ${RFValue(16)}px;
    margin-top: ${RFValue(15)}px;
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
   margin-bottom: ${RFValue(16)}px;

`;
export const TypeBox = styled.View`   
   margin-right: ${RFValue(8)}px;
   padding: ${RFValue(8)}px ${RFValue(16)}px;
   background-color: aquamarine;
   border-radius: ${RFValue(20)}px;

`;

export const Type = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    color: #000;
`;

export const BoxImage = styled.View`

   
`;

export const Stats = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-bottom: ${RFValue(6)}px;
`;

export const StatsText = styled.Text`
    font-size: ${RFValue(19)}px;
    margin-bottom: ${RFValue(6)}px;
    text-transform: capitalize;
    color: #000;

`;


export const BarProgress = styled.View`
    width: 60%;
    height: ${RFValue(18)}px;
    border-radius: ${RFValue(8)}px;
    background-color: rgba(0,0,0, 0.2);
`;

export const Progress = styled.View`
    height: ${RFValue(18)}px;
    border-radius: ${RFValue(8)}px;
    background-color: rgba(43, 216, 52, 0.7);
`;

export const NavInfo = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding-top: ${RFValue(16)}px;
    padding-bottom: ${RFValue(16)}px;
`;
export const Divider = styled.View`
    height: ${RFValue(80)}px;
    width: ${RFValue(3)}px;
    background-color: rgba(0,0,0, 0.2); 
`;
export const Info = styled.View`
    margin-right: ${RFValue(8)}px;
    margin-left: ${RFValue(8)}px;
    align-items: center;
`;
export const TextInfo = styled.Text`
    font-size: ${RFValue(16)}px;
    text-align: center;
    color: #000;
`;
export const Base = styled.Text`
    font-size: ${RFValue(26)}px;
    font-weight:bold ;
    padding-bottom: ${RFValue(15)}px;
    color: #000;
`;

export const Box = styled.View`   
    border-top-left-radius: ${RFValue(40)}px;
    border-top-right-radius: ${RFValue(40)}px;
    padding: ${RFValue(16)}px;
    /* height :${RFValue(500)}px ;    */
    color: #000;
`;