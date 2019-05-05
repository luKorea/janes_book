import * as Types from './actionTypes'
import http from '../../../server'
import { fromJS } from 'immutable'

const getHomeData = (res) => ({
    type: Types.CHANGE_DATA,
    topicList: res.topicList,
    articleList: res.articleList,
    recommendList: res.recommendList
});

const getMove = (list, nextPage) => ({
   type: Types.GET_MOVE,
   list: fromJS(list),
    nextPage
});

const getMoveList = (articlePage) => {
    return async (dispatch) => {
        const res = await http.get('/api/homeList.json?page=' + articlePage);
        const data = res.data.data;
        dispatch(getMove(data, articlePage + 1))
    }
};

const getHomeList = () => {
    return async (dispatch) => {
        const res = await http.get('/api/home.json');
        const data = res.data.data;
        dispatch(getHomeData(data))
    }
};
const changeScroll = (toggle) => ({
    type: Types.SHOW_SCROLL,
    toggle
});

export {
    getHomeList,
    getMoveList,
    changeScroll
}
