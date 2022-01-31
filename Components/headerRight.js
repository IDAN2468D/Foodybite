import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


function TestScheduler() {

    const navigation = useNavigation();


    return (
        <TouchableOpacity style={{ marginHorizontal: 20 }}>
            <Icon
                name="search"
                size={40}
                color="#000"
                style={{ fontWeight: "100" }}
                onPress={() => navigation.navigate("SearchScreen")}
            />
        </TouchableOpacity>
    )
}

export default TestScheduler
