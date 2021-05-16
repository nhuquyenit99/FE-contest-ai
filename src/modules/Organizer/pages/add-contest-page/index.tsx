import React, { useContext, useState } from 'react';
import { Steps, Button, message, Space } from 'antd';
import { AddContestComponent, AddProblemComponent} from '../../components';
import { UserContext } from 'context';
import { OrganizerPageWrapper } from 'modules/Organizer/components';
import './add-contest.scss';

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

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <OrganizerPageWrapper showBackButton title='ADD CONTEST'>
            <div className='add-contest-content'> 
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    <Space>
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()} shape='round'>
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
            
        </OrganizerPageWrapper>
    );
};