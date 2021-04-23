import CardContest from './components/CardContest';
import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllContest } from 'services/contest';
import AddContest from './components/AddContest';
export default function ContestListPage(props) {
    const [dataList, setDataList] = useState([]);
    const [isShowAddContest, setIsShowAddContest] = useState(false);

    const showAddContest = () => {
        setIsShowAddContest(true);
    };
    
    const buttonAddContest = <Button type="primary" onClick={showAddContest}>Add contest</Button>;
    

    useEffect(() => {
        // fetchAllContest()
        //     .then(resp => {
        //         setDataList(resp.data);
        //         console.log(resp.data);
        //     });
    }, []);

    const renderListContest = () => {
        return dataList.map(
            (contest, idx) => 
                <CardContest key={idx} contest={contest} style={{ marginBottom: '30px' }}></CardContest>);
    };
    const addContestProps = {
        setIsShowAddContest
    };
    return <>
        <Card {...props} title="List contests" extra={[buttonAddContest]}>
            {
                isShowAddContest? <AddContest {...addContestProps}/>: renderListContest()
            }
        </Card>
    </>;
}
