import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';

function CustomAvatar() {
    return (
        <>
            <Avatar size={40} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </>
    );
}

export default CustomAvatar;