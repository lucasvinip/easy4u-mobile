import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  background-color: ${theme.COLORS.Whiteffffff};
  justify-content: center;
`;


export const ContainerHeader = styled.View`
  height: ${RFValue(38)}%;
  justify-content: flex-end;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
    padding-top: ${RFValue(10)}px;
    align-items: center;
`;