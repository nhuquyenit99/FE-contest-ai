import { Select } from 'antd';

export default function FilterContest(props) {
    const onChangeSelect = (value) => {
        props.setFilter(value);
    };
    return (
        <div className="filter-contest-container">
            <Select defaultValue="All" style={{ width: 120 }} onChange={onChangeSelect}>
                <Select.Option value="upcoming">Upcoming</Select.Option>
                <Select.Option value="ongoing">Ongoing</Select.Option>
                <Select.Option value="expired">Expired</Select.Option>
                <Select.Option value="all">All</Select.Option>
            </Select>
        </div>
    );
}