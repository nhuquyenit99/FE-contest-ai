import { ProblemStatusEnum } from './index';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    SyncOutlined
} from '@ant-design/icons';
import { Button } from 'antd';
type ProblemStatusProps = {
    status: ProblemStatusEnum
}

type IconElement = {
    icon: any,
    backgroundColor: string,
}

export default function ProblemStatusIcon({status}: ProblemStatusProps) {
    const successElement:IconElement = {
        icon: <CheckCircleOutlined></CheckCircleOutlined>,
        backgroundColor: 'limegreen',
    };
    const failedElement:IconElement = {
        icon: <CloseCircleOutlined></CloseCircleOutlined>,
        backgroundColor: 'red',
    };
    const pendingElement:IconElement = {
        icon: <SyncOutlined spin />,
        backgroundColor: 'midnightblue',
    };
    let statusElement: IconElement = {
        icon: <></>,
        backgroundColor: '#fff'
    };
    switch(status) {
    case ProblemStatusEnum.SUCCESSED: statusElement = successElement; break;
    case ProblemStatusEnum.FAILED: statusElement = failedElement; break;
    case ProblemStatusEnum.PENDING: statusElement = pendingElement; break;
    default: ;
    }
    let resultElement: JSX.Element = <Button type='primary' shape='circle' icon={statusElement.icon} 
        style={{backgroundColor: statusElement.backgroundColor}}
    ></Button>;
    return resultElement;
}