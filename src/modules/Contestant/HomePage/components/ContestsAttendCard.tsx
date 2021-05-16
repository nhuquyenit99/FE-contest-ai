import { Card } from 'antd';
import { List, Skeleton } from 'antd';
import { useState, useEffect, useContext } from 'react';
import { fetchAttendedContest } from 'services/user';
import { UserContext } from '../../../../context/index';
import { AttendedContest } from '../../../../services/user';
type Item = AttendedContest&{
    loading: boolean,   
}

type ListItem = Item[];

export default function ContestsAttendCard(props) {
    const [initLoading, setInitLoading] = useState(true);
    // const [loading, setLoading] = useState(false);
    // const [data, setData] = useState<ListItem>([]);
    const [list, setList] = useState<ListItem>([]);
    const {_id} = useContext(UserContext);
    useEffect(() => {
        fetchAttendedContest(_id).then(res => {
            console.log(res);
            setInitLoading(false);
            let lst:ListItem = res?.map(item => {
                return {
                    ...item,
                    loading: false,
                };
            });
            console.log(lst);
            // setData(lst);
            setList(lst);
        });
    }, [_id]);


    // const onLoadMore = () => {
    //     setLoading(true);
    // };
    // const loadMore =
    //     !initLoading && !loading ? (
    //         <div
    //             style={{
    //                 textAlign: 'center',
    //                 marginTop: 12,
    //                 height: 32,
    //                 lineHeight: '32px',
    //             }}
    //         >
    //             <Button>loading more</Button>
    //         </div>
    //     ) : null;


    return (
        <Card {...props} title="Attended Contests">
            {/* {list} */}
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item: Item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">Detail</a>]}
                    >
                        <Skeleton avatar title loading={item.loading} active>
                            <div>{item.title}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Card>
    );
}