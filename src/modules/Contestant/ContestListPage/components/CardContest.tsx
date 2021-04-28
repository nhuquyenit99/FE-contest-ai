import { Card } from 'antd';
import CardContestTitle from './CardContestTitle';
export default function CardContest(props) {
    const { style, contest} = props;
    let {description, ...titleProps} = contest;
    return (
        <div className='__card-contest__'>
            <Card
                style={{...style}} type="inner" 
                title={
                    <CardContestTitle key={contest._id} {...titleProps}></CardContestTitle>
                } 
                extra={<a href="/contest">Detail</a>}
            >
                {contest.description}
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