import Modal from 'antd/lib/modal/Modal';

export interface Props {
    title: string,
    isModalVisible: boolean,
    childComponent: JSX.Element,
    handleOk?: () => void,
    handleCancel?: () => void
}

export default function ModalAddLanguage({ title, isModalVisible, childComponent, handleOk, handleCancel }: Props) {
    return (
        <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {childComponent}
        </Modal>
    );
}