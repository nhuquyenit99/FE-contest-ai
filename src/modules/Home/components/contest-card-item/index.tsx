import React from 'react';
import moment from 'moment';
import { ContestItem } from 'models';
import './style.scss';

export function ContestCardItem ({data}: {data: ContestItem}) {
    return (
        <a className='contest-card-item' href={`/detail/${data._id}`}>
            <div className='prefix'>
                <img src='https://image.flaticon.com/icons/png/512/42/42405.png' alt='contest-card-img'/>
            </div>
            <div className='context'>
                <div className='title'>
                    {data.title}
                </div>
                <div className='description'>
                    {data.description.length <= 100 ? data.description : `${data.description.slice(0, 100)}...`}
                </div>
                <div className='time'>
                    {`${moment(data.time_start).format('DD/MM/YYYY')} - ${moment(data.time_end).format('DD/MM/YYYY')}`}
                </div>
            </div>
        </a>
    );
}