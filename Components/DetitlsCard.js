import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { COLORS, FONTS, SIZES } from '../StyleGuide';
import Icon from 'react-native-vector-icons/FontAwesome';


const windowWidth = Dimensions.get('window').width;

function DetitlsCard({ item }) {

    return (
        <View
            style={{
                width: windowWidth,
                marginVertical: 10,
                flexDirection: 'row',
                paddingRight: 20,
                justifyContent: "flex-end"
            }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ ...FONTS.body2, color: COLORS.BlueButton }}>{item.name}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.BlueButton }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: 'row', position: "absolute", left: 25, top: 10, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.gray2, borderRadius: 10, }}>
                <Text style={{ ...FONTS.body3, color: COLORS.black, paddingHorizontal: 5, }}>{item.DiscountPercentages} </Text>
                <Icon name="star" color={COLORS.Star} size={22} />
            </View>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 50 }} />
        </View>
    )
}

export default DetitlsCard;
