import { Animated } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 70px;
    align-self: center;
    margin-top: 8px;
`;

export const DotAnimated = styled(Animated.View)`
    width: 14px;
    height: 14px;
    border-radius:7px;
`;

