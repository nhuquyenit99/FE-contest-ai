import {
    DeleteOutlined 
} from '@ant-design/icons';
import CustomButton from './CustomButton';
export default function DeleteButton(propsObj) {
    const props = {
        type: 'danger',
        icon: <DeleteOutlined />
    };
    return (
        <CustomButton 
            {...props}
            {...propsObj}
        />
    );
}