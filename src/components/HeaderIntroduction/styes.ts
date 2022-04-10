import styled from 'styled-components/native'

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