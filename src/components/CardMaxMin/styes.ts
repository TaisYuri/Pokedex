import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding-top: 16px;
    padding-bottom: 16px;
`;
export const Info = styled.View`
    margin-right: 8px;
    margin-left: 8px;
    align-items: center;
`;
export const TextInfo = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #000;
    margin-bottom: 5px;
`;

export const Divider = styled.View`
    height: 80px;
    width: 3px;
    background-color: rgba(0,0,0, 0.2); 
`;