import React, { useRef, useState } from 'react';
import { Modal, Button, notification } from 'antd';
import './style.scss';
import { DataAccess } from 'access';
import { AutoField, DateField, LongTextField } from 'uniforms-antd';
import { BaseForm } from 'uniforms';
import { bridge as schema} from './schema';

export function AddContestModal ({onHandleSuccess}: {onHandleSuccess: () => void}) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState<any>();

    const formRef = useRef<any>();

    const onSubmit = async (values) => {
        try {
            setLoading(true);
            await DataAccess.Post('api/organizer/contest', values);
            setLoading(false);
            notification.success({
                message: 'Add contest successfully!'
            });
            setVisible(false);
            onHandleSuccess();
            setModel(undefined);
        } catch {
            notification.error({
                message: 'Add contest failed!'
            });
            setLoading(false);
        }
    };

    return (
        <div className='add-contest'>
            <Button shape='round' type='primary' onClick={() => setVisible(true)}>Add Contest</Button>
            <Modal 
                width={700}
                title='Add contest' 
                visible={visible} 
                onCancel={() => {
                    setVisible(false);
                    setModel(undefined);
                }} 
                onOk={() => {
                    formRef.current?.submit();
                }}
                className='add-contest-modal'
                confirmLoading={loading}
                destroyOnClose
            >
                <BaseForm schema={schema} model={model} ref={formRef} onSubmit={onSubmit} onChange={(key, value) => {
                    setModel(prev => {
                        return {
                            ...prev,
                            [key]: value
                        };
                    });
                }}>
                    <AutoField name='title'/>
                    <DateField name='time_start' format='DD/MM/YYYY HH:mm'/>
                    <DateField name='time_end' format='DD/MM/YYYY HH:mm'/>
                    <LongTextField name='description' />
                </BaseForm>
            </Modal>
        </div>
    );
}