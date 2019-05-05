import * as Types from './actionTypes';
import http from '../../../server'

const loginData = () => ({
    type: Types.LOGINDATA,
    value: true
});

export const login = (account, password) => {
    return async (dispatch) => {
        const res = await http.get(`/api/login.json?account=${account}&password=${password}`);
        const data = res.data.data;
        if (data) {
            dispatch(loginData())
        } else alert('登录失败');
    }
};
export const layout = () => ({
    type: Types.LAYOUT,
    value: false
});
