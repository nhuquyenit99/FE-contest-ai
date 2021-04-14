import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import CustomAvatar from './CustomAvatar';
export interface TextProps {
    level: Number
}

function AvatarContainer(TextProps) {
    return (
        <Space>
            <CustomAvatar></CustomAvatar>
            <Text style={{color: '#FFF'}}>Đại Nguyễn</Text>
        </Space>
    );
}

export default AvatarContainer;