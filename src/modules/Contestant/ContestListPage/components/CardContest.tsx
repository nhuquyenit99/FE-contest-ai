import { Button, Card, Space, Typography, notification } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';
import CardContestTitle from './CardContestTitle';
import { CardContestContent } from './CardContestContent';
import { ConstestWithProblems } from 'services/contest';
import { fetchRegisterContest } from 'services/user/fetch_register_contest';
import ContestStatusEnum from 'const/contest_status';

const { Text } = Typography;
type CardContestProps = {
    style?: any,
    contest: ConstestWithProblems
}

export default function CardContest(props: CardContestProps) {
    const history = useHistory();
    const { style, contest} = props;
    let {...titleProps} = contest;
    const time_end = new Date(contest.time_end);
    const time_start = new Date(contest.time_start);
    
    const getContestStatus = (): ContestStatusEnum => {
        const now = new Date();
        let status = now > time_end? ContestStatusEnum.EXPIRED
            : (now < time_start? ContestStatusEnum.UPCOMING
                : ContestStatusEnum.ONGOING);
        return status;
    };
    const clickAttend = () => {
        fetchRegisterContest(contest._id).then((res) => {
            // Redirect to other pages
            let url = `contestant/contest/?id=${contest._id}`;
            if (res.status === 'success') {
                notification.success({
                    message: res.message
                });
            } else {
                notification.error({
                    message: res.message
                });
            }
            history.push(url);
        }).catch((err) => {
            notification.error({
                message: err.message
            });
        });
    };

    let contestStatus = getContestStatus();
    const rightBlock = <div className="__time-block__">
        <Space>
            <div>
                <Text type="secondary">{time_end.toLocaleString()}</Text>
                <br></br>
                <Text type="secondary">{time_start.toLocaleString()}</Text>
            </div>
            {
                contestStatus === ContestStatusEnum.EXPIRED ? 
                    <NavLink to={`contestant/contest/?id=${contest._id}`}><Button type='primary'>Dashboard</Button></NavLink>
                    : <Button type="primary" onClick={clickAttend}>Attend</Button>
            }
        </Space>
    </div>;
    return (
        <div className='__card-contest__'>
            <Card
                style={{...style}} type="inner" 
                title={
                    <CardContestTitle key={contest._id} {...titleProps} status={contestStatus}></CardContestTitle>
                } 
                extra={rightBlock}
            >
                {
                    (contest.problems?.length > 0) &&<CardContestContent contest_id={contest._id} problems={contest.problems}></CardContestContent>
                }
            </Card>
        </div>
    );
}
CardContest.defaultProps = {
    contest: {
        _id: '',
        title: ''
    }
};