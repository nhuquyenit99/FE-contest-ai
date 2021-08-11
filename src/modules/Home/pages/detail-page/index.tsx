import React from 'react';
import moment from 'moment';
import { Button, Tabs, Spin, Empty } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { AppWrapper, Dashboard, ListProblems } from '../../components';
import { ContestItem } from 'models';
import { useParams } from 'react-router-dom';
import { useEntityData } from 'access';
import './detail.scss';
import { getContestStatus } from 'utils/time_utils';

export function DetailPage () {
    let { id } = useParams<any>();
    const {data, loading, error} = useEntityData<ContestItem>(`api/contest/${id}/`);

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
            <div className='contest-detail'>
                <h1 className='title'>
                    <a href='/' className='btn-back'>
                        <Button shape='round'>
                            <ArrowLeftOutlined />
                        Back
                        </Button>
                    </a>
                    <span>{`Detail: ${data.title}`}</span>
                </h1>
                <Tabs type="card">
                    <Tabs.TabPane tab='Information' key='Information'>
                        <div className='contest-info'>
                            <div className='time'>
                                {`Time: ${moment(data.time_start).format('DD/MM/YYYY')} - ${moment(data.time_end).format('DD/MM/YYYY')}`}
                            </div>
                            <div className='description'>
                                {data.description}
                            </div>
                        </div>
                    </Tabs.TabPane>
                    {moment(data.time_start).isBefore(moment()) && <>
                        <Tabs.TabPane tab="Problems" key="Problems">
                            <ListProblems contestId={id}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Ranking" key="Ranking">
                            <Dashboard 
                                contest_id={id}
                                contest_status={getContestStatus(data.time_start, data.time_end)}/>
                        </Tabs.TabPane>
                    </>}
                </Tabs>
            </div>
        </AppWrapper>
    );
}