import Modal from 'antd/lib/modal/Modal';

export interface Props {
    title: string,
    visible: boolean,
    childComponent: JSX.Element,
    handleOk?: () => void,
    handleCancel?: () => void
}

export default function CustomModal({ title, visible, childComponent, handleOk, handleCancel }: Props) {
    return (
        <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            {childComponent}
        </Modal>
    );
}