import { Form, Input, Button, Checkbox, notification } from 'antd';
import { fetchLogin } from 'services/user';
import { useHistory, useParams } from 'react-router-dom';
import { createCookie } from 'utils/cookie';
import { fetchGetInfo } from 'services/auth';
import { useContext } from 'react';
import { UserContext } from '../../context/index';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm(props) {
    const {type} = useParams<any>();
    const history = useHistory();
    const userContext = useContext(UserContext);
    console.log('userContext', userContext);

    const onFinish = async (values: any) => {
        try {
            const {username, password} = values;
            const resp = await fetchLogin(username, password);
            notification.success({
                message: 'Login successfully',
                style: {
                    width: 600,
                },
            });
            createCookie('access_token', resp.access_token);
            createCookie('refresh_token', resp.refresh_token);
            const userInfo = await fetchGetInfo();
            const user = {
                _id: userInfo._id,
                username: userInfo.username,
                displayName: userInfo.first_name + ' ' + userInfo.last_name,
                isAuthenticated: true
            };
            userContext.updateUser(user, () => {
                history.push(`/${type}`);
                console.log('userContext', userContext);
            });
        } catch (e) {
            console.error('Login failed: ', e);
            notification.error({
                message: 'Login failed',
                style: {
                    width: 600,
                },
            });
        }
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};