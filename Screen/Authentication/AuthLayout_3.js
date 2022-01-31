import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { images, FONTS, COLORS } from '../../StyleGuide';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function AuthLayout_3({ label, children }) {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flex: 1,
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.BgSingUp} style={{ width: windowWidth, height: windowHeight }} />
                </View>
                <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: 0 }} colors={['#000000', 'transparent']} style={styles.linearGradient} />
                <Icon
                    name="left"
                    size={40}
                    color="#fff"
                    style={{ position: "absolute", right: 20, top: 35, }}
                    onPress={() => navigation.goBack()}
                />
                <View style={{
                    position: 'absolute',
                    top: 40,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'center'
                }}
                >
                    <Text style={{ textAlign: "center", ...FONTS.body1, color: COLORS.white, fontWeight: "bold" }}>
                        {label}
                    </Text>
                </View>

                {children}
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
        opacity: 1.0,
    },
});

export default AuthLayout_3
