import { Card, Tabs } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Dashboard from './components/Dashboard';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';
import SampleCodeContainer from './components/SampleCodeContainer';

const { TabPane } = Tabs;
export function ContestPage() {
    return <>
        <Layout style={{ flexDirection: 'row' }}>
            <div style={{ width: '75%', margin: '15px' }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Problem" key="1">
                        <ProblemContainer></ProblemContainer>
                    </TabPane>
                    <TabPane tab="Dashboard" key="2">
                        <Dashboard></Dashboard>
                    </TabPane>
                    <TabPane tab="Sample Code" key="3">
                        <SampleCodeContainer></SampleCodeContainer>
                    </TabPane>
                </Tabs>
            </div>
            <div style={{ width: '25%', margin: '15px' }}>
                <Card>
                    <ListProblem />
                </Card>
            </div>
        </Layout>
    </>;
} 
