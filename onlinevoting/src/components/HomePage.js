import React, { useEffect, useState } from "react";
import Button from "./Button";
import Header from "./Header";
import ImgSlider from "./ImgSlider";

function HomePage(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <Header />
      <ImgSlider />
      <Button />
      <p>{!data ? "Loading..." : data}</p>
      <div className="footer">
        <div className="logo_footer">
          <span>LOGO</span>
        </div>
        <div className="content_footer">
          <div className="content">
            <span>Terms of use</span>
          </div>
          <div className="content">
            <span>Legal Notice</span>
          </div>
          <div className="content">
            <span>Privacy Issue</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
