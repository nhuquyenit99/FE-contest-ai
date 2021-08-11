import React from 'react';
import {Spin, Empty} from 'antd';
import { ContestItem } from 'models';
import { AppWrapper, ContestCardItem } from '../../components';
import { useEntityDataList } from 'access';
import './home.scss';


export function HomePage () {
    const {data, loading, error} = useEntityDataList<ContestItem>('api/contest/');

    if (loading) {
        return <AppWrapper>
            <div className="loading-component">
                <Spin />
            </div>
        </AppWrapper>;
    }

    if (error || !data) {
        return <AppWrapper>
            <Empty description='Sorry, something went wrong'/>
        </AppWrapper>;
    }

    return (
        <AppWrapper>
            {data.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> :
                <div className='list-contest-card'>
                    {data.map(item => <ContestCardItem data={item} key={item._id}/>)}
                </div>}
        </AppWrapper>
    );
}