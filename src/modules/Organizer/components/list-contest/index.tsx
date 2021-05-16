import React from 'react';
import moment from 'moment';
import {Spin, Empty, Button, Table} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { ContestItem } from 'models';
import { useEntityDataList } from 'access';
import './style.scss';
import { Link } from 'react-router-dom';

export function ListContest () {
    const {loading, data, error} = useEntityDataList<ContestItem>('api/contest/');

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { 
            title: 'Creator', 
            dataIndex: 'created_user', 
            key: 'age', 
            render: text => <span>{[text?.first_name, text?.last_name].join(' ')}</span>
        },
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
            render: (text) => <Link to={`/organizer/detail/${text}`}>
                <Button title='Edit' icon={<EditOutlined />} type='primary' ghost></Button>
            </Link>,
        },
    ];

    if (loading) return (
        <div className='list-contest'>
            <Spin size='large' />
        </div>
    );
    if (error) return (
        <div className='list-contest'>
            <Empty description='Sorry, something went wrong!' />
        </div>
    );
    return (
        <div className='list-contest'>
            {data?.length === 0 ? <Empty />:  
                <Table className='list-contest-table' columns={columns} dataSource={data}/>
            }
        </div>
    );
}