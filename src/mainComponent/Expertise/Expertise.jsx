import { useState, useRef, useEffect } from "react";
import { BulbOutlined, ContainerOutlined } from "@ant-design/icons";
import "./ExpertiseStyle.scss";
import "animate.css";

const Expertise = () => {
  const [cardContent, setCardContent] = useState([
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BulbOutlined />,
    },
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ContainerOutlined />,
    },
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ContainerOutlined />,
    },
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ContainerOutlined />,
    },
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ContainerOutlined />,
    },
    {
      title: "Software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ContainerOutlined />,
    },
  ]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    cardRefs.current.forEach((cardRef) => {
      observer.observe(cardRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <>
        <div className="expertiseContainerStyle">
          <div>
            <div className="expertiseTitleStyle">HERE ARE SOME OF MY</div>
            <br />
            <div className="expertiseTitleStyle">Expertise</div>
          </div>
          <div className="cardContainerStyle">
            {cardContent.map((card, index) => (
              <div
                key={index}
                className="cardStyle"
                ref={(element) => (cardRefs.current[index] = element)}
              >
                <div className="iconStyle">{card.icon}</div>
                <div className="titleStyle">{card.title}</div>
                <div className="descriptionStyle">{card.description}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Expertise;
