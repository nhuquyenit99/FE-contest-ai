import Modal from 'antd/lib/modal/Modal';
import CustomModal from 'components/core/CustomModal';
import Text from 'antd/lib/typography/Text';
import axios from 'axios';
import API_ADDRESS from 'const/api';
import { notification } from 'antd';


const apiDeleteLanguage = API_ADDRESS.concat('/api/language/');
const fetchDeleteLanguage = (id) => {
    const apiDeleteLanguageId = apiDeleteLanguage.concat(id).concat('/');
    return axios.delete(apiDeleteLanguageId);
};
const childDeleteLanguageComponent = (
    <>
        <Text> Are you sure to delete this language?</Text>
    </>
);
export default function ModalAddLanguage(props) {
    const { setIsDeleteLanguageModalVisible, setShouldRefreshData } = props;
    const {_id} = props;
    const handleOk = () => {
        fetchDeleteLanguage(_id)
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