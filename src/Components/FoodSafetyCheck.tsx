import { Card, Row, Col, Steps } from "antd";
import Title from "antd/es/typography/Title";
import { useContext } from "react";
import MobileContext from "./ContextApiComponet";

const foodSafetyChecks = [
  {
    title: "Purity Check",
    description: "Ensures the product is free from any adulteration or dilution.",
    icon: "/food_safety_image_1.png",
  },
  {
    title: "Nutritional Analysis",
    description: "Verifying levels of sugar, unhealthy fats, and ingredients like palm oil.",
    icon: "/food_safety_image_2.png",
  },
  {
    title: "Safety Check",
    description: "Tests for heavy metals, pesticides, and banned chemicals.",
    icon: "/food_safety_image_3.png",
  },
  {
    title: "Microbial Testing",
    description: "Checks for bacterial and fungal contamination.",
    icon: "/food_safety_image_4.png",
  },
];

const FoodSafetyCheck = () => {
  const { isMobile }:any = useContext(MobileContext);
 
  return <>{isMobile?(<div style={{ width: "100%", padding: "40px 20px", background: "#fff", textAlign: "center" }}>
    {/* Section Title */}
    <Title level={2} style={{ color: "#1677ff" }}>
      How We Ensure Your Food is Safe
    </Title>

    {/* Cards Section */}
    <Row gutter={[16, 16]} justify="center">
      <Col span={10}>
      <Row>

      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center",width:'30rem' }}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[0].icon}
                alt={foodSafetyChecks[0].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[0].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[0].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      <Row style={{height:'10rem'}}>

      </Row>
      <Row>

      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" ,width:'30rem'}}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[2].icon}
                alt={foodSafetyChecks[2].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[2].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[2].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      </Col>
      <Col span={2}>
      <Steps direction="vertical" current={-1} // No highlighted step
        items={foodSafetyChecks.map(() => ({
          description:<div style={{height:'10rem'}}></div>
        }))}
      />

      </Col>
      <Col span={10}>
      <Row style={{height:'10rem'}}></Row>
      <Row>
        
      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center",width:'30rem' }}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[1].icon}
                alt={foodSafetyChecks[1].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[1].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[1].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      <Row style={{height:'10rem'}}></Row>
      <Row >
        
      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" ,width:'30rem'}}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[3].icon}
                alt={foodSafetyChecks[3].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[3].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[3].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      </Col>
    </Row>
  </div>):(<div style={{ width: "100%", padding: "40px 20px", background: "#fff", textAlign: "center" }}>
    {/* Section Title */}
    <Title level={2} style={{ color: "#1677ff" }}>
      How We Ensure Your Food is Safe
    </Title>

    {/* Cards Section */}
    <Row gutter={[16, 16]} justify="center">
      <Col span={10}>
      <Row>

      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center",width:'30rem' }}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[0].icon}
                alt={foodSafetyChecks[0].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[0].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[0].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      <Row style={{height:'10rem'}}>

      </Row>
      <Row>

      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" ,width:'30rem'}}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[2].icon}
                alt={foodSafetyChecks[2].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[2].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[2].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      </Col>
      <Col span={2}>
      <Steps direction="vertical" current={-1} // No highlighted step
        items={foodSafetyChecks.map(() => ({
          description:<div style={{height:'10rem'}}></div>
        }))}
      />

      </Col>
      <Col span={10}>
      <Row style={{height:'10rem'}}></Row>
      <Row>
        
      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center",width:'30rem' }}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[1].icon}
                alt={foodSafetyChecks[1].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[1].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[1].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      <Row style={{height:'10rem'}}></Row>
      <Row >
        
      <Card hoverable style={{ textAlign: "left", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" ,width:'30rem'}}>
              {/* Icon */}
              <img
                src={foodSafetyChecks[3].icon}
                alt={foodSafetyChecks[3].title}
                style={{ width: "40px", height: "40px", marginRight: "12px" }}
              />
              {/* Text Content */}
              <div>
                <Title level={4} style={{ margin: 0, color: "#1677ff" }}>
                  {foodSafetyChecks[3].title}
                </Title>
                <p style={{ color: "#555" }}>{foodSafetyChecks[3].description}</p>
              </div>
            </div>
          </Card>
      </Row>
      </Col>
    </Row>
  </div>)}</>
};

export default FoodSafetyCheck;
