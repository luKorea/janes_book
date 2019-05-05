import * as Types from './actionTypes';
import { fromJS } from 'immutable';
const initState = fromJS({
    focused:false,
    mousedIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = initState, action) => {
    switch (action.type) {
        case Types.SEARCH_FOCUSED:
            return state.set('focused', true);
        case Types.SEARCH_BLURS:
            return state.set('focused', false);
        case Types.MOUSEENTER:
            return state.set('mousedIn', true);
        case Types.MOUSELEAVE:
            return state.set('mousedIn', false);
        case Types.SWITCH_PAGE:
            return state.set('page', action.page);
        case Types.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage: action.totalPage
            });
        default:
            return state;
    }
}
