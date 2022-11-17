import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector } from '../redux/hooks';



const Stack = createNativeStackNavigator();

export default function Routes() {
    const appData = useSelector(state => state.auth);

    console.log("appData",appData)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !!appData?.userData || appData.isFirstTime? <>{MainStack()}</>
                        : <>{AuthStack(appData.isFirstTime)}</>

                }
            </Stack.Navigator>

        </NavigationContainer>
    );
}
