import React from 'react';
import { Layout, Space, Typography } from 'antd';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ 
      background: '#111827', 
      color: 'white',
      padding: '24px 64px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
      <Space size={12}>
        <YoutubeOutlined style={{ fontSize: '24px' }} />
        <TwitterOutlined style={{ fontSize: '24px' }} />
        <FacebookOutlined style={{ fontSize: '24px' }} />
      </Space>
      
      <Text style={{ color: 'white' }}>©2023 All Rights Reserved.</Text>
      
      <Space size={16}>
        <Link style={{ color: 'white' }}>Contact us</Link>
        <Link style={{ color: 'white' }}>Privacy Policies</Link>
        <Link style={{ color: 'white' }}>Help</Link>
      </Space>
    </AntFooter>
  );
};

export default Footer; 