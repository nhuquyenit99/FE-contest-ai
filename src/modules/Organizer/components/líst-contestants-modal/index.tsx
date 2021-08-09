import React, {forwardRef, useImperativeHandle, useState} from 'react';
import { Empty, Modal, Table, Spin } from 'antd';
import { Contestant } from 'models';
import { useEntityDataListObj } from 'access/access';
import './style.scss';

type ListContestantsModalProps = {
    contestId: string
}

export const ListContestantsModal = forwardRef(({
    contestId
} : ListContestantsModalProps, ref) => {
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);

    const {loading, data} = useEntityDataListObj<Contestant>(`api/organizer/contest/${contestId}/contestants`, page);

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
                pagination={{
                    current: page,
                    hideOnSinglePage: true,
                    pageSize: 10
                }}
            /> 
        </Modal>
    );
});
