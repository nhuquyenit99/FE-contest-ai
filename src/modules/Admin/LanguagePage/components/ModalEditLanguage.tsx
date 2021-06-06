import { useEffect } from 'react';
import { Form, FormInstance, Input, notification } from 'antd';
import { Store } from 'rc-field-form/lib/interface';
import CustomModal from 'components/core/CustomModal';
import { fetchUpdateLanguage } from 'services/language';
import { Item } from '..';

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
            <Form.Item
                label='File extensions'
                name='file_extensions'>
                <Input size="large" placeholder='File extensions' />
            </Form.Item>

        </Form>
    );
};


type Props = {
    visible: boolean,
    editedItem: Item,
    setVisible: (value: boolean) => void,
    setShouldRefreshData: (value: boolean) => void
}

export default function ModalEditLanguage({
    visible,
    editedItem,
    setVisible,
    setShouldRefreshData
} :Props) {
    const [form] = Form.useForm();
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
                setVisible(false);
            })
            .catch(err => { });
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const editLanguageModalProps = {
        visible,
        title: 'Edit language',
        childComponent: renderChildComponent(form, editedItem, handleOk),
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...editLanguageModalProps}></CustomModal>
    );
}