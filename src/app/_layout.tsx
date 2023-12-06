import { Stack, Tabs } from 'expo-router';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import theme from '../styles/theme';
import { AppTexts } from '../assets/strings';
import CustomHeaderTitle from '../components/CustomHeaderTitle/CustomHeaderTitle';

const Layout = () => {
    return (
        <Provider store={store}>
            <Stack initialRouteName='index'>
                <Stack.Screen
                    name='index'
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ForgotPassword'
                    options={{
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Forgot_my_Password.toLocaleUpperCase()} padding={5.5} />),
                        headerTitleAlign: 'center',

                    }}
                />
                <Stack.Screen
                    name='CreateAccount'
                    options={{
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Create_a_Account.toLocaleUpperCase()} padding={5.5} />),
                        headerTitleAlign: 'center',

                    }}
                />
                <Stack.Screen
                    name='product/[id]'
                    options={{
                        headerTransparent: true,
                        title: '',
                        headerTintColor: theme.COLORS.Orange2FFA24B,
                    }}
                />
                <Stack.Screen
                    name='(drawer)'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='ShoppingCart'
                    options={{
                        headerStyle: { backgroundColor: '#ffffff40' },
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Shopping_Cart.toLocaleUpperCase()} padding={5.5} />),
                        headerTitleAlign: 'center',
                        presentation: 'formSheet'
                    }}
                />

                <Stack.Screen
                    name='ProfileSetting'
                    options={{
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Profile_Settings.toLocaleUpperCase()} padding={5.5} textWith={200} />),
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='Orders'
                    options={{
                        headerStyle: { backgroundColor: '#ffffff40' },
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Orders.toLocaleUpperCase()} padding={5.5} textWith={200} />),
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='FavoriteItems'
                    options={{
                        headerStyle: { backgroundColor: '#ffffff40' },
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Favorites.toLocaleUpperCase()} padding={5.5} textWith={200} />),
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='FullOrder'
                    options={{
                        headerStyle: { backgroundColor: '#ffffff40' },
                        headerTransparent: true,
                        headerTitleAlign: 'center',
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name='Checkout'
                    options={{
                        headerTransparent: true,
                        headerTitle: () => (
                            <CustomHeaderTitle title={AppTexts.Payment.toLocaleUpperCase()} padding={5.5} />),
                        headerTitleAlign: 'center',
                        presentation: 'formSheet'
                    }}
                />
            </Stack>
        </Provider>

    );
}

export default Layout;