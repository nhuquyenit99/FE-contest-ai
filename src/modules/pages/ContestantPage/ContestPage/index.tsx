import { Card } from 'antd';
import Layout from 'antd/lib/layout/layout';
import ListProblem from './components/ListProblem';
import { ProblemContainer } from './components/ProblemContainer/index';
export function ContestPage() {
    return <>
        <Layout style={{flexDirection: 'row' }}>
            <div style={{width: '75%', margin: '15px'}}>
                <ProblemContainer></ProblemContainer>
            </div>
            <div style={{width: '25%', margin: '15px'}}>
                <Card>
                    <ListProblem/>
                </Card>
            </div>
        </Layout>
    </>;
} 