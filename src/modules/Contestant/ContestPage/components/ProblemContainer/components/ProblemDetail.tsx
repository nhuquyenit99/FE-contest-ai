import React from 'react';
import { Divider, Row, Col } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function ProblemDetail() {
    return (
        <div className="contest">
            <Row gutter={24}>
                <Col span={12}>
                    <Title level={2} className="problem-title">Problem Title</Title>
                    <Text>Score: 2</Text>
                </Col>
                <Col style={{marginLeft: 'auto', marginRight: '15px', justifyContent: 'flex-end'}}>
                    <Countdown title="Time remaining" value={deadline} format="HH:mm:ss" />
                </Col>
            </Row>,
            <Divider />
            <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
            <div style={{ textAlign: 'center' }}>
                <iframe 
                    title="frame_pdf"
                    src="/sample.pdf" width="80%" height="500px">
                </iframe>
            </div>
        </div>
    );
}

export default ProblemDetail;
