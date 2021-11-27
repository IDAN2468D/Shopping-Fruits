import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { Button } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;

const backgroundColor = isLight => (isLight ? '#69A03A' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? COLORS.transparentBlack10 : COLORS.transparentDarkGray_2;
    } else {
        backgroundColor = selected ? COLORS.white : COLORS.transparentDark;
    }
    return (
        <View
            style={{
                width: 10,
                height: 10,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 30,
            }}
        />
    );
};


const Done = ({ isLight, ...props }) => (
    <Button
        title={'Get Started'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
            borderRadius: SIZES.base,
            marginHorizontal: 10,
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 80,
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
);


const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button
        title={'Skip'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
            borderRadius: SIZES.base,
            marginHorizontal: 10,
            width: 100,
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    >
        {skipLabel}
    </Button>
);


const Next = ({ isLight, ...props }) => (
    <Button
        title={'Next'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
            borderRadius: SIZES.base,
            marginHorizontal: 10,
            width: 100,
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
);

function OnBording({ navigation }) {
    return (
        <Onboarding
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            bottomBarColor="white"
            containerStyles={{ width: windowWidth }}
            titleStyles={{ color: 'black' }}
            onDone={() => navigation.navigate("SignIn")}
            onSkip={() => navigation.navigate("SignIn")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.OnBording_1} />,
                    title: 'E Shopping',
                    subtitle: 'Explore  top organic fruits & grab them',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.OnBording_2} />,
                    title: 'Delivery on the way',
                    subtitle: 'Get your order by speed delivery',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={images.OnBording_3} />,
                    title: 'Delivery Arrived',
                    subtitle: 'Order is arrived at your Place',
                },
            ]}
        />
    )
}

export default OnBording
