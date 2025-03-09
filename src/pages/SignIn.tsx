import React from 'react';
import { Form, Input, Button, Typography, Card, Space, Divider } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SignIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: 'calc(100vh - 200px)' 
    }}>
      <Card 
        style={{ 
          width: 500, 
          boxShadow: '0px 5px 16px 1px rgba(229, 229, 229, 0.8)',
          borderRadius: '10px',
          position: 'relative',
          padding: '20px'
        }}
        bordered={false}
      >
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <Link to="/">
            <Button type="text" icon={<span>×</span>} />
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Title level={2}>Sign in to your account</Title>
        </div>
        
        <Form
          name="signin"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              placeholder="you@example.com" 
              prefix={<UserOutlined style={{ color: '#bfbfbf' }} />} 
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="••••••••••••••••••••"
              prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              style={{ 
                backgroundColor: '#5048E5',
                height: '45px',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          <Space>
            <Text type="secondary">Don't have an account?</Text>
            <Link to="/signup" style={{ color: '#5048E5' }}>Sign up</Link>
          </Space>
          
          <Link to="/forgot-password" style={{ color: '#5048E5' }}>
            Forgot password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignIn; 