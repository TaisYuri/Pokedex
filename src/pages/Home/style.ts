import styled from "styled-components/native";

export const Container = styled.View`
    padding-top: 16px;
`;
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-left: 12px;
    margin-top: 15px;
    color: #000;
    
`;
export const Header = styled.Image`
    width: 130px;
    height: 130px;
    right: -12px;
    top: -12px;
    opacity: 0.1;
`;
export const Space = styled.View`
    height: 100px; 
    width: 100%;
`;
export const SectionIcons = styled.View`
   justify-content: space-between;
   flex-direction: row;
   padding: 5px 12px
`;