/**
 * axios 封装
 */
import axios from "axios";
import config from './../config'
import {ElMessage} from "element-plus";
import router from "../router";

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络错误，请稍候再试！'

// 创建axios对象
const service = axios.create({
    baseURL: config.baseApi
})

// 请求拦截
service.interceptors.request.use(req => {
    const headers = req.headers
    if (!headers.Authorization) {
        headers.Authorization = 'Retro'
    }
    return req
})

// 响应拦截
service.interceptors.response.use(req => {
    const {code, data, msg} = req.data
    if (code === 200) {
        return data
    } else if (code === 40001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 15000)
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error((msg || NETWORK_ERROR))
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns {AxiosPromise}
 */
function request(options) {
    options.method = options.method || 'GET'
    if (options.method.toLocaleLowerCase() === 'get') {
        options.params = options.data
    }
    if (typeof options.mock != 'undefined'){
        config.mock = options.mock
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }

    return service(options)
}

['get', 'post'].forEach(item => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})
export default request
