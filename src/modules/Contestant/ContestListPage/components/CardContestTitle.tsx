import { Space, Tag } from 'antd';
import Text from 'antd/lib/typography/Text';
import AvatarContainer from 'components/core/AvatarContainer';
import { ContestStatusEnum } from './CardContest';
const renderStatus = (status: ContestStatusEnum) => {
    if (status === ContestStatusEnum.EXPIRED) {
        return <Tag color="red-inverse">Expired</Tag>;
    }
    if (status === ContestStatusEnum.IN_PROGRESS) {
        return <Tag color="green-inverse">In progress</Tag>;
    };
    return <Tag color="volcano-inverse">Upcoming</Tag>;
};
export default function CardContestTitle(props) {
    const {title, status, created_user} = props;
    console.log(status);
    const avatarContainerProps = {
        displayName: created_user?.first_name + ' ' + created_user?.last_name
    };
    return <> 
        {renderStatus(status)}
        <Space>
            <Text>{title.toUpperCase()}</Text>
            <em>created by </em>
            <AvatarContainer {...avatarContainerProps}></AvatarContainer>
            {/* <Text>{time_start}</Text>
            <Text>{time_end}</Text>
             */}
        </Space>

    </>;
}