import { Table, Tabs } from 'antd';

const { TabPane } = Tabs;
const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
        render: (rank) => {
            return rank;
        }
    },
    {
        title: 'Created by',
        dataIndex: 'created_by',
        key: 'created_by',
    },
    {
        title: 'Accuracy',
        dataIndex: 'accuracy',
        key: 'accuracy',
    },
    {
        title: 'Language',
        dataIndex: 'language',
        key: 'language',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
    },
];
const data = [{
    title: 'Problem 1',
    results: [
        {
            created_by: 'dainguyen',
            accuracy: 0.83,
            created_at: '',
            language: 'javascript'
        },
        {
            created_by: 'nghiale',
            accuracy: 0.84,
            created_at: '',
            language: 'python'
        }
    ]
},
{
    title: 'Problem 2',
    results: [
        {
            created_by: 'dainguyen',
            accuracy: 0.83,
            created_at: '',
            language: 'javascript'
        },
        {
            created_by: 'nghiale',
            accuracy: 0.84,
            created_at: '',
            language: 'python'
        }
    ]
}, {
    title: 'Problem 3',
    results: [
        {
            rank: 2,
            created_by: 'dainguyen',
            accuracy: 0.83,
            created_at: '',
            language: 'javascript'
        },
        {
            rank: 1,
            created_by: 'nghiale',
            accuracy: 0.84,
            created_at: '',
            language: 'python'
        }
    ]
}];
export default function Dashboard() {
    return <div className='__dashboard-container__'>
        <Tabs defaultActiveKey="0">
            <TabPane tab="All" key="0">
            </TabPane>
            {
                data.map((dataItem, idx: number) => {
                    return (
                        <TabPane tab={dataItem.title} key={idx+1}>
                            <Table dataSource={dataItem.results} columns={columns}></Table>
                        </TabPane>
                    );
                })
            }
        </Tabs>

    </div>;
}