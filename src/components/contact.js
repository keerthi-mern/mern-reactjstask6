import React from "react";

function Contact() {
  const divStyle = {
    backgroundImage: `url("https://wallpapers.com/images/hd/aesthetic-tom-and-jerry-nftfqxaqhyqshvg4.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const socialMediaStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const iconStyle = {
    width: "70px", // Adjust the size of the social media icons as needed
    height: "auto",
    margin: "10px", // Adjust the margin between icons as needed
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={{fontSize: "80px",color:"brown"}}>Contact Me</h1>
        <div style={socialMediaStyle}>
          <a href="https://www.instagram.com/keerthi__chandra__12/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6GwM3phZ5uPWKijlHVND3v0nkpOkp_vXtw&usqp=CAU"
              alt="Instagram"
              style={iconStyle}
            />
          </a>
         
          <a href="https://www.linkedin.com/in/keerthi-upputuri-b84839291/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png" 
              alt="LinkedIn"
              style={iconStyle}
            />
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default Contact;