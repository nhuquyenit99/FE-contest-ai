import React from 'react';
import Logo from '../core/Logo';
import { Col, Layout, Menu, Row, Space } from 'antd';
import CustomAvatar from '../core/CustomAvatar';
import AvatarContainer from '../core/AvatarContainer';
import CustomBadge from '../core/CustomBadge';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;
function CustomHeader(props) {
    const {routes} = props;
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
                    <Space align="center" size="large">
                        <CustomBadge></CustomBadge>
                        <AvatarContainer dark></AvatarContainer>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}

export default CustomHeader;