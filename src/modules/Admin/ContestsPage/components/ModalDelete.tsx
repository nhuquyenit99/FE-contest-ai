import CustomModal from 'components/core/CustomModal';
import Text from 'antd/lib/typography/Text';
import { notification } from 'antd';
import {fetchDeleteContest} from 'services/contest';

const childDeleteComponent = (
    <>
        <Text> Are you sure to delete this contest?</Text>
    </>
);

type Props = {
    _id: number,
    visible: boolean,
    setVisible: (value: boolean) => void,
    setShouldRefreshData: (value: boolean) => void
}
export default function ModalDelete({
    _id,
    visible,
    setVisible,
    setShouldRefreshData
}: Props) {
    const handleOk = () => {
        fetchDeleteContest(_id)
            .then(resp => {
                setShouldRefreshData(true);
                notification.success({
                    message: 'Delete language successfully',
                    style: {
                        width: 600,
                    },
                });
            })
            .catch(
                err => console.log(err)
            );
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const deleteLanguageModalProps = {
        visible,
        title: 'Delete language',
        childComponent: childDeleteComponent,
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...deleteLanguageModalProps}></CustomModal>
    );
}