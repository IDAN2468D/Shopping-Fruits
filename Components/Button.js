import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';

function Button({ buttonText, onPress, containerStyle, StyleText, disabled }) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View
                style={{ ...containerStyle }}>
                <Text style={{ ...StyleText }}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button
