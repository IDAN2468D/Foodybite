import React, { useState } from 'react';
import { View, Text } from 'react-native';
import FormInput from '../../Components/FormInput';
import { COLORS, FONTS } from '../../StyleGuide';
import AuthLayout_3 from './AuthLayout_3';
import Icon from 'react-native-vector-icons/FontAwesome';
import { utils } from '../../utils';
import Button from '../../Components/Button';



function ForgetPassword({ navigation }) {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    function isEnableSignInEmail() {
        return email != "" && emailError == ""
    }


    return (
        <AuthLayout_3 label="Forgot Password" >
            <View style={{ position: "absolute", alignItems: 'center', top: 150, left: 0, right: 0, right: 0 }}>
                <Text style={{ ...FONTS.body3, color: COLORS.white, textAlign: "center", maxWidth: 350 }}>
                    Enter your email and will send
                    you instructions on how to reset it
                </Text>
                <View style={{ position: 'absolute', top: 100, left: 0, right: 0 }}>
                    <FormInput
                        placeholder="Email"
                        autoCompleteType='email'
                        onChange={(value) => {
                            utils.validateEmail(value, setEmailError)
                            setEmail(value)
                        }}
                        inputStyle={{
                            ...FONTS.h2,
                            fontWeight: 'bold',
                            textDecorationLine: "none"
                        }}
                        errorMsg={emailError}
                        appendComponent={
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <View style={{ marginHorizontal: 20 }}>
                                    <Icon name="envelope" size={30} color={COLORS.white} />
                                </View>
                            </View>
                        }
                    />
                    <Button
                        buttonText="Send"
                        disabled={isEnableSignInEmail() ? false : true}
                        containerStyle={{
                            paddingVertical: 20,
                            marginHorizontal: 30,
                            alignItems: "center",
                            marginTop: 100,
                            borderRadius: 15,
                            backgroundColor: isEnableSignInEmail() ? COLORS.Purple : COLORS.blue,
                        }}
                        StyleText={{
                            color: COLORS.white,
                            ...FONTS.h2,
                        }}
                        onPress={() => navigation.navigate("LoginScreen")}
                    />
                </View>
            </View>

        </AuthLayout_3>
    )

}

export default ForgetPassword;
