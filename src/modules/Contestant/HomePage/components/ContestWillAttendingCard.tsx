import { Card } from 'antd';
import { List, Skeleton } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { ContestAndScore, fetchMyContests } from 'services/user/fetch_my_contest';
import { UserContext } from 'context/index';
import { NavLink } from 'react-router-dom';

type Item = ContestAndScore&{
    loading: boolean,   
}

type ListItem = Item[];

export default function ContestsWillAttendCard(props) {
    const [initLoading, setInitLoading] = useState(true);
    const [list, setList] = useState<ListItem>([]);
    const {_id} = useContext(UserContext);
    useEffect(() => {
        fetchMyContests(_id, 'ongoing').then(res => {
            console.log(res);
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
        <Card {...props} title="My Upcoming Contests">
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item: Item) => (
                    <List.Item
                        actions={[<NavLink 
                            to={`/contestant/contest/?id=${item.contest._id}`} 
                            key="list-loadmore-edit">Detail</NavLink>]}
                    >
                        <Skeleton avatar title loading={item.loading} active>
                            <div>{item.contest.title}</div>
                            <div>{item.total_score}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Card>
    );
}