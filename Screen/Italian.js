import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import Category from '../Components/Category';


const shopURL = "https://rocky-lake-73739.herokuapp.com/shop";


function Italian() {

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
                                    onPress={() => console.log("kazam")}
                                />
                            )
                        }}
                    />
                )}
            </View>
        </View>
    )
}




export default Italian
