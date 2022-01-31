import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LogInScreen from './Screen/Authentication/LogInScreen';
import SingUpScreen from './Screen/Authentication/SingUpScreen';
import BottomTabScreen from './Navigation/BottomTabScreen';
import SearchScreen from './Screen/SearchScreen';
import TestScheduler from './Components/TestScheduler';
import LogoTitle from './Components/LogoTitle';
import HeaderRight_1 from './Components/headerRight';
import SeeAll from './Screen/SeeAll';
import SeeAll_2 from './Screen/SeeAll_2';
import SeeAll_1 from './Screen/SeeAll_1';
import { COLORS } from './StyleGuide';
import Profile from './Screen/Profile';
import EditProfile from './Screen/Authentication/EditProfile';
import CancelTitle from './Components/CancelTitle';
import Settings from './Screen/Settings';
import Italian from './Screen/Italian';
import Italian_2 from './Components/Italian';
import Filter from './Screen/Filter';
import CloseEvent from './Components/CloseEvent'
import DetailsScreen from './Screen/DetailsScreen';
import Images from './Components/Images';
import ReviewRatings from './Components/ReviewRatings';
import { BackHandler, Alert } from 'react-native';
import ForgetPassword from './Screen/Authentication/ForgetPassword';


const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="Home" component={BottomTabScreen} />
        <Stack.Screen name="LoginScreen" component={LogInScreen} />
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          name='SearchScreen'
          component={SearchScreen}
        />
        <Stack.Screen
          name='SeeAll'
          component={SeeAll}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerRight: props => (<HeaderRight_1 {...props} />),
            headerTitle: (props) => (<LogoTitle name="Find Friends" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name='SeeAll_1'
          component={SeeAll_1}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerRight: props => (<HeaderRight_1 {...props} />),
            headerTitle: (props) => (<LogoTitle name="Category" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }} />
        <Stack.Screen
          name='SeeAll_2'
          component={SeeAll_2}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerRight: props => (<HeaderRight_1 {...props} />),
            headerTitle: (props) => (<LogoTitle name="Find Friends" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTitle: (props) => (<LogoTitle name="My Profile" {...props} />),
            headerLeft: props => (<TestScheduler {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerTitle: (props) => (<LogoTitle name="Edit Profile" {...props} />),
            headerRight: (props) => (<CancelTitle name="Cancel" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerTitle: (props) => (<LogoTitle name="Settings" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name="Italian"
          component={Italian}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTitle: (props) => (<Italian_2 name="Italian" {...props} />),
          }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerTitle: (props) => (<LogoTitle name="Filter" {...props} />),
            headerRight: (props) => (<CloseEvent name="Cancel" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Images"
          component={Images}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerTitle: (props) => (<LogoTitle name="Menu & Photos" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
        <Stack.Screen
          name="ReviewRatings"
          component={ReviewRatings}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: props => (<TestScheduler {...props} />),
            headerTitle: (props) => (<LogoTitle name="Review & Ratings" {...props} />),
            headerRight: (props) => (<CloseEvent name="Cancel" {...props} />),
            headerStyle: {
              backgroundColor: COLORS.white,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
