import * as Types from './actionTypes';
import { fromJS } from 'immutable';
const initState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
    recommendList: [],
    showTop: false
});

const changeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};
const getMove = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
};

export default (state = initState, action) => {
    switch (action.type) {
        case Types.CHANGE_DATA:
            return changeData(state, action);
        case Types.GET_MOVE:
            return getMove(state, action);
        case Types.SHOW_SCROLL:
            return state.set('showTop', action.toggle);
        default:
            return state;
    }
}
