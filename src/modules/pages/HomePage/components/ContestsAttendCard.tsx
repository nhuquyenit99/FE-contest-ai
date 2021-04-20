import { Card } from 'antd';
import { List, Avatar, Button, Skeleton } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
export default function ContestsAttendCard(props) {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        getData(res => {
            console.log(res);
            setInitLoading(false);
            setData(res.results);
            setList(res.results);
        });
    }, []);


    const onLoadMore = () => {
        setLoading(true);
        const defaultLoadMore = [...new Array(count)].map(() => ({ loading: true, name: {} }));
        // setList(data.concat(defaultLoadMore));
        getData(res => {
            const newData = data.concat(res.results);
            setData(newData);
            setList(newData);
            setLoading(false);
            // () => {
            //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            //     // In real scene, you can using public method of react-virtualized:
            //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            //     window.dispatchEvent(new Event('resize'));
            // },
        });
    };
    const getData = callback => {
        axios.get(fakeDataUrl).then(res => callback(res.data));
    };
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button>loading more</Button>
            </div>
        ) : null;


    return (
        <Card {...props} title="Attended Contests">

            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">Detail</a>]}
                    >
                        {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                        <div>content</div>
                        {/* </Skeleton> */}
                    </List.Item>
                )}
            />
        </Card>
    );
}