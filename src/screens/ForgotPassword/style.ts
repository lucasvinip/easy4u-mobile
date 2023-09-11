import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';
import theme from "../../styles/theme";



export const Container = styled.View`
margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  background-color: ${theme.COLORS.Whiteffffff};
  justify-content: center;
`;


export const ContainerHeader = styled.View`
    height: ${RFPercentage(8)}%;
  justify-content: flex-end;

`;
ContainerHeader.Text = styled.Text`
  font-family: ${theme.FONTS.Popp500};
  font-size: ${RFValue(30)}px;
  width: ${RFValue(300)}px;
`;
ContainerHeader.SubText = styled.Text`
  font-family: ${theme.FONTS.Popp400};
  font-size: ${RFValue(16)}px;
  color: ${theme.COLORS.Gray868686};
  width: ${RFValue(264.9)}px;
`;


export const ContainerButton = styled.View`
    padding-top: ${RFValue(25)}px;
    align-items: center;
`;