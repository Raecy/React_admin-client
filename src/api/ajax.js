/**
 * 发送异步ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是一个Promise对象
 * 1、优化：统一处理请求异常
 *      在外层包一个自己创建的promise对象
 *      在请求出错时，不reject(error)而是显示错误信息
 * 2.优化:异步得到的不是response而是response.data
 *  
 */

import axios from "axios";
import {message} from 'antd'

export default function ajax(url,data={},type='GET'){

    return new Promise ((resolve,reject)=>{
        let promise
        //1.执行异步ajax请求
        //2.如果成功，调用resolve函数
        //3.如果失败，不调用reject,而是提示异常信息
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        promise.then((response)=>{
           
            resolve(response.data)
        }).catch((error)=>{
            message.error('请求出错！错误信息为：',error.message)
        })
    })
   

}

// ajax('/login',{username:'tom',password:'1234'},'POST')