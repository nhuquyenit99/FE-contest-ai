import { Card} from 'antd';
import {useState} from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegisterForm';
const tabList = [
    {
        key: 'login',
        tab: 'Login',
    },
    {
        key: 'register',
        tab: 'Register',
    },
];

const contentList = {
    login: <LoginForm></LoginForm>,
    register: <RegistrationForm></RegistrationForm>,
};
export default function LoginPage() {
    const [key, setKey] = useState('login');
    const onTabChange = (key) => {
        setKey(key);
    };
    return <>
        <Card style={{margin: 'auto',  width: '800px' }}
            tabList={tabList}
            activeTabKey={key}
            onTabChange={key => {
                onTabChange(key);
            }}>
            {contentList[key]}
        </Card>
    </>;
}