//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ForgotPassword: FC = () => {
    return (
        <View style={styles.container}>
            <Text>ForgotPassword</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ForgotPassword;
