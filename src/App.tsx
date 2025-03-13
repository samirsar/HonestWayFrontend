import { Button, Layout, Menu, Typography } from 'antd';
import "antd/dist/reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { VerificationMatters } from './Components/VerificationMatters';
import HealthyVerifiedOptions from './Components/HealthyVerifiedOptions';
import FoodSafetyCheck from './Components/FoodSafetyCheck';
import StandardsHigh from './Components/StandardHight';
import ComingSoon from './Components/ComingSoon';
import AppFooter from './Components/AppFooter';
import { ContextApiComponent } from './Components/ContextApiComponet';
const { Title, Text } = Typography;

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Content style={{ textAlign: 'center', padding: '50px' }}>
     <div style={{ width: '100%', background: 'rgba(0, 0, 0, 0.5)', padding: '40px', borderRadius: '10px', display: 'inline-block', backgroundImage: 'url(/honest_way_main_image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Title level={1} style={{ color: '#fff' }}>Your Trusted Partner in Healthy Food Choices</Title>
          <Text style={{ color: '#fff', fontSize: '18px' }}>
            Curating food products that pass our rigorous 4-stage lab test to empower you in making informed, healthy choices.
          </Text>
          <br /><br />
          <Button type="primary" size="large">Browse Verified Choices</Button>
        </div>
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <VerificationMatters />
    </div>
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <HealthyVerifiedOptions />
    </div>
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <FoodSafetyCheck />
    </div>
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <StandardsHigh />
    </div>
    <div style={{ width: '100%', marginTop: '2rem' }}>
      <ComingSoon />
    </div>
  </Content>
);

const App = () => {
  return (
    <ContextApiComponent>

    <Router>
      <Layout>
        {/* Navbar */}
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/honest_way_logo.png" alt="HonestWay Logo" style={{ height: '40px', marginRight: '10px' }} />
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, justifyContent: 'center' }}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/verified-products">Verified Products</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/coming-soon">Coming Soon</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/for-brands">For Brands</Link></Menu.Item>
          </Menu>
          <Button type="primary">Get Started</Button>
        </Header>

        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verified-products" element={<ComingSoon />} />
          <Route path="/for-brands" element={<ComingSoon />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>

        {/* Footer */}
        <Footer style={{ width: "100%", padding: "0", background: "#fff" }}>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
    </ContextApiComponent>
  );
};

export default App;
