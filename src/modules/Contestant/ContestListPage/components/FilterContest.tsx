import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';

export default function FilterContest(props) {
    const onChangeSelect = (value) => {
        props.setFilter(value);
    };
    return (
        <div className="filter-contest-container">
            <Select defaultValue="All" style={{ width: 120 }} onChange={onChangeSelect}>
                <Option value="upcoming">Upcoming</Option>
                <Option value="ongoing">Ongoing</Option>
                <Option value="expired">Expired</Option>
                <Option value="all">All</Option>
            </Select>
        </div>
    );
}