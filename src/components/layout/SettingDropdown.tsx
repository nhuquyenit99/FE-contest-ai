/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Dropdown, Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { UserContext } from '../../context/index';
import { NavLink } from 'react-router-dom';
function HamburgerMenu(logout: React.MouseEventHandler) {
    return (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Settings
                </a>
            </Menu.Item>
            <Menu.Item>
                <Button onClick={ logout }>
                    <NavLink to='/'>
                        Logout
                    </NavLink>
                </Button>
            </Menu.Item>
        </Menu>
    );
}


export default function SettingDropdown() {
    const {logout} = useContext(UserContext);
    return (
        <Dropdown overlay={HamburgerMenu(logout)}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Button type="primary" icon={<MenuFoldOutlined />} />
            </a>
        </Dropdown>
    );
}