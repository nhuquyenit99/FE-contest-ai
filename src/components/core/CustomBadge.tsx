import { Badge } from 'antd';
import {
    BellOutlined
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
const url = '#';
function CustomBadge() {
    return (
        <a href={url}>
            <Badge count={5} overflowCount={10}>
                <Avatar style={{backgroundColor: '#AAA'}}>
                    <BellOutlined style={{color: '#FFF', fontSize:'30px'}}/>
                </Avatar>
            </Badge>
        </a>
    );
}

export default CustomBadge;