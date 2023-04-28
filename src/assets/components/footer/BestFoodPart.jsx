import React from "react";
import Image from "../../images/image";

function BestFoodPart(props) {
  return (
    <>
      <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
        <h2 className="footer-heading">Best Sellers</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="featured">
              <a
                href="#"
                className="img rounded mb-3 w-75"
                style={{ backgroundImage: `url(${Image.bg1})` }}
              />
              <div className="text">
                <h3>
                  <a href="#">Grilled Beef with potatoes</a>
                </h3>
                <p className="rate">
                  <a href="#">
                    <span className="ion-ios-star" />
                  </a>
                  <a href="#">
                    <span className="ion-ios-star" />
                  </a>
                  <a href="#">
                    <span className="ion-ios-star" />
                  </a>
                  <a href="#">
                    <span className="ion-ios-star" />
                  </a>
                  <a href="#">
                    <span className="ion-ios-star" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestFoodPart;
