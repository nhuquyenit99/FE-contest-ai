import { Card, Skeleton, Tabs } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Dashboard from './components/Dashboard';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';
import SampleCodeContainer from './components/SampleCodeContainer';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProblemWithContestId, Problem } from 'services/problem';
import { MySubmissions } from './components/MySubmissions';

const { TabPane } = Tabs;
export function ContestPage() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listProblems, setListProblems] = useState<Problem[]>([]);
    const [currentProblemPst, setCurrentProblemPst] = useState<number>(-1);
    const [currentContestId, setCurrentContestId] = useState<any>(-1);

    useEffect(() => {
        let { search } = history.location;
        let params = new URLSearchParams(search);
        let contestId = params.get('id');
        setCurrentContestId(contestId);
        setIsLoading(true);
        fetchProblemWithContestId(search) // search: ?id=123123dfas
            .then((res) => {
                if (res.length > 0) {
                    setListProblems(res);
                    setCurrentProblemPst(0);
                }
                setIsLoading(false);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const listProblemsProps = {
        listProblem: listProblems.map(item => {
            let obj = { title: item.title };
            return obj;
        }
        ),
        currentProblemPst,
        setCurrentProblemPst,
    };
    return <>
        <Layout style={{ flexDirection: 'row', margin: '15px' }}>
            <Skeleton loading={isLoading}>
                {
                    (!isLoading && listProblems.length === 0) ?
                        <>No any problems</> 
                        :
                        <>
                            <div style={{ width: '75%', marginRight: '15px' }}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Problem" key="1">
                                        <ProblemContainer problem={listProblems[currentProblemPst]}></ProblemContainer>
                                    </TabPane>
                                    <TabPane tab="Dashboard" key="2">
                                        <Dashboard contest_id={currentContestId}></Dashboard>
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
