/**
 * 包含应用中所有接口请求函数的模块
 */
import ajax from './ajax'
// const BASE = 'http://localhost:5000'
const BASE = ''


export const reqLogin = (username,password)=>{
    return ajax(BASE+'/login',{username,password},'POST')
}
export const reqAddUser = (user)=> ajax(BASE+'/manage/user/add',user,'POST')
