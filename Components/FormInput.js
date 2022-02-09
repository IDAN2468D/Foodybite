import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, SIZES, FONTS } from '../StyleGuide';

function FormInput({
    containerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""
}) {
    return (
        <View>
            <View style={{ ...containerStyle }}>
                <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginHorizontal: 45, marginVertical: 5 }}>
                    <Text style={{ color: COLORS.red, ...FONTS.body3, fontWeight: "bold" }}>{errorMsg}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row-reverse",
                        paddingHorizontal: 10,
                        marginHorizontal: 30,
                        paddingVertical: 10,
                        marginTop: SIZES.base,
                        borderRadius: 20,
                        opacity: 0.4,
                        backgroundColor: COLORS.white,
                    }}
                >
                    {prependComponent}
                    <TextInput
                        style={{
                            flex: 1,
                            ...inputStyle
                        }}
                        placeholder={placeholder}
                        placeholderTextColor={COLORS.white}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        autoCompleteType={autoCompleteType}
                        autoCapitalize={autoCapitalize}
                        onChangeText={(text) => onChange(text)}
                    />
                    {appendComponent}
                </View>
            </View>
        </View>
    )
}

export default FormInput
