import React from 'react';
import { View, Image } from 'react-native';


function CategoryImage({ item }) {

    return (
        <View style={{ flexDirection: 'row', marginBottom: 170, marginHorizontal: 10, }}>
            <Image source={{ uri: item.Fat }} style={{ width: 180, height: 120, marginHorizontal: 10, borderRadius: 20, }} />
            <Image source={{ uri: item.Potassium }} style={{ width: 180, height: 120, marginHorizontal: 10, borderRadius: 20, }} />
            <Image source={{ uri: item.Selenium }} style={{ width: 180, height: 120, marginHorizontal: 10, borderRadius: 20, }} />
        </View>
    )
}

export default CategoryImage;
