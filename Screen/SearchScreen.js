import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Category from '../Components/Category';
import { COLORS, FONTS } from '../StyleGuide';
import Icon from 'react-native-vector-icons/AntDesign';

const windowHeight = Dimensions.get('window').height;

function Search() {

    const navigation = useNavigation();
    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState("")

    const fetchPost = () => {
        const apiURL = "https://rocky-lake-73739.herokuapp.com/shop";
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setfilterData(responseJson)
                setmasterData(responseJson)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const serchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setSearch(text);
        } else {
            setfilterData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <Category
                item={item}
                onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
            />
        )
    }

    return (
        <View style={{ height: windowHeight, paddingVertical: 30 }}>
            <View style={styles.TextInputStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="closecircle" color={COLORS.Search} size={26} style={{ paddingVertical: 10, paddingHorizontal: 170, }} />
                </TouchableOpacity>
                <TextInput
                    style={{ ...FONTS.body2 }}
                    placeholder="Happy Bones"
                    placeholderTextColor={{ ...COLORS.Search }}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => serchFilter(text)}
                />
                <Icon color={COLORS.Search} name="search1" size={30} style={{ paddingVertical: 10, paddingHorizontal: 5, }} />
            </View>
            <FlatList
                data={filterData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    TextInputStyle: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 30,
        marginVertical: 30,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        borderRadius: 10,
    }
})

export default Search
