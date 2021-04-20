import CustomModal from 'components/core/CustomModal';
import { Card, Form, Input, notification, DatePicker, Row, Col, Checkbox } from 'antd';
import { fetchAddLanguage } from 'services/language';
const { RangePicker } = DatePicker;
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
export default function AddContestComponent(props) {
    const [form] = Form.useForm();
    const handleOk = () => {
        form.validateFields()
            .then(values => {
                fetchAddLanguage(values)
                    .then(resp => {
                        notification.success({
                            message: 'Added language successfully',
                            style: {
                                width: 600,
                            },
                        });
                    })
                    .catch(err => console.log(err));
                form.resetFields();
            })
            .catch(err => { });
    };

    const handleCancel = () => {
    };
    const rangeConfig = {
        rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
    };
    const childAddContestComponent = (
        <Form
            form={form}
            {...formItemLayout}
            onFinish={handleOk}>
            <Form.Item
                label='Title'
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your title!',
                    },
                ]
                }>
                <Input size="large" placeholder='Title' />
            </Form.Item>
            <Form.Item name="checkbox-group" label="Language">
                <Checkbox.Group style={{width: '100%'}}>
                    <Row>
                        <Col span={4}>
                            <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                Python
                            </Checkbox>
                        </Col>
                        <Col span={4}>
                            <Checkbox value="B" style={{ lineHeight: '32px' }}>
                                C
                            </Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item
                name="time_contest"
                label="Time contest" {...rangeConfig}>
                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item
                label='Number of Problems'
                name="nProblems"
                rules={[
                    {
                        required: true,
                        message: 'Please input number of problems!',
                    },
                ]
                }>
                <Input size="large" placeholder='Number of problems' />
            </Form.Item>
        </Form>
    );

    const addContestProps = {
        title: 'Add contest',
        handleOk,
        handleCancel,
    };
    return (
        <Card {...addContestProps}>
            {childAddContestComponent}
        </Card>
    );
}