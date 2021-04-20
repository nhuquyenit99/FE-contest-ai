import React, { useState } from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import ModalAddLanguage from './components/ModalAddLanguage';
import ModalEditLanguage from './components/ModalEditLanguage';
import ModalDeleteLanguage from './components/ModalDeleteLanguage';
import { useEffect } from 'react';
import { fetchAllLanguage } from 'services/language';


export default function LanguagePage() {
    const [data, setData] = useState([]);
    const [isAddLanguageModalVisible, setIsAddLanguageModalVisible] = useState(false);
    const [isEditLanguageModalVisible, setIsEditLanguageModalVisible] = useState(false);
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const refreshData = () => {
        fetchAllLanguage()
            .then(resp => {
                let newData = resp.data;
                newData = newData.map(data => {
                    data.key = data._id;
                    return data;
                });
                console.log(newData);
                setData(newData);
            })
            .catch(err => console.log(err));
    };
    
    useEffect(() => {
        refreshData();
    }, []);
    useEffect(() => {
        if (shouldRefreshData) {
            refreshData();
            setShouldRefreshData(false);
        }
    }, [shouldRefreshData]);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Language',
            dataIndex: 'name',
            key: 'language',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: 'Created At',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: '_id',
            render: (_id, record) => (
                <Space size="middle">
                    <EditButton onClick={showEditItem}></EditButton>
                    <DeleteButton onClick={showDeleteItem} id={_id}></DeleteButton>
                </Space>
            ),
        },
    ];

    const showAddLanguageModal = () => {
        setIsAddLanguageModalVisible(true);
    };
    const showEditItem = () => {
        setIsEditLanguageModalVisible(true);
    }; 
    const showDeleteItem = (e) => {
        setIsDeleteLanguageModalVisible(true);
    };
    const addLanguageModalProps = {
        visible: isAddLanguageModalVisible,
        setIsAddLanguageModalVisible,
        setShouldRefreshData,
    };
    const editLanguageModalProps = {
        editedItem: data.filter(item => item['_id'] === selectedId)[0],
        visible: isEditLanguageModalVisible,
        setIsEditLanguageModalVisible,
        setShouldRefreshData,
    };
    const deleteLanguageModalProps = {
        _id: selectedId,
        visible: isDeleteLanguageModalVisible,
        setIsDeleteLanguageModalVisible,
        setShouldRefreshData,
    };
    return (
        <>
            <ModalAddLanguage {...addLanguageModalProps}></ModalAddLanguage>
            <ModalEditLanguage {...editLanguageModalProps}></ModalEditLanguage>
            <ModalDeleteLanguage {...deleteLanguageModalProps}></ModalDeleteLanguage>
            <Button type="primary" onClick={showAddLanguageModal} style={{ justifyContent: 'end' }}>Add language</Button>
            <Table 
                rowKey='_id' 
                onRow={(record) =>{
                    return {
                        onClick: event => setSelectedId(record._id),
                    };
                }}
                columns={columns} 
                dataSource={data} 
            />
        </>
    );
}