import axios from 'axios';
import qs from 'qs'

let http = {
    post: '',
    get: ''
};
http.post = (api, data) => {
  let params = qs.stringify(data);
  return new Promise(((resolve, reject) => {
      axios.post(api, params)
          .then(res => {
              resolve(res);
          })
          .catch(err => {
              reject(err);
          })
  }));
};
http.get = (api, data) => {
  let  params = qs.stringify(data);
  return new Promise(((resolve, reject) => {
      axios.get(api, params)
          .then(res => {
              resolve(res);
          })
          .catch(err => {
              reject(err);
          })
  }));
};
export default http;
