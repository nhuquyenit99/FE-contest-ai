import { Layout } from 'antd';
import React from 'react';
import ContestListPage from '../ContestListPage/index';
import ContestsAttendCard from './components/ContestsAttendCard';
import logOut from 'services/logout';

export function HomePage () {
    return (
        <Layout style={{flexDirection: 'row' }}> 
            <ContestListPage style={{width: '75%'}}></ContestListPage>
            <ContestsAttendCard style={{width: '25%'}}></ContestsAttendCard>
        </Layout>
    );
}