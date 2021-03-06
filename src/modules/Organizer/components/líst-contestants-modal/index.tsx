import React, {forwardRef, useImperativeHandle, useState} from 'react';
import { Empty, Modal, Table, Spin } from 'antd';
import { Contestant } from 'models';
import { useEntityDataList } from 'access/access';
import './style.scss';

type ListContestantsModalProps = {
    contestId: string
}

export const ListContestantsModal = forwardRef(({
    contestId
} : ListContestantsModalProps, ref) => {
    const [visible, setVisible] = useState(false);

    const {loading, data} = useEntityDataList<Contestant>(`api/organizer/contest/${contestId}/contestants`);

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true)
    }));

    const columns = [
        {
            title: 'No.',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'First Name',
            dataIndex: 'user',
            key: 'first_name',
            render: (text) => text.first_name
        },
        {
            title: 'Last Name',
            dataIndex: 'user',
            key: 'last_name',
            render: (text) => text.last_name
        },        
        {
            title: 'Score',
            dataIndex: 'total_score',
            key: 'total_score',
            render: (text) => text ?? '-'
        },
    ];

    if (loading) {
        return <Modal visible={visible} title='List contestants' destroyOnClose footer={null} onCancel={() => setVisible(false)}>
            <Spin size='large' style={{ width: '100%'}}/>
        </Modal>;
    }
    if (!contestId) {
        return  <Modal visible={visible} title='List contestants' destroyOnClose footer={null} onCancel={() => setVisible(false)}>
            <Empty />
        </Modal>;
    } 
    return (
        <Modal 
            visible={visible} 
            title='List contestants' 
            destroyOnClose 
            footer={null} 
            onCancel={() => setVisible(false)} 
            className='list-contestant-modal'
        >
            <Table columns={columns}
                dataSource={data?.map((item, index) => {
                    return {...item, index: index};
                })}  
                bordered
                pagination={{
                    hideOnSinglePage: true,
                }}
            /> 
        </Modal>
    );
});
