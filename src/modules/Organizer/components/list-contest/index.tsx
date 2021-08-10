import React, { useRef, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Empty, Button, Table, Popconfirm, notification } from 'antd';
import { EditOutlined, UsergroupAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { ContestPerUser } from 'models';
import { DataAccess, useEntityDataList } from 'access';
import './style.scss';
import { ListContestantsModal } from '../líst-contestants-modal';
import { AddContestModal } from '../add-contest-modal';
import { LoadingFullView } from 'components';

export function ListContest () {
    const [selectedContestId, setSelectedContestId] = useState<string>();
    const [page, setPage] = useState(1);

    const modalRef = useRef<any>();

    const {loading, data, error, refresh} = useEntityDataList<ContestPerUser>('api/organizer/contest', page);

    const onChangePage = (page: number) => {
        setPage(page);
    };

    const onOpenListContestantModal = (contestId: string) => {
        setSelectedContestId(contestId);
        modalRef.current?.open();

    };


    const ActionMenu = (text: string) => {
        const [loading, setLoading] = useState(false);

        const onDelete = async () => {
            try {
                setLoading(true);
                await DataAccess.Delete(`api/organizer/contest/${text}`);
                notification.success({
                    message: 'Delete contest successfully!'
                });
                setLoading(false);
                refresh();
            } catch (e) {
                notification.error({
                    message: 'Delete contest failed!'
                });
            }
        };

        return (
            <div className='action'>
                <Link to={`/organizer/detail/${text}`}>
                    <Button title='Edit' icon={<EditOutlined />} type='primary' ghost />
                </Link>
                <Button type='primary'
                    title='View list contestants' 
                    icon={<UsergroupAddOutlined />} 
                    onClick={() => onOpenListContestantModal(text)}
                    ghost
                />
                <Popconfirm title='Are you sure to delete this contest?' onConfirm={onDelete}>
                    <Button type="primary" danger ghost icon={<DeleteOutlined />} loading={loading}/>
                </Popconfirm>
            </div>
        );
    };

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { 
            title: 'Time start', 
            dataIndex: 'time_start', 
            key: 'time_start',  
            render: text => <span>{moment(text).format('DD/MM/YYYY')}</span>
        },
        { 
            title: 'Time end', 
            dataIndex: 'time_end', 
            key: 'time_end',  
            render: text => <span>{moment(text).format('DD/MM/YYYY')}</span>
        },
        {
            title: 'Action',
            dataIndex: '_id',
            key: 'x',
            render: ActionMenu,
        },
    ];

    if (error) return (
        <div className='list-contest'>
            <Empty description='Sorry, something went wrong!' />
        </div>
    );
    return (
        <div className='list-contest'>
            <AddContestModal onHandleSuccess={refresh}/>
            {data?.length === 0 ? <Empty />:  
                <Table className='list-contest-table' columns={columns} dataSource={data} pagination={{
                    current: page,
                    hideOnSinglePage: true,
                    pageSize: 10,
                    onChange: onChangePage
                }} />
            }
            {loading && <LoadingFullView />}

            <ListContestantsModal contestId={selectedContestId ?? ''} ref={modalRef}/>
        </div>
    );
}