import { Steps, Button, message } from 'antd';
import { useState } from 'react';
import AddContestComponent from './AddContestComponent';
import AddProblemComponent from './AddProblemComponent';
const { Step } = Steps;

const steps = [
    {
        title: 'Contest',
        content: <AddContestComponent></AddContestComponent>,
    },
    {
        title: 'Problems',
        content: <AddProblemComponent></AddProblemComponent>,
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

export default function AddContest() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};