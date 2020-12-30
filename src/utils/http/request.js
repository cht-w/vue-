import axios from 'axios'
import errorCode from './errorCode'
import config from './config'
import {Notification , MessageBox , Message} from 'element-ui'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const request = axios.create({
    // 配置 axios 的 baseUrl 的公共请求Url部分
    baseURL:config.dev,
    // 超时时间
    timeout:1000000
})

// 设置请求拦截
request.interceptors.request.use(config => {
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false;
    if(!isToken) {
        // 为每个请求携带自定义的token值
        config.headers['Authorization'] = '11111';        // window.localStorage.getItem('token');
    }
    return config
}, err=> {
    console.log(err);
    Promise.reject(err);
})

// 设置响应拦截

request.interceptors.response.use(res=> {
    // 获取请求响应状态码,如果没有设置则默认 200 
    const code = res.data.code || 200 ; 

    // 设置响应提示消息
    const message = errorCode[code] || res.data.msg || errorCode['default'];
    if(code === 401) {
        MessageBox.confirm('登陆过期，需要重新登陆' , {
            confirmButtonText:'重新登陆',
            cancelButtonText:'取消',
            type:'warning'
        }).then(()=> {
            // 跳回登陆页面
        })
    }else if(code === 500) {
        Message({
            message:message,
            type:'error'
        })
        return Promise.reject(new Error(message));
    }else if(code !== 200) {
        Notification.error({
            title:message
        })
        return Promise.reject(new Error('message'));
    }else {
        return res.data;
    }

} , err=> {
    console.log(err);
    Message({
        message:err.message,
        type:'error',
        duration:50000
    })
    return Promise.reject(err);
})

export default request

// {
//     "code": 0,
//     "data": {
//       "currentPage": 1,
//       "list": [
//         {
//           "id": 2,
//           "type_name": "设备类型2",
//           "model": "型号2",
//           "message_protocol": "通讯规约2",
//           "event_id": ""
//         },
//         {
//           "id": 3,
//           "type_name": "设备类型3",
//           "model": "型号3",
//           "message_protocol": "通讯规约2",
//           "event_id": ""
//         }
//       ],
//       "total": 2
//     },
//     "msg": "获取列表数据成功"
//   }