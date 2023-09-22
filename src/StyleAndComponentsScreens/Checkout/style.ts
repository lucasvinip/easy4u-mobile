import { StyleSheet } from "react-native";
import theme from "../../styles/theme";


const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.Whiteffffff,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: `center`
  },
  ContainerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  ContainerMain: {
    justifyContent: 'space-around',
    height: '44%',
  },
  ContainerFooter: {
    alignItems: 'center',
    height: '30%',
    justifyContent: 'space-evenly',
  },
  container: {
    flexDirection: 'row', // Para alinhar verticalmente as linhas
    alignItems: 'flex-start', // Para alinhar as linhas à esquerda
  },
  line: {
    backgroundColor: 'black', // Cor da linha
    position: 'absolute',
  },
  verticalLine: {
    width: 1, // Espessura da linha vertical
    height: '80%', // Altura da linha vertical (100% da altura da View)
    backgroundColor: theme.COLORS.Gray37C7C7A, // Cor da linha vertical

    right: '30%', // Posição horiz esquerda da linha vertical (aumentada para o lado direito)
  },
  horizontalLine: {
    width: '80%', // Largura da linha horizontal (100% da largura da View)
    height: 1, // Espessura da linha horizontal
    backgroundColor: theme.COLORS.Gray37C7C7A, // Cor da linha horizontal
    top: '50%', // Posição 
  },
});


export { styles }