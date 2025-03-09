import React from 'react';
import { Layout, Input, Button, Space } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Search } = Input;

const Header: React.FC = () => {
  return (
    <AntHeader style={{ 
      background: '#111827', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '8px 64px',
      color: 'white'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
        <div style={{ fontSize: '28px', fontWeight: 'bold' }}>
          Management Chuwa
        </div>
        <Input 
          placeholder="Search" 
          prefix={<SearchOutlined style={{ color: '#979797' }} />}
          style={{ width: '300px', borderRadius: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '38px' }}>
        <Space align="center">
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          <span>$0.00</span>
        </Space>
        <Link to="/signin">
          <Space align="center">
            <UserOutlined style={{ fontSize: '20px' }} />
            <span>Sign In</span>
          </Space>
        </Link>
      </div>
    </AntHeader>
  );
};

export default Header; 