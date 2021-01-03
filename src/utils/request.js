/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

// axios()
// axios.get()
// axios.post()

// 创建一个axios实例，相当于复制了一个axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})
// axios({
//     method: '',
//     url: ''
// })

// 导出请求方法
export default request

// 谁要使用谁就加载request模块
// import request from './request.js'
// request({

// })