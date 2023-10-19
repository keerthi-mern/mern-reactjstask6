
import React from "react";

function Home() {
  const divStyle = {
    backgroundImage: `url("https://wallpapers.com/images/hd/aesthetic-tom-and-jerry-nftfqxaqhyqshvg4.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "550px",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    color: "brown",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    
  };

  const headingStyle = {
    paddingLeft: "100px", // Adjust as needed
    fontSize: "70px",
    textalign: "left",
    fontstyle: "Source Serif"
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={headingStyle}>Hello!</h1>
        <h1 style={headingStyle}>Upputuri Keerthi</h1>
        <h1 style={headingStyle}> I am Fullstack Web developer</h1>
        
      </div>
    </div>
  );
}

export default Home;


