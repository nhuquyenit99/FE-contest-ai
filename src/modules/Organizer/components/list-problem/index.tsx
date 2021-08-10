import React, { useState } from 'react';
import { Button, Empty, notification, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { DataAccess, useEntityDataList } from 'access';
import { LoadingFullView } from 'components';
import { Problem } from 'services/problem';
import { AddProblemModal } from '../add-problem-modal';
import { Link } from 'react-router-dom';
import './style.scss';

export function ListProblem ({contestId}: {contestId: string}) {
    const {data, loading, refresh} = useEntityDataList<Problem>(`api/organizer/contest/${contestId}/problems`);

    const ActionMenu = (text) => {
        const [loading, setLoading] = useState(false);
        const onDelete = async () => {
            try {
                setLoading(true);
                await DataAccess.Delete(`api/organizer/problem/${text}`);
                notification.success({
                    message: 'Delete problem successfully!'
                });  
                refresh();
            } catch (e) {
                notification.error({
                    message: 'Delete problem failed!'
                });
            } finally {
                setLoading(false);
            }
        };
        return (
            <div className='problem-action-menu'> 
                <Link to={`/organizer/problem/${text}`}><Button icon={<EditOutlined/>} type='primary' ghost /></Link>
                <Popconfirm title='Are you sure to delete this problem?' onConfirm={onDelete}>
                    <Button type="primary" danger ghost icon={<DeleteOutlined />} loading={loading}/>
                </Popconfirm>
            </div>
        );
    };
    
    const columns = [
        { 
            title: 'No.', 
            dataIndex: 'index', 
            key: 'index',  
        },
        { 
            title: 'Title', 
            dataIndex: 'title', 
            key: 'title' 
        },
        {
            title: 'Action',
            dataIndex: '_id',
            key: 'x',
            render: ActionMenu,
        },
    ];
    
    return <div className='list-problem'>
        <AddProblemModal contestId={contestId} onHandleSuccess={refresh}/>
        {loading && <LoadingFullView />}
        {data?.length === 0 ? <Empty />:  
            <Table 
                className='list-contest-table' 
                columns={columns} 
                dataSource={data?.map((item, idx) => {
                    return {...item, index: idx + 1};
                })} 
                bordered 
                pagination={{hideOnSinglePage: true}}
            />
        }
    </div>;
}