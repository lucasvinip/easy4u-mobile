import { Stack } from 'expo-router';
import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomHeaderTitle from '../components/CustomHeaderTitle/CustomHeaderTitle';

const Layout = () => {
    return (
        <Stack initialRouteName='index'>
            <Stack.Screen
                name='index'
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ForgotPassword'
                options={{
                    headerTransparent: true,
                    headerTitle: (props) => (
                        <CustomHeaderTitle title={AppTexts.Forgot_my_Password.toLocaleUpperCase()} padding={5.5}/>),
                    headerTitleAlign: 'center',
                    
                }}
            />
            <Stack.Screen
                name='CreateAccount'
                options={{
                    headerTransparent: true,
                    headerTitle: (props) => (
                        <CustomHeaderTitle title={AppTexts.Create_a_Account.toLocaleUpperCase()} padding={5.5}/>),
                    headerTitleAlign: 'center',
                    
                }}
            />
            <Stack.Screen
                name='ProfileSetting'
                options={{
                    headerTransparent: true,
                    headerTitle: (props) => (
                        <CustomHeaderTitle title={AppTexts.Profile_Settings.toLocaleUpperCase()} textWith={200} padding={7.5}/>),
                    headerTitleAlign: 'center',
                    animationTypeForReplace:'pop',

                }}
            />
            <Stack.Screen
                name='(drawer)'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
}

export default Layout;