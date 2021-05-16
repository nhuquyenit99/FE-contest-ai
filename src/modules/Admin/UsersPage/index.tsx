import { useState } from 'react';
import { Space, Table} from 'antd';
import { useEffect } from 'react';
import { fetchAllUserPagination, User, ListUser} from 'services/user';
import RoleTag from './RoleTag';
import { RoleTagEnum } from './RoleTag';
import CustomPagination from './Pagination';
import { PaginationQuery } from '../../../services/user';
import DeleteButton from '../../../components/core/DeleteButton';
import ModalDeleteUser from './components/ModalDeleteUser';


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
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);

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
    }, [page, pageSize]);
    useEffect(() => {
        if (shouldRefreshData) {
            refreshData();
            setShouldRefreshData(false);
        }
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
        {
            title: 'Action',
            key: 'action',
            dataIndex: '_id',
            render: (_id, record) => (
                <Space size="middle">
                    <DeleteButton id={_id} onClick={showDeleteItem}></DeleteButton>
                </Space>
            ),
        },
    ];
    const showDeleteItem = (e) => {
        setIsDeleteLanguageModalVisible(true);
    };
    const onPageChange = (page: number) => {
        setPage(page);
    };
    const onShowSizeChanger = (curr: number, size: number) => {
        setPageSize(size);
    };
    const deleteUserModalProps = {
        _id: selectedId,
        visible: isDeleteLanguageModalVisible,
        setVisible: setIsDeleteLanguageModalVisible,
        setShouldRefreshData,
    };

    return (
        <>
            <Table
                rowKey='_id'
                columns={columns}
                dataSource={data}
                pagination={false}
                onRow={(record) =>{
                    return {
                        onClick: event => setSelectedId(record._id),
                    };
                }}
            />
            <CustomPagination
                total={count} 
                onPageChange={onPageChange} 
                onShowSizeChanger={onShowSizeChanger}/>
            <ModalDeleteUser {...deleteUserModalProps}/>
        </>
    );
}