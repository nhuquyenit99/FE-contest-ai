import React from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { UpcomingContestItem } from '../upcoming-contest-item';
import { defaultContestItem } from 'models';
import './style.scss';
import { Link } from 'react-router-dom';


type AppWrapperProps = {
    children: React.ReactNode
}

export function AppWrapper ({
    children
}: AppWrapperProps) {
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
                        <UpcomingContestItem data={defaultContestItem}/>
                        <UpcomingContestItem data={defaultContestItem}/>
                        <UpcomingContestItem data={defaultContestItem}/>
                    </div>
                    <Link to='contestant' className='link-redirect'>
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