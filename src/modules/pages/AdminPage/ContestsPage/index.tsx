import { useState } from 'react';
import { Space, Table} from 'antd';
import { useEffect } from 'react';
import { fetchAllContest } from 'services/contest';
import { Contest } from 'services/contest';


export type Item = Contest&{
    key: number,
}
type ListItems = Item[];
export default function LanguagePage() {
    const [data, setData] = useState<ListItems>([]);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const refreshData = () => {
        fetchAllContest()
            .then(listContests => {
                let listItems: ListItems = listContests.map(
                    (data: Contest): Item => {
                        let item: Item = {
                            key: data._id,
                            ...data
                        };
                        return item;
                    });
                console.log(listItems);
                setData(listItems);
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
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Created User',
            dataIndex: 'created_user',
            key: 'created_user',
        },
        {
            title: 'Created At',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Language',
            dataIndex: 'language',
            render: (languages) => (
                <Space size="middle">
                    {
                        languages.map(language => {
                            return language;
                        })
                    }
                </Space>
            ),
        }
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