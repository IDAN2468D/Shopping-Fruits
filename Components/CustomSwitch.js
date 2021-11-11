import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';



function CustomSwitch({ value, text, onchange }) {
    return (
        <TouchableWithoutFeedback onPress={() => onchange(!value)}>
            <View style={{ flexDirection: 'row' }}>
                {/* Switch */}
                <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
                    <View style={{ ...styles.dot, backgroundColor: value ? COLORS.white : COLORS.gray }} />
                </View>
                <Text
                    style={{
                        color: value ? COLORS.lightGreen : COLORS.gray,
                        marginLeft: SIZES.base,
                        ...FONTS.body4
                    }}
                >
                    {text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 3,
        justifyContent: 'center',
        alignItems: "flex-end",
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen,
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 3,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})

export default CustomSwitch
