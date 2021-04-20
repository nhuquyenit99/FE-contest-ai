import { useEffect } from 'react';
import { Form, FormInstance, Input, notification } from 'antd';
import { Store } from 'rc-field-form/lib/interface';
import CustomModal from 'components/core/CustomModal';
import { fetchUpdateLanguage } from 'services/language';

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
                <Input size="large" placeholder='Language name' />
            </Form.Item>
            <Form.Item
                label='path'
                name='path'>
                <Input size="large" placeholder='Path' />
            </Form.Item>
        </Form>
    );
};

export default function ModalEditLanguage(props) {
    const [form] = Form.useForm();
    const {
        setIsEditLanguageModalVisible,
        editedItem,
        setShouldRefreshData 
    } = props;
    useEffect(() => {
        form.resetFields();
    });

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                fetchUpdateLanguage(editedItem._id, values)
                    .then(() => {
                        setShouldRefreshData(true);
                        notification.success({
                            message: 'Updated language successfully',
                            style: {
                                width: 600,
                            },
                        });
                    })
                    .catch((err) => { });
                form.resetFields();
                setIsEditLanguageModalVisible(false);
            })
            .catch(err => { });
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