import { Divider, List, Typography } from 'antd';
import ProblemListItem from './ProblemListItem';
export enum ProblemStatusEnum {
    PENDING,
    SUCCESSED,
    FAILED,
    READY
}
export type Problem = {
    title: string,
    status: ProblemStatusEnum
    ranking?: number,
}
const data:Problem[] = [
    {
        title: 'Problem 1',
        status: ProblemStatusEnum.READY,
    },
    {
        title: 'Problem 2',
        status: ProblemStatusEnum.SUCCESSED,
        ranking: 30
    },
    {
        title: 'Problem 3',
        status: ProblemStatusEnum.FAILED,
        ranking: 30
    },
    {
        title: 'Problem 4',
        status: ProblemStatusEnum.PENDING,
        ranking: 30
    }
];
export default function ListProblem() {
    return <>
        <Divider orientation="left">List problems</Divider>
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item: Problem, idx: number) => (
                <List.Item style={{borderRadius: '5px', background: '#eee', marginBottom: '3px'}}>
                    <ProblemListItem item={item} idx={idx+1}></ProblemListItem>
                </List.Item>
            )}
        />
    </>;
}