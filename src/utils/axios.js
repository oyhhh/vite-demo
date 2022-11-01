import axios from 'axios'
import { ACCESS_TOKEN } from './utils'


axios.defaults.baseURL =
    import.meta.env.VITE_APP_BASE_URL //请求地址

//跨域访问需要发送cookie时一定要加axios.defaults.withCredentials = true
axios.defaults.withCredentials = true

//默认的请求超时时间
axios.defaults.timeout = 1000000;

/* 
设置请求传递数据的格式(看服务器要求的格式)
x-www-form-urlencoded
默认提交表单
把数据对象序列化成表单数据
*/
axios.defaults.headers.post['Content-Type'] = ' application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

/*

请求拦截器：发送请求前需要调用这个函数

1.当没有登录时，直接跳转到登录页

2.请求发送前把token获取 设置到header中

*/

axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        const token = ACCESS_TOKEN();
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config;
    },
    error => {
        return Promise.error(error);
    });

axios.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),

    // 请求失败
    error => {
        if (error.response) {
            // 判断一下返回结果的status == 401？  ==401跳转登录页面。  ！=401passs
            if (error.response.status === 401) {
                window.location.href = "test"
            } else {
                // errorHandle(response.status, response.data.message);
                return Promise.reject(error.response);
            }
            // 请求已发出，但是不在2xx的范围
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
            return Promise.reject(error.response);
        }
    });


// 封装xiaos请求  封装axios里的get
export function axios_get(url, params) {
    return new Promise(
        (resolve, reject) => {
            axios.get(url, { params: params })
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err.data)
                })
        }
    )
}

// 封装xiaos请求  封装axios里的post
export function axios_post(url, data) {
    return new Promise(
        (resolve, reject) => {
            axios.post(url, JSON.stringify(data))
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err.data)
                })
        }
    )
}

// 封装xiaos请求  封装axios里的put
export function axios_put(url, data) {
    return new Promise(
        (resolve, reject) => {
            axios.put(url, JSON.stringify(data))
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err.data)
                })
        }
    )
}

// 封装xiaos请求  封装axios里的delete
export function axios_delete(url, data) {
    return new Promise(
        (resolve, reject) => {
            axios.delete(url, { params: data })
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err.data)
                })
        }
    )
}