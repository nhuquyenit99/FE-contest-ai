import Modal from 'antd/lib/modal/Modal';
import CustomModal from 'components/core/CustomModal';
import {
    UserOutlined
} from '@ant-design/icons';
import { Input } from 'antd';


const childAddLanguageComponent = (
    <>
        <Input size="large" placeholder="name" prefix={<UserOutlined />} />
        <br />
        <br />
        <Input size="large" placeholder="path" prefix={<UserOutlined />} />
        <br />
    </>
);
export default function ModalAddLanguage(props) {
    const {setIsAddLanguageModalVisible} = props;    
    const handleOk = () => {
        setIsAddLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsAddLanguageModalVisible(false);
    };
    
    const addLanguageModalProps = {
        title: 'Add language',
        childComponent: childAddLanguageComponent,
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...props} {...addLanguageModalProps}></CustomModal>
    );
}