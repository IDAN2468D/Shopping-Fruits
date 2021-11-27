import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import CategoryCard from '../Components/CategoryCard';

const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";
const foodURL = "https://rocky-lake-73739.herokuapp.com/foods";

function renderHeader() {

    return (
        <View style={{
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
            height: 40,
        }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h2,

                        }}>
                        Organic Vegetables
                    </Text>
                    <Text
                        style={{
                            marginLeft: SIZES.base,
                            marginVertical: SIZES.base,
                            color: COLORS.lightGreen,
                            ...FONTS.body3,
                        }}>
                        (20% Off)
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 3,
                        color: COLORS.black,
                        ...FONTS.body3,
                    }}
                >
                    Pick up from organic farms
                </Text>
            </View>
        </View>
    )
}


function MixedVegetablesPack() {

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true)
    const [shop, setShop] = useState([])

    useEffect(() => {
        fetch(shopURL)
            .then((response) => response.json())
            .then((json) => setShop(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={shop}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CategoryCard
                                categiryItem={item}
                                containerStyle={{
                                    marginHorizontal: SIZES.base,
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                item={item}
                                onPress={() => navigation.navigate('Details', { itemId: item })}
                            />
                        )
                    }}
                />
            )}
        </View>
    )
}

function MixedVegetablesPackHeader() {
    return (
        <View style={{
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
            height: 40,
        }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h2,

                        }}>
                        Mixed Vegetables Pack
                    </Text>
                    <Text
                        style={{
                            marginLeft: SIZES.base,
                            marginVertical: SIZES.base,
                            color: COLORS.lightGreen,
                            ...FONTS.body3,
                        }}>
                        (10% Off)
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 3,
                        color: COLORS.black,
                        ...FONTS.body3,
                    }}
                >
                    Vegetable mix fresh pack
                </Text>
            </View>
        </View>
    )
}

function renderItem() {

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true)
    const [food, setFood] = useState([])

    useEffect(() => {
        fetch(foodURL)
            .then((response) => response.json())
            .then((json) => setFood(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={food}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CategoryCard
                                categiryItem={item}
                                containerStyle={{
                                    marginHorizontal: SIZES.base,
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                item={item}
                                onPress={() => navigation.navigate('Details', { itemId: item })}
                            />
                        )
                    }}
                />
            )}
        </View>
    )
}

function Vegetables() {
    return (
        <ScrollView>
            <View>
                {renderHeader()}
                {MixedVegetablesPack()}
                {MixedVegetablesPackHeader()}
                {renderItem()}
            </View>
        </ScrollView>
    )
}

export default Vegetables
