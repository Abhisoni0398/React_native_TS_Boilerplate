import { FORGOT_PASSWORD, LOGIN_API, SIGNUP_API } from '../../config/urls';
import { apiPost, clearUserData, setUserData } from '../../utils/utils';

import { changeFirstTime, saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;


export function signUp(data: object) {
  return apiPost(SIGNUP_API, data);
}


export const login = (data:any) => {
  dispatch(saveUserData(data)); //saveUserData is a function which is define in reducer state
  
  // ************* uncomment below code in case of api*************** ///

  // console.log(data, 'the given data')
  // return new Promise((resolve, reject) => {
  //   apiPost(LOGIN_API, data)
  //     .then((res) => {
  //       setUserData(res.data).then((suc) => {
  //         dispatch(saveUserData(res.data));
  //         resolve(res);
  //       });
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });
};


export function setFirstTime(){
  dispatch(changeFirstTime(true))
}

export function forgotPassword(data:object) {
  return apiPost(FORGOT_PASSWORD, data)
}

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}

