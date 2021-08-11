import { Divider, List } from 'antd';
import ProblemListItem from './ProblemListItem';
export enum ProblemStatusEnum {
    PENDING,
    SUCCESSED,
    FAILED,
    READY,
}
export type Problem = {
    title: string,
    status: ProblemStatusEnum
    ranking?: number,
}

type ListProblemProps = {
    listProblem?: {
        title: string,
    }[],
    currentProblemPst: number,
    setCurrentProblemPst: (idx: number) => void
}
export default function ListProblem(
    props: ListProblemProps) {
    const {
        listProblem,
        setCurrentProblemPst,
        currentProblemPst
    } = props;
    
    let data = listProblem?.map(problem => {
        let newProblem: Problem = {
            ...problem,
            status: ProblemStatusEnum.READY
        };
        return newProblem;
    });
    return <>
        <Divider orientation="left">List problems</Divider>
        <List
            className="problem-list__container"
            bordered
            dataSource={data}
            renderItem={(item: Problem, idx: number) => {
                let selectiveStyle = currentProblemPst === idx ? {
                    background: '#eee'
                } : {};
                return (
                    <List.Item
                        style={{ ...selectiveStyle, borderRadius: '5px', marginBottom: '3px' }}
                        onClick={() => setCurrentProblemPst(idx)}
                    >
                        <ProblemListItem item={item} idx={idx + 1}></ProblemListItem>
                    </List.Item>
                );
            }}
        />
    </>;
}