import { useEffect } from 'react';
import { Form, FormInstance, Input, notification } from 'antd';
import CustomModal from 'components/core/CustomModal';
import { Store } from 'rc-field-form/lib/interface';
import { LANGUAGE_API_ADDRESS} from 'const/api';
import axios from 'axios';

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

const fetchUpdateLanguage = (id, newObj) => {
    const apiUpdateLanguageId = LANGUAGE_API_ADDRESS.concat(id).concat('/');
    return axios.put(apiUpdateLanguageId, newObj);
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
                console.log(values);
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