import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification, Checkbox, Row, Col, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.scss';
import { DataAccess, useEntityData } from 'access';
import { Problem } from 'models';

type EditProblemProps = {
    problemId: string
}

export function EditProblemModal ({
    problemId,
}: EditProblemProps) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    
    const {loading: dataLoading, data} = useEntityData<Problem>(`/api/organizer/problem/${problemId}`);

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
            await DataAccess.Put(`api/organizer/problem/${problemId}`, values);
            setLoading(false);
            notification.success({
                message: 'Edit problem successfully!'
            });
            setVisible(false);
        } catch {
            notification.error({
                message: 'Edit problem failed!'
            });
            setLoading(false);
        }
    };

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    

    return (
        <div className='add-problem'>
            <Button shape='round' type='primary' onClick={() => setVisible(true)}>Edit Problem</Button>
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
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label='Score'
                        name="score"
                        rules={[{ required: true }]}
                    >
                        <InputNumber placeholder='Score' defaultValue={10}/>
                    </Form.Item>
                    <Form.Item
                        label='Time executed limit'
                        name="time_executed_limit"
                        rules={[{ required: true }]}
                    >
                        <InputNumber defaultValue={1000} step={500}/>
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
            </Modal>
        </div>
    );
}