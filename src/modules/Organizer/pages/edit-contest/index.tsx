import React from 'react';
import moment from 'moment';
import { Tabs, Empty } from 'antd';
import { ContestItem } from 'models';
import { useParams } from 'react-router-dom';
import { EditContestModal, OrganizerPageWrapper, ListProblem } from 'modules/Organizer/components';
import './style.scss';
import { useEntityData } from 'access';
import { LoadingFullView } from 'components';

export function EditContestPage () {
    let { id } = useParams<any>();
    console.log('contest id', id);
    const {loading, data, reload} = useEntityData<ContestItem>(`api/organizer/contest/${id}`);
    return (
        <OrganizerPageWrapper title='EDIT CONTEST' showBackButton>
            <div className='edit-contest-content'>
                <Tabs type="card" >
                    <Tabs.TabPane tab="Information" key="Infomation" className='contest-info-panel'>
                        {data ? <>
                            <div className='panel-header'>
                                <h3>{`Detail: ${data?.title}`}</h3>
                                <EditContestModal contestId={id} onHandleSuccess={reload}/>
                            </div>
                            <div className='contest-info'>
                                <div className='time'>
                                    {`Time: ${moment(data?.time_start).format('DD/MM/YYYY')} - ${moment(data?.time_end).format('DD/MM/YYYY')}`}
                                </div>
                                <div className='description'>
                                    {data?.description}
                                </div>
                            </div>
                        </> : <Empty /> 
                        }
                        {loading && <LoadingFullView />}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Problems" key="Problems">
                        <ListProblem contestId={id}/>
                    </Tabs.TabPane>
                </Tabs>
            </div>
            
        </OrganizerPageWrapper>
    );
}