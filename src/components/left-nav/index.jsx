import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Icon } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    MessageOutlined,
} from '@ant-design/icons';
import './index.less'
import logo from '../../assets/images/night.png'
import menuList from '../../config/menuConfig';


const { SubMenu } = Menu;
const icon = React.createElement(
    Icon['PieChartOutlined'],
    {
      style:{ fontSize: '16px'}
    }
  )

export default class LeftNav extends Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //根据menu数组生成对应的标签数组
    getMenuNodes = (menuList) => {
        return menuList.map((item) => {
            /**
             * 
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/home">首页</Link>

                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                            <Link to="/category">品类管理</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<ContainerOutlined />}>
                            <Link to="/product">商品管理</Link>
                        </Menu.Item>

                    </SubMenu>
             * 
             */
            if (!item.children) {
                let icon = React.createElement(Icon[item.icon])

                return (
                    <Menu.Item key={item.key} icon={icon}>
                        <Link to="/home">首页</Link>

                    </Menu.Item>
                )
            }
        })
    }
    render() {
        return (
            <div className="left_nav">
                <Link to="/" className="left_nav_header">
                    <img src={logo} alt="" />
                    <h1>React Backstage</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                  
                   
                    {
                        // this.getMenuNodes(menuList)
                      
                    }

                    <Menu.Item key="1" icon={icon}>
                    
                        <Link to="/home">首页</Link>

                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                            <Link to="/category">品类管理</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<ContainerOutlined />}>
                            <Link to="/product">商品管理</Link>
                        </Menu.Item>

                    </SubMenu>

                    <Menu.Item key="/user" icon={<PieChartOutlined />}>
                        <Link to="/user">用户管理</Link>

                    </Menu.Item>
                    <Menu.Item key="/role" icon={<MailOutlined />}>
                        <Link to="/role">角色管理</Link>

                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>

            </div>
        )
    }
}