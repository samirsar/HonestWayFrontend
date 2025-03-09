import { Card, Button, Typography } from "antd";

const { Title, Text } = Typography;

const ComingSoon = () => {
  return (
    <Card
      style={{
        textAlign: "center",
        padding: "40px 20px",
        borderRadius: "10px",
        width: "100%",
        background: "#fff",
      }}
    >
      {/* Image Section */}
      <img
        src="../../public/coming_soon_image.png" // Update with the actual image path
        alt="Coming Soon"
        style={{ width: "250px", marginBottom: "20px" }}
      />

      {/* Coming Soon Heading */}
      <Title level={2} style={{ color: "#1677ff" }}>Coming Soon</Title>

      {/* Subtitle */}
      <Title level={3} style={{ fontWeight: "bold" }}>
        <span style={{ color: "green" }}>Healthy Only </span>
        <span style={{ color: "black" }}>Marketplace</span>
      </Title>

      {/* Description */}
      <Text style={{ fontSize: "16px", color: "#555" }}>
        Your one-stop shop for 100% verified, nutritious, and trustworthy food products.
      </Text>

      {/* CTA Button */}
      <div style={{ marginTop: "20px" }}>
        <Button type="primary" size="large" style={{ borderRadius: "8px" }}>
          Know More
        </Button>
      </div>
    </Card>
  );
};

export default ComingSoon;
