import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../StyleGuide';

function LogoTitle({ name }) {
    return (
        <View style={{ paddingVertical: 35 }}>
            <Text style={{ ...FONTS.h1, color: COLORS.black }}>{name}</Text>
        </View >
    )
}

export default LogoTitle
