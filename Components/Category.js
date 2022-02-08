import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS, images } from '../StyleGuide';


const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 20;
const radius = 20;

function Category({ item, onPress }) {
    return (
        <ScrollView>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.imageStyle}
                            resizeMode="cover"
                        />
                        <View style={{ flexDirection: 'row', position: "absolute", left: 15, top: 17, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.white, borderRadius: 10, }}>
                            <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>{item.DiscountPercentages} </Text>
                            <Icon name="star" color={COLORS.Star} size={20} />
                        </View>
                        <View style={{ position: "absolute", right: 15, top: 17, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.white, borderRadius: 10, }}>
                            <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>OPEN</Text>
                        </View>
                        <View style={styles.infoStyle}>
                            <View style={{ flexDirection: 'row', position: "absolute", left: 1, top: 16 }}>
                                <Image source={images.Img_1} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 10 }} />
                                <Image source={images.Img_2} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 30 }} />
                                <Image source={images.Img_3} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 50 }} />
                                <Image source={images.Img_4} style={{ width: 35, borderRadius: 30, borderWidth: 3, borderColor: COLORS.white, height: 35, position: "absolute", left: 70 }} />
                            </View>
                            <Text style={{ fontSize: 25, fontWeight: "bold", color: COLORS.black }}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 17, color: COLORS.Search }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: deviceWidth - offset,
        alignItems: "flex-end",
        marginTop: 25,
        marginHorizontal: 10,
    },

    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: COLORS.gray2,
        height: 420,
        borderRadius: radius,
    },

    imageStyle: {
        height: 300,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        alignContent: 'center',
        alignSelf: 'center',
    },

    infoStyle: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 10,
    },
});

export default Category
