import React, { ReactNode, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
import AvatarContainer from 'components/core/AvatarContainer';

const { Sider } = Layout;
interface Props {
    routes: Array<{path: string, label: string, icon: ReactNode}>,
}

export default function AdminSider(props) {
    const {routes} = props;
    const [collapsed, setCollapsed] = useState(false);

    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <AvatarContainer></AvatarContainer>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    routes.map((menuItem, idx) => {
                        let Icon = menuItem.icon;
                        return (
                            <Menu.Item key={idx} icon={<Icon></Icon>}>
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