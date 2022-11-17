import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    oldKaiText: {
        ...commonStyles.fontSize18,
        color: colors.white,
        fontFamily: fontFamily.medium,
        textAlign: 'center',
    },
    btnStyle: {
        width: moderateScale(160),
        height: moderateScale(160),
        borderRadius: moderateScale(80),
        alignItems: 'center',
        justifyContent: 'center'
    },
    loaderStyle: {
        backgroundColor: colors.white,
        borderWidth: 1,
        height: moderateScale(68),
        justifyContent: 'center',
        borderColor: colors.gray,
        width: '100%',
        marginVertical: moderateScaleVertical(36)
    },
    colorLoader: {
        backgroundColor: colors.theme,
        height: moderateScale(50),
        borderRadius: 4,
        borderColor: colors.gray,
        borderWidth: 1
    }
});

export default styles