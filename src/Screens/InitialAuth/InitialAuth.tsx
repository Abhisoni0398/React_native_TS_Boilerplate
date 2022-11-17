//import liraries
import React, { Component, FC, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';

// create a component
const InitialAuth: FC = (props: any) => {
    const { navigation } = props

    const goToScreen = (screen: string) => {
        navigation.navigate(screen)
    }

    const goToHome = () => {
        actions.setFirstTime()
    }
    return (
        <WrapperContainer>
            <View style={styles.container}>
                <ButtonComp
                    btnText='Go to Login Screen'
                    onPress={() => goToScreen(navigationStrings.LOGIN)}
                />
                <ButtonComp
                    btnText='Go to Signup Screen'
                    onPress={() => goToScreen(navigationStrings.SIGNUP)}
                />
                <ButtonComp
                    btnText='Go to Forgot Password Screen'
                    onPress={() => goToScreen(navigationStrings.FORGOT_PASSWORD)}
                />
                <ButtonComp
                    btnText='Go to Otp Verfication Screen'
                    onPress={() => goToScreen(navigationStrings.OTP_VERIFICATION)}
                />

                <ButtonComp
                    btnText='Go to Home Screen'
                    onPress={goToHome}
                />
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default InitialAuth;
