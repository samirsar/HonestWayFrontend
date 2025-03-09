import { Card, Row, Col } from "antd";
import Title from "antd/es/typography/Title";

const foodSafetyChecks = [
  {
    title: "Purity Check",
    description: "Ensures the product is free from any adulteration or dilution.",
    icon: "../../public/food_safety_image_1.png",
  },
  {
    title: "Nutritional Analysis",
    description: "Verifying levels of sugar, unhealthy fats, and ingredients like palm oil.",
    icon: "../../public/food_safety_image_2.png",
  },
  {
    title: "Safety Check",
    description: "Tests for heavy metals, pesticides, and banned chemicals.",
    icon: "../../public/food_safety_image_3.png",
  },
  {
    title: "Microbial Testing",
    description: "Checks for bacterial and fungal contamination.",
    icon: "../../public/food_safety_image_4.png",
  },
];

const FoodSafetyCheck = () => {
  return (
    <div style={{ width: "100%", padding: "40px 20px", background: "#fff", textAlign: "center" }}>
      {/* Section Title */}
      <Title level={2} style={{ color: "#1677ff" }}>
        How We Ensure Your Food is Safe
      </Title>

      {/* Cards Section */}
      <Row gutter={[16, 16]} justify="center">
        {foodSafetyChecks.map((check, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Icon */}
                <img
                  src={check.icon}
                  alt={check.title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
                {/* Text Content */}
                <div>
                  <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                    {check.title}
                  </Title>
                  <p style={{ color: "#555" }}>{check.description}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodSafetyCheck;
