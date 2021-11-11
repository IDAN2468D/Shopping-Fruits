import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../constants';

function LogoMyAccount({ name, email, containerStyle }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 65, }}>
                    <Image source={images.Avatar} resizeMode="contain" style={{ width: 100, height: 100, borderRadius: 30 }} />
                    <Text style={{ ...FONTS.body2, color: COLORS.white, textAlign: "center" }}>{name}</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.white, textAlign: "center" }}>{email}</Text>
                </View>
            </View>
        </View>
    )
}

export default LogoMyAccount
