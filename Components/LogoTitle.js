import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons, FONTS, SIZES } from '../constants';

function LogoTitle({ name }) {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
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
                <View style={{ paddingHorizontal: 300 }}>
                    <TouchableOpacity onPress={() => console.log("Navigtions")}>
                        <Image
                            source={icons.Navigtions}
                            style={{
                                width: 20,
                                height: 20,
                                alignItems: "flex-end",
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default LogoTitle
