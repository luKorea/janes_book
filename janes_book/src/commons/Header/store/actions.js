import * as Types from './actionTypes';
import http from '../../../server';
import { fromJS } from 'immutable';

const changeFocused = () => ({
    type: Types.SEARCH_FOCUSED
});
const changeBlurs = () => ({
    type: Types.SEARCH_BLURS
});
const mouseEnter = () => ({
    type: Types.MOUSEENTER
});
const mouseLeave = () => ({
    type: Types.MOUSELEAVE
});
const switchPage = (page) => ({
    type: Types.SWITCH_PAGE,
    page
});


const  getList = () => {
  return async (dispatch) => {
   const res = await http.get('/api/headerList.json');
   const data = res.data.data;
   dispatch(changeList(data));
  }
};



const changeList = (data) => ({
    type: Types.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});



export {
    changeFocused,
    changeBlurs,
    mouseEnter,
    mouseLeave,
    switchPage,
    getList
}
