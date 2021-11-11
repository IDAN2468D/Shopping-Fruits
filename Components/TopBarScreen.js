import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

function TopBarScreen({ label, focused }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{
                    color: focused ? COLORS.white : COLORS.lightGray2,
                    ...FONTS.body3,
                    marginTop: 15,
                    backgroundColor: focused ? COLORS.OrengeLhite : COLORS.transparent,
                    padding: SIZES.base,
                    borderRadius: SIZES.radius,
                }}
            >
                {label}
            </Text>
        </View>
    )
}

export default TopBarScreen
