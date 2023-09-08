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
  height: ${RFValue(34)}%;
  justify-content: flex-end;
`;
ContainerHeader.Text = styled.Text`
  font-family: ${theme.FONTS.Popp500};
  font-size: ${RFValue(30)}px;
  width: ${RFValue(298)}px;
`;
ContainerHeader.SubText = styled.Text`
  font-family: ${theme.FONTS.Popp400};
  font-size: ${RFValue(18)}px;
  color: ${theme.COLORS.Gray7868686};
`;


export const ContainerInputs = styled.View`
  padding-top: ${RFValue(8)}px;
`;


export const ContainerClicks = styled.View` 
  justify-content: space-around;
  align-items: center;
  height: ${RFValue(21)}%;
  /* background-color: green; */
`;
ContainerClicks.Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.FONTS.Popp300};
  color: ${theme.COLORS.Gray65E5959};
`;
ContainerClicks.Container = styled.View`
  flex-direction: row;
  width: ${RFValue(95)}%;
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
  height: ${RFValue(15)}%;
`;
ContainerFooter.Text = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.FONTS.Popp400};
`;
ContainerFooter.Touchable = styled.TouchableOpacity`
  border-radius: ${RFValue(4)}px;
  background-color: ${theme.COLORS.Blue4285F4};
  width: ${RFValue(310)}px;
  height: ${RFValue(37)}px;
  align-items: center;
`;
ContainerFooter.Touchable.View = styled.View`
  flex-direction: row;
  width: ${RFValue(82)}%;
  justify-content: flex-start;
`;