import CardContest from './components/CardContest';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllContest } from 'services/contest';
export default function ContestListPage(props) {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetchAllContest()
            .then(resp => {
                setDataList(resp.data);
                console.log(resp.data);
            });
    }, []);
    return <>
        <Card {...props} title="List contests">
            {
                dataList.map(
                    (contest, idx) => 
                        <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>)
            }
        </Card>
    </>;
}
