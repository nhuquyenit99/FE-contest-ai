import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { BaseButtonProps } from 'antd/lib/button/button';
type CustomButtonProps = BaseButtonProps&{
}

export default function CustomButton(propsObj:CustomButtonProps) {
    return (
        <Button {...propsObj} >
        </Button>
    );
}