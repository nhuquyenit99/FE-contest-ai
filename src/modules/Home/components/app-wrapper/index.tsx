import React from 'react';
import { Button, Empty } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { UpcomingContestItem } from '../upcoming-contest-item';
import { ContestItem } from 'models';
import { Link } from 'react-router-dom';
import { useEntityDataListObj } from 'access';
import { LoadingFullView } from 'components';
import './style.scss';

type AppWrapperProps = {
    children: React.ReactNode
}

export function AppWrapper ({
    children
}: AppWrapperProps) {
    const {data, loading} = useEntityDataListObj<ContestItem>('api/nuser/contest?status=upcoming&show_problems');

    return (
        <div className='app-wrapper'>
            <div className='header'>
                <div>
                    <a className='web-name' href='/'><HomeOutlined />AI-Contest</a>
                    <div className='welcome'>Welcome to Home page!</div>
                </div>
            </div>
            <div className='main-body'>
                <div className='main-content'>
                    {children}
                </div>
                <div className='right-side-bar'>
                    <div className='section-header'>
                            Upcoming contests
                    </div>
                    <div className='list-contest-item'>
                        { data && data.length > 0 ? data?.map(item => 
                            <UpcomingContestItem data={item} key={item._id}/>)
                            : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        }
                        {loading && <LoadingFullView />}
                    </div>
                    <Link to='/contestant' className='link-redirect'>
                        <Button type='primary' shape='round' danger>Attend now!</Button>
                    </Link>
                </div>
            </div>
            <div className='footer'>
                Copyright &#169; 2021
            </div>
        </div>
    );
}