import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import CustomAvatar from './CustomAvatar';
function AvatarContainer(props) {
    const {collapsed, dark} = props;
    return (
        <Space>
            <CustomAvatar></CustomAvatar>
            {collapsed? null : <Text style={{color: dark?'#FFF': '#000'}}>Đại Nguyễn</Text>}
        </Space>
    );
}

export default AvatarContainer;