import {
    DeleteOutlined 
} from '@ant-design/icons';
import CustomButton from './CustomButton';
export interface Props{
    handleClick?: () => void;
};
export default function DeleteButton({handleClick}: Props) {
    return (
        <CustomButton 
            handleClick={handleClick} 
            icon={<DeleteOutlined />}
        />
    );
}