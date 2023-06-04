import "./MyProjectsStyle.scss";
import { Carousel, Row, Col, Card, Button, Typography } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

const MyProjects = () => {
  const carouselRef = useRef();
  const { Title, Paragraph } = Typography;
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 600);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselData = [
    {
      id: 1,
      heading: "Heading 1",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    {
      id: 2,
      heading: "Heading 2",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    {
      id: 3,
      heading: "Heading 3",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    {
      id: 4,
      heading: "Heading 4",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    {
      id: 5,
      heading: "Heading 5",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    {
      id: 6,
      heading: "Heading 6",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at. Ipsum
    suspendisse integer proin nunc.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aiadipiscing in at orci semper. Urna, urna, elit ac at."`,
    },
    // add more or less as you need
  ];
  const chunkedCarouselData = [];
  const chunkSize = isDesktop ? 3 : 1;
  for (let i = 0; i < carouselData.length; i += chunkSize) {
    chunkedCarouselData.push(carouselData.slice(i, i + chunkSize));
  }

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };
  return (
    <>
      <div style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
        <div className="expertiseTitleStyle" style={{ paddingBottom: "3%" }}>
          My Projects
        </div>
        <Carousel ref={carouselRef}>
          {chunkedCarouselData.map((chunk, index) => (
            <div key={index}>
              <Row gutter={16}>
                {chunk.map((item) => (
                  <Col span={8} key={item.id}>
                    <div className="companyDivStyle">
                      <div className="companyContainerStyle">
                        {/* <div>
                        <img src={companyLogo} />
                      </div> */}
                        <div className="companyNameStyle">Company</div>
                      </div>
                      <div className="AiParaStyle">{item.text}</div>
                      <div className="companyPortfolioStyle">
                        <div style={{ marginRight: "3%" }}></div>
                        <div>
                          <div className="companyPortfolioNameStyle">
                            Alicia Cia
                          </div>
                          <div className="AiParaStyle">
                            Head of Marketing at Google
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
        <div className="carasoleButtonStyle">
          <Button
            onClick={handlePrev}
            icon={
              <LeftCircleOutlined
                style={{ color: "#0059E7", fontSize: "20px" }}
              />
            }
            style={{ border: "none" }}
          />
          <Button
            onClick={handleNext}
            icon={
              <RightCircleOutlined
                style={{ color: "#0059E7", fontSize: "20px" }}
              />
            }
            style={{ border: "none" }}
          />
        </div>
      </div>
    </>
  );
};
export default MyProjects;
