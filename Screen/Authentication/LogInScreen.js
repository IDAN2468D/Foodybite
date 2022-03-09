import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthLayout from '../../Screen/Authentication/AuthLayout';
import { COLORS, FONTS, SIZES, icons } from '../../StyleGuide';
import { utils } from '../../utils';
import FormInput from '../../Components/FormInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native'
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';


function LogInScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const navigation = useNavigation();


    function isEnableSignInEmail() {
        return email != "" && emailError == "" && password != "" && passwordError == ""
    }

    return (
        <AuthLayout label="Foodybite">
            <View style={{ position: 'absolute', top: 200, left: 0, right: 0 }}>
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
                <FormInput
                    placeholder="Password"
                    autoCompleteType="password"
                    secureTextEntry={!showPss}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={emailError}
                    inputStyle={{
                        ...FONTS.h2,
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20, justifyContent: 'center', }}>
                                <Icon name={passwordError ? "key" : "unlock-alt"} size={30} color={COLORS.white} />
                            </View>
                        </View>
                    }
                />
                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 35, justifyContent: "flex-start" }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                            Forgot Password?
                        </Text>
                    </View>
                </TouchableOpacity>
                <Button
                    buttonText="Login"
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
                    onPress={() => navigation.navigate("Home")}
                />
                <TouchableOpacity onPress={() => navigation.navigate("SingUpScreen")}>
                    <View style={{ flexDirection: 'row', marginVertical: 30, justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                            Create New Account
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", bottom: 60, left: 110 }}>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                navigation.navigate("Home")
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
            </View>
        </AuthLayout>
    )
}

export default LogInScreen
