/**
 * 发送异步ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是一个Promise对象
 * 1、优化：统一处理请求异常
 *  
 */

import axios from "axios";

export default function ajax(url,data={},type='GET'){

    return new Promise ((resolve,reject)=>{
        let promise
        //1.执行ajax请求
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
    })
   

}

// ajax('/login',{username:'tom',password:'1234'},'POST')