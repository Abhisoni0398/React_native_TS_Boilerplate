import React, { FC } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Image, StyleSheet } from 'react-native';
import * as Screens from '../Screens'; //import all screens 
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

const BottomTab = createBottomTabNavigator();

const TabRoutes: FC = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}

            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: 'gray',
                // tabBarShowLabel: false
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.firstActiveIcon} />
                                : <Image source={imagePath.firstInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Screens.Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.secondActiveIcon} />
                                : <Image source={imagePath.secondInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.POST}
                component={Screens.Post}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.thirdActiveIcon} />
                                : <Image source={imagePath.thirdInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Screens.Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.fourthActiveIcon} />
                                : <Image source={imagePath.fourthInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Screens.Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Image source={imagePath.fifthActiveIcon} />
                                : <Image source={imagePath.fifthInActiveIcon} />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        //height: moderateScale(60)
    },

});

export default TabRoutes