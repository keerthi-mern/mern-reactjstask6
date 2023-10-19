
import React from "react";

function About() {
  const divStyle = {
    backgroundImage: `url("https://wallpapers.com/images/hd/aesthetic-tom-and-jerry-nftfqxaqhyqshvg4.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    color: "black",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const pStyle = {
    paddingLeft: "20px", // Adjust as needed
    fontSize: "40px",
    paddingRight: "400px"
  };
  const hStyle = {
    paddingLeft: "20px", // Adjust as needed
    fontSize: "60px",
    paddingRight: "400px",
    color:"brown"
  };
  

  return (
    <div style={divStyle}>
      <div>
        <h1 style={hStyle}> About me</h1>
      <p style={pStyle}>
      As a dynamic and highly driven B.Tech Computer Science student, I am deeply passionate about tackling intricate challenges through inventive technological solutions. I am eager to apply my software development skills to make a meaningful impact on pioneering projects within the technology industry.
        </p>
        
      </div>
    </div>
  );
}

export default About;






