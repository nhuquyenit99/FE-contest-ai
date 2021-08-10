import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification, Checkbox, Row, Col, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DataAccess, useEntityDataList } from 'access';
import { Language } from 'models';
import './style.scss';

type AddProblemProps = {
    contestId: string
    onHandleSuccess: () => void
}

export function AddProblemModal ({
    contestId,
    onHandleSuccess
}: AddProblemProps) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const {data: languages} = useEntityDataList<Language>('api/organizer/language');

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 19 },
        },
    };

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await DataAccess.FilePost(`api/organizer/contest/${contestId}/problems`, {
                ...values,
                contest: contestId,
                languages: values.languages?.join(', '),
                description:values?.description?.file,
                code_test: values?.code_test?.file,
                data_sample: values?.data_sample?.file,
                train_data: values?.train_data?.file,
                test_data: values?.test_data?.file,
            });
            setLoading(false);
            notification.success({
                message: 'Add problem successfully!'
            });
            setVisible(false);
            onHandleSuccess();
        } catch {
            notification.error({
                message: 'Add problem failed!'
            });
            setLoading(false);
        }
    };    

    const uploadProps = {
        maxCount: 1,
        onRemove: file => {
            console.log(file);
        },
        beforeUpload: (file, abc) => {
            console.log(file);
            return false;
        }
    };
    return (
        <div className='add-problem'>
            <Button shape='round' type='primary' onClick={() => setVisible(true)}>Add Problem</Button>
            <Modal 
                width={800}
                title='Add problem' 
                visible={visible} 
                onCancel={() => {
                    setVisible(false);
                    form.resetFields();
                }} 
                onOk={() => {
                    form.submit();
                }}
                className='add-problem-modal'
                confirmLoading={loading}
                destroyOnClose
            >
                <Form
                    form={form}
                    {...formItemLayout}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Title'
                        name="title"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder='Title' />
                    </Form.Item>
                    <Form.Item
                        label='Description'
                        name="description"
                        rules={[{ required: true }]}
                    >
                        <Upload {...uploadProps} accept='.txt,.pdf'>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label='Score'
                        name="score"
                        rules={[{ required: true }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label='Time executed limit'
                        name="time_executed_limit"
                        rules={[{ required: true }]}
                    >
                        <InputNumber step={500}/>
                    </Form.Item>
                    <Form.Item name="languages" label="Language" rules={[{ required: true }]}>
                        <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                                {languages && languages.length ? languages.map(item => (
                                    <Col span={4}>
                                        <Checkbox value={item._id} style={{ lineHeight: '32px' }}>
                                            {item.name}
                                        </Checkbox>
                                    </Col>
                                )) : <Col span={4}>
                                    <Checkbox value="" style={{ lineHeight: '32px' }}>
                                        Loading...
                                    </Checkbox>
                                </Col>}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}
                        name="code_test"
                        label="Code test"
                    >
                        <Upload {...uploadProps} accept='.txt,.py,.java,.c'>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}
                        name="data_sample"
                        label="Data sample"
                    >
                        <Upload {...uploadProps} accept='.csv'>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}
                        name="train_data"
                        label="Train data"
                    >
                        <Upload {...uploadProps} accept='.csv'>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}
                        name="test_data"
                        label="Test data"
                    >
                        <Upload {...uploadProps} accept='.csv'>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}