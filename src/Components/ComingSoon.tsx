import {  Button, Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

const ComingSoon = () => {
  return (
    <div style={{ minHeight: "70vh", background: "#fff" }}>
      <Row
        justify={"center"}
        style={{
          padding: "40px 20px",
          borderRadius: "10px",
          width: "100%",
          background: "#fff",
          height: "500px",
        }}
      >
        <Col span={8} style={{ textAlign: "end" }}>
          <img
            src="..//coming_soon_image.png" // Update with the actual image path
            alt="Coming Soon"
            style={{ width: "400px", marginBottom: "20px", height: "400px" }}
          />
        </Col>
        <Col span={8} style={{height:'400px'}}>
        <div style={{marginTop:'4rem'}}>

            <Title level={2} style={{ color: "#1677ff" }}>
              Coming Soon
            </Title>

            {/* Subtitle */}
            <Title level={3} style={{ fontWeight: "bold" }}>
              <span style={{ color: "green" }}>Healthy Only </span>
              <span style={{ color: "black" }}>Marketplace</span>
            </Title>

            {/* Description */}
            <Text style={{ fontSize: "16px", color: "#555" }}>
              Your one-stop shop for 100% verified, nutritious, and trustworthy
              food products.
            </Text>

            {/* CTA Button */}
            <div style={{ marginTop: "20px" }}>
              <Button
                type="primary"
                size="large"
                style={{ borderRadius: "8px" }}
              >
                Know More
              </Button>
            </div>
        </div>
          {/* Coming Soon Heading */}
        </Col>
      </Row>
    </div>
  );
};

export default ComingSoon;
