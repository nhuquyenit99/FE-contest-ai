import React, { useEffect, useState, useRef, memo } from 'react';
import { AutoField, DateField, LongTextField } from 'uniforms-antd';
import { BaseForm } from 'uniforms';
import { Modal, Button, notification } from 'antd';
import { DataAccess } from 'access';
import { bridge as schema } from './schema';
import { Contest } from 'services/contest';
import './style.scss';

type EditContestProps = {
    contestId: string
    onHandleSuccess: () => void
}

export const EditContestModal = memo(({contestId, onHandleSuccess }: EditContestProps) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [defaultData, setDefaultData] = useState<any>();
    const formRef = useRef<any>();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await DataAccess.Get(`api/organizer/contest/${contestId}`);
                console.log('res', res);
                setDefaultData(res as Contest ?? undefined);
            } catch(e) {
                console.error('fetch contest data error', e);
            } finally {
                setLoading(false);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contestId]);

    const onSubmit = async (model) => {
        try {
            setLoading(true);
            await DataAccess.Put(`api/organizer/contest/${contestId}`, model);
            setLoading(false);
            notification.success({
                message: 'Edit contest successfully!'
            });
            setVisible(false);
            setDefaultData(undefined);
            onHandleSuccess();
        } catch (e) {
            notification.error({
                message: 'Edit contest failed!'
            });
            setLoading(false);
        }
    };

    return (
        <div className='edit-contest'>
            <Button type='primary' shape='round' onClick={() => setVisible(true)}>Edit</Button>
            <Modal 
                width={700}
                title='Edit contest information' 
                visible={visible} 
                onCancel={() => {
                    setVisible(false);
                    setDefaultData(undefined);
                }} 
                onOk={() => {
                    formRef.current?.submit();
                }}
                className='edit-contest-modal'
                confirmLoading={loading}
                destroyOnClose
            >
                <BaseForm schema={schema} model={defaultData} ref={formRef} onSubmit={onSubmit} onChange={(key, value) => {
                    setDefaultData(prev => {
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
});