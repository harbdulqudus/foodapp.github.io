import React from "react";
import SocialMediaPart from "./footer/SocialMediaPart";
import AddressPart from "./footer/AddressPart";
import LatestNews from "./footer/LatestNews";
import BestFoodPart from "./footer/BestFoodPart";
import InstaPart from "./footer/InstaPart";

function Footer(props) {
  return (
    <div>
      <footer className="footer-05">
        <div className="container">
          <div className="row border-bottom mb-5 pb-4 align-items-center">
            <div className="col-md-6 mb-md-0 mb-4">
              <h2 className="logo">
                <a href="#">
                  Bebal <span>...we serve you better</span>
                </a>
              </h2>
            </div>
            <SocialMediaPart />
          </div>
          <div className="row">
            <AddressPart />
            <LatestNews />
            <BestFoodPart />
            <InstaPart />
          </div>
          <div className="row mt-5 pt-4 border-top">
            <div className="col-md-6 col-lg-8">
              <p className="copyright">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © 2023 | All rights reserved.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <p className="copyright">
                This website is made
                <i className="ion-ios-heart" aria-hidden="true" /> by
                <a href="https://colorlib.com" target="_blank">
                  QudTech.com
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
