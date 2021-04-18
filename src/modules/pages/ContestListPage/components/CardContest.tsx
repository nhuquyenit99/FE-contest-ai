import { Card } from 'antd';
import CardContestTitle from './CardContestTitle';

export default function CardContest(props) {
    const {style} = props;
    return (
        <Card {...props} type="inner" title={<CardContestTitle></CardContestTitle>} extra={<a href="/contest">Detail</a>}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo eligendi, deserunt soluta sed eius odio quos. Neque ipsum aliquid, beatae, accusamus aspernatur laborum molestiae ullam harum magnam delectus quibusdam?
        </Card>
    );
}