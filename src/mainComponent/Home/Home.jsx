import React from "react";
import "./HomeStyle.scss";
import Navbar from "../Navbar/index";
import MyBio from "../MyBio/index";
import Expertise from "../Expertise/index";
import WorkExperience from "../WorkExperience/index";
import MyProjects from "../MyProjects/index";
import TotalProject from "../TotalProject";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <div className="homeMainStyle">
          <div className="homePageContainerStyle">
            <div>I'm Bisharat Akram</div>
            <div>A Full Stack Developer</div>
          </div>
        </div>
        <MyBio />
        <Expertise />
        <WorkExperience />
        <MyProjects />
        <TotalProject />
        <Footer />
      </div>
    </>
  );
};

export default Home;
