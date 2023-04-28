import React from "react";
import image from "../images/image";
function Carousel(props) {
  return (
    <>
      <div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* The slideshow/carousel */}
          <div className="">
            <div className="bg-cont">
              <img
                src={image.bg1}
                alt="Los Angeles"
                className="d-block w-100 bg-image"
              />
              <div className="bg-overlay d-flex align-items-center">
                <div className="row w-100 p-5">
                  <div className="col-md-4 mx-auto text-center">
                    <h1 className="text-uppercase text-warning">
                      <strong className="display-3">hungry ?</strong>
                    </h1>
                    <h5 className="text-light">
                      Worry less! We are here to serve you{" "}
                    </h5>
                    <button className="btn btn-warning wave-left">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
