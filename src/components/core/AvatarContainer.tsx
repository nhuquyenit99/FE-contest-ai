import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import CustomAvatar from './CustomAvatar';
type AvatarProps = {
    collapsed?: boolean,
    dark?: boolean
    displayName: string
}
function AvatarContainer(props: AvatarProps) {
    const {collapsed, dark} = props;
    const {displayName} = props;
    return (
        <Space>
            <CustomAvatar></CustomAvatar>
            {collapsed? null : <Text style={{color: dark?'#FFF': '#000'}}>{displayName}</Text>}
        </Space>
    );
}

export default AvatarContainer;