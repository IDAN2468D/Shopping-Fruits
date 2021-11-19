import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

function CategoryCard({ containerStyle, categiryItem, onPress, item }) {

    const [isFavourite, setIsFavourite] = useState(false)


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    alignItems: "flex-start",
                    marginTop: 10,
                    borderRadius: SIZES.radius,
                    ...containerStyle
                }}
                onPress={onPress}
            >
                <Image source={{ uri: categiryItem.image }}
                    resizeMode="cover"
                    style={{
                        width: 120,
                        height: 150,
                        borderRadius: SIZES.radius,
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                        width: 30, height: 30,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: "center",
                        left: 80,
                        top: 5,
                    }}
                >
                    <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                        <Icon name={isFavourite ? "heart" : "hearto"}
                            style={{
                                fontSize: 20,
                                color: isFavourite ? COLORS.red : COLORS.gray,
                                top: 5,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 60,
                    }}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                        {categiryItem.name}
                    </Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
                        $ {categiryItem.price} Per/ kg
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard