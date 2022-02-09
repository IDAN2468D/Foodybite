import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../StyleGuide';
import Button from '../Components/Button';
import Category from '../Components/Category';
import { useNavigation } from '@react-navigation/native';

const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";

function Users() {

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

    const Data = [
        {
            key: '1',
            text: 'Collin Fields',
            item: "50 Reviews",
            Reviews: 250,
            Followers: "100K",
            Following: 30,
            mail: "kazam11@bezeqint.net",
            uri: "https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=",
        },
    ]

    const ItemRender = () => {
        return Data.map((element) => {
            return (
                <View key={element.key} style={{ alignItems: 'center', backgroundColor: COLORS.white, height: 750, }}>
                    <Image source={{ uri: element.uri }} style={{ width: 150, height: 150, borderRadius: 200, }} />
                    <View style={{ alignItems: "center", paddingVertical: 30 }}>
                        <Text style={{ ...FONTS.h1, color: '#000000', marginTop: 5 }}>{element.text}</Text>
                        <Text style={{ ...FONTS.body3, color: '#6E7FAA', marginTop: 5 }}>{element.mail}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                        <View style={{ marginHorizontal: 30 }}>
                            <Text style={{ color: COLORS.BlueButton, ...FONTS.h3, textAlign: "center" }}>{element.Following}</Text>
                            <Text style={{ ...FONTS.body3, color: "#6E7FAA" }}>Following</Text>
                        </View>
                        <View style={{ borderLeftColor: COLORS.BlueButton, borderLeftWidth: 1, paddingHorizontal: 30 }}>
                            <Text style={{ color: COLORS.BlueButton, ...FONTS.h3, textAlign: "center" }}>{element.Followers}</Text>
                            <Text style={{ ...FONTS.body3, color: "#6E7FAA" }}>Followers</Text>
                        </View>
                        <View style={{ borderLeftColor: COLORS.BlueButton, borderLeftWidth: 1, paddingHorizontal: 30 }}>
                            <Text style={{ color: COLORS.BlueButton, ...FONTS.h3, textAlign: "center" }}>{element.Reviews}</Text>
                            <Text style={{ ...FONTS.body3, color: "#6E7FAA" }}>Reviews</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', marginVertical: 60, }}>
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
                                    ...FONTS.h3,
                                    fontWeight: 'bold'
                                }}
                                buttonText="Settings"
                                onPress={() => navigation.navigate("Settings")}
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
                                    ...FONTS.h3,
                                    fontWeight: 'bold'
                                }}
                                buttonText="Edit Profile"
                                onPress={() => navigation.push("EditProfile")}
                            />
                        </View>
                    </View>
                </View>
            );
        });
    };

    return (
        <View>
            {ItemRender()}
        </View >
    )
}

export default Users
