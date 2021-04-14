import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
type StateType = {
    name: string
    action: string
}

class index extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        };
    }

    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    render() {
        let state = this.state;
        return (
            <Upload {...state}>
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        );
    }
}

export default index;