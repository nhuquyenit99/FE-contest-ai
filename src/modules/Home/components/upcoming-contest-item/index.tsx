import React from 'react';
import moment from 'moment';
import { ContestItem } from 'models';
import iconNew from 'assets/new-icon.png';
import './style.scss';

export function UpcomingContestItem ({data}: {data: ContestItem}) {
    return (
        <div className='contest-item'>
            <div className='prefix'>
                <img src='https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg' alt='contest-item-img'/>
            </div>
            <div className='context'>
                <div className='title'>
                    {data.title}
                </div>
                <div className='time'>
                    {`${moment(data.time_start).format('DD/MM/YYYY')} - ${moment(data.time_end).format('DD/MM/YYYY')}`}
                </div>
            </div>
            <div className='suffix'>
                <img src={iconNew} alt='suffix'/>
            </div>
        </div>
    );
}