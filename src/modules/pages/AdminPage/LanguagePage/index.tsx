import React, { useState } from 'react';
import { Button, Input, Space, Table, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CustomModal from 'components/core/CustomModal';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import Text from 'antd/lib/typography/Text';
const handleClickEditItem = () => {
    alert('alert');
};

const showDeleteItem = () => {
    // setIsDeleteLanguageModalVisible(true);
};

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
                <EditButton handleClick={handleClickEditItem}></EditButton>
                <DeleteButton handleClick={showDeleteItem}></DeleteButton>
            </Space>
        ),
    },
];


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
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    
    const childAddLanguageComponent = (
        <>
            <Input size="large" placeholder="name" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input size="large" placeholder="path" prefix={<UserOutlined />} />
            <br />
        </>
    );
    const childDeleteLanguageComponent = (
        <>
            <Text> Are you sure to delete this language?</Text>
        </>
    );

    const showModal = () => {
        setIsAddLanguageModalVisible(true);
    };

    const handleOk = () => {
        setIsAddLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsAddLanguageModalVisible(false);
    };

    const addLanguageModalProps = {
        title: 'Add language',
        childComponent: childAddLanguageComponent,
        isModalVisible: isAddLanguageModalVisible,
        handleOk,
        handleCancel,
    };

    const deleteLanguageModalProps = {
        title: 'Delete language',
        childComponent: childDeleteLanguageComponent,
        isModalVisible: isDeleteLanguageModalVisible,
        handleOk,
        handleCancel,
    };
    return (
        <>
            <CustomModal {...addLanguageModalProps}></CustomModal>
            <CustomModal {...deleteLanguageModalProps}></CustomModal>
            <Button type="primary" onClick={showModal} style={{ justifyContent: 'end' }}>Add language</Button>
            <Table columns={columns} dataSource={data} />
        </>
    );
}