import { Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import AvatarContainer from 'components/core/AvatarContainer';
export default function CardContestTitle(props) {
    const {title, time_end, time_start, language, created_user, created} = props;
    const avatarContainerProps = {
        displayName: 'ABC'
    };
    return <> 
        <Space>
            <AvatarContainer {...avatarContainerProps}></AvatarContainer>
            <Text>{title}</Text>
            {/* <Text>{time_start}</Text>
            <Text>{time_end}</Text>
             */}
        </Space>

    </>;
}