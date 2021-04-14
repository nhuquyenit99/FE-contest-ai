import React from 'react';
import { Row, Col } from 'antd';
import UploadFile from 'components/core/UploadFile';

export interface Props {
    label: string;
    submitForm?: () => void;
}

function ContestUploadFile({ label, submitForm }: Props) {
    return (
        <div>
            <Row>
                <Col xs={6} xl={8}>
                    <div>{label} </div>
                </Col>
                <Col xs={6} xl={8}>
                    <UploadFile></UploadFile>
                </Col>
            </Row>
        </div>
    );
}

export default ContestUploadFile;
