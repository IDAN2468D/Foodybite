import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../StyleGuide';
import { useNavigation } from '@react-navigation/native';

function LogoTitle({ name }) {

    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <View style={{ paddingVertical: 35, paddingHorizontal: 20, }}>
                <Text style={{ ...FONTS.h3, fontWeight: "300", color: COLORS.CancelTitle }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LogoTitle
