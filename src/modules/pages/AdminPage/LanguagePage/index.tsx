import React, { useState } from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import ModalAddLanguage from './components/ModalAddLanguage';
import ModalEditLanguage from './components/ModalEditLanguage';
import ModalDeleteLanguage from './components/ModalDeleteLanguage';
import axios from 'axios';
import { useEffect } from 'react';
import API_ADDRESS from 'const/api';


const apiGetAllLanguage = API_ADDRESS.concat('/api/language/');
const fetchAllLanguage = (cb) => {
    return Promise.resolve(axios.get(apiGetAllLanguage).then(cb));
};


export default function LanguagePage() {
    const [data, setData] = useState([]);
    const [isAddLanguageModalVisible, setIsAddLanguageModalVisible] = useState(false);
    const [isEditLanguageModalVisible, setIsEditLanguageModalVisible] = useState(false);
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    useEffect(() => {
        fetchAllLanguage((resp, idx) => {
            let newData = resp.data;
            // newData = newData.map(data => data.key = idx);
            console.log(newData);
            setData(newData);
        })
            .catch(err => console.log(err));
    }, []);
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
            render: (text, record) => (
                <Space size="middle">
                    <EditButton onClick={showEditItem}></EditButton>
                    <DeleteButton onClick={showDeleteItem}></DeleteButton>
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
    const showDeleteItem = () => {
        setIsDeleteLanguageModalVisible(true);
    };
    const addLanguageModalProps = {
        visible: isAddLanguageModalVisible,
        setIsAddLanguageModalVisible
    };
    const editLanguageModalProps = {
        visible: isEditLanguageModalVisible,
        setIsEditLanguageModalVisible
    };
    const deleteLanguageModalProps = {
        visible: isDeleteLanguageModalVisible,
        setIsDeleteLanguageModalVisible
    };
    return (
        <>
            <ModalAddLanguage {...addLanguageModalProps}></ModalAddLanguage>
            <ModalEditLanguage {...editLanguageModalProps}></ModalEditLanguage>
            <ModalDeleteLanguage {...deleteLanguageModalProps}></ModalDeleteLanguage>
            <Button type="primary" onClick={showAddLanguageModal} style={{ justifyContent: 'end' }}>Add language</Button>
            <Table columns={columns} dataSource={data} />
        </>
    );
}