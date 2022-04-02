import React from "react";

const SingleProduct = (props) => {
  console.log(props.product);
  const { flags, name, area } = props.product;
  return (
    <div className="col ">
      <div className="card p-2 m-2">
        <img className="img-fluid" src={flags.png} alt="" />
        <h5>Name: {name.common}</h5>
        <p>Area: {area} km²</p>
      </div>
    </div>
  );
};

export default SingleProduct;
