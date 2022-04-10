import styled from "styled-components/native";

export const Container = styled.View`
    padding-top: 20px;
    align-items: center;
    flex: 1;
    /* background-color: rgb(16, 3, 63); */

`;

export const Card = styled.View`  
    align-items: center;
    background-color:#FFF;
    border-radius: 9px;
    padding-top: 20px;
    padding-right: 16px;
    padding-left: 8px;
    height: 420px;
    width:280px ;

    `;

export const Name = styled.Text`
    font-size: 38px;
    font-weight: bold;    
    color: #000;
`;

export const Number = styled.Text`
    font-size: 20px;
    font-weight: bold;
    align-self: flex-end;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #000;
`;

export const TypeBox = styled.View`
    background-color: rgba(96,226,200, 0.9);
    padding: 8px 16px;
    border-radius: 20px;
    margin-bottom: 8px;   
    flex-direction: row ;
      
`;
export const Type = styled.Text`
    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 12px;    
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px; 
    margin-top: 20px ;
`;

export const Logo = styled.Image`
    width: 240px;
    height: 90px;
    margin-bottom: 100px; 
`;


export const ButtonGo = styled.TouchableOpacity`
    background-color: #E52246;
    width: 40%;
    border-radius: 20px;
    margin-top: 35px;
    margin-left: 50px;
`;

export const TextButton = styled.Text`
    color:  #FFF;
    font-size: 23px;
    font-weight: bold;
    padding: 8px 16px;
    text-align: center;
`;
export const Localization = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 5px;
    left: 5px;
`;

export const Pointer = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const LocalText = styled.Text`
    color:  #FFF;
    font-size: 16px;
    max-width: 170px;
`;