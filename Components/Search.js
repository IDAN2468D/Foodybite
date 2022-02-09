import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTS } from '../StyleGuide';
import { useNavigation } from '@react-navigation/native';

function Search() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    marginHorizontal: 30,
                    marginVertical: 30,
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.gray,
                    borderRadius: 10,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <Icon name="filter" color={COLORS.Search} size={25} style={{ marginHorizontal: 100 }} />
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 10, ...FONTS.body3, color: COLORS.Search }}>Find Restaurants</Text>
                <Icon color={COLORS.Search} name="search1" size={25} />
            </View>
        </TouchableOpacity >
    )
}

export default Search
