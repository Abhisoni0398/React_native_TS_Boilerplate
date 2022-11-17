
import { showMessage } from 'react-native-flash-message'


const showError = (message: string):void => {
    showMessage({
        type: "danger",
        icon: 'danger',
        message
    })
}

const showSuccess = (message: string):void => {
    showMessage({
        type: "success",
        icon: 'success',
        message
    })
}


export function otpTimerCounter(seconds: number) {
    // alert(seconds)
    let m: any = Math.floor(seconds / 60);
    let s: any = seconds % 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return (`${m}:${s}`)
}

export {
    showError,
    showSuccess
};
