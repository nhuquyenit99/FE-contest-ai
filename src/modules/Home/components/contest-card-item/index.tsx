import React from 'react';
import moment from 'moment';
import { ContestItem } from 'models';
import './style.scss';

export function ContestCardItem ({data}: {data: ContestItem}) {
    return (
        <a className='contest-card-item' href={`/detail/${data._id}`}>
            <div className='prefix'>
                <img src='https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg' alt='contest-card-img'/>
            </div>
            <div className='context'>
                <div className='title'>
                    {data.title}
                </div>
                <div className='time'>
                    {`${moment(data.time_start).format('DD/MM/YYYY')} - ${moment(data.time_end).format('DD/MM/YYYY')}`}
                </div>
                <div className='languages'>
                    {data.language.join(', ')}
                </div>
            </div>
        </a>
    );
}