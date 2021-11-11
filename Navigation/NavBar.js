import React from 'react';
import { COLORS, icons } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ShoppingCart from '../Screens/ShoppingCart';
import Favourite from '../Screens/Favourite';
import MyAccount from '../Screens/MyAccount';
import LogoMyAccount from '../Components/LogoMyAccount';
import TabBarScreen from '../Components/TabBarScreen';
import LogoTitle from '../Components/LogoTitle';
import DetailsTitle from '../Components/DetailsTitle';

const Tab = createBottomTabNavigator();

function NavBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icon={icons.home}
                            focused={focused}
                            label="HomeScreen"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.lightGreen,
                        height: 114,
                    },
                    headerTitle: (props) => <LogoTitle name="Fruit Market" {...props} />
                }}
            />
            <Tab.Screen
                name="ShoppingCart"
                component={ShoppingCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icon={icons.shops}
                            focused={focused}
                            label="ShoppingCart"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.lightGreen,
                        height: 60,
                    },
                    headerTitle: (props) => <DetailsTitle name="ShoppingCart" {...props} />

                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icon={icons.heart}
                            focused={focused}
                            label="Favourite"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.lightGreen,
                        height: 60,
                    },
                    headerTitle: (props) => <DetailsTitle name="Favourite" {...props} />
                }}
            />
            <Tab.Screen
                name="MyAccount"
                component={MyAccount}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icon={icons.users}
                            focused={focused}
                            label="MyAccount"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.lightGreen,
                        height: 200,
                    },
                    headerTitle: (props) => <LogoMyAccount name="Manish Chutake" email="manishuxuid@gmail.com" {...props} />
                }}
            />
        </Tab.Navigator >
    )
}

export default NavBar
