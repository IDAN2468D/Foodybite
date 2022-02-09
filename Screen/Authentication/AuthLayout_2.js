import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { images, FONTS, COLORS } from '../../StyleGuide';
import LinearGradient from 'react-native-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function AuthLayout_2({ label, children }) {
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
                <View style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 710, justifyContent: 'center', alignItems: 'center'
                }}
                >
                    <Text style={{ textAlign: "center", fontSize: 40, color: COLORS.white, fontWeight: "bold" }}>
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

export default AuthLayout_2
