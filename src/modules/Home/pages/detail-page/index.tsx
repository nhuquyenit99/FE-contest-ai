import { Button, Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { AppWrapper, ListProblems } from '../../components';
import { ContestItem, defaultContestItem } from 'models';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';

const ListProblem = [
    {
        _id: '1',
        name: 'Test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id: '2',
        name: 'Test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id: '3',
        name: 'Test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

export function DetailPage () {
    let { id } = useParams<any>();
    const [data, setData] = useState<ContestItem>(defaultContestItem);
    useEffect(() => {
        //get data
    },[]);
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
                    <Tabs.TabPane tab="Problems" key="Problems">
                        <ListProblems data={ListProblem} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Ranking" key="Ranking">
                    Content of Tab Pane 2
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AppWrapper>
    );
}