import React from 'react';
import { defaultContestItem } from 'models';
import './home.scss';
import { AppWrapper, ContestCardItem } from '../../components';


export function HomePage () {
    return (
        <AppWrapper>
            <div className='list-contest-card'>
                <ContestCardItem data={defaultContestItem} />
                <ContestCardItem data={defaultContestItem} />
                <ContestCardItem data={defaultContestItem} />
                <ContestCardItem data={defaultContestItem} />
                <ContestCardItem data={defaultContestItem} />
            </div>
        </AppWrapper>
    );
}