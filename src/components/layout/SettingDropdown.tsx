import { Menu, Dropdown, Button } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                Settings
            </a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="/login">
                Logout
            </a>
        </Menu.Item>
    </Menu>
);


export default function SettingDropdown() {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Button type="primary" icon={<MenuFoldOutlined />} />
            </a>
        </Dropdown>
    );
}