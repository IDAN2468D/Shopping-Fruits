import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import Button from '../../Components/Button';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import AuthLayout from './AuthLayout';
import FormInput from '../../Components/FormInput';
import { utils } from '../../utils'


function ForgetPassword({ navigation }) {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")


    return (
        <AuthLayout
            title="Password Recovery"
            description="please enter yore email address to recover your password"
        >
            <FormInput
                label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                containerStyle={{
                    marginTop: SIZES.base,
                }}
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
            <Button
                buttonText="Send Email"
                containerStyle={{
                    marginTop: 40,
                    paddingVertical: 20,
                    paddingHorizontal: 60,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.lightGreen : COLORS.transparentBlack1,
                }}
                onPress={() => navigation.goBack()}
            />
        </AuthLayout>
    )
}

export default ForgetPassword
