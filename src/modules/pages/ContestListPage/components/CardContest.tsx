import { Card } from 'antd';
import CardContestTitle from './CardContestTitle';
export default function CardContest(props) {
    const { style, contest } = props;
    let {description, ...titleProps} = contest;
    return (
        <Card style={{...style}} type="inner" 
            title={
                <CardContestTitle {...titleProps}></CardContestTitle>
            } 
            extra={<a href="/contest">Detail</a>}
        >
            {contest.description}
        </Card>
    );
}
CardContest.defaultProps = {
    contest: {
        _id: '',
        title: ''
    }
};