import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
  background-color: ${theme.COLORS.Whiteffffff};
  justify-content: center;
`;


export const ContainerHeader = styled.View`
  height: ${RFPercentage(4)}%;
  justify-content: flex-end;
`;
ContainerHeader.Text = styled.Text`
  font-family: ${theme.FONTS.Popp500};
  font-size: ${RFValue(30)}px;
  width: ${RFValue(298)}px;
`;
ContainerHeader.SubText = styled.Text`
  font-family: ${theme.FONTS.Popp400};
  font-size: ${RFValue(16)}px;
  color: ${theme.COLORS.Gray868686};
  width: ${RFValue(280)}px;
`;


export const ContainerInputs = styled.View`
  padding-top: ${RFValue(9)}px;
`;


export const ContainerClicks = styled.View` 
  justify-content: space-around;
  align-items: center;
  height: ${RFPercentage(4)}%;
`;
ContainerClicks.Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.FONTS.Popp300};
  color: ${theme.COLORS.Gray65E5959};
`;
ContainerClicks.Container = styled.View`
  flex-direction: row;
  width: ${RFPercentage(14)}%;
  justify-content: space-evenly;
`;
ContainerClicks.Container.Text1 = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.FONTS.Popp300};
  color: ${theme.COLORS.Gray65E5959};
`;
ContainerClicks.Container.Text2 = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.FONTS.Popp500};
  color: ${theme.COLORS.YellowEEA734};
`;


export const ContainerFooter = styled.View` 
  align-items: center;
  justify-content: space-around;
  height: ${RFPercentage(3)}%;
`;
ContainerFooter.Text = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.FONTS.Popp400};
`;
ContainerFooter.Touchable = styled.TouchableOpacity`
  border-radius: ${RFValue(4)}px;
  background-color: ${theme.COLORS.Blue4285F4};
  width: ${RFValue(300)}px;
  height: ${RFValue(37)}px;
`;
ContainerFooter.Touchable.View = styled.View`
  flex-direction: row;
  width: ${RFPercentage(15)}%;
  justify-content: flex-start;
`;