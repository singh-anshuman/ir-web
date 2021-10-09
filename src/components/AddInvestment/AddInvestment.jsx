import React from 'react';
import {Modal, Button, Form, Input, Checkbox} from 'antd';

export default class AddInvestment extends React.Component {
    
    constructor(props) {
        super(props);
        this.addInvestment = this.addInvestment.bind(this);
    }

    addInvestment() {
        this.props.closeDialog();
        //  Code for adding investment to be added here
    }

    onFinish() {

    }

    onFinishFailed() {

    }
    
    render() {
        return (
            <Modal title="Add Investment" 
                    visible={this.props.isVisible} 
                    onOk={this.addInvestment} 
                    onCancel={this.props.closeDialog}
                    footer={[
                        <Button key="back" onClick={this.props.closeDialog}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.addInvestment}>
                            Add Investment
                        </Button>
                      ]}>
                <Form name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
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

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}