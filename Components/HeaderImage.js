import React from 'react';
import { View, Image } from 'react-native';
import { COLORS } from '../StyleGuide';


function HeaderImage({ item }) {
    return (
        <View style={{ flexDirection: 'row', position: "absolute", left: 1, top: 16 }}>
            <Image source={{ uri: item.Fat }} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 10 }} />
            <Image source={{ uri: item.Potassium }} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 30 }} />
            <Image source={{ uri: item.Selenium }} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 50 }} />
            <Image source={{ uri: item.VitaminB9 }} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 70 }} />
        </View>
    )
}

export default HeaderImage
