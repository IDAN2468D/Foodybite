import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../StyleGuide';

function CloseEvent() {

    const navigation = useNavigation();

    return (
        <View style={{ marginHorizontal: 10 }}>
            <Icon
                name="close"
                size={40}
                color={COLORS.gray}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default CloseEvent
