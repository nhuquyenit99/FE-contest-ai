import CustomModal from 'components/core/CustomModal';
import { Form, Input, notification } from 'antd';
import { fetchAddLanguage } from 'services/language';
type Props = {
    visible: boolean,
    setVisible: (value: boolean) => void,
    setShouldRefreshData: (value: boolean) => void
}

export default function ModalAddLanguage(
    {
        visible,
        setVisible,
        setShouldRefreshData
    } : Props
) {
    const [form] = Form.useForm();
    const handleOk = () => {
        form.validateFields()
            .then(values => {
                fetchAddLanguage(values)
                    .then(resp => {
                        setShouldRefreshData(true);
                        notification.success({
                            message: 'Added language successfully',
                            style: {
                                width: 600,
                            },
                        });
                    })
                    .catch(err => console.log(err));
                form.resetFields();
                setVisible(false);
            })
            .catch(err => {});
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const childAddLanguageComponent = (
        <Form 
            form={form}
            onFinish={handleOk}>
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

    const addLanguageModalProps = {
        title: 'Add language',
        childComponent: childAddLanguageComponent,
        visible,
        handleOk,
        handleCancel,
    };
    
    return (
        <CustomModal
            {...addLanguageModalProps}></CustomModal>
    );
}