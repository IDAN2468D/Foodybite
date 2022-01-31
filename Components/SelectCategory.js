import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { FONTS } from '../StyleGuide';


const BRANDS = [
    {
        name: 'Maxican',
        slug: 'Maxican',
    },
    {
        name: 'Chinese',
        slug: 'Chinese',
    },
    {
        name: 'Italian',
        slug: 'Italian',
    },
    {
        name: 'Indian',
        slug: 'Indian',
    },
    {
        name: 'Arabian',
        slug: 'Arabian',
    },
    {
        name: 'Thai',
        slug: 'Thai',
    },
    {
        name: 'European',
        slug: 'European',
    },
    {
        name: 'Korean',
        slug: 'Korean',
    },
    {
        name: 'American',
        slug: 'American',
    },
];


export default function App() {
    const [brands, setBrands] = useState(BRANDS);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const renderBrands = ({ item, index }) => {
        const { name, slug } = item;
        const isSelected = selectedBrands.filter((i) => i === slug).length > 0;

        return (
            <TouchableOpacity
                onPress={() => {
                    if (isSelected) {
                        setSelectedBrands((prev) => prev.filter((i) => i !== slug));
                    } else {
                        setSelectedBrands(prev => [...prev, slug])
                    }
                }}
                style={[styles.item, isSelected && { backgroundColor: 'black' }]}>
                <Text style={{ color: isSelected ? "white" : "black", ...FONTS.body3 }}>{name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={brands}
                renderItem={renderBrands}
                numColumns={3}
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
    },

    item: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        margin: 2,
        width: 120,
        height: 55,
        borderRadius: 10,
    },
});
