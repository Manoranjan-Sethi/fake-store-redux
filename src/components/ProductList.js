import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../Redux/action/productAction";

function ProductList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("products:", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
