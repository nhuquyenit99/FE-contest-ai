import CustomModal from 'components/core/CustomModal';
import Text from 'antd/lib/typography/Text';
import { notification } from 'antd';
import { fetchDeleteUser } from 'services/user';

const childDeleteUserComponent = (
    <>
        <Text> Are you sure to delete this user?</Text>
    </>
);

type Props = {
    _id: number,
    visible: boolean,
    setVisible: (value: boolean) => void,
    setShouldRefreshData: (value: boolean) => void
}
export default function ModalDeleteLanguage({
    _id,
    visible,
    setVisible,
    setShouldRefreshData
}: Props) {
    const handleOk = () => {
        console.log('delete');
        fetchDeleteUser(_id)
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
        childComponent: childDeleteUserComponent,
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...deleteLanguageModalProps}></CustomModal>
    );
}