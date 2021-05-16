import React, { useEffect, useState } from 'react';
import { Card, Skeleton } from 'antd';
import CardContest from './components/CardContest';
import { fetchAllContest, ListContests } from 'services/contest';
export default function ContestListPage(props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataList, setDataList] = useState<ListContests>([]);

    useEffect(() => {
        setIsLoading(true);
        fetchAllContest()
            .then(resp => {
                setIsLoading(false);
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
            <Skeleton loading={isLoading}>
                {renderListContest()}
            </Skeleton>    
        </Card>
    </>;
}
