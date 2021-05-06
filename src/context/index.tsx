import React from 'react';
import { DataAccess } from '../access';
import { useContext } from 'react';
import { eraseCookie, readCookie } from 'utils/cookie';

type UserContextType = {
    _id: number
    displayName: string,
    username: string,
    isAuthenticated: boolean,
    logout: () => void
    getIsAuthenticated: () => boolean,
    updateUser: (newInfo: UserInfo) => void
    updateAvatar: (imageURL: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    _id: 0,
    displayName: '',
    username: '',
    isAuthenticated: false,
    logout: () => undefined,
    getIsAuthenticated: () => false,
    updateUser: (newInfo: UserInfo) => undefined,
    updateAvatar: (imageURL: string) => undefined
});

type StateType = {
    _id: number
    displayName: string
    username: string,
    isAuthenticated: boolean
}

type UserInfo = {
    _id: number
    displayName: string
    username: string,
    isAuthenticated: boolean
}
export class UserContextProvider extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            _id: 0,
            displayName: '',
            username: '',
            isAuthenticated: false
        };
    }
    getIsAuthenticated = () => {
        console.log(readCookie('access_token') !== '');
        console.log(this.state);
        let isAuthenticated = (readCookie('access_token') !== ''
            && this.state.username !== '');
        
        if (this.state.isAuthenticated !== isAuthenticated) {
            this.setState({isAuthenticated});
        }
        return isAuthenticated;
    }
    logout = () => {
        DataAccess.Delete('logout');
        this.setState(prev => {
            return {
                ...prev,
                _id: 0,
                displayName: '',
                avatar: ''
            };
        });
        eraseCookie('access_token');
        eraseCookie('refresh_token');
    }

    updateUser = (newInfo: UserInfo, cb?: () => void) => {
        this.setState(prev => {
            return {
                ...prev,
                ...newInfo,
            };
        }, cb);
    }
    updateAvatar = (imageUrl: string) => {
        this.setState(prev => {
            return {
                ...prev,
                avatar: imageUrl,
            };
        });
    }
    render() {
        return (
            <UserContext.Provider value={{
                ...this.state,
                getIsAuthenticated: this.getIsAuthenticated,
                updateUser: this.updateUser,
                logout: this.logout,
                updateAvatar: this.updateAvatar
            }}>
                {this.props.children}
            </UserContext.Provider >
        );
    }
}
