import React, { ReactNode, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
interface Props {
    routes: Array<{path: string, label: string, icon: ReactNode}>,
}

export default function AdminSider({routes}: Props) {
    const [collapsed, setCollapsed] = useState(false);

    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    routes.map((menuItem, idx) => {
                        return (
                            <Menu.Item key={idx}>
                                <NavLink key={idx} to={menuItem.path}>
                                    {menuItem.label}
                                </NavLink>
                            </Menu.Item>
                        );
                    })
                }
            </Menu>
        </Sider>
    );
}

// ReactDOM.render(<SiderDemo />, mountNode);
// #components-layout-demo-side .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.3);
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }