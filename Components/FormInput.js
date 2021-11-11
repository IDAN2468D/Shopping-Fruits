import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

function FormInput({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) {
    return (
        <View style={{ ...containerStyle }}>
            {/* Label & Error msg*/}
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={{ color: COLORS.black, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>
            {/* TextInputs */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    borderWidth: 1,
                    borderColor: COLORS.black,
                }}
            >
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}

export default FormInput
