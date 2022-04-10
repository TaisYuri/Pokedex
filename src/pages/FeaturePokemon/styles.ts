import styled from 'styled-components/native';

export const Container = styled.View`
     /* background-color: rgba(43, 216, 52, 0.7); */
`;

export const Color = styled.View`
  
`;

export const Header = styled.Image`
    width: 200px;
    height: 200px;
    right: -30px;
    top: -30px;
    opacity: 0.1;
    
`;
export const Icons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-left: 16px;
    margin-top: 15px;
    text-transform: capitalize;
    color: #000;

`;

export const Number = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: right;
    margin-right: 16px;
    color: #000;
`;

export const TypeSection = styled.View`
   flex-direction: row;
   margin-left: 16px;

`;
export const TypeBox = styled.View`   
   margin-right: 8px;
   padding: 8px 16px;
   background-color: aquamarine;
   border-radius: 20px;

`;

export const Type = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

export const BoxImage = styled.View`

   
`;

export const Stats = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 6px;
`;

export const StatsText = styled.Text`
    font-size: 19px;
    margin-bottom: 6px;
    text-transform: capitalize;
    color: #000;

`;


export const BarProgress = styled.View`
    width: 60%;
    height: 18px;
    border-radius: 8px;
    background-color: rgba(0,0,0, 0.2);
`;

export const Progress = styled.View`
    height: 18px;
    border-radius: 8px;
    background-color: rgba(43, 216, 52, 0.7);
`;

export const NavInfo = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding-top: 16px;
    padding-bottom: 16px;
`;
export const Divider = styled.View`
    height: 80px;
    width: 3px;
    background-color: rgba(0,0,0, 0.2); 
`;
export const Info = styled.View`
    margin-right: 8px;
    margin-left: 8px;
    align-items: center;
`;
export const TextInfo = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #000;
`;
export const Base = styled.Text`
    font-size: 26px;
    font-weight:bold ;
    padding-bottom: 15px;
    color: #000;
`;

export const Box = styled.View`   
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 16px;
    margin-top: -20px;
    background-color: #FFF;  
    height :500px ;   
    color: #000;
`;