import React from 'react';
import Logo from '../core/Logo';
import { Col, Layout, Menu, Row, Space, Button } from 'antd';
import CustomAvatar from '../core/CustomAvatar';
import AvatarContainer from '../core/AvatarContainer';
import CustomBadge from '../core/CustomBadge';
import {
    MenuFoldOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import SettingDropdown from './SettingDropdown';
import { HeaderRoutes } from 'modules/Contestant/BaseUserPage/index';
import { useContext } from 'react';
import { UserContext } from '../../context/index';
const { Header } = Layout;
type CustomHeaderProps = {
    routes: HeaderRoutes
}
function CustomHeader({ routes }: CustomHeaderProps) {
    const {displayName} = useContext(UserContext);
    return (
        <Header className='__header-wrapper__'>
            <Row>
                <Col xs={16}>
                    <Menu 
                        className="__menu-nav-wrapper__" 
                        theme="dark" 
                        mode="horizontal" 
                        defaultSelectedKeys={['1']}>
                        {
                            routes.map((route, idx) =>
                                <Menu.Item key={idx}>
                                    <NavLink to={route.path}>
                                        {route.label}
                                    </NavLink>
                                </Menu.Item>)
                        }
                    </Menu>
                </Col>
                <Col style={{ marginLeft: 'auto' }}>
                    <Space size="large" align="end">
                        <CustomBadge></CustomBadge>
                        <AvatarContainer displayName={displayName} dark></AvatarContainer>
                        <SettingDropdown></SettingDropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}

export default CustomHeader;