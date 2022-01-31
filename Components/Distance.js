import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, FONTS, icons } from '../StyleGuide';


function Distance() {

    const [range, setRange] = useState("50%");

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ ...FONTS.body1, fontWeight: "bold" }}>{range}</Text>
            </View>
            <Slider
                style={{ width: 470, height: 50 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='blue'
                maximumTrackTintColor='#000'
                thumbTintColor="blue"
                value={.5}
                thumbImage={icons.GpsIcon}
                onValueChange={value => setRange(parseInt(value * 100) + "%")}
            />
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, }}>
                <Text style={{ ...FONTS.body2 }}>100</Text>
                <Text style={{ ...FONTS.body2 }}>0</Text>
            </View>
        </View>
    )
}

export default Distance;
