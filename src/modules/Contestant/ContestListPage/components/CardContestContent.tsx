import { List, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { fetchProblemWithContestId, ListProblems } from 'services/problem';
import { Problem } from 'services/problem';
type CardContestContentProps = {
    contest_id;
};

export function CardContestContent(props: CardContestContentProps) {
    const [listProblems, setListProblems] = useState<Problem[]>([]);
    useEffect(() => {
        if (!props.contest_id) return;

        let qs = '?id=' + props.contest_id;
        fetchProblemWithContestId(qs)
            .then((resp: ListProblems) => {
                setListProblems(resp);
            })
            .catch((err) => {

            });
    }, []);
    return <div className='__card-contest-content__'>
        <List
            dataSource={listProblems}
            renderItem={
                (item:Problem, idx: number) => (
                    <List.Item>
                        <Typography.Text mark>[{idx+1}]</Typography.Text> {item.title}
                    </List.Item>
                )
            }
        >
        </List>
    </div>;
}