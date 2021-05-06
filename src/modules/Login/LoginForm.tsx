import { Form, Input, Button, Checkbox, notification } from 'antd';
import { Redirect } from 'react-router';
import { fetchLogin } from 'services/user';
import { useHistory } from 'react-router-dom';
import { createCookie, readCookie } from 'utils/cookie';
import { createSuper } from 'typescript';
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
    const history = useHistory();
    const {updateUser} = useContext(UserContext);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const {username, password} = values;
        fetchLogin(username, password)
            .then(resp => {
                notification.success({
                    message: 'Login successfully',
                    style: {
                        width: 600,
                    },
                });
                createCookie('access_token', resp.access_token);
                createCookie('refresh_token', resp.refresh_token);
                return resp.access_token;
            }).then(accessToken => {
                if (accessToken) {
                    fetchGetInfo().then(res => {
                        const { _id, username, first_name, last_name } = res;
                        const user = {
                            _id,
                            username,
                            displayName: first_name + ' ' + last_name,
                            isAuthenticated: true
                        };
                        updateUser(user);
                    }).catch(e => {
                        console.log('Error > ', e);
                    });
                    history.push('/contestant');
                }
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    message: 'Login failed',
                    style: {
                        width: 600,
                    },
                });
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const isAuthenticated = readCookie('access_token');
    if (isAuthenticated) {
        return <Redirect to='/'></Redirect>;
    }
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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