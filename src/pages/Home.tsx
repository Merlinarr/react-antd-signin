import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <div>
      <Row gutter={[24, 24]} justify="center">
        <Col span={24}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Welcome to Management Chuwa
          </Title>
          <Paragraph style={{ fontSize: 18, textAlign: 'center', marginBottom: 40 }}>
            Your one-stop solution for product management
          </Paragraph>
        </Col>
        
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            style={{ height: '100%' }}
            cover={
              <div style={{ 
                height: 160, 
                background: '#111827', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'white',
                fontSize: 24
              }}>
                Product 1
              </div>
            }
          >
            <Card.Meta 
              title="Product Management" 
              description="Efficiently manage your products with our intuitive tools" 
            />
            <Button type="primary" style={{ marginTop: 16 }}>Learn More</Button>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            style={{ height: '100%' }}
            cover={
              <div style={{ 
                height: 160, 
                background: '#111827', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'white',
                fontSize: 24
              }}>
                Product 2
              </div>
            }
          >
            <Card.Meta 
              title="Inventory Tracking" 
              description="Keep track of your inventory in real-time" 
            />
            <Button type="primary" style={{ marginTop: 16 }}>Learn More</Button>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            style={{ height: '100%' }}
            cover={
              <div style={{ 
                height: 160, 
                background: '#111827', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'white',
                fontSize: 24
              }}>
                Product 3
              </div>
            }
          >
            <Card.Meta 
              title="Analytics Dashboard" 
              description="Gain insights with comprehensive analytics" 
            />
            <Button type="primary" style={{ marginTop: 16 }}>Learn More</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home; 