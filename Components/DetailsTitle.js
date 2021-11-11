import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../constants';


function DetailsTitle({ name }) {
    return (
        <View style={{
            flexDirection: "row",

        }}
        >
            <Text
                style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                    fontWeight: "bold",
                }}
            >
                {name}
            </Text>
        </View>
    )
}

export default DetailsTitle
