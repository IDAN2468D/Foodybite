import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../StyleGuide';


function Plus({ focused, icon }) {
    return (
        <View>
            <View
                style={{
                    position: "relative",
                    bottom: 30,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: COLORS.BlueButton,
                    shadowColor: COLORS.BlueButton,
                    borderRadius: 50,
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    elevation: 30,
                }}>
                <Icon
                    name={icon}
                    resizeMode="contain"
                    size={40}
                    style={{
                        color: focused ? COLORS.BlueMartina : COLORS.white
                    }}
                />
            </View>
        </View>
    )
}

export default Plus
