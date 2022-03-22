
import axios from "axios";

axios.defaults.baseURL = process.env.baseUrl

// 統一異常處理
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err && err.response) {
      console.log("axios interceptors response:");
      switch (err.response.status) {
        case 401:
          console.log('401');
          break;
        case 403:
          console.log("403拒絕存取");
          break;
        case 404:
          console.log("404找不到該頁面");
          break;
        case 500:
          console.log("500伺服器出錯");
          break;
        case 503:
          console.log('503');
          break;
        default:
          // console.log(err.response);
          console.log(`連接錯誤${err.response.status}`);
      }
    } else {
      console.log("連接到服務器失敗");
    }
    return Promise.resolve(err.response);
  }
);

const request = {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, data = {}, config) {
    return new Promise((resolve, reject) => {
      // console.log("the request is BASE %s URI %s with Data %s",axios.defaults.baseURL ,url,JSON.stringify(data))
      axios
        .post(url, data, config)
        .then(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
        .catch((err) => {
          // console.log("ERROR:the request is BASE %s URI %s with Data %s", axios.defaults.baseURL, url, JSON.stringify(data));
          reject(err);
        });
    });
  },
  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
};

export default request;
