import React from 'react';
import { Divider, Row, Col, Tag } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import { Problem } from 'services/problem';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
type ProblemDetailProps = {
    problem: Problem
}
function ProblemDetail({problem}: ProblemDetailProps) {
    return (
        <div className="contest">
            <Row gutter={24}>
                <Col span={12}>
                    <Title level={2} className="problem-title">{problem?.title}</Title>
                    <Text>Score: {problem?.score}</Text>
                </Col>
                <Col style={{marginLeft: 'auto', marginRight: '15px', justifyContent: 'flex-end'}}>
                    <Countdown title="Time remaining" value={deadline} format="HH:mm:ss" />
                    <Tag color="yellow-inverse">
                        <Text>TLE: {problem?.time_executed_limit}ms</Text>
                    </Tag>
                </Col>
            </Row>,
            <Divider />
            <Paragraph>
                {problem?.description} 
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
