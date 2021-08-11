import { List, Skeleton, Typography } from 'antd';
import { useState } from 'react';
type CardContestContentProps = {
    contest_id;
    problems: {
        title: string
    }[];
};

export function CardContestContent(props: CardContestContentProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const listProblems = props.problems;
    // const [listProblems, setListProblems] = useState([]);
    return <div className='__card-contest-content__'>
        {
            (listProblems?.length > 0 || !isLoading) &&
            <Skeleton loading={isLoading}>
                <List
                    dataSource={listProblems}
                    renderItem={
                        (item: {title: string}, idx: number) => (
                            <List.Item>
                                <Typography.Text mark>[{idx + 1}]</Typography.Text> {item.title}
                            </List.Item>
                        )
                    }
                >
                </List>
            </Skeleton>
        }
    </div>;
}