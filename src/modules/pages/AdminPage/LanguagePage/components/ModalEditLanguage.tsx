import CustomModal from 'components/core/CustomModal';
import {
    UserOutlined
} from '@ant-design/icons';
import { Input } from 'antd';


const childEditLanguageComponent = (
    <>
        <Input size="large" placeholder="name" prefix={<UserOutlined />} />
        <br />
        <br />
        <Input size="large" placeholder="path" prefix={<UserOutlined />} />
        <br />
    </>
);
export default function ModalEditLanguage(props) {
    const {setIsEditLanguageModalVisible} = props;    
    const handleOk = () => {
        setIsEditLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsEditLanguageModalVisible(false);
    };
    
    const editLanguageModalProps = {
        title: 'Edit language',
        childComponent: childEditLanguageComponent,
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...props} {...editLanguageModalProps}></CustomModal>
    );
}