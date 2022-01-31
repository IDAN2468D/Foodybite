import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import Category from '../Components/Category';
import { useNavigation } from '@react-navigation/native';

const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";


function Favorites() {

    const [isLoading, setIsLoading] = useState(true)
    const [shop, setShop] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        fetch(shopURL)
            .then((response) => response.json())
            .then((json) => setShop(json))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <View>
            <View>
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

export default Favorites
