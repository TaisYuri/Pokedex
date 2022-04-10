import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 16px;
`;

export const Base = styled.Text`
    font-size: 26px;
    font-weight:bold ;
    padding-bottom: 15px;
    color: #000;
`;

export const Stats = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 18px;
`;

export const StatsText = styled.Text`
    font-size: 19px;
    margin-bottom: 6px;
    text-transform: capitalize;
    color: #000;
`;

export const ValueStats = styled.Text`
    font-size: 12px;
    color: #000;
    text-align: right;
`;

export const BarProgress = styled.View`
    width: 60%;
    height: 18px;
    border-radius: 8px;
    background-color: rgba(0,0,0, 0.2);
    `;

export const Progress = styled.View`
    height: 18px;
    max-width: 100%;
    border-radius: 8px;
    background-color: rgba(43, 216, 52, 0.7);
    `;

export const FleeRate = styled.View`
   flex-direction: row;
   align-items: center;
   padding-bottom: 20px;  
   `;

   export const FleeRateText = styled.Text`
       font-size: 22px;
       color: #000;
       
       text-transform: uppercase;
   `;