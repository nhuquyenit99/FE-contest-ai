import React from 'react';
import { DataAccess } from '../access';
import { CategoryType, UserType } from '../models';

type UserContextType = {
    _id: number
    displayName: string,
    username: string,
    logout: () => void
    updateUser: (newInfo: UserInfo) => void
    updateAvatar: (imageURL: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    _id: 0,
    displayName: '',
    username: '',
    logout: () => undefined,
    updateUser: (newInfo: UserInfo) => undefined,
    updateAvatar: (imageURL: string) => undefined
});

type StateType = {
    _id: number
    displayName: string
    username: string
}

type UserInfo = {
    _id: number
    displayName: string
    username: string
}
export class UserContextProvider extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            _id: 0,
            displayName: 'Test Display name',
            username: '',
        };
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
        localStorage.removeItem('token');
    }

    updateUser = (newInfo: UserInfo, cb?: () => void) => {
        console.log('sdfsdf');
        console.log(newInfo);
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
                updateUser: this.updateUser,
                logout: this.logout,
                updateAvatar: this.updateAvatar
            }}>
                {this.props.children}
            </UserContext.Provider >
        );
    }
}
