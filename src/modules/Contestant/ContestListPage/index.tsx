import React, { useEffect, useState } from 'react';
import { Card, List, Skeleton } from 'antd';
import CardContest from './components/CardContest';
import { fetchAllContestWithProblems, ListContests } from 'services/contest';
import { ALlContestWithProblemsResponse } from 'services/contest';
import { ConstestWithProblems } from 'services/contest';
export default function ContestListPage(props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataList, setDataList] = useState<ConstestWithProblems[]>();

    useEffect(() => {
        setIsLoading(true);
        fetchAllContestWithProblems()
            .then((resp: ALlContestWithProblemsResponse) => {
                setIsLoading(false);
                console.log(resp);
                setDataList(resp.results);
            });
    }, []);

    const renderListContest = () => {
        return <List
            dataSource={dataList}
            renderItem={(contest:ConstestWithProblems, idx) => {
                return <List.Item 
                    style={{display: 'block'}}
                >
                    <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>
                </List.Item>;
            }}
        >
        </List>;
    };
    return <>
        <Card key="List contests" {...props} title="List contests">
            <Skeleton loading={isLoading}>
                {renderListContest()}
            </Skeleton>    
        </Card>
    </>;
}
