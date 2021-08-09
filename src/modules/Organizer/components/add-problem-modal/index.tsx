import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification, Checkbox, Row, Col, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.scss';
import { DataAccess } from 'access';

type AddProblemProps = {
    contestId: string
}

export function AddProblemModal ({
    contestId
}: AddProblemProps) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

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
        console.log('values', values);
        try {
            setLoading(true);
            await DataAccess.Post(`api/organizer/contest/${contestId}/problems`, values);
            setLoading(false);
            notification.success({
                message: 'Add problem successfully!'
            });
            setVisible(false);
        } catch {
            notification.error({
                message: 'Add problem failed!'
            });
            setLoading(false);
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
                        {/* <Upload name="logo" listType="text">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload> */}
                        <input name="logo" type='file' className='input-file' accept="image/*,.pdf"/>
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
                    >
                        <input name="logo" type='file' className='input-file' accept='.txt'/>
                    </Form.Item>
                    <Form.Item
                        name="data_sample"
                        label="Data sample"
                    >
                        <input name="logo" type='file' className='input-file' accept='.csv'/>
                    </Form.Item>
                    <Form.Item
                        name="train_data"
                        label="Train data"
                    >
                        <input name="logo" type='file' className='input-file' accept='.csv'/>
                    </Form.Item>
                    <Form.Item
                        name="test_data"
                        label="Test data"
                    >
                        <input name="logo" type='file' className='input-file' accept='.csv'/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}