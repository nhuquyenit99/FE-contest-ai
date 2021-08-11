import { Divider, Row, Col, Tag } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import Text from 'antd/lib/typography/Text';
import { Problem } from 'services/problem';
import ContestStatusEnum from 'const/contest_status';
import { useState, useEffect } from 'react';
import { ContestInfo } from 'services/user/fetch_contest_info';
import { getContestStatus } from 'utils/time_utils';

type ProblemDetailProps = {
    contest_info: ContestInfo,
    problem: Problem
}
function ProblemDetail(props: ProblemDetailProps) {
    const {contest_info, problem} = props;

    const contest_status = getContestStatus(contest_info.time_start, contest_info.time_end);
    const [countDownValue, setCountDownValue] = useState<number>(0);
    useEffect(() => {
        
        if (contest_status === ContestStatusEnum.EXPIRED) {
            setCountDownValue(0);
        } else if (contest_status === ContestStatusEnum.ONGOING) {
            setCountDownValue(new Date(contest_info.time_end).getTime());
        } else {
            setCountDownValue(new Date(contest_info.time_start).getTime());
        }
    }, [contest_status, contest_info.time_start, contest_info.time_end]);

    return (
        <div className="problem-detail__container">
            <Row className="header-row" gutter={24}>
                <Col span={18}>
                    <Title level={2} className="problem-title">{problem?.title}</Title>
                    <Text className="problem-score">Score: <span>
                        {problem?.score}
                    </span></Text>
                </Col>
                <Col className="right-col">
                    <Countdown title={
                        contest_status===ContestStatusEnum.UPCOMING? 
                            'Time start' : 'Time remaining'
                    } 
                    value={countDownValue} 
                    format="DDd HH:mm:ss" />
                    <Tag color="yellow-inverse">
                        <Text>TLE: {problem?.time_executed_limit}ms</Text>
                    </Tag>
                </Col>
            </Row>,
            <Divider />
            {/* <Paragraph>
                {problem?.description} 
            </Paragraph> */}
            <div style={{ textAlign: 'center' }}>
                <iframe 
                    title="frame_pdf"
                    src={problem?.description} width="80%" height="500px">
                </iframe>
            </div>
        </div>
    );
}

export default ProblemDetail;
