import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import { COLORS, FONTS, icons } from '../StyleGuide';
import Plus from '../Components/Plus';
import TabBarScreen from '../Components/TabBarScreen';
import Notification from '../Screen/Notification';
import Users from '../Screen/Users';
import Add from '../Screen/Add';
import Favorites from '../Screen/Favorites';
import LogoTitle from '../Components/LogoTitle';
import HeaderRight_1 from '../Components/headerRight'
import CancelTitle from '../Components/CancelTitle';
import PostTitle from '../Components/PostTitle';

const Tab = createBottomTabNavigator();


function BottomTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    height: 80,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                },
            }}
        >
            <Tab.Screen
                name="users"
                component={Users}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icons={icons.users}
                            focused={focused} />
                    ),
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: (props) => (<LogoTitle name="My Profile" {...props} />),
                    headerStyle: {
                        backgroundColor: COLORS.white,
                        height: 105,
                    }
                }}
            />
            <Tab.Screen
                name="notification"
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icons={icons.notification}
                            focused={focused} />
                    ),
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: (props) => (<LogoTitle name="Notification" {...props} />),
                    headerStyle: {
                        backgroundColor: COLORS.white,
                        height: 105,
                    },
                }}
            />
            <Tab.Screen
                name="add"
                component={Add}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Plus
                            icon={focused ? "close" : "plus"}
                            focused={focused} />
                    ),
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerRight: props => (<CancelTitle name="Cancel" {...props} />),
                    headerLeft: props => (<PostTitle name="post" {...props} />),
                    headerTitle: (props) => (<LogoTitle name="New Review" {...props} />),
                    headerStyle: {
                        backgroundColor: COLORS.white,
                        height: 105,
                    },
                }}
            />
            <Tab.Screen
                name="favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icons={icons.Favorites}
                            focused={focused} />
                    ),
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: props => (<HeaderRight_1 {...props} />),
                    headerTitle: (props) => (<LogoTitle name="My Favorites" {...props} />),
                    headerStyle: {
                        backgroundColor: COLORS.white,
                        height: 105,
                    },
                }}
            />
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarScreen
                            icons={icons.Home}
                            focused={focused} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabScreen
