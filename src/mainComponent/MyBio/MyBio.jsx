import "./MyBioStyle.scss";
import bioImage from "../../assets/images/computer3.jpeg";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dotImage from "../../assets/images/dot21.png";
import { Progress } from "antd";
import "animate.css";

const MyBio = () => {
  return (
    <>
      <div className="bioStyle">
        <div className="bioImageContainerStyle">
          <img src={bioImage} className="bioImageStyle" />
        </div>

        <div className="bioTextContainerStyle">
          <h2 className="myBioHeadingStyle animate__shakeY">My Bio</h2>

          <div className="myBioParaStyle animate__shakeY">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="myBioParaStyle animate__shakeY">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </div>
          <div className="downloadResumeButtonContainer">
            <Button type="primary" shape="round" className="hiredbuttonButton">
              Hire me
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              className="downloadResumeButton"
            >
              Download Resume
            </Button>
          </div>
          {/* <div className="progessHeadingStyle">HTML</div>
            <div>
              <Progress percent={30} />
            </div>
            <div className="progessHeadingStyle">HTML</div>
            <div>
              <Progress percent={30} />
            </div>
            <div className="progessHeadingStyle">HTML</div>
            <div>
              <Progress percent={30} />
            </div>
            <div className="progessHeadingStyle">HTML</div>
            <div>
              <Progress percent={30} />
            </div> */}
        </div>
      </div>
    </>
  );
};
export default MyBio;
