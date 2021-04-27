import { Card } from 'antd';
import CardContestTitle from './CardContestTitle';
export default function CardContest(props) {
    const { style, contest, key } = props;
    let {description, ...titleProps} = contest;
    return (
        <Card 
            style={{...style}} type="inner" 
            title={
                <CardContestTitle key={contest._id} {...titleProps}></CardContestTitle>
            } 
            extra={<a href="/contest">Detail</a>}
        >
            {contest.description}
        </Card>
        // <>sdf</>
    );
}
CardContest.defaultProps = {
    contest: {
        _id: '',
        title: ''
    }
};