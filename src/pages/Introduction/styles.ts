import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: rgb(16, 3, 63);
    justify-content: center;
    padding-left: 16px;
`;

export const SectionIcon = styled.View`
   
`;
export const Logo = styled.Image`
    width: 240px;
    height: 90px;
`;

export const Pokeball = styled.Image`
    width: 90px;
    height: 90px;
    margin-left: 86px;
    
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
