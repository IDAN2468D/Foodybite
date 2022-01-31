import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../Components/Button';
import { COLORS, FONTS, SIZES } from '../StyleGuide';


function Settings() {
    return (
        <View>
            <View style={styles.SectionList}>
                <Text style={styles.TextList}>Account</Text>
            </View>
            <TouchableOpacity style={styles.item} onPress={() => console.log("Change Password")}>
                <Button disabled buttonText="Change Password" StyleText={styles.title} />
                <Icon name='chevron-right' size={30} style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => console.log("Change Language")}>
                <Button disabled buttonText="Change Language" StyleText={styles.title} />
                <Icon name='chevron-right' size={30} style={styles.Icon} />
            </TouchableOpacity>
            <View style={styles.SectionList}>
                <Text style={styles.TextList}>Others</Text>
            </View>
            <TouchableOpacity style={styles.item} onPress={() => console.log("Privacy Policy")}>
                <Button disabled buttonText="Privacy Policy" StyleText={styles.title} />
                <Icon name='chevron-right' size={30} style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => console.log("Terms & Conditions")}>
                <Button disabled buttonText="Terms & Conditions" StyleText={styles.title} />
                <Icon name='chevron-right' size={30} style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => console.log("Logout")}>
                <Button disabled buttonText="Logout" StyleText={styles.title} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    SectionList: {
        backgroundColor: COLORS.gray2,
        padding: 25,
        marginVertical: 2
    },
    TextList: {
        ...FONTS.h2
    },
    Icon: {
        position: "absolute",
        left: 15,
        top: 25,
    },
    item: {
        backgroundColor: COLORS.white,
        padding: 25,
        marginVertical: 2
    },
    title: {
        ...FONTS.body2
    }
});

export default Settings
