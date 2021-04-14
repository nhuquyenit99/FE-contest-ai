import { Button } from 'antd';
import {
    EditOutlined
} from '@ant-design/icons';
export interface Props {
    handleClick?: () => void;
}
export default function EditButton({handleClick}: Props) {
    return (
        <Button type="primary" icon={<EditOutlined />} onClick={handleClick}>
        </Button>
    );
}