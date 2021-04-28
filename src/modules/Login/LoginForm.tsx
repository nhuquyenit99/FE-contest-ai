import { Form, Input, Button, Checkbox, notification } from 'antd';
import { Redirect } from 'react-router';
import { fetchLogin } from 'services/user';
import { useHistory } from 'react-router-dom';
import { createCookie, readCookie } from 'utils/cookie';
import { createSuper } from 'typescript';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm(props) {
    const history = useHistory();
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
                createCookie('access_token', resp.data.access_token);
                createCookie('refresh_token', resp.data.refresh_token);
                createCookie('user', resp.data.user);
                history.push('/');
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