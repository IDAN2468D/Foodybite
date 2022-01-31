import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
} from 'react-native';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../StyleGuide';
import { SECTIONS } from '../Components/Data/Data';

const ListItem = ({ item }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.item}>
            <Button
                containerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    color: COLORS.white,
                    backgroundColor: COLORS.transparent,
                }}
                StyleText={{
                    color: COLORS.red,
                    backgroundColor: COLORS.BlueButton,
                    borderRadius: 15,
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    ...FONTS.h3,
                    fontWeight: 'bold'
                }}
                buttonText="Follow"
                onPress={() => navigation.navigate("Profile", { itemId: item })}
            />
            <View style={{ marginHorizontal: 20, flex: 1, alignItems: "flex-end" }}>
                <Text style={styles.itemText}>{item.text}</Text>
                <Text style={styles.Text}>{item.item}</Text>
            </View>
            <Image
                source={{
                    uri: item.uri,
                }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
        </View>
    );
};

const SeeAll_2 = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={SECTIONS}
                    renderSectionHeader={({ section }) => (
                        <View style={{ backgroundColor: COLORS.BlueButton, paddingVertical: 20, paddingHorizontal: 20 }}>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => {
                        return <ListItem item={item} />
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

export default SeeAll_2


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#000000',
    },
    item: {
        paddingHorizontal: 25,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
    itemPhoto: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    itemText: {
        ...FONTS.body2,
        color: '#000000',
        marginTop: 5,

    },
    Text: {
        ...FONTS.body3,
        color: '#000000',
        marginTop: 5,
    }
});