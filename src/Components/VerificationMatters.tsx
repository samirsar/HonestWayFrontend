import { Layout,Typography, Card } from 'antd';
import "antd/dist/reset.css";

const {Content } = Layout;
const { Title, Text } = Typography;

export const VerificationMatters = () => {
  const items = [
    {
      icon: "..//verification_matter_image_1.png", 
      title: 'Widespread Contamination',
      description: 'Research indicates that nearly 50% of packaged food products in India contain detectable levels of heavy metals and harmful chemicals.',
    },
    {
      icon: "..//verification_matter_image_2.png", 
      title: 'Serious Health Risks',
      description: 'These contaminants have been linked to major health issues such as cancer, diabetes, and other chronic conditions.',
    },
    {
      icon: "..//verification_matter_image_3.png", 
      title: 'Your Right to Know',
      description: 'With so many products on the market, you deserve clear, transparent information about what you’re eating.',
    },
  ];

  return (
    <Content style={{ padding: '50px 0px', textAlign: 'center', background: '#fff', borderRadius: '10px' }}>
      <Title level={2} style={{ color: '#0066CC' }}>Why Verification Matters</Title>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {items.map((item, index) => (
          <Card hoverable key={index} style={{ width: 400, textAlign: 'left', padding: '20px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
              <Title level={4} style={{ margin: 0 }}>{item.title}</Title>
            </div>
            <Text>{item.description}</Text>
          </Card>
        ))}
      </div>
    </Content>
  );
};
