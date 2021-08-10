import React from 'react';
import moment from 'moment';
import { ContestItem } from 'models';
import iconNew from 'assets/new-icon.png';
import './style.scss';
import { Link } from 'react-router-dom';

export function UpcomingContestItem ({data}: {data: ContestItem}) {
    return (
        <Link className='contest-item' to={`/detail/${data._id}`}>
            <div className='prefix'>
                <img src='https://image.flaticon.com/icons/png/512/42/42405.png' alt='contest-item-img'/>
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
        </Link>
    );
}