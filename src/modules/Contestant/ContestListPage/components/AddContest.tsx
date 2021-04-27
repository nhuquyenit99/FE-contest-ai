import { Steps, Button, message, Space } from 'antd';
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

export default function AddContest(props) {
    const [current, setCurrent] = useState(0);
    const {setIsShowAddContest} = props;

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const backToList = () => {
        setIsShowAddContest(false);
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
                <Space>
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
                    <Button onClick={backToList}>Back to List</Button>
                </Space>
            </div>
        </>
    );
};