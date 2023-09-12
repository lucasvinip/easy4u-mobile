import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  margin-left: ${RFValue(15)}px;
  margin-right: ${RFValue(15)}px;
  background-color: ${theme.COLORS.Whiteffffff};
  justify-content: center;
  align-items: center;
  height: auto;
`;