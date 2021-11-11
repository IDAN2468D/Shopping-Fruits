import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZES, images, FONTS } from '../../constants';


function AuthLayout({ title, titleComponentStyle, children, description }) {
    return (
        <View style={{ flex: 1, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
            <ScrollView keyboardDismissMode="on-drag">
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flex: 1,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={images.Logo_1}
                            resizeMode="contain"
                            style={{
                                width: 221,
                                height: 166,
                            }}
                        />
                    </View>
                    <View style={{ marginTop: SIZES.padding, ...titleComponentStyle }}>
                        <Text style={{ textAlign: "center", ...FONTS.h1, color: COLORS.lightGreen, fontWeight: "bold" }}>
                            {title}
                        </Text>
                        <Text style={{ textAlign: "center", ...FONTS.h3, color: COLORS.gray }}>
                            {description}
                        </Text>
                    </View>
                    {children}
                </KeyboardAwareScrollView>
            </ScrollView>
        </View>
    )
}

export default AuthLayout
