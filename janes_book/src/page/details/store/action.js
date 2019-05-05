import * as Types from './actionTypes';
import http from '../../../server';

const detailData = (title, content) => ({type: Types.DETAILS_DATA, title, content});
const getDetailsData = (id) => {
    return async (dispatch) => {
        const res = await http.get('/api/detail.json?id=' + id);
        const data = res.data.data;
        dispatch(detailData(data.title, data.content));
    }
};
export {
    getDetailsData
}
