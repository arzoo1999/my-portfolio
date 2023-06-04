import { useState, useRef, useEffect } from "react";
import { BulbOutlined } from "@ant-design/icons";
import "./WorkExperienceStyle.scss";

const WorkExperience = () => {
  const [experience, setExperience] = useState([
    {
      title: "Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    },
    {
      title: "Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    },
    {
      title: "Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    },
    {
      title: "Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
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
          entry.target.classList.add("animate__animated", "animate__headShake");
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
      <div>
        <h2 className="expertiseTitleStyle experienceHeadingStyle">
          Work Experience
        </h2>
        <div>
          {experience.map((item, index) => (
            <div
              key={index}
              className="experienceCard"
              ref={(element) => (cardRefs.current[index] = element)}
            >
              <div className="iconContainerStyle">
                <BulbOutlined />
              </div>
              <div className="experienceCardStyle">
                <div className="experienceCardHeadingStyle">{item.title}</div>
                <div className="experienceDescriptionStyle">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
