import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import AuthLayout from '../Authentication/AuthLayout';
import { utils } from '../../utils';

import Button from '../../Components/Button';
import CustomSwitch from '../../Components/CustomSwitch';
import FormInput from '../../Components/FormInput';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import { SIZES, COLORS, FONTS, icons } from '../../constants';

function SignIn({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPass, setShowPassword] = useState(false)
    const [saveMe, setSaveMe] = useState(false)

    function isEnableSignInEmail() {
        return email != "" && password != "" && passwordError == ""
    }

    return (
        <AuthLayout
            title="Fruit Market"
            description="SignIn"
        >
            <View style={{ flex: 1, }}>
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ? icons.Correct : icons.Cancel}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.darkGreen : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: 25,
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: "flex-end",
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPassword(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.Eye : icons.CloseEye}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, justifyContent: "space-between", }}>
                    <CustomSwitch text="Save Me" value={saveMe} onchange={(value) => setSaveMe(value)} />
                    <Button
                        buttonText="Forget Password"
                        StyleText={{
                            color: COLORS.gray, ...FONTS.h3,
                        }}
                        onPress={() => navigation.navigate("ForgetPassword")}
                    />
                </View>
                <Button
                    buttonText="Sign In"
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignInEmail() ? COLORS.lightGreen : COLORS.transparentBlack1,
                    }}
                    StyleText={{
                        color: COLORS.white
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.h3 }}>
                        Don't have an account?
                    </Text>
                    <Button
                        buttonText="Sign Up"
                        containerStyle={{ marginLeft: 3 }}
                        StyleText={{
                            ...FONTS.h4,
                            color: COLORS.darkGreen,
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
                <View style={{ marginTop: SIZES.radius, alignItems: "center" }}>
                    <LoginButton
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            console.log(data.accessToken.toString())
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => navigation.navigate("SignIn")} />
                </View>
            </View>
        </AuthLayout>
    )
}

export default SignIn
