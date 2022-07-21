/*
    axios二次封装
*/ 
import axios from 'axios'
import config from './../conifg'
import router from '../router'
import conifg from './../conifg'

const TOKEN_INVALID = 'Token认证失败,请重新登陆'
const NETWORK_ERROR = '网络异常,请重试'


// 创建axios实例对象,添加全局配置 
const service = axios.create({
    baseURL:config.beseUrl,
    timeout:8000
})

// 请求拦截
service.interceptors.request.use((req)=>{
    console.log('请求')
    // TO-DO
    const headers = req.headers
    if(!headers.Authorzation){
        headers.Authorzation = 'ccb'
    }
    return  req
})

// 响应拦截
service.interceptors.response.use((res)=>{
    console.log('响应')
    const {code,data,msg} = res.data
    // if(code == 200){
    //     return data; 
    //     // 成功
    // }else if(code == 40001){
    //     setTimeout(()=>{
    //         router.push('/login')
    //     },1500)
    //     return Promise.reject(TOKEN_INVALID)
    // }else {
    //     return Promise.reject(msg || NETWORK_ERROR)
    // }
    return res.data.data    
})



/**
 * @param {*} options
 * 
 * */ 
function request(options){
    console.log('调用')
    options.method = options.method || 'get'
    if(!options.method.toLowerCase() === 'get'){
        options.params = options.data;
    }

    if(conifg.env === 'prod'){
        service.defaults.baseURL = conifg.baseApi
    } else {
        service.defaults.baseURL = conifg.mock ? config.mockApi:config.baseApi 
    }
    return service(options)
}
export default request;