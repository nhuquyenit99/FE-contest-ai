import React from 'react';
import { Col, Layout, Menu, Row, Space } from 'antd';
import AvatarContainer from '../core/AvatarContainer';
import CustomBadge from '../core/CustomBadge';
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
    const {displayName, _id} = useContext(UserContext);
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
                        <NavLink to={`/contestant/user/${_id}`}>
                            <AvatarContainer displayName={displayName} dark></AvatarContainer>
                        </NavLink>
                        <SettingDropdown></SettingDropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}

export default CustomHeader;