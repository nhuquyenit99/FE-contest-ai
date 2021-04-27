import { useState } from 'react';
import {Table} from 'antd';
import { useEffect } from 'react';
import { fetchAllUser, User } from 'services/user';
import { ListUser } from '../../../../services/user';
import RoleTag from './RoleTag';
import { RoleTagEnum } from './RoleTag';

type Item = User&{
    // key: number,
}
type ListItems = Item[];

export default function LanguagePage() {
    const [data, setData] = useState<ListItems>([]);
    const [count, setCount] = useState(0);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const refreshData = () => {
        fetchAllUser()
            .then(resp => {
                let listUser: ListUser = resp.results;
                let listData: ListItems = listUser.map((item: User) => {
                    let midData = {
                        ...item,
                    };
                    return midData;
                });
                console.log(listUser);
                setData(listData);
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
            render: (role, obj) => {
                // let tagRenders = [];
                return <>
                    {obj.is_admin && <RoleTag role={RoleTagEnum.ADMIN}/>}
                    {obj.is_organizer && <RoleTag role={RoleTagEnum.ORGANIZER}/>}
                    <RoleTag role={RoleTagEnum.CONTESTANT}/>
                </>;
            }
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
    const change = (a: number, b: number | undefined) => {
        console.log(a, b);
    };

    return (
        <>
            <Table
                rowKey='_id'
                columns={columns}
                dataSource={data}
                pagination={{
                    showSizeChanger: true
                }}
            />
        </>
    );
}