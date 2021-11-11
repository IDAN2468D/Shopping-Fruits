import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import FormInput from '../../Components/FormInput';
import { utils } from '../../utils';
import Button from '../../Components/Button';
import AuthLayout from '../Authentication/AuthLayout';


function SignUp({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPass, setShowPassword] = useState(false)

    function isEnableSignUpEmail() {
        return email != "" && name != "" && nameError == "" && password != "" && passwordError == ""
    }

    return (
        <AuthLayout title="Fruit Market" description="SignUp">
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
                <FormInput
                    label="Name"
                    keyboardType="default"
                    autoCompleteType="name"
                    containerStyle={{
                        marginTop: 25,
                    }}
                    onChange={(value) => {
                        utils.validateName(value, setNameError)
                        setName(value)
                    }}
                    errorMsg={nameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={name == "" || (name != "" && nameError == "") ? icons.Correct : icons.Cancel}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: name == "" ? COLORS.gray : (name != "" && nameError == "") ? COLORS.darkGreen : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <Button
                    buttonText="Sign Up"
                    disabled={isEnableSignUpEmail() ? false : true}
                    containerStyle={{
                        paddingVertical: 20,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUpEmail() ? COLORS.lightGreen : COLORS.transparentBlack1,
                    }}
                    StyleText={{
                        color: COLORS.black
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp
