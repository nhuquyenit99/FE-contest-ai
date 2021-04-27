import { Space } from 'antd';
import { Problem } from './index';
import ProblemStatusIcon from './ProblemStatusIcon';
type ProblemListItemProps = {
    idx: number,
    item: Problem
}

export default function ProblemListItem({ idx, item }: ProblemListItemProps) {
    return (

        <Space>
            <div>{idx}</div>
            <ProblemStatusIcon status={item.status} />
            {item.title}
            {item.ranking}
        </Space>
    );
}