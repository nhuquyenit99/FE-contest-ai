import { Card, Skeleton, Tabs } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Dashboard from './components/Dashboard';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';
import SampleCodeContainer from './components/SampleCodeContainer';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProblemIdContest, Problem } from 'services/problem';

const { TabPane } = Tabs;
export function ContestPage() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listProblems, setListProblems] = useState<Problem[]>([]);
    const [currentProblemPst, setCurrentProblemPst] = useState<number>(-1);

    let { search } = history.location;
    useEffect(() => {
        setIsLoading(true);
        fetchProblemIdContest(search) // search: ?id=123123dfas
            .then((res) => {
                console.log(res);
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
                                        <Dashboard></Dashboard>
                                    </TabPane>
                                    <TabPane tab="Sample Code" key="3">
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
