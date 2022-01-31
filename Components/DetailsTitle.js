import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS } from '../StyleGuide';
import { useNavigation } from '@react-navigation/native'


function DetailsTitle({ name }) {


    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingHorizontal: 10, justifyContent: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Icon name="percent" size={25} color={COLORS.red} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10, justifyContent: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Icon name="bell" size={25} color={COLORS.BlueMartina} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 110, }}>
                <Text style={{ ...FONTS.h1, fontWeight: "bold", color: COLORS.white }}>{name}</Text>
            </View>
        </View>

    )
}

export default DetailsTitle
