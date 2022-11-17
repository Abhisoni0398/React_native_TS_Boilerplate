import {  StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(16)
    },
    logoStyle: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    oldKaiText: {
        ...commonStyles.fontSize18,
        color: colors.white,
        fontFamily: fontFamily.medium,
        textAlign: 'center',
    },
    modalView: {
        backgroundColor: colors.white,
        paddingVertical: moderateScaleVertical(14),
        paddingHorizontal: moderateScale(16),
        flex: 1
    },
    btnStyle: {
        width: '100%',
        borderWidth: 0.4,
        height: moderateScale(66),
        marginBottom: moderateScaleVertical(24)
    },
    previewText: {
        ...commonStyles.fontSize26,
        fontFamily: fontFamily.medium,
        marginBottom: moderateScaleVertical(24)
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:moderateScale(16)
    }
});

export default styles