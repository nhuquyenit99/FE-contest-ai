import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    CommentOutlined,
    CrownOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminSider extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CrownOutlined />}>
                        Contests
                    </Menu.Item>                    
                    <Menu.Item key="5" icon={<CommentOutlined />}>
                        Languages
                    </Menu.Item>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default AdminSider;

// ReactDOM.render(<SiderDemo />, mountNode);
// #components-layout-demo-side .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.3);
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }