import React from "react";

function Welcome(props) {
  return (
    <div className="container border-bottom border-secondary">
      <div className="row">
        <div className="col-md-6 p-5 my-3">
          <h1>Welcome</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptate fugit nobis facere earum provident ex iure ipsa deleniti
            vitae ipsum doloribus ducimus eligendi, aliquid dolores maiores
            perferendis delectus fugiat!
          </p>
          <button className="btn btn-outline-primary wave-left">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
