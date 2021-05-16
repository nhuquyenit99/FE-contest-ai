import { useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    notification,
} from 'antd';
import { fetchRegister } from 'services/user';

const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function RegistrationForm() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const {username, password} = values;
        fetchRegister(username, password)
            .then(resp => {
                notification.success({
                    message: 'Register successfully',
                    style: {
                        width: 600,
                    },
                });
            })
            .catch(err => {
                const {data} = err.response;
                notification.error({
                    message: data.error_message,
                    style: {
                        width: 600,
                    },
                });
            });

    };

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);


    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
        
            {/* <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item> */}
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="first_name"
                label="First name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="last_name"
                label="Last name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="residence"
                label="Habitual Residence"
                rules={[
                    { type: 'array', required: true, message: 'Please select your habitual residence!' },
                ]}
            >
                <Cascader options={residences} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="website"
                label="Website"
                rules={[{ required: true, message: 'Please input website!' }]}
            >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                    <Input />
                </AutoComplete>
            </Form.Item>

            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Get captcha</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
