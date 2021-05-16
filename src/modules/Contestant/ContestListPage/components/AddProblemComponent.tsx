import { Card, Form, Input, notification, Row, Col, Checkbox, Upload, Button } from 'antd';
import { fetchAddLanguage } from 'services/language';
import { UploadOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export default function AddProblemComponent(props) {
    const { setIsAddLanguageModalVisible, setShouldRefreshData } = props;
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
                setIsAddLanguageModalVisible(false);
            })
            .catch(err => { });
    };

    // const handleCancel = () => {
    //     setIsAddLanguageModalVisible(false);
    // };
    // const rangeConfig = {
    //     rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
    // };
    const childAddContestComponent = (
        <Form
            form={form}
            {...formItemLayout}
            onFinish={handleOk}>
            <Form.Item
                label='Title'
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your title!',
                    },
                ]
                }>
                <Input size="large" placeholder='Title' />
            </Form.Item>

            <Form.Item
                label='Description'
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input description!',
                    },
                ]
                }>
                <Input size="large" placeholder='Description' />
            </Form.Item>
            <Form.Item
                label='Score'
                name="score"
                rules={[
                    {
                        required: true,
                        message: 'Please input score!',
                    },
                ]
                }>
                <Input size="large" placeholder='Score' />
            </Form.Item>
            
            <Form.Item
                label='Time executed limit'
                name="time_executed_limit"
                rules={[
                    {
                        required: true,
                        message: 'Please input score!',
                    },
                ]
                }>
                <Input size="large" placeholder='Time executed limit' />
            </Form.Item>
            <Form.Item name="checkbox-group" label="Language">
                <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                        <Col span={4}>
                            <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                Python
                            </Checkbox>
                        </Col>
                        <Col span={4}>
                            <Checkbox value="B" style={{ lineHeight: '32px' }}>
                                C
                            </Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item
                name="code_test"
                label="Code test"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
            
            <Form.Item
                name="data_sample"
                label="Data sample"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
            
            
            
            <Form.Item
                name="train_data"
                label="Train data"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="test_data"
                label="Test data"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
        </Form>
    );
    return (
        <Card title='Add contest'>
            {childAddContestComponent}
        </Card>
    );
}