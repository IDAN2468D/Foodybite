import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from '../StyleGuide';
import Button from '../Components/Button';
import Category from '../Components/Category';
import { useNavigation } from '@react-navigation/native';

const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";


function Profile({ route }) {

    const { itemId } = route.params;
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
        <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Image source={{ uri: itemId.uri }} style={{ width: 150, height: 150, borderRadius: 200, }} />
                <View style={{ alignItems: "center", paddingVertical: 30 }}>
                    <Text style={{ ...FONTS.h1, color: '#000000', marginTop: 5 }}>{itemId.text}</Text>
                    <Text style={{ ...FONTS.body3, color: '#6E7FAA', marginTop: 5 }}>{itemId.mail}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ color: COLORS.BlueButton, ...FONTS.h2, textAlign: "center" }}>{itemId.Following}</Text>
                        <Text style={{ ...FONTS.body2, color: "#6E7FAA" }}>Following</Text>
                    </View>
                    <View style={{ borderLeftColor: COLORS.BlueButton, borderLeftWidth: 1, paddingHorizontal: 30 }}>
                        <Text style={{ color: COLORS.BlueButton, ...FONTS.h2, textAlign: "center" }}>{itemId.Followers}</Text>
                        <Text style={{ ...FONTS.body2, color: "#6E7FAA" }}>Followers</Text>
                    </View>
                    <View style={{ borderLeftColor: COLORS.BlueButton, borderLeftWidth: 1, paddingHorizontal: 30 }}>
                        <Text style={{ color: COLORS.BlueButton, ...FONTS.h2, textAlign: "center" }}>{itemId.Reviews}</Text>
                        <Text style={{ ...FONTS.body2, color: "#6E7FAA" }}>Reviews</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <Button
                        containerStyle={{
                            paddingHorizontal: 20,
                            paddingVertical: 20,


                        }}
                        StyleText={{
                            color: "#8A98BA",
                            backgroundColor: COLORS.white,
                            borderRadius: 10,
                            paddingHorizontal: 50,
                            paddingVertical: 15,
                            borderWidth: 1,
                            borderColor: "#8A98BA",
                            ...FONTS.h2,
                            fontWeight: 'bold'
                        }}
                        buttonText="Settings"
                        onPress={() => navigation.navigate("EditProfile")}
                    />
                    <Button
                        containerStyle={{
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                        }}
                        StyleText={{
                            color: COLORS.white,
                            backgroundColor: COLORS.BlueButton,
                            borderRadius: 10,
                            paddingHorizontal: 50,
                            paddingVertical: 15,
                            ...FONTS.h2,
                            fontWeight: 'bold'
                        }}
                        buttonText="Edit Profile"
                        onPress={() => navigation.push("EditProfile")}
                    />
                </View>
                <View style={{ borderWidth: 2, borderColor: COLORS.gray2, width: "100%" }} />
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={shop}
                        keyExtractor={item => `${item.id}`}
                        keyboardDismissMode="on-drag"
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <Category
                                    categiryItem={item}
                                    item={item}
                                    onPress={() => console.log("kazam")}
                                />
                            )
                        }}
                    />
                )}
            </View>
        </View >
    )
}

export default Profile
