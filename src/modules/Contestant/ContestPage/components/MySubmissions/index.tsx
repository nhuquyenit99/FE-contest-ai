import { Card, Skeleton, Table, Tag } from 'antd';
import Column from 'antd/lib/table/Column';
import { useState, useEffect, useContext } from 'react';
import { fetchListMySubmission, ListMySubmissions } from 'services/result';
import { UserContext } from 'context/index';
import { Result } from 'services/result';

type MySubmissionsProps = {
    problem_id: number
}

export function MySubmissions(props: MySubmissionsProps) {
    const [data, setData] = useState<Result[]>();
    const [count, setCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const problem_id = props.problem_id;
    const userContext = useContext(UserContext);
    const user_id = userContext._id;

    useEffect(() => {
        setIsLoading(true);
        fetchListMySubmission(user_id, props.problem_id)
            .then((result: ListMySubmissions) => {
                setData(result.results);
                setCount(result.count);
                setIsLoading(false);
            })
            .catch(() => {
            });
    }, [problem_id]);

    return <Card className='__tab-my-submissions__'>
        <Skeleton loading={isLoading}>
            <Tag>Num of submissions: {count}</Tag>
            <Table dataSource={data}>
                <Column title="_id" dataIndex="_id" key="_id" />
                <Column title="problem" dataIndex="problem" key="problem" />
                <Column 
                    title="Submit time" 
                    dataIndex="time_submit" 
                    key="time_submit"
                    render={(data) => {
                        let date = new Date(data);
                        return date.toLocaleString();
                    }}
                />
                <Column title="Accuracy" dataIndex="accuracy" key="accuracy"/>
                <Column title="Language" dataIndex="language" key="language"/>
            </Table>,
        </Skeleton>
    </Card>;
}