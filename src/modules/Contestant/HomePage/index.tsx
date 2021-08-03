import { Layout } from 'antd';
import ContestListPage from '../ContestListPage/index';
import MyContestsCard from './components/MyContestsCard';
import './style.scss';
import CONTEST_STATUS_ENUM from 'const/contest_status';

export function HomePage() {
    return (
        <Layout className='home-page__wrapper' style={{ flexDirection: 'row' }}>
            <ContestListPage className="contest-list-page__wrapper"></ContestListPage>
            <div className="my-contests__wrapper">
                <MyContestsCard
                    className="contests-card__wrapper" 
                    title="Attended Contests" 
                    contest_status={CONTEST_STATUS_ENUM.EXPIRED}>
                </MyContestsCard>
                <MyContestsCard
                    className="contests-card__wrapper" 
                    title="Attending Contests" 
                    contest_status={CONTEST_STATUS_ENUM.ONGOING}>
                </MyContestsCard>
                <MyContestsCard
                    className="contests-card__wrapper" 
                    title="Will-Attend Contests" 
                    contest_status={CONTEST_STATUS_ENUM.UPCOMING}>
                </MyContestsCard>
            </div>
        </Layout>
    );
}