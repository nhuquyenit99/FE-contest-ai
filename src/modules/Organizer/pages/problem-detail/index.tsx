import React, { useEffect, useMemo, useState } from 'react';
import { Form, Input, Button, notification, Checkbox, Row, Col, Upload, InputNumber } from 'antd';
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { DataAccess, useEntityData, useEntityDataList } from 'access';
import { Language, Problem } from 'models';
import { Link, useParams } from 'react-router-dom';
import { OrganizerPageWrapper } from 'modules/Organizer/components';
import { LoadingFullView } from 'components';
import './style.scss';

export function ProblemDetail() {
    let { id: problemId } = useParams<any>();
    
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    
    const {loading: dataLoading, data, reload} = useEntityData<Problem>(`api/organizer/problem/${problemId}`);
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

    useEffect(() => {
        console.log('data', data );
        
        form.setFieldsValue({
            ...data, 
            languages: data?.languages.map(item => item._id),
            description: undefined,
            code_test: undefined,
            data_sample: undefined,
            train_data: undefined,
            test_data: undefined,
        });
    },[data, form]);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            let model = {
                ...values,
                languages: values.languages?.join(', '),
                description:values?.description?.file,
                code_test: values?.code_test?.file,
                data_sample: values?.data_sample?.file,
                train_data: values?.train_data?.file,
                test_data: values?.test_data?.file,
            };
            Object.keys(model).forEach(item => {
                if (!model[item]) {
                    delete model[item];
                }
            });
            console.log('model', model);
            
            await DataAccess.FilePut(`api/organizer/problem/${problemId}`, model);
            setLoading(false);
            notification.success({
                message: 'Edit problem successfully!'
            });
            reload();
            // onHandleSuccess();
        } catch {
            notification.error({
                message: 'Edit problem failed!'
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

    const descriptionUrl = useMemo(() => data?.description,[data]);

    return (
        <OrganizerPageWrapper title='ORGANIZER PAGE'>
            <div className='problem-edit-title'>
                <Link to={`/organizer/detail/${data?.contest?._id}`} className='btn-back'>
                    <Button shape='round'>
                        <ArrowLeftOutlined />
                        Back
                    </Button>
                </Link>
                <h1>Edit Problem</h1>
            </div>
            <Form
                form={form}
                {...formItemLayout}
                onFinish={onFinish}
                style={{
                    width: '100%',
                    position: 'relative'
                }}
            >
                {(dataLoading || loading) && <LoadingFullView />}
                <Form.Item
                    label='Title'
                    name="title"
                >
                    <Input placeholder='Title' />
                </Form.Item>
                <Form.Item
                    label='Description'
                    name="description"
                >
                    <Upload {...uploadProps} accept='.txt,.pdf'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <iframe src={data?.description} title='description' width="100%" height="500px"></iframe>
                <Form.Item
                    label='Score'
                    name="score"
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label='Time executed limit'
                    name="time_executed_limit"
                >
                    <InputNumber step={500}/>
                </Form.Item>
                <Form.Item name="languages" label="Language" >
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            {languages && languages.length ? languages.map(item => (
                                <Col span={8}>
                                    <Checkbox value={item._id} style={{ lineHeight: '32px' }}>
                                        {item.name}
                                    </Checkbox>
                                </Col>
                            )) : <Col span={8}>
                                <Checkbox value="" style={{ lineHeight: '32px' }}>
                                        Loading...
                                </Checkbox>
                            </Col>}
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item 
                    name="code_test"
                    label="Code test"
                >
                    <Upload {...uploadProps} accept='.txt,.py,.java,.c'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <iframe src={data?.code_test} title='description' width="100%" height="400px"></iframe>
                <Form.Item 
                    name="data_sample"
                    label="Data sample"
                >
                    <a href={data?.data_sample} target='_blank' rel="noreferrer" style={{marginRight: '15px'}}>
                        {data?.data_sample.split('/').reverse()[0]}
                    </a>
                    <Upload {...uploadProps} accept='.csv'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item 
                    name="train_data"
                    label="Train data"
                >
                    <a href={data?.train_data} target='_blank' rel="noreferrer" style={{marginRight: '15px'}}>
                        {data?.train_data.split('/').reverse()[0]}
                    </a>
                    <Upload {...uploadProps} accept='.csv'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item 
                    name="test_data"
                    label="Test data"
                >
                    <a href={data?.test_data} target='_blank' rel="noreferrer" style={{marginRight: '15px'}}>
                        {data?.test_data.split('/').reverse()[0]}
                    </a>
                    <Upload {...uploadProps} accept='.csv'>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }} style={{marginTop: '30px'}}>
                    <Button style={{marginRight: '15px'}} danger type='primary' ghost shape='round'>Cancel</Button>
                    <Link to={`/organizer/detail/${data?.contest?._id}`}><Button type="primary" htmlType="submit" shape='round'>
                        Save
                    </Button>
                    </Link>
                </Form.Item>
            </Form>
        </OrganizerPageWrapper>
    );
}