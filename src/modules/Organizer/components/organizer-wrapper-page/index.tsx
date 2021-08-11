import React, { useContext } from 'react';
import {ArrowLeftOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import AvatarContainer from 'components/core/AvatarContainer';
import CustomBadge from 'components/core/CustomBadge';
import SettingDropdown from 'components/layout/SettingDropdown';
import { UserContext } from 'context';
import './style.scss';

type OrganizerPageWrapperProps = {
    showBackButton?: boolean,
    title: string
    children: React.ReactNode
}

export function OrganizerPageWrapper ({
    showBackButton = false, title, children
}: OrganizerPageWrapperProps) {
    const {displayName} = useContext(UserContext);
    return (
        <div className='organizer-page'>
            <div className='header'>
                <div className='header-content-left'>
                    {showBackButton &&<a href='/organizer' className='btn-back'>
                        <Button shape='round'>
                            <ArrowLeftOutlined />
                        Back
                        </Button>
                    </a>}
                    <span className='page-title '>{title}</span>
                </div>
                <div className='header-content-right'>
                    <CustomBadge />
                    <AvatarContainer displayName={displayName} dark ></AvatarContainer>
                    <SettingDropdown></SettingDropdown>
                </div>
            </div>
            <div className='main-body'>
                {children}
            </div>
        </div>
    );
}