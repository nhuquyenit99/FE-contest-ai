import { useState } from 'react';
import { Table} from 'antd';
import { useEffect } from 'react';
import { fetchAllUserPagination, User, ListUser } from 'services/user';
import RoleTag from './RoleTag';
import { RoleTagEnum } from './RoleTag';
import CustomPagination from './Pagination';
import { PaginationQuery } from '../../../services/user';

type Item = User&{
    key: number,
}
type ListItems = Item[];

export default function UserPage() {
    const [data, setData] = useState<ListItems>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const refreshData = () => {
        let query: PaginationQuery = {
            limit: pageSize,
            offset: (page-1)*pageSize
        };
        fetchAllUserPagination(query)
            .then(resp => {
                let {results, count} = resp;
                let listUser: ListUser = results;
                let listData: ListItems = listUser.map((item: User) => {
                    let midData:Item = {
                        ...item,
                        key: item._id
                    };
                    return midData;
                });
                setCount(count);
                setData(listData);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        refreshData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, pageSize]);
    useEffect(() => {
        if (shouldRefreshData) {
            refreshData();
            setShouldRefreshData(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefreshData]);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: text => <a>{text}</a>,
        },
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
            render: created => {
                let date = new Date(created);
                return date.toLocaleString();
            },
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
    const onPageChange = (page: number) => {
        setPage(page);
    };
    const onShowSizeChanger = (curr: number, size: number) => {
        setPageSize(size);
    };
    return (
        <>
            <Table
                rowKey='_id'
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            <CustomPagination
                total={count} 
                onPageChange={onPageChange} 
                onShowSizeChanger={onShowSizeChanger}/>
        </>
    );
}