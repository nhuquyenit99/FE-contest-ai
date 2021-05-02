import { Card, Col, Row } from 'antd';

export default function InfoStaticsBlock() {
    return (
        <div className='site-card-wrapper'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title='Card title' bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title='Card title' bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title='Card title' bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    );
}