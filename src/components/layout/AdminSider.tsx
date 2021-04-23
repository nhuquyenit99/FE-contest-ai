import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import AvatarContainer from 'components/core/AvatarContainer';
import {LogoutOutlined} from '@ant-design/icons';
import logOut from 'services/logout';
import { ListMyRoutes, MyRoute } from 'modules/pages/AdminPage/index';
const { Sider } = Layout;
interface Props {
    routes: ListMyRoutes,
}

export default function AdminSider({routes}: Props) {
    const [collapsed, setCollapsed] = useState(false);

    let onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div style={{marginLeft: collapsed? '20px': '12px'}}>
                <AvatarContainer dark collapsed={collapsed}></AvatarContainer>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    routes.map((menuItem: MyRoute, idx) => {
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

                <Menu.Item icon={<LogoutOutlined/>}>
                    <NavLink to="/">
                        <Button onClick={logOut}>
                            Log out
                        </Button>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}