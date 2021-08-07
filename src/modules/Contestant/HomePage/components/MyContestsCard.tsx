import { Card } from 'antd';
import { List, Skeleton } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { ContestAndScore, fetchMyContests } from 'services/user/fetch_my_contest';
import { UserContext } from 'context/index';
import { NavLink } from 'react-router-dom';
import CONTEST_STATUS_ENUM from 'const/contest_status';
import MyContestItem from './MyContestItem';

interface ContestsProps {
    children: React.ReactNode
    className: string,
    title: string,
    contest_status: CONTEST_STATUS_ENUM,
}

type Item = ContestAndScore&{
    loading: boolean,   
}

type ListItem = Item[];

export default function MyContestsCard(props: ContestsProps) {
    const [initLoading, setInitLoading] = useState(true);
    const [list, setList] = useState<ListItem>([]);
    const {_id} = useContext(UserContext);
    useEffect(() => {
        if (_id === 0) return;
        fetchMyContests(_id, props.contest_status).then(res => {
            setInitLoading(false);
            let lst:ListItem = res?.results.map(item => {
                return {
                    ...item,
                    loading: false,
                };
            });
            setList(lst);
        });
    }, [_id]);

    return (
        <Card {...props} title={props.title}>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item: Item) => (
                    <List.Item
                        // actions={[<NavLink 
                        //     to={`/contestant/contest/?id=${item.contest._id}`} 
                            // key="list-loadmore-edit">Detail</NavLink>]}
                    >
                        <Skeleton avatar title loading={item.loading} active>
                            <MyContestItem contest={item.contest} total_score={item.total_score}></MyContestItem>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Card>
    );
}