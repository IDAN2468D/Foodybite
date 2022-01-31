import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FONTS } from '../StyleGuide';
import LinearGradient from 'react-native-linear-gradient';


function DetailsComponent({ item }) {

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 12, }}>
                <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#000000', 'transparent']} style={styles.linearGradient} />
                <Image resizeMode="cover" source={{ uri: item.image }} style={{ width: 120, height: 120, borderRadius: 10, }} />
                <Text style={styles.item}>{item.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    linearGradient: {
        position: "absolute",

        opacity: 1.0,
    },
    item: {
        ...FONTS.h3,
        padding: 10,
    }
});

export default DetailsComponent
