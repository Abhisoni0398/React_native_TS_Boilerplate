import React, { FC } from 'react';
import { View, Modal } from 'react-native';
import { BarIndicator } from "react-native-indicators"
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

interface Props {
    isLoading: boolean
}

const Loader: FC<Props> = (props) => {
    const { isLoading } = props
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{ ...commonStyles.loader, backgroundColor: "rgba(0,0,0,0.3)" }}>
                    <BarIndicator size={25} color={colors.theme} />
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
