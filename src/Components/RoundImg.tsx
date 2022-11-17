import React, { FC } from 'react';
import { Image } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

interface Props {
    img: string,
    size?: number,
    bgColor: string,
    style?: object
}
const RoundImg: FC<Props> = (props) => {
    const { img, size = 64, bgColor, style } = props
    return (
        <Image
            style={{
                width: moderateScale(size),
                height: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor: bgColor,
                ...style
            }}
            source={{ uri: img }}
        />
    )
};

export default RoundImg;