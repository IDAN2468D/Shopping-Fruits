import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';

const appliancesURL = "http://192.168.1.102:3001/appliances";


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
                        Vegetables
                    </Text>
                    <Text
                        style={{
                            marginLeft: SIZES.base,
                            marginVertical: SIZES.base,
                            color: COLORS.lightGreen,
                            ...FONTS.body3,
                        }}>
                        (50% Off)
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

function Vegetables() {

    //const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true)
    const [fruits, setFruits] = useState([])

    useEffect(() => {
        fetch(appliancesURL)
            .then((response) => response.json())
            .then((json) => setFruits(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={fruits}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            )}
        </View>
    )
}

function Fruits() {

    return (
        <ScrollView>
            <View style={{ backgroundColor: COLORS.white, }}>
                {renderHeader()}
                {Vegetables()}
            </View>
        </ScrollView>
    )
}

export default Fruits
