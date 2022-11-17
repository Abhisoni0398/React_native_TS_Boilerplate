//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Post:FC = () => {
    return (
        <View style={styles.container}>
            <Text>Post</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Post;
