import CardContest from './components/CardContest';
import { Card } from 'antd';
const listContests = [
    {
        title: 'Predict'
    },
    {

    },
    {

    },
    {

    },
];
export default function ContestListPage() {
    return <>
        <Card title="List contests">
            {
                listContests.map((contest, idx) => <CardContest key={idx} style={{marginBottom: '30px'}}></CardContest>)
            }
        </Card>
    </>;
}
