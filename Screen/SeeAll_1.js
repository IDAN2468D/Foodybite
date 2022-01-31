import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, COLORS, images } from '../StyleGuide';
import { useNavigation } from '@react-navigation/native';



function SeeAll_1() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: COLORS.white, }}>
            <ScrollView style={styles.container}>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Italian")}>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Italian</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#FF5673', '#FF8C48']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_3} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Chinese</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#832BF6', '#FF4665']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_2} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Maxican</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#3B40FE', '#2DCEF8']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_1} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Thai</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#009DC5', '#21E590']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_4} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Arabian</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#FF870E', '#D236D2']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_5} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>Indian</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#FE327E', '#6143FF']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_6} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, left: 0, bottom: 0, zIndex: 2, color: COLORS.white, textAlign: "center" }}>American</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#2CE3F1', '#6143FF']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_7} style={{ width: "100%", height: 120, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 10,
    },
    linearGradient: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 10,
        opacity: 0.8,
    },
});

export default SeeAll_1
