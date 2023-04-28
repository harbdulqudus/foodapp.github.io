import React from "react";

function AddressPart(props) {
  return (
    <>
      <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
        <h2 className="footer-heading">Contact</h2>
        <div className="block-23 mb-3">
          <ul>
            <li>
              <span className="icon ion-ios-pin" />
              <span className="text">
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-call" />
                <span className="text">+2 392 3929 210</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon ion-ios-send" />
                <span className="text">info@yourdomain.com</span>
              </a>
            </li>
          </ul>
        </div>
        <form action="#" className="subscribe-form">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control rounded-left"
              placeholder="Enter email address"
            />
            <button type="submit" className="form-control submit rounded-right">
              <span className="sr-only">Submit</span>
              <i className="ion-ios-send" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddressPart;
