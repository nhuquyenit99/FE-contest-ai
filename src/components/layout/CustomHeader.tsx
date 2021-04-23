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
import { HeaderRoutes } from '../../modules/pages/BaseUserPage/index';
const { Header } = Layout;
type CustomHeaderProps = {
    routes: HeaderRoutes
}
function CustomHeader({routes}: CustomHeaderProps) {
    return (
        <Header>
            <Row>
                <Col xs={16}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
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
                <Col>
                    <Space align='end' size="large">
                        <CustomBadge></CustomBadge>
                        <AvatarContainer dark></AvatarContainer>
                        <SettingDropdown></SettingDropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}

export default CustomHeader;