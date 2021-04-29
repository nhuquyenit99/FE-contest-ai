import { Tag } from 'antd';

export enum RoleTagEnum {
    ADMIN,
    ORGANIZER,
    CONTESTANT
}

type RoleTagProps = {
    role: RoleTagEnum
}

export default function RoleTag({role}: RoleTagProps) {
    let tag: JSX.Element = <></>;
    switch(role) {
    case RoleTagEnum.ADMIN: tag =  <Tag color="#2db7f5">Admin</Tag>; break;
    case RoleTagEnum.ORGANIZER: tag = <Tag color="#87d068">Organizer</Tag>; break;
    case RoleTagEnum.CONTESTANT: tag = <Tag color="#108ee9">Contestant</Tag>; break;
    }
    return tag;
}