import React, { useState } from 'react';
import Layout from 'antd/lib/layout/layout';
import { Form, Alert, Button, Card, Progress, Space, Upload, notification, Row, Col } from 'antd';
import ProblemDetail from './components/ProblemDetail';
import { Problem } from 'services/problem';
import { UploadOutlined } from '@ant-design/icons';
import { fetchSubmitResult } from 'services/result';
import { LanguageName } from 'services/language';
import Text from 'antd/lib/typography/Text';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

type ProblemContainerProps = {
    problem: Problem
}

export function ProblemContainer({ problem }: ProblemContainerProps) {
    const [language, setLanguage] = useState<LanguageName>(problem.languages[0]);
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        const fileFields = Object.keys(values);
        fileFields.map((field) => {
            const { file } = values[field];
            values[field] = file;
        });
        let data = {
            ...values,
            problem_id: problem._id,
            language_id: language._id,
        };
        console.log(data);
        fetchSubmitResult(data)
            .then(resp => {
                console.log(resp);
                notification.success({
                    message: 'Submit files successfully!'
                });
            })
            .catch((err) => {
                console.log(err);
                notification.error({
                    message: 'Failed submit files!'
                });
            });
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
        <Layout>
            <Card>
                <ProblemDetail problem={problem}></ProblemDetail>
                <Row>
                    <Col xs={12} style={{margin: 'auto'}}>
                        <Space>
                            {
                                problem.languages.map(lang => {
                                    return <Button
                                        type={lang._id === language._id ? 'primary' : 'default'}
                                        onClick={() => setLanguage(lang)}
                                        key={lang.name}>{lang.name}
                                    </Button>;
                                })
                            }
                        </Space>
                        <Card>
                            <Form
                                {...layout}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name='model_file'
                                    label='Upload file model'
                                >
                                    <Upload
                                        {...uploadProps}
                                        accept=".cpp,.py,.js"
                                    >
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item
                                    name='code_train'
                                    label='Upload file train'
                                >
                                    <Upload
                                        {...uploadProps}
                                        accept=".cpp,.py,.js"
                                    >
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item
                                    name='code_test'
                                    label='Upload file test'
                                >
                                    <Upload
                                        {...uploadProps}
                                        accept=".cpp,.py,.js"
                                    >
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 8, offset: 8}}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={6} style={{margin: 'auto'}}>
                        <Card>
                            <Text>Accuracy</Text>
                            <Space>
                                <Progress type="circle" percent={30} />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Layout>
    );
}