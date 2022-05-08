import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: ${RFValue(10)}px;
`;

export const Base = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight:bold ;
    padding-top: ${RFValue(10)}px;
    color: #000;
`;

export const Stats = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-bottom: ${RFValue(8)}px;
`;

export const StatsText = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(3)}px;
    text-transform: capitalize;
    color: #000;
`;

export const ValueStats = styled.Text`
    font-size: ${RFValue(10)}px;
    color: #000;
    text-align: right;
`;

export const BarProgress = styled.View`
    width: 60%;
    height: ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;
    background-color: rgba(0,0,0, 0.2);
    `;

export const Progress = styled.View`
    height: ${RFValue(15)}px;
    max-width: 100%;
    border-radius: ${RFValue(8)}px;
    background-color: rgba(43, 216, 52, 0.7);
    `;

export const FleeRate = styled.View`
   flex-direction: row;
   align-items: center;
   padding-top: ${RFValue(5)}px;  
   padding-bottom: ${RFValue(15)}px;  
   `;

   export const FleeRateText = styled.Text`
       font-size: ${RFValue(15)}px;
       color: #000;
       
       text-transform: uppercase;
   `;