import React, { useContext, useState } from 'react';
import { Steps, Button, message, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { AddContestComponent, AddProblemComponent} from '../../components';
import './add-contest.scss';
import { UserContext } from 'context';
const { Step } = Steps;
const steps = [
    {
        title: 'Contest',
        content: <AddContestComponent />,
    },
    {
        title: 'Problems',
        content: <AddProblemComponent />,
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

export function AddContestPage() {
    const [current, setCurrent] = useState(0);
    const userContext = useContext(UserContext);
    console.log('userContext', userContext);
    // const {setIsShowAddContest} = props;

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div className='add-contest-page'>
            <div className='header'>
                <a href='/organizer' className='btn-back'>
                    <Button shape='round'>
                        <ArrowLeftOutlined />
                            Back
                    </Button>
                </a>
                <span>Add contest</span>
            </div>
            <div className='main-body'>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    <Space>
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                            Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary"  shape='round' onClick={() => message.success('Processing complete!')}>
                            Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }}  shape='round' onClick={() => prev()}>
                            Previous
                            </Button>
                        )}
                    </Space>
                </div>
            </div>
        </div>
    );
};