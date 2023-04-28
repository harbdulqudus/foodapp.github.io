import React from "react";

const SocialMediaPart = () => {
  return (
    <>
      <div className="col-md-6 mb-md-0 mb-4 text-md-right">
        <ul className="ftco-footer-social p-0 mb-0">
          <li className="ftco-animate">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
            >
              <span className="ion-logo-twitter" />
            </a>
          </li>
          <li className="ftco-animate">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
            >
              <span className="ion-logo-facebook" />
            </a>
          </li>
          <li className="ftco-animate">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <span className="ion-logo-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialMediaPart;
