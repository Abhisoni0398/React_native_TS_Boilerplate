import React, { FC } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

interface Props {
    leftText: string,
    onPressRight: () => void;
    headerStyle?: object //? means its is an optional 
}

const HeaderComp: FC<Props> = (props) => {
    const { leftText, onPressRight, headerStyle } = props
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <Text style={styles.textStyle}>{leftText}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Text>Image</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16)
    },
    textStyle: {
        ...commonStyles.fontSize18,
        fontFamily: fontFamily.medium,
        color: colors.theme,
        textTransform: 'uppercase'
    }
})

export default HeaderComp