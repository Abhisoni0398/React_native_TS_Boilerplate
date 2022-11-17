import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface Props {
    lineStyle?: object //? means its is an optional 
}
const HorizontalLine:FC<Props> = (props) => {
    return (
        <View style={{ ...styles.lineStyle, ...props.lineStyle }} />
    );
};

const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.black
    },
});


export default HorizontalLine;
