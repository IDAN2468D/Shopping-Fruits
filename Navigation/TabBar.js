import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopBarScreen from '../Components/TopBarScreen';
import Vegetables from '../Screens/Vegetables';
import Fruits from '../Screens/Fruits';
import DryFruits from '../Screens/DryFruits';
import { COLORS } from '../constants';

const Tab = createMaterialTopTabNavigator();

function TabBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    height: 70,
                    elevation: 0,
                },

                tabBarIndicatorStyle: {
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: COLORS.lightGreen,
                },
            }}
            initialRouteName={"Vegetables"}
        >
            <Tab.Screen
                name="Vegetables"
                component={Vegetables}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TopBarScreen
                            focused={focused}
                            label="Vegetables"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Fruits"
                component={Fruits}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TopBarScreen
                            focused={focused}
                            label="Fruits"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="DryFruits"
                component={DryFruits}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TopBarScreen
                            focused={focused}
                            label="Dry Fruits"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabBar;