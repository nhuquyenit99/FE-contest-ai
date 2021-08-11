import { useState } from 'react';
import { Button, Space, Table} from 'antd';
import DeleteButton from 'components/core/DeleteButton';
import EditButton from 'components/core/EditButton';
import ModalAddLanguage from './components/ModalAddLanguage';
import ModalEditLanguage from './components/ModalEditLanguage';
import ModalDeleteLanguage from './components/ModalDeleteLanguage';
import { useEffect } from 'react';
import { fetchAllLanguage } from 'services/admin/fetch_language';
import { Language } from '../../../services/language';

export type Item = Language&{
    key: number,
}
type ListItems = Item[];

export default function LanguagePage() {
    const [data, setData] = useState<ListItems>([]);
    const [isAddLanguageModalVisible, setIsAddLanguageModalVisible] = useState(false);
    const [isEditLanguageModalVisible, setIsEditLanguageModalVisible] = useState(false);
    const [isDeleteLanguageModalVisible, setIsDeleteLanguageModalVisible] = useState(false);
    const [shouldRefreshData, setShouldRefreshData] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const refreshData = () => {
        fetchAllLanguage()
            .then(listLanguage => {
                // console.log(listLanguage);
                let listData: ListItems = listLanguage.map((item: Language) => {
                    let midData = {
                        ...item,
                        key: item._id,
                    };
                    return midData;
                });
                setData(listData);
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
            render: text => text,
        },
        {
            title: 'Language',
            dataIndex: 'name',
            key: 'language',
            render: text => text,
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: 'File exts',
            dataIndex: 'file_extensions',
            key: 'file_extensions'
        },
        {
            title: 'Created At',
            dataIndex: 'created',
            key: 'created',
            render: created => {
                let date = new Date(created);
                return date.toLocaleString();
            },
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
        setVisible: setIsAddLanguageModalVisible,
        setShouldRefreshData,
    };
    const editLanguageModalProps = {
        editedItem: data.filter(item => item['_id'] === selectedId)[0],
        visible: isEditLanguageModalVisible,
        setVisible: setIsEditLanguageModalVisible,
        setShouldRefreshData,
    };
    const deleteLanguageModalProps = {
        _id: selectedId,
        visible: isDeleteLanguageModalVisible,
        setVisible: setIsDeleteLanguageModalVisible,
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