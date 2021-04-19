import { Form, Input } from 'antd';
import CustomModal from 'components/core/CustomModal';



export default function ModalEditLanguage(props) {
    const [form] = Form.useForm();
    const { setIsEditLanguageModalVisible, editedItem } = props;

    const handleOk = () => {
        setIsEditLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsEditLanguageModalVisible(false);
    };
    const childEditLanguageComponent = (
        <Form
            form={form}
            onFinish={handleOk}
            initialValues={{...editedItem}}>
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