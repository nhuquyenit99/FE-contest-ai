import { useEffect, useState } from 'react';
import { Card, List, Skeleton } from 'antd';
import CardContest from './components/CardContest';
import { ALlContestWithProblemsResponse } from 'services/contest';
import { ConstestWithProblems } from 'services/contest';
import CustomPagination from 'components/layout/Pagination';
import FilterContest from './components/FilterContest';
import { ContestStatus, fetchAllContestWithProblems } from 'services/user/fetch_all_contest_with_problems';


export default function ContestListPage(props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [dataList, setDataList] = useState<ConstestWithProblems[]>();
    const [filter, setFilter] = useState<any>(ContestStatus[ContestStatus.all]);

    const limit = 10;
    useEffect(() => {
        setIsLoading(true);
        fetchAllContestWithProblems(true, filter, {
            limit,
            offset: (page-1)*limit,
        })
            .then((resp: ALlContestWithProblemsResponse) => {
                setIsLoading(false);
                setCount(resp.count);
                setDataList(resp.results);
            });
    }, [page, filter]);

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

    const paginationProps = {
        total: count,
        onPageChange: (page: number) => {
            setPage(page);
        },
    };
    const FilterContestProps = {
        setFilter
    };

    return <>
        <Card 
            key="List contests" {...props} 
            title="List contests" 
            extra={<FilterContest 
                {...FilterContestProps}/>
            }>
            <Skeleton loading={isLoading}>
                {renderListContest()}
            </Skeleton>    
            <CustomPagination {...paginationProps}></CustomPagination>
        </Card>
    </>;
}
