import "./FooterStyle.scss";
import { Button, Input, Select, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="footerMainContainer">
        <div className="logoFooterContainer">
          <div className="logoFooter">BA</div>
        </div>
        <div style={{ width: "30%" }}>
          <div className="aboutMeStyle">About Me</div>
          <div className="aboutMePara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <div className="aboutMeStyle">Contact Us</div>
          <div className="emailBorderFooterStyle">
            <div
              style={{
                width: "100%",
                paddingTop: "7px",
                display: "flex",
              }}
            >
              <Input
                style={{ backgroundColor: "none", border: "none" }}
                className="emailFooterContainerStyle"
                placeholder="Email"
              />
              <Button className="footerSubscribeButtonStyle">
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
