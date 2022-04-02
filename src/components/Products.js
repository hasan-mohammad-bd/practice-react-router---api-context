import React from "react";
import { Spinner } from "react-bootstrap";
import useProducts from "../hook/useProducts";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProduct] = useProducts();
  console.log(products);

  return (
    <div class="row row-cols-1 row-cols-lg-3">
      {products.length === 0 ? (
        <p>Please wait sometimes</p>
      ) : (
        <p>All countries are loaded</p>
      )}
      {products.map((product) => (
        <SingleProduct product={product}></SingleProduct>
      ))}
      {products.length === 0 && <Spinner className="m-auto" animation="grow" />}
    </div>
  );
};

export default Products;
