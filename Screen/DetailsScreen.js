import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Share, Image, FlatList, TouchableOpacity, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS, SIZES } from '../StyleGuide';
import CategoryImage from '../Components/CategoryImage';
import { Detitls } from '../Components/Data/Detitls';
import DetitlsCard from '../Components/DetitlsCard';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function DetailsScreen({ route }) {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const { itemId, image } = route.params;
    const [selectedValue, setSelectedValue] = useState("");
    const [state, setstate] = useState(null)
    const navigation = useNavigation();


    useEffect(() => {
        setstate(itemId)
    }, [])


    return (
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", backgroundColor: COLORS.white }}>
            <Image source={{ uri: itemId.image }} style={{ width: windowWidth, height: 411 }} />
            <View style={{ position: "absolute", top: 30, right: 20, }}>
                <Icon
                    name="chevron-left"
                    size={40}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ position: "absolute", top: 30, left: 20, }}>
                <Icon
                    name="bookmark"
                    size={40}
                    color={COLORS.white}
                    onPress={() => navigation.navigate("favorites")}
                />
            </View>
            <View style={{ position: "absolute", top: 30, left: 70, }}>
                <Icon
                    name="share-alt"
                    size={40}
                    color={COLORS.white}
                    onPress={onShare}
                />
            </View>
            <View style={{ position: "absolute", top: 320, right: 25 }}>
                <View style={{ flexDirection: 'row', backgroundColor: COLORS.gray, opacity: 0.8, borderRadius: 30, paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.white, paddingHorizontal: 10, paddingVertical: 10 }}>Direction</Text>
                    <Icon
                        name="level-down"
                        size={25}
                        style={{
                            color: COLORS.blue,
                            paddingHorizontal: 15,
                            paddingVertical: 8,
                            backgroundColor: COLORS.white,
                            borderRadius: 30,
                        }}
                    />
                    <View style={{ borderWidth: 1, borderColor: COLORS.white, marginHorizontal: 30, }} />
                    <Text style={{ ...FONTS.body3, paddingHorizontal: 10, paddingVertical: 10, color: COLORS.white }}>+1 212-673-3754</Text>
                    <Icon
                        name="phone"
                        size={25}
                        style={{
                            color: COLORS.blue,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            backgroundColor: COLORS.white,
                            borderRadius: 30,
                        }}
                    />
                </View>
            </View>
            <View style={
                {
                    flexDirection: 'row',
                    justifyContent: "flex-end",
                    marginHorizontal: 20,
                    marginVertical: 20,
                    paddingVertical: 10,
                }}>
                <Text
                    style={{
                        fontSize: 12,
                        color: COLORS.black,
                        fontWeight: "bold",
                        backgroundColor: COLORS.BlueButton,
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderRadius: 18,
                    }}>
                    {itemId.price} Km
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: COLORS.black,
                        fontWeight: "bold",
                        backgroundColor: COLORS.OrengeLhite,
                        marginHorizontal: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 9,
                        borderRadius: 18,
                    }}>
                    {itemId.NutritionName}
                </Text>
                <Text style={{ ...FONTS.h1 }}>{itemId.name}</Text>
                <View style={{ flexDirection: 'row', position: "absolute", left: -110, top: 15, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: COLORS.gray2, borderRadius: 10, }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>{itemId.DiscountPercentages} </Text>
                    <Icon name="star" color={COLORS.Star} size={20} />
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 18, }}>{itemId.description}</Text>
            </View>
            <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 230, color: COLORS.red, }}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker style={{ ...FONTS.body3 }} label="7:30 am to 10:00 pm" value="9:30 am to 10:00 pm" />
                    <Picker style={{ ...FONTS.body3 }} label="6:30 am to 8:00 pm" value="9:30 am to 8:00 pm" />
                    <Picker style={{ ...FONTS.body3 }} label="5:30 am to 11:00 pm" value="5:30 am to 11:00 pm" />
                    <Picker style={{ ...FONTS.body3 }} label="4:30 am to 12:00 pm" value="3:30 am to 13:00 pm" />
                </Picker>
                <Text style={{ ...FONTS.h3, marginVertical: 15, }}>Open Now daily time</Text>
            </View>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        marginVertical: 20,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Images")}>
                        <Text
                            style={{
                                paddingLeft: 120,
                                color: COLORS.lightGray2,
                                ...FONTS.body2,
                            }}>
                            See all (32)
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h1,
                            fontWeight: "bold",
                        }}>
                        Menu & Photos
                    </Text>
                </View>
            </View>
            <FlatList
                data={state?.Nutrition}
                horizontal
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <CategoryImage item={item} />
                    )
                }}
            />
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                marginVertical: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("SeeAll_2")}>
                    <Text
                        style={{
                            paddingLeft: 90,
                            color: COLORS.lightGray2,
                            ...FONTS.body2,
                        }}>
                        See all (32)
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h1,
                        fontWeight: "bold",
                    }}>
                    Review & Ratings
                </Text>
            </View>
            <FlatList
                data={Detitls}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View index={index}>
                            <DetitlsCard item={item} />
                        </View>
                    )
                }}
            />
            <Button
                onPress={() => navigation.navigate("ReviewRatings")}
                containerStyle={{
                    backgroundColor: COLORS.BlueButton,
                    width: windowWidth,
                    alignItems: "center",
                    paddingVertical: 20,
                    height: 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}
                buttonText="Rate Your Experience"
                StyleText={{ ...FONTS.h2, color: COLORS.white }}
            />
        </View>
    );
}

export default DetailsScreen;
