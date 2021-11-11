import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES } from '../constants';

function TabBarScreen({ focused, icon, label }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.lightGreen : COLORS.lightGray2
                }}
            />
            <Text
                style={{
                    color: focused ? COLORS.lightGreen : COLORS.lightGray2,
                    fontSize: SIZES.h4,
                    marginTop: 4
                }}
            >
                {label}
            </Text>
        </View>
    )
}

export default TabBarScreen
