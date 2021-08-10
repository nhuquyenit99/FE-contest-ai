import React from 'react';
import { Collapse, Spin, Empty  } from 'antd';
import { Problem } from 'models/problem';
import { useEntityData, useEntityDataList } from 'access';

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
        <Collapse>
            {data.map((item, index) => (
                <Collapse.Panel key={item._id} header={`${index + 1}. ${item.title}`} >
                    <ProblemDescription url={item.description}/>
                </Collapse.Panel>
            ))}
        </Collapse>
    );
}

function ProblemDescription ({url}: {url: string}) {
    const {loading, data} = useEntityData<any>(url.slice(1));
    if (loading) {
        return <div className="loading-component">
            <Spin />
        </div>;
    }
    return (
        <div className='problem-'>
            {data ?? <Empty />}
        </div>
    );
}