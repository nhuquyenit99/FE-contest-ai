import { Divider, Row, Col, Tag } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import { Problem } from 'services/problem';
import ContestStatusEnum from 'const/contest_status';
import {useState} from 'react';

type ProblemDetailProps = {
    contest_status?: ContestStatusEnum
    problem: Problem
}
function ProblemDetail(props: ProblemDetailProps) {
    const {contest_status, problem} = props;
    const [deadline, setDeadLine] = useState<number>(0);
    if (contest_status === ContestStatusEnum.EXPIRED) {
        setDeadLine(0);
    }
    return (
        <div className="problem-detail__container">
            <Row gutter={24}>
                <Col span={16}>
                    <Title level={2} className="problem-title">{problem?.title}</Title>
                    <Text className="problem-score">Score: <span>
                        {problem?.score}
                    </span></Text>
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
