import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.png";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm Shubham! I'm an Experienced <span>Full Stack Web Developer </span>
        with <span>2.5 years of dedicated expertise </span> in crafting dynamic
        digital experiences. My focus is on creating robust web applications
        with a keen eye for user-centric design and seamless functionality.
        <br />
        <br />
        I thrive on the challenges of bringing ideas to life, whether it's
        designing intuitive user interfaces or architecting scalable backend
        systems. My passion lies in leveraging the latest tools and
        methodologies to deliver exceptional digital solutions that exceed
        expectations.
        <br />
        <br />
        One of my core values is a commitment to{" "}
        <span>continuous learning and growth</span>. I'm always eager to explore
        new technologies and methodologies, ensuring that I stay at the
        forefront of the ever-evolving web development landscape. This
        dedication to learning enables me to adapt to new challenges and deliver
        innovative solutions.
        <br />
        <br />
        With a relentless pursuit of excellence and a drive for innovation, I'm
        excited to leverage my skills and experience to create impactful digital
        experiences that resonate with users.
      </div>
      <div className="profile-photo">
        {/* <div className="heading"> About Me</div> */}
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      {/* <div className="name">Shubham</div> */}
    </div>
  );
}
