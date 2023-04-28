import React from "react";
import Image from "../../images/image";

function InstaPart(props) {
  const imageList = [
    { id: 1, path: Image.bg1 },
    { id: 2, path: Image.bg2 },
    { id: 3, path: Image.bg3 },
  ];
  return (
    <>
      <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
        <h2 className="footer-heading">Instagram</h2>
        <div className="block-24">
          <div className="row no-gutters">
            {imageList.map((image) => (
              <div className="col-4 col-md-4 m-1" key={image.id}>
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${image.path})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InstaPart;
