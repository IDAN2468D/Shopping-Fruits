import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, FlatList } from 'react-native';
import Button from '../Components/Button';
import { COLORS, FONTS, SIZES } from '../constants';

const favouriteURL = "http://192.168.1.102:3001/shop";


function Favourite() {

    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [favourite, setFavourite] = useState([])

    useEffect(() => {
        fetch(favouriteURL)
            .then((response) => response.json())
            .then((json) => setFavourite(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={favourite}
                    initialNumToRender={4}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Details", { itemId: item })}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, borderWidth: 2, borderColor: COLORS.lightGray }}>
                                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: SIZES.radius }} />
                                    <View style={{ flex: 1, paddingHorizontal: 15, }}>
                                        <Text style={{ ...FONTS.h3, fontWeight: "bold", color: COLORS.black, }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ paddingVertical: 6, color: COLORS.gray }}>Pick up from organic farms</Text>
                                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                                            <Button
                                                buttonText="-"
                                                containerStyle={{
                                                    backgroundColor: COLORS.white,
                                                    width: 30,
                                                    height: 30,
                                                    alignItems: 'center',
                                                    borderWidth: 1,
                                                    borderColor: COLORS.black,
                                                    borderRadius: SIZES.base,
                                                }}
                                                onPress={() => setCount(count - 1)}
                                            />
                                            <Text style={{ paddingHorizontal: 10, ...FONTS.h3, fontWeight: "bold" }}>{count}</Text>
                                            <Button
                                                buttonText="+"
                                                containerStyle={{
                                                    backgroundColor: COLORS.white,
                                                    width: 30,
                                                    height: 30,
                                                    alignItems: 'center',
                                                    borderWidth: 1,
                                                    borderColor: COLORS.black,
                                                    borderRadius: SIZES.base
                                                }}
                                                onPress={() => setCount(count + 1)}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{ color: COLORS.black, ...FONTS.h3, fontWeight: "bold" }}>{item.price} Per/ kg</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            )}
        </View>
    )
}

export default Favourite
