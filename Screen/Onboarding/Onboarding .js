import React from 'react';
import { View, Image, Dimensions, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


function onboarding() {

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const backgroundColor = isLight => (isLight ? 'blue' : 'green');
    const color = isLight => backgroundColor(!isLight);

    const Square = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
            backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
        } else {
            backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
            <View
                style={{
                    width: 10,
                    height: 10,
                    marginHorizontal: 3,
                    backgroundColor,
                    borderRadius: 30,
                }}
            />
        );
    };

    const Skip = ({ isLight, skipLabel, ...props }) => (
        <Button
            title={'Skip'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
            onPress={() => navigation.navigate("LoginScreen")}
        >
            {skipLabel}
        </Button>
    );

    const Next = ({ isLight, ...props }) => (
        <Button
            title={'Next'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
                backgroundColor: backgroundColor(isLight),
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
        />
    );


    const Done = ({ isLight, ...props }) => (
        <Button
            title={'Done'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
                backgroundColor: backgroundColor(isLight),
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
            onPress={() => navigation.navigate("LoginScreen")}
        />
    );

    return (
        <Onboarding
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            titleStyles={{ color: 'black' }}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image/Onboarding/Image_1.jpg')} style={{ width: windowWidth, height: 300 }} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image/Onboarding/Image_2.jpg')} style={{ width: windowWidth, height: 300, }} />,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('../../assets/image/Onboarding/Image_3.jpg')} style={{ width: windowWidth, height: 300, }} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
        />
    )
}

export default onboarding 