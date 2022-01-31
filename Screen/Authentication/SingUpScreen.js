import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../StyleGuide';
import AuthLayout_2 from './AuthLayout_2';
import FormInput from '../../Components/FormInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../Components/Button';
import { utils } from '../../utils';
import { useNavigation } from '@react-navigation/native'


function SingUpScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPss, setShowPss] = useState(false)
    const navigation = useNavigation();

    function isEnableSignInEmail() {
        return email != "" && emailError == "" && name != "" && nameError == "" && password != "" && passwordError == ""
    }

    return (
        <AuthLayout_2 label="Foodybite">
            <View style={{ position: 'absolute', top: 340, left: 0, right: 0 }}>
                <FormInput
                    placeholder="name"
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateName(value, setNameError)
                        setName(value)
                    }}
                    errorMsg={nameError}
                    inputStyle={{
                        ...FONTS.h2,
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20 }}>
                                <Icon name="user" size={30} color={COLORS.black} />
                            </View>
                        </View>
                    }
                />
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
                    autoCompleteType='password'
                    errorMsg={passwordError}
                    inputStyle={{
                        ...FONTS.h2,
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20, }}>
                                <Icon name={passwordError ? "key" : "unlock-alt"} size={30} color={COLORS.white} />
                            </View>
                        </View>
                    }
                />
                <FormInput
                    placeholder="Confirm Password"
                    autoCompleteType="password"
                    secureTextEntry={!showPss}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={emailError}
                    autoCompleteType='password'
                    errorMsg={passwordError}
                    inputStyle={{
                        ...FONTS.h2,
                        fontWeight: 'bold',
                        textDecorationLine: "none"
                    }}
                    appendComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginHorizontal: 20, }}>
                                <Icon name={passwordError ? "key" : "unlock-alt"} size={30} color={COLORS.white} />
                            </View>
                        </View>
                    }
                />
                <Button
                    buttonText="Register"
                    disabled={isEnableSignInEmail() ? false : true}
                    containerStyle={{
                        paddingVertical: 25,
                        marginHorizontal: 30,
                        alignItems: "center",
                        marginTop: 80,
                        borderRadius: 15,
                        backgroundColor: isEnableSignInEmail() ? COLORS.Purple : COLORS.blue,
                    }}
                    StyleText={{
                        color: COLORS.white,
                        ...FONTS.h2,
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
                <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>
                        Already have an account?
                    </Text>
                    <Button buttonText="Login"
                        containerStyle={{ marginRight: 4 }}
                        StyleText={{ ...FONTS.body2, color: COLORS.blue, fontWeight: "bold" }}
                        onPress={() => navigation.navigate("LoginScreen")}
                    />
                </View>
            </View>
        </AuthLayout_2>
    )
}

export default SingUpScreen
