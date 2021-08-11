import React from 'react';
import gif from '../../assets/cool-loading-animated-gif-1.gif';
import { Spin } from 'antd';
import './style.scss';

export function Loading() {
    return (
        <div className='loading'>
            <h2>Welcome to AI Contest!</h2>
            <div className='gif'>
                <img src={gif} alt="Loading..." />
            </div>
            <p>Please wait for a minute...</p>
        </div>
    );
}
type LoadingType = {
    size?: 'large' | 'default' | 'small',
    className?: string,
}
export function LoadingFullView({ size = 'default', className }: LoadingType) {
    return (
        <Spin size={size} className={`loading-fullview ${className ?? ''}`} />
    );
}