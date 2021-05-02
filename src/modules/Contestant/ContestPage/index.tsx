import { Card, Tabs } from 'antd';
import Layout from 'antd/lib/layout/layout';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';

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
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Sample Code" key="3">
                        
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
