import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const Card = styled.View`
  margin-right: ${RFValue(-5)}px;
  margin-left: ${RFValue(20)}px;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(9)}px;
  width: ${RFValue(270)}px;
  max-height: ${RFValue(250)}px;
`;

export const Info = styled.View`
  margin-left: ${RFValue(20)}px;
  max-width: ${RFValue(150)}px;
  height: ${RFValue(60)}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextInfo = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #000;
  margin-left: ${RFValue(7)}px;
  width: 70px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: #000;
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(5)}px;
`;
