import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES } from '../StyleGuide';

function TabBarScreen({ focused, icons }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icons}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35,
                }}
                tintColor={focused ? COLORS.BlueButton : COLORS.lightGray2}
            />
        </View>
    )
}



export default TabBarScreen
