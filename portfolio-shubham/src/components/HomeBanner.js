import React from "react";
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";
import Resume from "../assets/Shubham-Gaikwad-Resume.pdf";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Shubham Gaikwad</div>
          <div className="staticTitle">
            Full Stack Web
            {/* <div className="hrLine"></div> */}
          </div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href={Resume}
            download={"Shubham-Gaikwad-Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1dqWN-ijwhgKZgq6OCQ0pkEiEgzDf2yVL/view?usp=sharing"
              )
            }
          >
            Resume
          </a>
        </div>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="full-stack-developer" />
      </div>
    </div>
  );
}
