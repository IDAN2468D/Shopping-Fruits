import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BookingIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS } from '../constants';

const bookIcon = (<BookingIcon name="shopping-bag" size={25} />)
const bookIcon_2 = (<BookingIcon name="heart" size={25} />)
const bookIcon_3 = (<BookingIcon name="cog" size={25} />)
const bookIcon_4 = (<BookingIcon name="shopping-cart" size={25} />)
const bookIcon_5 = (<BookingIcon name="star" size={25} />)
const bookIcon_6 = (<BookingIcon name="share-alt" size={25} />)
const bookIcon_7 = (<BookingIcon name="question-circle" size={25} />)
const bookIcon_8 = (<BookingIcon name="sign-out" size={25} />)

const DATA = [
    {
        id: 1,
        name: "My Orders",
        icon: bookIcon
    },
    {
        id: 2,
        name: "Favourites",
        icon: bookIcon_2
    },
    {
        id: 3,
        name: "Settings",
        icon: bookIcon_3
    },
    {
        id: 4,
        name: "My Cart",
        icon: bookIcon_4
    },
    {
        id: 5,
        name: "Rate us",
        icon: bookIcon_5
    },
    {
        id: 6,
        name: "Refer a Friend",
        icon: bookIcon_6
    },
    {
        id: 7,
        name: "Help",
        icon: bookIcon_7
    },
    {
        id: 8,
        name: "Log Out",
        icon: bookIcon_8
    }
]


const Item = ({ item, onPress, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Image source={bookIcon} />
        <Text style={[styles.title, textColor]}>{item.icon}  {item.name}</Text>
    </TouchableOpacity>
);

function MyAccount() {

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {

        const color = item.id === selectedId ? '#69A03A' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.lightLime
    },
    title: {
        ...FONTS.body2
    },
});

export default MyAccount
