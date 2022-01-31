import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import Search from '../Components/Search';
import { COLORS, FONTS, images, SIZES } from '../StyleGuide';
import { useNavigation } from '@react-navigation/native';
import Category from '../Components/Category';
import LinearGradient from 'react-native-linear-gradient';

const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";

function Friends() {

    const navigation = useNavigation();

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.padding,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("SeeAll_2")}>
                    <Text
                        style={{
                            color: COLORS.lightGray2,
                            ...FONTS.body2,
                        }}>
                        See all (56)
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h1,
                        fontWeight: "bold",
                    }}>
                    Friends
                </Text>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Image source={images.Img_1} style={{ width: 60, height: 60, borderRadius: 50, }} />
                    <Image source={images.Img_2} style={{ width: 60, height: 60, borderRadius: 50, }} />
                    <Image source={images.Img_3} style={{ width: 60, height: 60, borderRadius: 50, }} />
                    <Image source={images.Img_4} style={{ width: 60, height: 60, borderRadius: 50, }} />
                    <Image source={images.Img_5} style={{ width: 60, height: 60, borderRadius: 50, }} />
                    <Image source={images.Img_6} style={{ width: 60, height: 60, borderRadius: 50, }} />
                </View>
            </View>
        </View>
    )
}

function CategoryComponent() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: SIZES.padding,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("SeeAll_1")}>
                    <Text
                        style={{
                            color: COLORS.lightGray2,
                            ...FONTS.body2,
                        }}>
                        See all (9)
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h1,
                        fontWeight: "bold",
                    }}>
                    Category
                </Text>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Italian")}>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, bottom: 0, zIndex: 2, color: COLORS.white }}>Maxican</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#3B40FE', '#2DCEF8']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_1} style={{ width: 130, height: 130, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, bottom: 0, zIndex: 2, color: COLORS.white }}>Chinese</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#832BF6', '#FF4665']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_2} style={{ width: 130, height: 130, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ position: "absolute", ...FONTS.h2, top: 50, right: 18, bottom: 0, zIndex: 2, color: COLORS.white }}>Italian</Text>
                        <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#FF5673', '#FF8C48']} style={styles.linearGradient} />
                        <Image resizeMode="cover" source={images.Image_3} style={{ width: 130, height: 130, borderRadius: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function TrendingRestaurants() {

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true)
    const [shop, setShop] = useState([])

    useEffect(() => {
        fetch(shopURL)
            .then((response) => response.json())
            .then((json) => setShop(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginHorizontal: SIZES.padding,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("SeeAll")}>
                    <Text
                        style={{
                            color: COLORS.lightGray2,
                            ...FONTS.body2,
                        }}>
                        See all (45)
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h1,
                        fontWeight: "bold",
                    }}>
                    Trending Restaurants
                </Text>
            </View>
            <View>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={shop}
                        horizontal
                        keyExtractor={item => `${item.id}`}
                        keyboardDismissMode="on-drag"
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Category
                                    categiryItem={item}
                                    item={item}
                                    onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
                                />
                            )
                        }}
                    />
                )}
            </View>
        </View>
    )
}

function Home() {
    return (
        <View>
            <Search />
            <ScrollView style={{ height: 750, }}>
                {TrendingRestaurants()}
                {CategoryComponent()}
                {Friends()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingTop: 10,
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
    item: {
        ...FONTS.h3,
        padding: 10,
    },
});

export default Home
