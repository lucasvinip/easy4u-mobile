import { Skeleton } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';



const SkeletonProducts = () => {
    return (
        <View style={styles.container}>
            <Skeleton style={{borderRadius: 50, width: 50, height: 50}}/>
            <View style={{width: 50, height: 50, gap: 20}}>
                <Skeleton circle/>
                <Skeleton circle/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 345,
        height: 132,
        marginBottom: 37,
        borderRadius: 15,
        gap: 20,
        flexDirection: "row"
    },
    skl_productImage: {

    },

})

export default SkeletonProducts