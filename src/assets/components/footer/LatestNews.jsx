import React from "react";
import Image from "../../images/image";

function LatestNews(props) {
  const imageList = [
    { id: 1, path: Image.bg3 },
    { id: 2, path: Image.bg2 },
  ];
  return (
    <>
      <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
        <h2 className="footer-heading">Latest News</h2>
        {imageList.map((image) => (
          <div className="block-21 mb-4 d-flex" key={image.id}>
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: `url(${image.path})` }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> Oct. 16, 2019
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestNews;
