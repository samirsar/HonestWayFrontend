import {  Typography, Steps } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";

const { Title, Paragraph } = Typography;

const steps = [
  {
    title: "Chaotic Market",
    description:
      "Frustrated with a market full of fake products and claims? Confused if the product is really safe and healthy?",
    image: "..//step_1_image.png", // Replace with actual image path
  },
  {
    title: "Discover",
    description:
      "Look for the Honest Way logo on the packaging and find healthy & verified products in every category.",
    image: "..//step_2_image.png", // Replace with actual image path
  },
  {
    title: "Scan",
    description:
      "Check expert rating & summary, decode ingredients, match your health preferences, and see the extensive lab report.",
    image: "..//step_3_image.png", // Replace with actual image path
  },
  {
    title: "Decide",
    description:
      "Purchase healthy products that you trust. Be confident in your purchase knowing the product is 100% safe.",
    image: "..//step_4_image.png", // Replace with actual image path
  },
];

const HealthyVerifiedOptions: FC = () => {
  return (
    <Content style={{ padding: "50px 0px", textAlign: "center", background: "#fff", borderRadius: "10px" }}>
      <Title level={2} style={{ color: "#0073e6" }}>
        How To Find Healthy & Verified Options
      </Title>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Steps direction="vertical" current={-1} // No highlighted step
          items={steps.map((step) => ({
            title: step.title,
            description: (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Paragraph style={{ flex: 1 }}>{step.description}</Paragraph>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: "100px", marginLeft: "20px", borderRadius: "8px" }}
                />
              </div>
            ),
          }))}
        />
      </div>
    </Content>
  );
};

export default HealthyVerifiedOptions;
