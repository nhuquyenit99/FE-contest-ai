import CardContest from './components/CardContest';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllContest, ListContests } from 'services/contest';
export default function ContestListPage(props) {
    const [dataList, setDataList] = useState<ListContests>([]);

    useEffect(() => {
        fetchAllContest()
            .then(resp => {
                console.log(resp);
                setDataList(resp);
            });
    }, []);

    const renderListContest = () => {
        return <>
            {dataList?.map((contest, idx) => 
                <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>
            )}
        </>;
    };
    return <>
        <Card key="List contests" {...props} title="List contests">
            {renderListContest()}
        </Card>
    </>;
}
