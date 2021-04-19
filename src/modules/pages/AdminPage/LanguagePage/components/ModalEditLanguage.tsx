import {useEffect} from 'react';
import { Form, FormInstance, Input } from 'antd';
import CustomModal from 'components/core/CustomModal';
import { Store } from 'rc-field-form/lib/interface';

const renderChildComponent = (
    form: FormInstance, 
    initialValues?: Store,
    handleOk?: ((values: any) => void), 
) => {
    return (
        <Form
            form={form}
            onFinish={handleOk}
            initialValues={initialValues}
        >
            <Form.Item
                label='name'
                name="name">
                <Input size="large" placeholder='Language name'/>
            </Form.Item>
            <Form.Item
                label='path'
                name='path'>
                <Input size="large" placeholder='Path'/>
            </Form.Item>
        </Form>
    );
};

export default function ModalEditLanguage(props) {
    const [form] = Form.useForm();
    const { setIsEditLanguageModalVisible, editedItem } = props;
    useEffect(() => {
        form.resetFields();
    });

    const handleOk = () => {
        setIsEditLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsEditLanguageModalVisible(false);
    };
    
    

    const editLanguageModalProps = {
        title: 'Edit language',
        getContainer: false,
        childComponent: renderChildComponent(form, editedItem, handleOk),
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...props} {...editLanguageModalProps}></CustomModal>
    );
}