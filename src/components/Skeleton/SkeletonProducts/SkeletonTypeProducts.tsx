// import { Skeleton } from '@rneui/themed';
// import { StyleSheet, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const SkeletonTypeProducts: React.FC = () => {
//   return (
//     <View style={styles.Container}>
//       <Skeleton
//         style={[styles.ContainerCard, styles.SkeletonContainerCard]}
//         animation='wave'
//         LinearGradientComponent={LinearGradient}
//       >
//         <Skeleton
//           style={[styles.CardItems, styles.SkeletonCardItems]}
//           animation='wave'
//           LinearGradientComponent={LinearGradient}
//         >
//           <View style={styles.Description}>
//             <Skeleton
//               style={[styles.Name, styles.SkeletonName]}
//               animation='wave'
//               LinearGradientComponent={LinearGradient}
//             />
//             <View style={styles.About}>
//               <Skeleton
//                 style={[styles.Title, styles.SkeletonTitle]}
//                 animation='wave'
//                 LinearGradientComponent={LinearGradient}
//               />
//               <Skeleton
//                 style={[styles.Title2, styles.SkeletonTitle]}
//                 animation='wave'
//                 LinearGradientComponent={LinearGradient}
//               />
//               <Skeleton
//                 style={[styles.Title3, styles.SkeletonTitle]}
//                 animation='wave'
//                 LinearGradientComponent={LinearGradient}
//               />
//             </View>
//             <Skeleton
//               style={[styles.TitlePrice, styles.SkeletonTitle]}
//               animation='wave'
//               LinearGradientComponent={LinearGradient}
//             />
//           </View>
//           <View style={styles.ContainerImg}>
//             <Skeleton
//               style={[styles.Img, styles.SkeletonImg]}
//               animation='wave'
//               LinearGradientComponent={LinearGradient}
//             />
//           </View>
//         </Skeleton>
//       </Skeleton>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Container: {
//     // Your existing styles for Container
//   },
//   ContainerCard: {
//     // Your existing styles for ContainerCard
//   },
//   CardItems: {
//     // Your existing styles for CardItems
//   },
//   Description: {
//     // Your existing styles for Description
//   },
//   Name: {
//     // Your existing styles for Name
//   },
//   About: {
//     // Your existing styles for About
//   },
//   Title: {
//     // Your existing styles for Title
//   },
//   Title2: {
//     // Your existing styles for Title2
//   },
//   Title3: {
//     // Your existing styles for Title3
//   },
//   TitlePrice: {
//     // Your existing styles for TitlePrice
//   },
//   ContainerImg: {
//     // Your existing styles for ContainerImg
//   },
//   Img: {
//     // Your existing styles for Img
//   },
//   // Add new styles for skeletons
//   SkeletonContainerCard: {
//     backgroundColor: '#e0e0e0', // Adjust as needed
//   },
//   SkeletonCardItems: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   SkeletonName: {
//     height: 20, // Adjust as needed
//     marginBottom: 10,
//   },
//   SkeletonTitle: {
//     height: 15, // Adjust as needed
//     marginBottom: 5,
//   },
//   SkeletonImg: {
//     width: 60, // Adjust as needed
//     height: 60, // Adjust as needed
//     borderRadius: 30, // Adjust as needed
//   },
// });

// export default SkeletonTypeProducts;
