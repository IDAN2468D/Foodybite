import React from 'react';
import { View, Text } from 'react-native';
import { FONTS } from '../StyleGuide';

function Images() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ ...FONTS.h1 }}>Images</Text>
        </View>
    )
}

export default Images;
