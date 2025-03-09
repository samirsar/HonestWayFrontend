import { Card, Row, Col } from "antd";
import Title from "antd/es/typography/Title";

const standards = [
  {
    title: "Product Sourcing",
    description: "We randomly select packaged food products from the open market to ensure unbiased and comprehensive testing.",
    icon: "../../public/standard_high_image_1.png",
  },
  {
    title: "Laboratory Testing",
    description: "Each product undergoes our 4-stage verification process in a NABL accredited laboratory.",
    icon: "../../public/standard_high_image_2.png",
  },
  {
    title: "Result Verification",
    description: "Our experts review and verify the lab results, compiling detailed reports for every product.",
    icon: "../../public/standard_high_image_3.png",
  },
];

const StandardsHigh = () => {
  return (
    <div style={{ width: "100%", padding: "40px 20px", background: "#fff", textAlign: "center" }}>
      {/* Section Title */}
      <Title level={2} style={{ color: "#1677ff" }}>
        How We Keep Standards High
      </Title>

      {/* Continuous Monitoring Circle */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img src="../../public/standard_hight_image.png" alt="Continuous Monitoring" style={{ width: "80px" }} />
        <Title level={4} style={{ color: "#1677ff" }}>Continuous Monitoring</Title>
      </div>

      {/* Cards Section */}
      <Row gutter={[16, 16]} justify="center">
        {standards.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card hoverable style={{ textAlign: "left", borderRadius: "10px", minHeight: "200px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
                {/* Text Content */}
                <div>
                  <Title level={4} style={{ margin: 0, color: "#1677ff" }}>{item.title}</Title>
                  <p style={{ color: "#555" }}>{item.description}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StandardsHigh;
