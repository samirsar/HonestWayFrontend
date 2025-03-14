import { Card, Row, Col } from "antd";
import Title from "antd/es/typography/Title";

const standards = [
  {
    title: "Product Sourcing",
    description: "We randomly select packaged food products from the open market to ensure unbiased and comprehensive testing.",
    icon: "/standard_high_image_1.png",
  },
  {
    title: "Laboratory Testing",
    description: "Each product undergoes our 4-stage verification process in a NABL accredited laboratory.",
    icon: "/standard_high_image_2.png",
  },
  {
    title: "Result Verification",
    description: "Our experts review and verify the lab results, compiling detailed reports for every product.",
    icon: "/standard_high_image_3.png",
  },
];

const StandardsHigh = () => {
  return (
    <div style={{ width: "100%", padding: "40px 20px", background: "#fff", textAlign: "center" }}>
      {/* Section Title */}
      <Title level={2} style={{ color: "#1677ff" }}>
        How We Keep Standards High
      </Title>

      <Row>
        <Col span={12}>
        
        <div style={{ textAlign: "center", margin: "28px 0" }}>
        <img src="/standard_hight_image.png" alt="Continuous Monitoring" style={{ width: "300px"}} />
        <Title level={4} style={{ color: "#1677ff" }}>Continuous Monitoring</Title>
      </div>
        </Col>
        <Col span={12}>
        <Row style={{marginTop:'1rem'}}>

        <Card hoverable style={{ textAlign: "left", borderRadius: "10px", minHeight: "100px",width:'500px' }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Icon */}
                <img
                  src={standards[0].icon}
                  alt={standards[0].title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
                {/* Text Content */}
                <div>
                  <Title level={4} style={{ margin: 0, color: "#1677ff" }}>{standards[0].title}</Title>
                  <p style={{ color: "#555" }}>{standards[0].description}</p>
                </div>
              </div>
            </Card>
        </Row>
        <Row style={{marginTop:'1rem'}}>

        <Card hoverable style={{ textAlign: "left", borderRadius: "10px", minHeight: "100px",width:'500px' }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Icon */}
                <img
                  src={standards[1].icon}
                  alt={standards[1].title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
                {/* Text Content */}
                <div>
                  <Title level={4} style={{ margin: 0, color: "#1677ff" }}>{standards[1].title}</Title>
                  <p style={{ color: "#555" }}>{standards[1].description}</p>
                </div>
              </div>
            </Card>
        </Row>
        <Row style={{marginTop:'1rem'}}>

        <Card hoverable style={{ textAlign: "left", borderRadius: "10px", minHeight: "100px",width:'500px' }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Icon */}
                <img
                  src={standards[2].icon}
                  alt={standards[2].title}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
                {/* Text Content */}
                <div>
                  <Title level={4} style={{ margin: 0, color: "#1677ff" }}>{standards[2].title}</Title>
                  <p style={{ color: "#555" }}>{standards[2].description}</p>
                </div>
              </div>
            </Card>
        </Row>
        

        </Col>
      </Row>

    </div>
  );
};

export default StandardsHigh;
