import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import CustomAvatar from './CustomAvatar';
function AvatarContainer(props) {
    const {collapsed} = props;
    return (
        <Space>
            <CustomAvatar></CustomAvatar>
            {collapsed? null : <Text style={{color: '#FFF'}}>Đại Nguyễn</Text>}
        </Space>
    );
}

export default AvatarContainer;