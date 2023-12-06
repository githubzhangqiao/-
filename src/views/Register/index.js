import { Form, Input, Button, Row, Col } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import "./Register.less"
const onFinish = (values) => {
    setTimeout(() => {
        console.log("Received values of Register form: ", values);
    }, 2000);
}

const Register = () => {
    return (
        <div className="auth">
            <h1>注册</h1>
            <Form className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="user-name" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input type="text" placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item name="user-password" rules={[{ required: true, message: '请设置密码!' }]}>
                    <Input type="password" placeholder="请输入密码" />
                </Form.Item>
                <Form.Item name="user-repassword" rules={[{ required: true, message: '请设置密码!' }]}>
                    <Input type="password" placeholder="确认密码" />
                </Form.Item>
                <Form.Item>
                    <Button className="sub-button" type="primary" htmlType="submit">注册</Button>
                </Form.Item>
                <span>
                    <p className="tips">Do you have an account?</p>
                    <Link to="/">  Log in</Link>
                    <p className="error">Error!</p>
                </span>
            </Form >
        </div>
    );
}
export default Register;