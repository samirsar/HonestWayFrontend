import { Layout, Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: "#0A698B",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Contact Section */}
        <div style={{ textAlign: "left" }}>
          <Text style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>
            Contact Us
          </Text>
          <br />
          <PhoneOutlined style={{ marginRight: "8px" }} />
          <Text style={{ color: "white" }}>+91 91531 65475</Text>
          <br />
          <MailOutlined style={{ marginRight: "8px" }} />
          <Text style={{ color: "white" }}>contact@honestway.in</Text>
        </div>

        {/* Social Media Links */}
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>
            Follow us
          </Text>
          <div style={{ marginTop: "8px" }}>
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "20px" }}>
            <img
                  src={'../../public/YouTube.png'}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
            </a>
            
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "20px" }}>
            <img
                  src={'../../public/Instagram Circle.png'}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
            </a>
            
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "20px" }}>
            <img
                  src={'../../public/LinkedIn Circled.png'}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
            </a>
            
            <a href="#" style={{ color: "white", margin: "0 10px", fontSize: "20px" }}>
            <img
                  src={'../../public/Facebook.png'}
                  style={{ width: "40px", height: "40px", marginRight: "12px" }}
                />
            </a>
            
          </div>
        </div>
      </div>

      <hr />
      <div style={{ marginTop: "20px" }}>
        <Text style={{ color: "white" }}>
          © 2025 Honest Way Healthy Living Pvt. Ltd. All Rights Reserved
        </Text>
      </div>
    </Footer>
  );
};

export default AppFooter;
