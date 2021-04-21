import { Form, Input, Button, Checkbox, notification } from 'antd';
import { fetchLogin } from 'services/user';
import { createCookie } from 'utils/cookie';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm() {
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
            })
            .catch(err => {
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