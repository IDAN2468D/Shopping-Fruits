import React from 'react';
import { View, Text, Image, StyleSheet, AppRegistry } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Swiper from 'react-native-swiper';



function HeaderComputer({ item }) {
    return (
        <View style={{ height: 300 }}>
            <Swiper
                showsButtons={true}
                loop={true}
                horizontal={true}
                autoplay={true}
            >
                <View style={styles.slide1}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_1 }} />
                </View>
                <View style={styles.slide2}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_2 }} />
                </View>
                <View style={styles.slide3}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_3 }} />
                </View>
                <View style={styles.slide3}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_4 }} />
                </View>
                <View style={styles.slide3}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_5 }} />
                </View>
                <View style={styles.slide3}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_6 }} />
                </View>
                <View style={styles.slide3}>
                    <Image style={{ width: SIZES.width, height: 300 }} resizeMode="cover" source={{ uri: item.img_7 }} />
                </View>
            </Swiper>
        </View>
    )
}

AppRegistry.registerComponent('myproject', () => HeaderComputer)

const styles = StyleSheet.create({
    slide1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default HeaderComputer
