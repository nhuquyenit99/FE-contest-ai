import Title from 'antd/lib/typography/Title';
import { NavLink } from 'react-router-dom';
interface MyContestItemProps {
    contest: {
        _id: number;
        title: string;
    }
    total_score: number;
}

export default function MyContestItem(props: MyContestItemProps) {
    return (
        <div className="my-contest-item__container">
            <Title level={5} className="my-contest-item__title">
                <NavLink to={`contestant/contest/?id=${props.contest._id}`}>
                    {props.contest.title}
                </NavLink> 
            </Title>
            <div className="total-score">{props.total_score}</div>
        </div>
    );
}