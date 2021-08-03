import Title from 'antd/lib/typography/Title';
interface MyContestItemProps {
    contest: {
        title: string;
    }
    total_score: number;
}

export default function MyContestItem(props: MyContestItemProps) {
    return (
        <div className="my-contest-item__container">
            <Title level={5} className="my-contest-item__title">{props.contest.title}</Title>
            <div>{props.total_score}</div>
        </div>
    );
}