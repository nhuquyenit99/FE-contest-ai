import CustomButton from './CustomButton';
import {
    EditOutlined
} from '@ant-design/icons';

export default function DeleteButton(propsObj) {
    const props = {
        type: 'primary',
        icon: <EditOutlined />
    };
    return (
        <CustomButton 
            {...props}
            {...propsObj}
        />
    );
}