import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images } from '../StyleGuide';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

function Italian({ name }) {

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={{ width: windowWidth }}>
            <Image resizeMode="cover" source={images.Image_1} style={{ width: 500, height: 127 }} />
            <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#FF5673', '#FF8C48']}
                style={{
                    position: "absolute",
                    left: 0,
                    right: -20,
                    top: 0,
                    bottom: 0,
                    zIndex: 1,
                    opacity: 0.8,
                }}
            />
            <View style={{ position: "absolute", right: 175, bottom: 0, top: 50, zIndex: 2 }}>
                <Text style={{ ...FONTS.h1, color: COLORS.white }}>{name}</Text>
            </View>
            <Icon
                name="left"
                size={50}
                color="#fff"
                style={{ position: "absolute", right: 0, top: 40, zIndex: 2, }}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}



export default Italian
