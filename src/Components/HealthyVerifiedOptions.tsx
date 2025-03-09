import { Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";

const { Title, Paragraph } = Typography;

const steps = [
  {
    number: "1",
    title: "Chaotic Market",
    description:
      "Frustrated with market full of fake products and claims? Confused if the product is really safe and healthy?",
    image: "../../public/step_1_image.png", // Replace with actual image path
  },
  {
    number: "2",
    title: "Discover",
    description:
      "Look for Honest Way logo on the packaging and find healthy & verified products in every category.",
    image: "../../public/step_2_image.png", // Replace with actual image path
  },
  {
    number: "3",
    title: "Scan",
    description:
      "Check expert rating & summary, decode ingredients, match your health preferences, and see the extensive lab report.",
    image: "../../public/step_3_image.png", // Replace with actual image path
  },
  {
    number: "4",
    title: "Decide",
    description:
      "Purchase healthy products that you trust. Be confident in your purchase knowing the product is 100% safe.",
    image: "../../public/step_4_image.png", // Replace with actual image path
  },
];

const HealthyVerifiedOptions: FC = () => {
  return (
<Content style={{ padding: '50px 0px', textAlign: 'center', background: '#fff', borderRadius: '10px' }}>
      <Title level={2} style={{ color: "#0073e6" }}>
        How To Find Healthy & Verified Options
      </Title>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {steps.map((step) => (
          <Card
            key={step.number}
            style={{ margin: "20px 0", textAlign: "left", borderRadius: "8px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title level={1} style={{ color: "#0073e6", marginRight: "20px" }}>
                {step.number}
              </Title>
              <div>
                <Title level={4}>{step.title}</Title>
                <Paragraph>{step.description}</Paragraph>
              </div>
              <img
                src={step.image}
                alt={step.title}
                style={{ width: "100px", marginLeft: "auto", borderRadius: "8px" }}
              />
            </div>
          </Card>
        ))}
      </div>
    </Content>
  );
};

export default HealthyVerifiedOptions;
