import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
const Stack = createNativeStackNavigator();


const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
};

export default MainStack;
