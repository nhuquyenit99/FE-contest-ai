import { Menu, Dropdown, Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { UserContext } from '../../context/index';
function HamburgerMenu(logout: React.MouseEventHandler) {
    return (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Settings
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="/login">
                    <Button onClick={ logout }>
                        Logout
                    </Button>
                </a>
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