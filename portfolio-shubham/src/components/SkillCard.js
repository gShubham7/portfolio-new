import React from "react";
import "./SkillCardStyle.css";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiReact,
  SiPostman,
  SiPycharm,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandPython,
  TbBrandNextjs,
} from "react-icons/tb";
import { IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
            </abbr>
            <abbr title="Python">
              <TbBrandPython className="techLogo" />
            </abbr>
            <abbr title="HTML 5">
              <TbBrandHtml5 className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS">
              <SiReact className="techLogo" />
            </abbr>
            <abbr title="NextJS">
              <TbBrandNextjs className="techLogo" />
            </abbr>
            <abbr title="CSS 3">
              <TbBrandCss3 className="techLogo" />
            </abbr>
            <abbr title="NodeJS">
              <SiNodedotjs className="techLogo" />
            </abbr>
            <abbr title="ExpressJS">
              <SiExpress className="techLogo" />
            </abbr>
            <abbr title="MongoDB">
              <SiMongodb className="techLogo" />
            </abbr>
            <abbr title="Git/Github">
              <DiGit className="techLogo" />
            </abbr>
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
            </abbr>
            <abbr title="Postman">
              <SiPostman className="techLogo" />
            </abbr>
            <abbr title="PyCharm">
              <SiPycharm className="techLogo" />
            </abbr>
          </div>
        </div>
      </div>
    </>
  );
}
