import CustomModal from 'components/core/CustomModal';
import { Form, Input, notification } from 'antd';
import axios from 'axios';
import API_ADDRESS from 'const/api';


const apiAddLanguage = API_ADDRESS.concat('/api/language/');
const fetchAddLanguage = (body) => {
    return axios.post(apiAddLanguage, body);
};

export default function ModalAddLanguage(props) {
    const {setIsAddLanguageModalVisible, setShouldRefreshData} = props;    
    const [form] = Form.useForm();
    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log(values);
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
                setIsAddLanguageModalVisible(false);
            })
            .catch(err => {});
    };

    const handleCancel = () => {
        setIsAddLanguageModalVisible(false);
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
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...props} {...addLanguageModalProps}></CustomModal>
    );
}