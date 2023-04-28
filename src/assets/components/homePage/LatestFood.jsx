import React from "react";
import FoodCard from "./FoodCard";

function latestFood(props) {
  let foodDummy = [
    {
      id: "1",
      name: "chicken soap",
      price: "4.00",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg",
    },
    {
      id: "2",
      name: "fried rice",
      price: "8.00",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg",
    },
    {
      id: "3",
      name: "Pepper Soap",
      price: "16.00",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg",
    },
    {
      id: "4",
      name: "Pepper Soap",
      price: "16.00",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg",
    },
    {
      id: "5",
      name: "Pepper Soap",
      price: "16.00",
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="border-bottom border-secondary p-5">
        <h2 className="text-uppercase text-center mb-5 text-danger">
          <strong className="display-5">Latest foods</strong>
        </h2>
        <div className="row justify-content-center">
          {foodDummy.map((food) => (
            <div className="col-md-4 mb-3" key={food.id}>
              <div className="card" style={{ width: "18rem" }}>
                <FoodCard
                  name={food.name}
                  image={food.image}
                  price={food.price}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default latestFood;
