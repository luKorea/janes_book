import * as Types from './actionTypes';
import { fromJS } from 'immutable';
const initState = fromJS({
    title: '',
    content: ''
});
export default (state = initState, action) => {
    switch (action.type) {
        case Types.DETAILS_DATA:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
        });
        default:
            return state;
    }
}
