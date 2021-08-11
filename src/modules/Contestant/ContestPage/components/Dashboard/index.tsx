import { WS_URL } from 'access/base';
import { Table, Tabs } from 'antd';
import ContestStatusEnum from 'const/contest_status';
import { useEffect, useState } from 'react';
import { fetchRank } from 'services/user/fetch_rank';
import './style.scss';

const { TabPane } = Tabs;
const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        render: (rank: number, row: any) => {
            if (row.total_score === 0) {
                return <div className="rank rank-n">{rank}</div>;
            }
            if (rank === 1)
                return <div className="rank rank-1">1</div>;
            if (rank === 2) 
                return <div className="rank rank-2">2</div>;
            if (rank === 3) 
                return <div className="rank rank-3">3</div>;
            
            return <div className="rank rank-n">{rank}</div>;

        }
    },
    {
        title: 'Contestant',
        dataIndex: 'user',
        key: 'user',
        render: (user) => {
            return (
                <span>
                    {user.first_name} {user.last_name}
                </span>
            );
        }
    },
    {
        title: 'Total score',
        dataIndex: 'total_score',
        key: 'total_score',    
    }
];


interface DashboardProps {
    contest_id: number;
    contest_status?: ContestStatusEnum;
}

export default function Dashboard(props: DashboardProps) {
    const [data, setData] = useState<{rank: number, user: any, total_score: number}[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (props.contest_status === ContestStatusEnum.ONGOING) {
            let ws = new WebSocket(`${WS_URL}/ws/contest/${props.contest_id}/rank`);
            ws.onopen = () => {
                console.log('WebSocket connection opened.');
            };
            ws.onclose = () => {
                console.log('WebSocket connection closed.');
            };
            ws.onmessage = (message) => {
                setIsLoading(true);
                let data = JSON.parse(message.data);
                let newData = data.results.map((result, index) => {
                    return {
                        ...result,
                        rank: index+1
                    };
                });
                setData(newData);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            };

            return () => {
                ws.close();
            };
        } else if (props.contest_status === ContestStatusEnum.EXPIRED 
                || props.contest_status === ContestStatusEnum.UPCOMING) {
            // TODO: Fetch rank http api
            fetchRank(props.contest_id).then((data) => {
                let newData = data.map((result, index) => {
                    return {
                        ...result,
                        rank: index+1
                    };
                });
                setData(newData);
               
            }).catch((err) => {});
        };
    }, []);
    return <div className='dashboard-container'>
        <Tabs defaultActiveKey="0">
            <TabPane tab="All" key="0" >
                <Table className="dashboard-table-wrapper" 
                    columns={columns} 
                    dataSource={data} 
                    loading={isLoading}
                />
            </TabPane>
            {/* {
                data.map((dataItem, idx: number) => {
                    return (
                        <TabPane tab={dataItem.title} key={idx+1}>
                            <Table dataSource={dataItem.results} columns={columns}></Table>
                        </TabPane>
                    );
                })
            } */}
        </Tabs>

    </div>;
}