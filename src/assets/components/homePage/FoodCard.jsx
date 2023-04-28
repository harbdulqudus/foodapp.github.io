import React from "react";
import image from "../../images/image";

function FoodCard(food) {
  return (
    <>
      <img src={food.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text text-uppercase text-danger">{food.name}</h5>
        <p className="">
          Price : <span>{food.price}</span>
        </p>
        <div className="position-relative ">
          <button
            className="btn btn-outline-danger btn-circle p-2 wave-left text-center btn-float"
            style={{ fontSize: "26px" }}
          >
            <span className="ion-ios-cart"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
