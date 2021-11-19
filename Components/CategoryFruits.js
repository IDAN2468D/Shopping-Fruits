import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

function CategoryFruits({ item, containerStyle, onPress }) {

    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    ...containerStyle
                }}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 160, height: 100 }}
                    resizeMode="cover"
                />
                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={{ ...FONTS.h3, fontWeight: "bold", maxWidth: 150 }}>
                            {item.name}
                        </Text>
                        <Text style={{ ...FONTS.body3 }}>
                            {item.title}
                        </Text>
                        <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>
                            ₪ {item.price}
                        </Text>
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            width: 30, height: 30,
                            borderRadius: 30,
                            backgroundColor: COLORS.lightGray,
                            alignItems: "center",
                            left: 330,
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
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryFruits
