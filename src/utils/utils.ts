import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';

const { dispatch, getState } = store;

export async function getHeaders() {
	let userData:any = await AsyncStorage.getItem('userData');
	if (userData) {
		userData = JSON.parse(userData);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${userData.accessToken}`,
		};
	}
	return {};
}


export async function apiReq(
	endPoint:string,
	data:any,
	method:string,
	headers:object,
) {

	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then((result:any) => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch((error:any) => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
			});
	});
}


interface ApiProps {
	endPoint:string, 
	data:any, 
	headers:object
}
export function apiPost(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'post', props.headers);
}

export function apiDelete(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'delete', props.headers);
}

export function apiGet(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'get', props.headers);
}

export function apiPut(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'put', props.headers);
}


export function setItem(key:string, data:any) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem(key, data);
}

export function getItem(key:string) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key).then((data:any) => {
			resolve(JSON.parse(data));
		});
	});
}

export function removeItem(key:any) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate() {
	return AsyncStorage.clear();
}

export function setUserData(data:any) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then((data:any) => {
			resolve(JSON.parse(data));
		});
	});
}

export function setFirstTime(data:any) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('isFirstTime', data);
}

export async function getFirstTime() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('isFirstTime').then((data:any) => {
			resolve(JSON.parse(data));
		});
	});
}

export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}

