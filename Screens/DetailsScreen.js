import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import HeaderComponent from '../Components/HeaderComponent';
import Button from '../Components/Button';

function DetailsScreen({ navigation, route }) {

    const [state, setstate] = useState(null)
    const { itemId } = route.params;

    useEffect(() => {
        setstate(itemId)
    }, [])

    function HeaderComponentList() {
        return (
            <View>
                <View style={{ marginTop: 10 }}>
                    <Image resizeMode="contain" style={{ width: SIZES.width, height: 420 }} source={{ uri: itemId.image }} />
                </View>
                <View style={{ marginTop: 20, marginHorizontal: 20, }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.black, fontWeight: "bold" }}>{itemId.name}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.gray, marginTop: 10, }}>{itemId.description}</Text>
                    <Text style={{ ...FONTS.h2, color: COLORS.black, marginTop: 20, fontWeight: "bold" }}>{itemId.NutritionName}</Text>
                </View>
            </View>
        )
    }

    function FooterComponentList() {
        return (
            <View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 15 }}>
                    <Text style={{ fontWeight: "bold", color: COLORS.black, ...FONTS.body2 }}>${itemId.price} Per/ kg</Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 8, }}>
                        <Text style={{ color: COLORS.black, ...FONTS.h3, textDecorationLine: "line-through" }}>{itemId.DiscountPercentages}</Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold", color: COLORS.lightGreen, ...FONTS.h3 }}>({itemId.Percentages}% Off)</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Button
                        buttonText="Buy Now"
                        containerStyle={{
                            alignItems: "center",
                            backgroundColor: COLORS.lightGreen,
                            borderRadius: SIZES.base,
                            paddingVertical: 10,
                            paddingHorizontal: 50,
                        }}
                        onPress={() => console.log("kazam")}
                    />
                </View>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >

            <FlatList
                data={state?.Nutrition}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                ListHeaderComponent={
                    HeaderComponentList()
                }
                ListFooterComponent={
                    FooterComponentList()
                }
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <HeaderComponent item={item} />
                    )
                }}

            />
        </View>
    )
}


export default DetailsScreen
