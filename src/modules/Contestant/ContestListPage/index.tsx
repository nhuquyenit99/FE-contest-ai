import CardContest from './components/CardContest';
import { Button, Card, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllContest, ListContests } from 'services/contest';
import AddContest from './components/AddContest';
export default function ContestListPage(props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataList, setDataList] = useState<ListContests>([]);
    const [isShowAddContest, setIsShowAddContest] = useState(false);

    const showAddContest = () => {
        setIsShowAddContest(true);
    };

    const buttonAddContest = <Button type="primary" onClick={showAddContest}>Add contest</Button>;


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
        // <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>);
        return <>
            {
                dataList?.map(
                    (contest, idx) => 
                        <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>)
            }
        </>;
    };
    const addContestProps = {
        setIsShowAddContest
    };
    return <>
        <Card key="List contests" {...props} title="List contests"
            extra={buttonAddContest}
        >
            {
                isShowAddContest? <AddContest {...addContestProps}/>:
                    <Skeleton loading={isLoading}>
                        {renderListContest()}
                    </Skeleton>    
            }
        </Card>
    </>;
}
