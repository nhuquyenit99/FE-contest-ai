import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { ContestItem, defaultContestItem } from 'models';
import { useParams } from 'react-router-dom';
import { OrganizerPageWrapper } from 'modules/Organizer/components';
import './style.scss';

export function EditContestPage () {
    let { id } = useParams<any>();
    const [data, setData] = useState<ContestItem>(defaultContestItem);
    useEffect(() => {
        //get data
    },[]);
    return (
        <OrganizerPageWrapper title='EDIT CONTEST' showBackButton>
            <div className='edit-contest-content'>
                <Tabs type="card">
                    <Tabs.TabPane tab="Information" key="Infomation">
                        Content of Tab Pane 1
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Problems" key="Problems">
                        Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Attendees" key="Attendees">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
            
        </OrganizerPageWrapper>
    );
}