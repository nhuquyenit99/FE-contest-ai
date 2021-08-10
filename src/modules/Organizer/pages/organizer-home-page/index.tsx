import React from 'react';
import { Redirect } from 'react-router';
import { readCookie } from 'utils/cookie';
import { OrganizerPageWrapper, ListContest } from 'modules/Organizer/components';

export function OrganizerHomePage () {
    const token = readCookie('access_token') ?? false;

    if (!token) {
        return <Redirect to='/login/organizer'/>;
    }
    return (
        <OrganizerPageWrapper title='ORGANIZER PAGE'>
            <ListContest />
        </OrganizerPageWrapper>        
    );
}
