import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';
import theme from "../../styles/theme";

export const Container = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  background-color: ${theme.COLORS.Whiteffffff};
  justify-content: center;
`;

export const ContainerHeader = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: ${RFValue(20)}px;
`;