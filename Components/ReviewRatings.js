import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { FONTS, COLORS } from '../StyleGuide';
import Ranting from './Ratings';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props}
            editable
            maxLength={300}
            placeholder="Write your experience"
        />
    );
}

function ReviewRatings() {

    const [value, onChangeText] = useState('Useless Multiline Placeholder');
    const navigation = useNavigation();


    return (
        <View style={{ marginVertical: 40, }}>
            <Ranting />
            <Text style={{ ...FONTS.body2, textAlign: "center", marginVertical: 40, color: COLORS.gray }}>Rate your experience</Text>
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
            <Button
                onPress={() => navigation.navigate("ReviewRatings")}
                containerStyle={{
                    position: "absolute",
                    top: 384,
                    backgroundColor: COLORS.BlueButton,
                    width: windowWidth,
                    alignItems: "center",
                    paddingVertical: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}
                buttonText="Done"
                StyleText={{ ...FONTS.h2, color: COLORS.white }}
            />
        </View>
    )
}

export default ReviewRatings;
