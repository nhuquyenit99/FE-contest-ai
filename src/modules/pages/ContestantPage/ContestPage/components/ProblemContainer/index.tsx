import React from 'react';
import UploadFile from './components/UploadFile';
import Layout from 'antd/lib/layout/layout';
import { Alert, Button, Card, Progress, Space } from 'antd';
import ProblemDetail from './components/ProblemDetail';

export function ProblemContainer() {
    return (
        <Layout>
            <Card>
                <ProblemDetail></ProblemDetail>
                <div>
                    <UploadFile label="Upload file model"></UploadFile>
                    <UploadFile label="Upload file test code"></UploadFile>
                    <UploadFile label="Upload file train"></UploadFile>
                </div>
                <Button type="primary" style={{ width: 'auto' }}>Submit</Button>
                <div>
                    <Alert
                        banner
                        message="Submit successfully!"
                        type="success"
                        closable
                    />
                    <Alert
                        banner
                        message="Failed submit!"
                        description="Check file and submit again!"
                        type="error"
                        closable>
                    </Alert>
                </div>
                <div className="">
                    <Space>
                        <Progress type="circle" percent={30} />
                        <Progress type="circle" percent={30} />
                        <Progress type="circle" percent={30} />
                    </Space>
                </div>
            </Card>
        </Layout>
    );
}