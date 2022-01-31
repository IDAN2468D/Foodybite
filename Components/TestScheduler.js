import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


function TestScheduler() {

    const navigation = useNavigation();

    return (
        <View style={{ marginHorizontal: 10 }}>
            <Icon
                name="left"
                size={40}
                color="#000"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default TestScheduler
