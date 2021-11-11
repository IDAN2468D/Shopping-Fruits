import React from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Search() {

    function Alert_Search() {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    }

    return (
        <View
            style={{
                position: "absolute",
                flexDirection: "row",
                top: 50,
                height: 40,
                width: 350,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.transparentDarkGray_2,
                backgroundColor: COLORS.white,
            }}
        >
            <TouchableOpacity
                onPress={Alert_Search}>
                <Icon
                    name="search"
                    style={{ fontSize: 16, color: COLORS.gray }}
                />
            </TouchableOpacity>
            <TextInput
                style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3,

                }}
                placeholderTextColor={COLORS.gray}
                placeholder="Search Recipes"
            />
        </View>
    )
}

export default Search
