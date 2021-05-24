import { Button, Card, Space, Typography} from 'antd';
import { NavLink } from 'react-router-dom';
import CardContestTitle from './CardContestTitle';
import { CardContestContent } from './CardContestContent';
const { Text } = Typography;
type CardContestProps = {
    style?: any,
    contest: {
        created: string,
        created_user?: {
            _id: number,
            first_name: string,
            last_name: string,
            username: string
        } | number,
        time_end: string,
        time_start: string,
        title: string,
        _id: number,
        description?: string,
    }
}
export enum ContestStatusEnum {
    EXPIRED,
    IN_PROGRESS,
    UPCOMING
}
export default function CardContest(props: CardContestProps) {
    const { style, contest} = props;
    let {description, ...titleProps} = contest;
    const time_end = new Date(contest.time_end);
    const time_start = new Date(contest.time_start);
    
    const getContestStatus = (): ContestStatusEnum => {
        const now = new Date();
        let status = now > time_end? ContestStatusEnum.EXPIRED
            : (now < time_start? ContestStatusEnum.UPCOMING
                : ContestStatusEnum.IN_PROGRESS);
        return status;
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
                    : <NavLink to={`contestant/contest/?id=${contest._id}`}><Button type="primary">Attend</Button></NavLink>
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
                <CardContestContent contest_id={contest._id}></CardContestContent>
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