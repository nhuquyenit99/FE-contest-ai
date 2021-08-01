import { Layout } from 'antd';
import ContestListPage from '../ContestListPage/index';
import ContestsAttendedCard from './components/ContestsAttendedCard';
import ContestsAttendingCard from './components/ContestAttendingCard';
import ContestsWillAttendCard from './components/ContestWillAttendingCard';

export function HomePage() {

    return (
        <Layout style={{ flexDirection: 'row' }}>
            <ContestListPage style={{ width: '75%' }}></ContestListPage>
            <div style={{ width: '25%' }}>
                <ContestsAttendedCard></ContestsAttendedCard>
                <ContestsAttendingCard></ContestsAttendingCard>
                <ContestsWillAttendCard></ContestsWillAttendCard>
            </div>
        </Layout>
    );

}