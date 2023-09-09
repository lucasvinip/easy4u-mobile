// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import theme from '../../styles/theme';
// import { RFValue } from 'react-native-responsive-fontsize';

// // import { Container } from './styles';

// interface TextHeaderProps {
//     widthText: number,
//     widthSubText: number,
//     heigh: number,
//     text: string,
//     subText: string
// };

// const TextHeader = ({
//     widthText,
//     heigh,
//     widthSubText,
//     text,
//     subText
// }: TextHeaderProps) => {
//     const styles = StyleSheet.create({
//         ContainerHeader: {
//             height: RFValue(heigh),
//             alignItems: 'center',
//             justifyContent: 'flex-end'
//         },
//         Text: {
//             width: RFValue(widthText),
//             fontFamily: theme.FONTS.Popp500,
//             fontSize: RFValue(30)
//         },
//         SubText: {
//             fontFamily: theme.FONTS.Popp400,
//             fontSize: RFValue(16),
//             color: theme.COLORS.Gray7868686,
//             width: RFValue(widthSubText)
//         }
//     });

//     return (
//         <View style={styles.ContainerHeader}>

//             <Text style={styles.Text}>{text}</Text>
//             <Text style={styles.SubText}>{subText}</Text>

//         </View>
//     );
// }

// export default TextHeader;