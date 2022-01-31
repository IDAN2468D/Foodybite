import React from 'react';
import { View, Text } from 'react-native';
import SelectCategory_1 from '../Components/SelectCategory';
import Distance from '../Components/Distance';
import Ratings from '../Components/Ratings';
import { COLORS, FONTS } from '../StyleGuide';
import Button from '../Components/Button';


function Filter({ navigation }) {
    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={{ height: "100%", }}>
                <Text style={{ ...FONTS.h1, textAlign: "center", marginVertical: 20, color: COLORS.black }}>Select Category</Text>
                <SelectCategory_1 />
                <Text style={{ ...FONTS.h1, textAlign: "center", marginVertical: 50, color: COLORS.black }}>Distance</Text>
                <Distance />
                <Text style={{ ...FONTS.h1, textAlign: "center", marginVertical: 40, color: COLORS.black }}>Rantings</Text>
                <Ratings />
                <View style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Button
                            containerStyle={{
                                paddingVertical: 30,
                                paddingHorizontal: 90,
                                backgroundColor: COLORS.BlueButton,
                                borderTopLeftRadius: 30,
                            }}
                            buttonText="Apply"
                            StyleText={{
                                ...FONTS.h2,
                                color: COLORS.white,
                            }}
                            onPress={() => navigation.navigate("home")}
                        />
                        <Button
                            containerStyle={{
                                paddingVertical: 30,
                                paddingHorizontal: 86,
                                backgroundColor: COLORS.BlueMagenta,
                                borderTopRightRadius: 30,
                            }}
                            buttonText="Reset"
                            StyleText={{
                                ...FONTS.h2,
                                color: COLORS.white,
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Filter
