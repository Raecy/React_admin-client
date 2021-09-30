import { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import logo from './images/night.png'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

export default class Login extends Component {
   

    render() {
        //如果用户已经登录，跳转admin界面
        const user = memoryUtils.user
        if(user._id){
            return <Redirect to='/' />
        }
        const onFinish = async (values) => {
           
            const {username,password} = values
            const result = await reqLogin(username,password)
            

            if(result.status === 0){
                message.success('登录成功！')
                const user = result.data;
              
                storageUtils.saveUser(user)
                this.props.history.replace('/');

            }else{
                message.error(result.msg)
            }
            // console.log('Received values of form: ', values);
            // const {username,password} = values
            // reqLogin(username,password).then(response => {
            //     console.log('成功',response.data);
            // }).catch(error=>{
            //     console.log('失败',error.message);
            // })
            // if(!err){
            //     const {username,password} = values
            //     const response = await reqLogin(username,password)
          
            //     const result = response.data;
            // }
            // else{
                
            //     console.log('失败');
            // }
            
        };
        // 自定义表单验证器
        const validatePsw = (_, value) => {
            if (!value) {
                return Promise.reject(new Error('Please input your Password!'))
            } else if (value.length < 4) {
                return Promise.reject(new Error('密码长度不能小于4'))
            }
            else if (value.length > 12) {
                return Promise.reject(new Error('密码长度不能大于12'))
            }
            else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                return Promise.reject(new Error('密码必须由英文、数字或下划线组成'))
            } else {
                return Promise.resolve()
            }

        }
        return (
            <div className="login">
                <header className="login_header">
                    <img src={logo} alt="" />
                    <h1>React 项目：后台管理系统</h1>
                </header>
                <section className="login_content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            // remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item name="username"
                            rules={[
                                // 声明式表单验证
                                {
                                    required: true, message: 'Please input your Username!',
                                },
                                {
                                    min: 4, message: '最少输入4位'
                                },
                                {
                                    max: 12, message: '最大输入12位'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、数字或下划线'
                                },
                                {
                                    whitespace: true, message: '不能为空格'
                                },
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password"
                            rules={[
                                // 自定义表单验证
                                {
                                    validator: validatePsw,
                                },
                            ]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}



/**
 * async 和 await
 * 1.作用？
 *      简化promise对象的使用：不用再使用then()来指定成功/失败的回调函数
 *  以同步编码(没使用回调)方式来实现异步流程
 * 2.如何使用
 *      在Promise对象的表达式左侧 写await；不要promise，只要promise异步执行成功的value
 *      await 所在最近的函数定义的左侧写上 async
 */

