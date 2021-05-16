import React, { useContext } from 'react';
import { Button, Space } from 'antd';
import { Redirect } from 'react-router';
import SettingDropdown from 'components/layout/SettingDropdown';
import { readCookie } from 'utils/cookie';
import CustomBadge from 'components/core/CustomBadge';
import AvatarContainer from 'components/core/AvatarContainer';
import { UserContext } from 'context';
import './style.scss';

export function OrganizerHomePage () {
    const {displayName} = useContext(UserContext);
    const token = readCookie('access_token') ?? false;

    if (!token) {
        return <Redirect to='/login/organizer'/>;
    }
    return (
        <div className='organizer-page'>
            <div className='header'>
                <span className='page-title'>
                    Organizer Page
                </span>
                <Space size="large" align="end">
                    <CustomBadge />
                    <AvatarContainer displayName={displayName} dark></AvatarContainer>
                    <SettingDropdown></SettingDropdown>
                </Space>
            </div>
            <div  className='main-context'>
                <a href='/organizer/add-contest'>
                    <Button shape='round' type='primary'>Add Contest</Button>
                </a>
            </div>
            
        </div>
        
    );
}
