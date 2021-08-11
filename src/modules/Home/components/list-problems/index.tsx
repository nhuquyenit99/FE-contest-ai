import React from 'react';
import { Collapse, Spin, Empty  } from 'antd';
import { Problem } from 'models/problem';
import { useEntityDataList } from 'access';
import { BASE_URL } from 'access/base';
import './style.scss';

export function ListProblems ({contestId}: {contestId: string}) {
    const {loading, data, error} = useEntityDataList<Problem>(`api/problem/?contest_id=${contestId}`);
    if (loading) {
        return <div className="loading-component">
            <Spin />
        </div>;
    }

    if (error || !data) {
        return <Empty description='Sorry, something went wrong'/>;
    }
    return (
        <Collapse className='problem-collapse'>
            {data.map((item, index) => (
                <Collapse.Panel key={item._id} header={`${index + 1}. ${item.title}`} >
                    <iframe src={`${BASE_URL}${item.description}`} title='Description' width='100%' height='400px' />
                </Collapse.Panel>
            ))}
        </Collapse>
    );
}