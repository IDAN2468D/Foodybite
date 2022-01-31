import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ranting from '../Components/Ratings';
import Search from '../Components/Search';
import { COLORS, FONTS } from '../StyleGuide';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props}
            editable
            maxLength={300}
            placeholder="useless placeholder"
        />
    );
}

function Add() {

    const [value, onChangeText] = useState('Useless Multiline Placeholder');

    return (
        <ScrollView>
            <View>
                <Search />
            </View>
            <View>
                <Text style={{ ...FONTS.h1, textAlign: "center", marginVertical: 20, color: COLORS.black }}>Ratings</Text>
                <Ranting />
                <Text style={{ ...FONTS.body3, textAlign: "center", marginVertical: 20, color: COLORS.gray }}>Rate your experience</Text>
            </View>
            <View>
                <Text style={{ ...FONTS.h1, textAlign: "center", marginVertical: 20, color: COLORS.black }}>Review</Text>
                <View
                    style={{
                        backgroundColor: value,
                        borderBottomColor: '#000000',
                        borderWidth: 1,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        borderRadius: 15,
                    }}>
                    <UselessTextInput
                        multiline
                        numberOfLines={1}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={{ paddingBottom: 150, paddingHorizontal: 15, ...FONTS.body2, paddingVertical: 15 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Add
