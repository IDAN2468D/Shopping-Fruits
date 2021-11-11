import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import { FONTS } from '../constants';

function HeaderComponent({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.Fat}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.Potassium}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.Selenium}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.VitaminB9}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.VitaminA}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.VitaminK}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.Zinc}
            </Text>
            <Text style={styles.item}>
                <Icon name="chevron-right" size={20} />{item.Phosphorous}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    item: {
        ...FONTS.h3,
        padding: 10,
    }
});

export default HeaderComponent
