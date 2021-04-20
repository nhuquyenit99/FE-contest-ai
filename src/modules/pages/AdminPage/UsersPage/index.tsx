import React, { useState } from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import { useEffect } from 'react';
import { fetchAllUser } from 'services/user';


export default function LanguagePage() {
    const [data, setData] = useState([]);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const refreshData = () => {
        fetchAllUser()
            .then(resp => {
                let newData = resp.data;
                newData = newData.map(data => {
                    data.key = data._id;
                    return data;
                });
                console.log(newData);
                setData(newData);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        refreshData();
    }, []);
    useEffect(() => {
        if (shouldRefreshData) {
            refreshData();
            setShouldRefreshData(false);
        }
    }, [shouldRefreshData]);
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Created At',
            dataIndex: 'created',
            key: 'created',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     dataIndex: '_id',
        //     render: (_id, record) => (
        //         <Space size="middle">
        //             <EditButton onClick={showEditItem}></EditButton>
        //             <DeleteButton onClick={showDeleteItem} id={_id}></DeleteButton>
        //         </Space>
        //     ),
        // },
    ];


    return (
        <>
            <Table
                rowKey='_id'
                columns={columns}
                dataSource={data}
            />
        </>
    );
}