import React from 'react';
import { Collapse } from 'antd';
import { Problem } from 'models/problem';

export function ListProblems ({data}: {data: Problem[]}) {
    return (
        <Collapse>
            {data.map((item, index) => (
                <Collapse.Panel key={item._id} header={`${index + 1}. ${item.name}`} >
                    {item.description}
                </Collapse.Panel>
            ))}
        </Collapse>
    );
}