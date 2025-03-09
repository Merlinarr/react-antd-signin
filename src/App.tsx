import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5048E5',
          borderRadius: 4,
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            } 
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
