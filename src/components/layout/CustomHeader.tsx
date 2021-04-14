import React from 'react';
import Logo from '../core/Logo';
import { Col, Layout, Menu, Row, Space } from 'antd';
import CustomAvatar from '../core/CustomAvatar';
import AvatarContainer from '../core/AvatarContainer';
import CustomBadge from '../core/CustomBadge';
const { Header } = Layout;
function CustomHeader() {
    return (
        <Header>
            <Row>
                <Col xs={16}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="0"><Logo></Logo></Menu.Item>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Dashboard</Menu.Item>
                        <Menu.Item key="3">Help</Menu.Item>

                        <Menu.Item key="4">

                        </Menu.Item>

                    </Menu>
                </Col>
                <Col>
                    <Space align="center" size="large">
                        <CustomBadge></CustomBadge>
                        <AvatarContainer></AvatarContainer>
                    </Space>
                </Col>
            </Row>
        </Header>
    );
}

export default CustomHeader;