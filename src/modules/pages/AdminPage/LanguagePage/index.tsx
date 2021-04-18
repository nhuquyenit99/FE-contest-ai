import React, { useState } from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import ModalAddLanguage from './components/ModalAddLanguage';
import ModalEditLanguage from './components/ModalEditLanguage';
import ModalDeleteLanguage from './components/ModalDeleteLanguage';


const data = [
    {
        key: '1',
        language: 'C++',
        age: 'sdfsdf',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        language: 'Python',
        age: 'sdfsdfsdf',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        language: 'Rust',
        age: 'sdfsdfsdf',
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];



export default function LanguagePage() {
    const [isAddLanguageModalVisible, setIsAddLanguageModalVisible] = useState(false);
    const [isEditLanguageModalVisible, setIsEditLanguageModalVisible] = useState(false);
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    
    const columns = [
        {
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Path',
            dataIndex: 'age',
            key: 'path',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
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