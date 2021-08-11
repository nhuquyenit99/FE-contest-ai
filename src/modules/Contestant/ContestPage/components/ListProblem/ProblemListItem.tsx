import { Space } from 'antd';
import { Problem } from './index';
import ProblemStatusIcon from './ProblemStatusIcon';
type ProblemListItemProps = {
    idx: number,
    item: Problem
}

export default function ProblemListItem({ idx, item }: ProblemListItemProps) {
    return (
        <div className="problem-list-item__container" >
            <Space>
                <div className="problem-index">{idx}</div>
                <ProblemStatusIcon status={item.status} />
                <div className="problem-title">
                    {item.title}
                </div>
                {item.ranking}
            </Space>
        </div>
    );
}