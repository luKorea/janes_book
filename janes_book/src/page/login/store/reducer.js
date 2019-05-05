import * as Types from './actionTypes';
import { fromJS } from 'immutable';
const initState = fromJS({
    login: false
});


export default (state = initState, action) => {
    switch (action.type) {
        case Types.LOGINDATA:
            return state.set('login', action.value);
        case Types.LAYOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}
