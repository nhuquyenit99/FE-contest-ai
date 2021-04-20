import { Layout } from 'antd';
import React from 'react';
import ContestListPage from '../ContestListPage/index';
import ContestsAttendCard from './components/ContestsAttendCard';

export function HomePage () {
    return (
        <Layout style={{flexDirection: 'row' }}> 
            <ContestListPage></ContestListPage>
            <ContestsAttendCard></ContestsAttendCard>
        </Layout>
    );
}