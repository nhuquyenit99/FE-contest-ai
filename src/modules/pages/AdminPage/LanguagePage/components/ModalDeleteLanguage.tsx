import Modal from 'antd/lib/modal/Modal';
import CustomModal from 'components/core/CustomModal';
import Text from 'antd/lib/typography/Text';


const childDeleteLanguageComponent = (
    <>
        <Text> Are you sure to delete this language?</Text>
    </>
);
export default function ModalAddLanguage(props) {
    const { setIsDeleteLanguageModalVisible } = props;
    const handleOk = () => {
        setIsDeleteLanguageModalVisible(false);
    };

    const handleCancel = () => {
        setIsDeleteLanguageModalVisible(false);
    };

    const deleteLanguageModalProps = {
        title: 'Delete language',
        childComponent: childDeleteLanguageComponent,
        handleOk,
        handleCancel,
    };
    return (
        <CustomModal {...props} {...deleteLanguageModalProps}></CustomModal>
    );
}