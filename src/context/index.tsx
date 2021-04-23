import React from 'react';
import { DataAccess } from '../access';
import { CategoryType, UserType } from '../models';

type UserContextType = {
    _id: string
    displayName: string,
    avatar: string,
    followUsers: UserType[],
    followCategories: CategoryType[],
    logout: () => void
    updateUser: (newInfo: UserInfo) => void
    updateAvatar: (imageURL: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    _id: '',
    displayName: '',
    avatar: '',
    followUsers: [],
    followCategories: [],
    logout: () => undefined,
    updateUser: (newInfo: UserInfo) => undefined,
    updateAvatar: (imageURL: string) => undefined
});

type StateType = {
    _id: string
    displayName: string
    avatar: string
    followUsers: UserType[],
    followCategories: CategoryType[],
}

type UserInfo = {
    _id: string
    displayName: string
    avatar: string
}
export class UserContextProvider extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            _id: '',
            displayName: '',
            avatar: '',
            followUsers: [],
            followCategories: [],
        };
    }

    logout = () => {
        DataAccess.Delete('logout');
        this.setState(prev => {
            return {
                ...prev,
                _id: '',
                displayName: '',
                avatar: ''
            };
        });
        localStorage.removeItem('token');
    }

    updateUser = (newInfo: UserInfo, cb?: () => void) => {
        this.setState(prev => {
            return {
                ...prev,
                ...newInfo,
            };
        }, () => {
        });
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
