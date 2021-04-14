import { Button } from 'antd';

export interface Props {
    icon: JSX.Element,
    handleClick?: () => void
}
export default function CustomButton({icon, handleClick}: Props) {
    return (
        <Button type="primary" icon={icon} onClick={handleClick}>
        </Button>
    );
}