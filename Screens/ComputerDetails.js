import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import HeaderComputer from '../Components/HeaderComputer';




function ComputerDetails({ route }) {

    const [state, setstate] = useState(null)
    const { itemId } = route.params;

    useEffect(() => {
        setstate(itemId)
    }, [])


    function FooterTextList() {
        return (
            <View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>{itemId.title}</Text>
                    <Text style={{ ...FONTS.h1, color: COLORS.black, fontWeight: "bold", maxWidth: 250 }}>{itemId.name}</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.black, paddingVertical: 10 }}>₪ {itemId.price}</Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.black, maxWidth: 350 }}>{itemId.description}</Text>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ ...FONTS.body2, color: COLORS.black }}>Colour Shown: {itemId.ColourShown}</Text>
                        <Text style={{ ...FONTS.body2, color: COLORS.black }}>Style: {itemId.Style}</Text>
                        <Text style={{ ...FONTS.body2, color: COLORS.black }}>Contry/Region of Origin: {itemId.Country}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
            }}
        >
            <FlatList
                data={state?.imageDetails}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                ListFooterComponent={
                    FooterTextList()
                }
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <HeaderComputer item={item} />
                    )
                }}
            />
        </View>
    )
}

export default ComputerDetails
