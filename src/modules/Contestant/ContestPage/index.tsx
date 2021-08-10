import { Card, Skeleton, Tabs } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Dashboard from './components/Dashboard';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';
import SampleCodeContainer from './components/SampleCodeContainer';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MySubmissions } from './components/MySubmissions';
import { fetchProblemsOnContestId } from 'services/user/fetch_problems_on_contest_id';
import { Problem } from 'services/user/fetch_problems_on_contest_id';
import './styles.scss';
import ContestStatusEnum from '../../../const/contest_status';
import { ContestInfo, fetchContestInfo } from 'services/user/fetch_contest_info';
import { getContestStatus } from 'utils/time_utils';


const { TabPane } = Tabs;
export function ContestPage() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listProblems, setListProblems] = useState<Problem[]>([]);
    const [currentProblemPst, setCurrentProblemPst] = useState<number>(-1);
    const [currentContestId, setCurrentContestId] = useState<any>(-1);
    // const [contestStatus, setConstestStatus] = useState<ContestStatusEnum|undefined>(undefined);
    // const [deadline, setDeadline] = useState<string>();
    const [contestInfo, setContestInfo] = useState<ContestInfo>();

    useEffect(() => {
        let { search } = history.location;
        let params = new URLSearchParams(search);
        let contestId = params.get('id');
        if (contestId) {
            setCurrentContestId(contestId);
            setIsLoading(true);
            fetchProblemsOnContestId(contestId) // search: ?id=123123dfas
                .then((res) => {
                    if (res.length > 0) {
                        setListProblems(res);
                        setCurrentProblemPst(0);
                    }
                    setIsLoading(false);
                });
            fetchContestInfo(contestId).then((res) => {
                setContestInfo(res);
                setIsLoading(false);
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const listProblemsProps = {
        listProblem: listProblems.map(item => {
            let obj = { title: item.title };
            return obj;
        }),
        currentProblemPst,
        setCurrentProblemPst,
    };

    return <>
        <Layout style={{ flexDirection: 'row', margin: '15px' }}>
            <Skeleton loading={isLoading}>
                {
                    ((!isLoading && listProblems.length === 0) || !contestInfo) ?
                        <>No any problems</> 
                        :
                        <>
                            <div style={{ width: '75%', marginRight: '15px' }}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Problem" key="1">
                                        <ProblemContainer 
                                            problem={listProblems[currentProblemPst]} 
                                            contest_info={contestInfo}></ProblemContainer>
                                    </TabPane>
                                    <TabPane tab="Dashboard" key="2">
                                        <Dashboard 
                                            contest_id={currentContestId}
                                            contest_status={
                                                getContestStatus(contestInfo.time_start, contestInfo.time_end)
                                            }></Dashboard>
                                    </TabPane>
                                    <TabPane tab="My Submissions" key='3'>
                                        <MySubmissions problem_id={listProblems[currentProblemPst]?._id}></MySubmissions>
                                    </TabPane>
                                    <TabPane tab="Sample Code" key="4">
                                        <SampleCodeContainer></SampleCodeContainer>
                                    </TabPane>
                                </Tabs>
                            </div>
                            <div style={{ width: '25%', marginLeft: '15px' }}>
                                <Card>
                                    <ListProblem {...listProblemsProps} />
                                </Card>
                            </div>
                        </>
                }
            </Skeleton>
        </Layout>
    </>;
}
