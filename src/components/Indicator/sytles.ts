import { Animated } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: ${RFValue(70)}px;
    align-self: center;
    margin-top: ${RFValue(8)}px;
`;

export const DotAnimated = styled(Animated.View)`
    width: ${RFValue(12)}px;
    height: ${RFValue(12)}px;
    border-radius:${RFValue(6)}px;
`;

