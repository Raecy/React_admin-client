import { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import logo from './images/night.png'

export default class Login extends Component {
    handleSubmit = () => {

    }

    render() {
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
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
                        // onSubmit={this.handleSubmit}
                        onFinish={onFinish}
                    >
                        <Form.Item name="username"
                            rules={[
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
                                // {
                                //     required: true,message: 'Please input your Password!',
                                // },
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

