import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons, FONTS, SIZES } from '../constants';
import Search from '../Components/Search';

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
                <View style={{ paddingHorizontal: 230 }}>
                    <TouchableOpacity onPress={() => console.log("Navigtions")}>
                        <Image
                            source={icons.Navigtions}
                            style={{
                                width: 17,
                                height: 17,
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
